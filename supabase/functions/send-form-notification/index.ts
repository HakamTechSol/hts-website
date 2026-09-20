type SmtpConnection = Deno.Conn;

const allowedOrigins = new Set([
  "http://localhost:8080",
  "http://localhost:8081",
  "https://hakamtechsol.com",
  "https://www.hakamtechsol.com",
]);

const corsHeaders = (origin: string | null) => ({
  "Access-Control-Allow-Origin": origin && allowedOrigins.has(origin) ? origin : "https://hakamtechsol.com",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json",
  Vary: "Origin",
});

const escapeHtml = (value: string) => value
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;")
  .replace(/'/g, "&#039;");

const text = (value: unknown, maxLength: number) => typeof value === "string" ? value.trim().slice(0, maxLength) : "";

const encodeBase64 = (value: string) => btoa(String.fromCharCode(...new TextEncoder().encode(value)));

const sendSmtpEmail = async ({ host, username, password, from, to, replyTo, subject, html }: {
  host: string;
  username: string;
  password: string;
  from: string;
  to: string[];
  replyTo: string;
  subject: string;
  html: string;
}) => {
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  let connection: SmtpConnection | undefined;
  let buffered = "";

  const readLine = async () => {
    while (!buffered.includes("\r\n")) {
      const buffer = new Uint8Array(4096);
      const bytesRead = await connection!.read(buffer);
      if (bytesRead === null) throw new Error("SMTP server closed the connection unexpectedly.");
      buffered += decoder.decode(buffer.subarray(0, bytesRead));
    }
    const lineEnd = buffered.indexOf("\r\n");
    const line = buffered.slice(0, lineEnd);
    buffered = buffered.slice(lineEnd + 2);
    return line;
  };

  const readResponse = async () => {
    const firstLine = await readLine();
    const match = /^(\d{3})([ -])/.exec(firstLine);
    if (!match) throw new Error(`Invalid SMTP response: ${firstLine}`);
    const code = Number(match[1]);
    let response = firstLine;
    let separator = match[2];
    while (separator === "-") {
      const line = await readLine();
      response += `\n${line}`;
      const lineMatch = /^(\d{3})([ -])/.exec(line);
      if (!lineMatch || Number(lineMatch[1]) !== code) throw new Error(`Invalid SMTP multiline response: ${line}`);
      separator = lineMatch[2];
    }
    return { code, response };
  };

  const expect = async (expectedCode: number) => {
    const result = await readResponse();
    if (result.code !== expectedCode) throw new Error(`SMTP ${result.code}: ${result.response}`);
  };

  const command = async (value: string, expectedCode: number) => {
    await connection!.write(encoder.encode(`${value}\r\n`));
    await expect(expectedCode);
  };

  try {
    connection = await Deno.connectTls({ hostname: host, port: 465 });
    await expect(220);
    await command("EHLO hakamtechsol.com", 250);
    await command(`AUTH PLAIN ${encodeBase64(`\0${username}\0${password}`)}`, 235);
    await command(`MAIL FROM:<${from}>`, 250);
    // Send RCPT TO for every recipient
    for (const recipient of to) {
      await command(`RCPT TO:<${recipient.trim()}>`, 250);
    }
    await command("DATA", 354);

    const message = [
      `From: ${from}`,
      `To: ${to.join(", ")}`,
      `Reply-To: ${replyTo}`,
      `Subject: =?UTF-8?B?${encodeBase64(subject)}?=`,
      "MIME-Version: 1.0",
      "Content-Type: text/html; charset=UTF-8",
      "Content-Transfer-Encoding: 8bit",
      "",
      html.replace(/\r?\n\./g, "\r\n.."),
      ".",
      "",
    ].join("\r\n");
    await connection.write(encoder.encode(message));
    await expect(250);
    await command("QUIT", 221);
  } finally {
    connection?.close();
  }
};

Deno.serve(async (request) => {
  const headers = corsHeaders(request.headers.get("origin"));
  if (request.method === "OPTIONS") return new Response("ok", { headers });
  if (request.method !== "POST") return new Response(JSON.stringify({ success: false, message: "Method not allowed." }), { status: 405, headers });

  try {
    const body = await request.json();
    const type = body?.type;
    const name = text(body?.name, 120);
    const email = text(body?.email, 254);
    const message = text(type === "quote" ? body?.projectDetails : body?.message, 5000);

    if ((type !== "contact" && type !== "quote") || !name || !message || !/^\S+@\S+\.\S+$/.test(email)) {
      return new Response(JSON.stringify({ success: false, message: "Invalid notification data." }), { status: 400, headers });
    }

    const smtpHost = Deno.env.get("SMTP_HOST");
    const smtpUsername = Deno.env.get("SMTP_USERNAME");
    const smtpPassword = Deno.env.get("SMTP_PASSWORD");
    const smtpFromEmail = Deno.env.get("SMTP_FROM_EMAIL");
    const notificationRecipientEmail = Deno.env.get("NOTIFICATION_RECIPIENT_EMAIL");
    const missingSecrets = [
      !smtpHost && "SMTP_HOST",
      !smtpUsername && "SMTP_USERNAME",
      !smtpPassword && "SMTP_PASSWORD",
      !smtpFromEmail && "SMTP_FROM_EMAIL",
      !notificationRecipientEmail && "NOTIFICATION_RECIPIENT_EMAIL",
    ].filter(Boolean);

    if (missingSecrets.length > 0) {
      console.error("Email notification is not configured. Missing Supabase secrets:", missingSecrets.join(", "));
      return new Response(JSON.stringify({ success: false, code: "EMAIL_CONFIGURATION_ERROR", message: "Email notification service is not configured." }), { status: 500, headers });
    }

    const title = type === "quote" ? "New quote request" : "New contact message";
    const fields = type === "quote"
      ? [["Name", name], ["Email", email], ["Phone / WhatsApp", text(body.phone, 80) || "Not provided"], ["Service Required", text(body.service, 120) || "Not provided"], ["Project Details", message]]
      : [["Name", name], ["Email", email], ["Phone / WhatsApp", text(body.phone, 80) || "Not provided"], ["Message", message]];
    const rows = fields.map(([label, value]) => `<tr><td style="padding:8px 12px;font-weight:700;vertical-align:top">${escapeHtml(label)}</td><td style="padding:8px 12px;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`).join("");

    await sendSmtpEmail({
      host: smtpHost!,
      username: smtpUsername!,
      password: smtpPassword!,
      from: smtpFromEmail!,
      to: notificationRecipientEmail!.split(",").map((e) => e.trim()).filter(Boolean),
      replyTo: email,
      subject: `[HakamTechSol] ${title} from ${name}`,
      html: `<main style="font-family:Arial,sans-serif;color:#1e293b"><h2 style="color:#0f6cbd">${title}</h2><table style="border-collapse:collapse;width:100%;max-width:680px;border:1px solid #e2e8f0">${rows}</table></main>`,
    });

    return new Response(JSON.stringify({ success: true, message: "Notification sent." }), { status: 200, headers });
  } catch (error) {
    console.error("SMTP notification failed:", error);
    return new Response(JSON.stringify({ success: false, code: "SMTP_DELIVERY_ERROR", message: "SMTP delivery failed. Check the Edge Function logs for the SMTP server response." }), { status: 502, headers });
  }
});

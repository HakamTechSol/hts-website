import { supabase } from "@/lib/supabase";

type ContactNotification = {
  type: "contact";
  name: string;
  email: string;
  phone?: string;
  message: string;
};

type QuoteNotification = {
  type: "quote";
  name: string;
  email: string;
  phone: string;
  service: string;
  projectDetails: string;
};

export async function triggerFormNotification(payload: ContactNotification | QuoteNotification) {
  const { data, error } = await supabase.functions.invoke("send-form-notification", { body: payload });

  if (error) {
    const response = (error as { context?: Response }).context;
    const responseBody = response instanceof Response
      ? await response.clone().json().catch(() => null) as { message?: string } | null
      : null;
    const detail = responseBody?.message || error.message || "The notification function could not be reached.";
    console.error("Form notification request failed:", { error, detail });
    throw new Error(`Your submission was saved, but its email notification failed: ${detail}`);
  }

  if (!data?.success) {
    throw new Error(data?.message || "Your submission was saved, but the email notification could not be sent.");
  }
}

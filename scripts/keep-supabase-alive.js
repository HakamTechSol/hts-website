const SUPABASE_URL = process.env.VITE_SUPABASE_URL || "https://ffileadkgcrmeuwwinsb.supabase.co";
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY || "sb_publishable_RmlKYCKpllbYwl1Zf7-Opg_8DHUQAeZ";

async function pingSupabase() {
  console.log(`[Keep-Alive] Pinging Supabase at ${SUPABASE_URL}...`);
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/contact_messages?select=id&limit=1`, {
      method: "GET",
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
    });

    console.log(`[Keep-Alive] Response status: ${response.status} ${response.statusText}`);
    if (response.ok || response.status === 200 || response.status === 204) {
      console.log("[Keep-Alive] ✅ Supabase project is active and alive!");
    } else {
      console.log(`[Keep-Alive] ⚠️ Ping sent with status code: ${response.status}`);
    }
  } catch (error) {
    console.error("[Keep-Alive] ❌ Failed to ping Supabase:", error.message);
  }
}

pingSupabase();

import { useEffect, useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { CheckCircle2, Clock3, FileText, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import SEO from "@/components/SEO";
import { supabase } from "@/lib/supabase";
import { triggerFormNotification } from "@/lib/form-notifications";
import PhoneInputField from "@/components/PhoneInputField";

const Quote = () => {
  const [submitted, setSubmitted] = useState(false);
  const [searchParams] = useSearchParams();
  const [service, setService] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [phoneValid, setPhoneValid] = useState(true);

  useEffect(() => {
    setService(searchParams.get("service") ?? "");
  }, [searchParams]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!phoneValid) {
      setErrorMessage("Please enter a valid phone number.");
      return;
    }
    setLoading(true);
    setErrorMessage("");
    try {
      const formData = new FormData(event.currentTarget);
      const name = String(formData.get("name") ?? "");
      const email = String(formData.get("email") ?? "");
      const phone = phoneValue;
      const details = String(formData.get("details") ?? "");
      const { error } = await supabase.from("quote_requests").insert([
        {
          full_name: name,
          work_email: email,
          phone,
          service_required: service,
          project_details: details,
        },
      ]);
      if (error) throw error;
      await triggerFormNotification({ type: "quote", name, email, phone, service, projectDetails: details });
      setSubmitted(true);
    } catch (err: unknown) {
      console.error(err);
      setErrorMessage(err instanceof Error ? err.message : "Unable to submit your quote request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition>
      <SEO 
        title="Get a Free Quote - Custom Software Development Services"
        description="Request a free quote for custom software development, web development, mobile app development, and digital marketing services. Get your project scope and timeline within 24 hours."
        keywords="free software development quote, custom software development pricing, web development cost estimate, mobile app development quote, digital marketing services pricing, Shopify development cost, staff augmentation rates"
        canonicalUrl="https://hakamtechsol.com/quote"
      />
      <div className="min-h-screen bg-slate-50 text-slate-800">
        <Navbar />

        <main className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-100 px-4 pb-14 pt-24 sm:px-6 sm:pb-20 md:pt-36 lg:px-8 lg:pb-28">
          <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />

          <div className="container relative z-10 mx-auto max-w-6xl">
            <div className="grid gap-8 rounded-[32px] border border-sky-100 bg-white/95 p-5 shadow-[0_24px_70px_rgba(15,108,189,0.16)] sm:p-10 lg:grid-cols-12 lg:gap-14 lg:p-14">
              <section className="space-y-7 lg:col-span-5">
                <div className="space-y-3">
                  <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0f6cbd]">
                    Project consultation
                  </span>
                  <h1 className="text-3xl font-extrabold tracking-tight text-[#0f6cbd] sm:text-5xl">Get a Quote</h1>
                  <p className="max-w-md text-sm leading-relaxed text-slate-600">
                    Tell us about your project and we&apos;ll prepare a clear scope, timeline, and estimate tailored to your goals.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    [FileText, "Clear project scope", "Share your requirements, priorities, and preferred features."],
                    [Clock3, "Fast response", "Our team will review your request and respond within 24 hours."],
                    [ShieldCheck, "Your details stay private", "We handle every inquiry with care and confidentiality."],
                  ].map(([Icon, title, description]) => {
                    const FeatureIcon = Icon as typeof FileText;
                    return (
                      <div key={title as string} className="flex gap-3 rounded-2xl bg-sky-50 p-4">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0f6cbd] text-white">
                          <FeatureIcon size={18} />
                        </span>
                        <div>
                          <h2 className="text-sm font-extrabold text-slate-900">{title as string}</h2>
                          <p className="mt-1 text-xs leading-relaxed text-slate-500">{description as string}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              <section className="lg:col-span-7">
                {submitted ? (
                  <div className="flex min-h-full flex-col items-center justify-center rounded-3xl border border-sky-100 bg-sky-50 p-10 text-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0f6cbd] text-white shadow-lg">
                      <CheckCircle2 size={32} />
                    </span>
                    <h2 className="mt-5 text-2xl font-extrabold text-[#0f6cbd]">Quote request received!</h2>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-600">
                      Thanks for sharing your project details. We&apos;ll be in touch with the next steps shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
                    <h2 className="text-xl font-extrabold text-slate-900">Request your Estimate</h2>
                    <p className="mt-1 text-xs text-slate-500">Fields marked required help us prepare a more useful response.</p>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Full name
                        <input required name="name" type="text" placeholder="Jane Smith" className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm normal-case tracking-normal text-slate-800 outline-none transition focus:ring-2 focus:ring-[#0f6cbd]" />
                      </label>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Work email
                        <input required name="email" type="email" placeholder="jane@company.com" className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm normal-case tracking-normal text-slate-800 outline-none transition focus:ring-2 focus:ring-[#0f6cbd]" />
                      </label>
                      <div>
                        <PhoneInputField
                          variant="quote"
                          label="Phone / WhatsApp"
                          onChange={(fullNumber, isValid) => {
                            setPhoneValue(fullNumber);
                            setPhoneValid(isValid);
                          }}
                        />
                      </div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Service required
                        <select name="service" value={service} onChange={(event) => setService(event.target.value)} className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm normal-case tracking-normal text-slate-800 outline-none transition focus:ring-2 focus:ring-[#0f6cbd]">
                          <option value="" disabled>Select a service</option>
                          <option>Mobile App Development</option>
                          <option>Custom Software Development</option>
                          <option>Web Development & Portals</option>
                          <option>CMS Development</option>
                          <option>AI & Automations</option>
                          <option>Graphic Designing</option>
                          <option>Social Media Marketing</option>
                          <option>Digital Marketing</option>
                          <option>Staff Augmentation</option>
                        </select>
                      </label>
                    </div>

                    <label className="mt-4 block text-xs font-bold uppercase tracking-wider text-slate-500">Project details
                      <textarea required name="details" rows={5} placeholder="What would you like to build? Include your main goals, timeline, and any key requirements." className="mt-1.5 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm normal-case tracking-normal text-slate-800 outline-none transition focus:ring-2 focus:ring-[#0f6cbd]" />
                    </label>

                    <Button
                        type="submit"
                        disabled={loading}
                        className={`mt-6 w-full rounded-full ${loading ? "bg-[#0a5a9c]" : "bg-[#0f6cbd] hover:bg-blue-700"} py-6 text-sm font-extrabold text-white shadow-lg shadow-blue-500/25 transition`}
                      >
                        {loading ? "Submitting..." : "Request Quote"}
                      </Button>
                  </form>
                )}
                {errorMessage && <p className="text-sm text-red-600 mt-2">{errorMessage}</p>}
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Quote;

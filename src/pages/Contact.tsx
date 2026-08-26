import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin, MessageCircle, Bell, Paperclip, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { supabase } from "@/lib/supabase";
import { FaqSection } from "@/components/FaqSection";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    try {
      const { error } = await supabase.from("contact_messages").insert([
        { name: formData.name, email: formData.email, message: formData.message }
      ]);
      if (error) {
        throw error;
      }
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || "Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#0f6cbd] text-slate-800 flex flex-col justify-between">
        <Navbar />

        {/* Hero & Card Section (Unified Blue & White Theme) */}
        <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0f6cbd] via-sky-600 to-blue-800 flex items-center justify-center">
          {/* Background glow circles */}
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-sky-400/20 blur-3xl pointer-events-none" />

          <div className="container mx-auto max-w-5xl relative z-10">
            {/* White Card Container */}
            <div className="bg-white rounded-[32px] sm:rounded-[44px] p-6 sm:p-12 lg:p-14 shadow-[0_30px_90px_rgba(0,0,0,0.25)] relative overflow-hidden border border-white/40">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                
                {/* Left Side: Contact Form */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-2">
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0f6cbd] tracking-tight">
                      Let’s talk
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium max-w-md">
                      To request a quote or want to meet up for coffee, contact us directly or fill out the form and we will get back to you promptly.
                    </p>
                  </div>

                  {submitted ? (
                    <div className="p-8 rounded-3xl bg-sky-50 border border-sky-100 text-center space-y-3">
                      <div className="w-14 h-14 bg-[#0f6cbd] text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold shadow-md">
                        ✓
                      </div>
                      <h3 className="text-xl font-bold text-[#0f6cbd]">Message Received!</h3>
                      <p className="text-xs text-slate-600 max-w-xs mx-auto">
                        Thank you for reaching out. Our team will get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 pt-1">
                      {/* Name Input */}
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                          Your Name
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-5 py-3.5 rounded-2xl bg-slate-100/90 border-0 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f6cbd] transition-all font-medium"
                        />
                      </div>

                      {/* Email Input */}
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                          Your Email
                        </label>
                        <input
                          required
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-5 py-3.5 rounded-2xl bg-slate-100/90 border-0 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f6cbd] transition-all font-medium"
                        />
                      </div>

                      {/* Message Input */}
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                          Your Message
                        </label>
                        <textarea
                          required
                          rows={4}
                          placeholder="Type something if you want..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-5 py-3.5 rounded-2xl bg-slate-100/90 border-0 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f6cbd] transition-all font-medium resize-none"
                        />
                      </div>

                      {/* Pill Shaped Submit Button */}
                      <div className="pt-2">
                        <Button
                          type="submit"
                          disabled={loading}
                          className={`w-full sm:w-auto px-10 py-6 rounded-full ${loading ? "bg-[#0a5a9c]" : "bg-[#0f6cbd] hover:bg-blue-700"} text-white font-extrabold text-sm shadow-xl shadow-blue-500/30 hover:shadow-blue-600/40 hover:scale-[1.03] transition-all duration-300`}
                        >
                          {loading ? "Sending..." : "Send Message"}
                        </Button>
                      </div>
                    </form>
                  )}
                  {errorMessage && <p className="text-sm text-red-600 mt-2">{errorMessage}</p>}
                </div>

                {/* Right Side: Illustration & Contact Info */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
                  {/* Floating Graphic Illustration Box */}
                  <div className="relative w-full h-56 sm:h-64 rounded-3xl bg-gradient-to-br from-sky-50/80 via-blue-50/60 to-sky-100/60 border border-sky-100/80 flex items-center justify-center p-6 overflow-hidden shadow-inner">
                    {/* Floating Confetti Shapes */}
                    <div className="absolute top-4 left-6 w-3 h-3 rounded-full bg-sky-400 opacity-80" />
                    <div className="absolute top-8 right-10 w-2.5 h-2.5 rounded-full bg-blue-400 opacity-80" />
                    <div className="absolute bottom-6 left-12 w-2 h-2 rounded-full bg-sky-300 opacity-80" />
                    <div className="absolute bottom-10 right-8 w-3.5 h-3.5 rounded-full bg-indigo-400 opacity-70" />

                    {/* Speech Bubble Icon */}
                    <div className="absolute top-6 left-10 p-2.5 rounded-2xl bg-[#0f6cbd] text-white shadow-lg rotate-[-12deg]">
                      <MessageCircle size={18} />
                    </div>

                    {/* Notification Bell Icon */}
                    <div className="absolute top-4 right-14 p-2 rounded-full bg-sky-400 text-white shadow-md rotate-[15deg]">
                      <Bell size={16} />
                    </div>

                    {/* Central Envelope Graphic Illustration */}
                    <div className="relative z-10 w-32 h-24 bg-gradient-to-tr from-[#0f6cbd] to-sky-500 rounded-2xl p-3 text-white shadow-2xl flex flex-col justify-between rotate-[-4deg] border border-white/20">
                      <div className="w-full h-10 bg-white/20 rounded-xl flex items-center justify-center">
                        <Mail size={24} className="text-white" />
                      </div>
                      <div className="space-y-1">
                        <div className="h-1 bg-white/40 rounded w-3/4" />
                        <div className="h-1 bg-white/30 rounded w-1/2" />
                      </div>
                    </div>
                  </div>

                  {/* Contact Info Items */}
                  <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#0f6cbd] shrink-0 mt-0.5" />
                      <span className="font-medium">Gulshan-e-Iqbal Block 6, Karachi, Pakistan</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-[#0f6cbd] shrink-0" />
                      <span className="font-medium">+92 309 2271214 / +92 320 123 5249</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-[#0f6cbd] shrink-0" />
                      <span className="font-medium">alhakamsofts@gmail.com</span>
                    </div>
                  </div>

                  {/* Social Buttons Bar */}
                  <div className="flex items-center gap-3 pt-2">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-[#0f6cbd] text-white flex items-center justify-center hover:scale-110 transition-all shadow-md"
                      aria-label="Facebook"
                    >
                      <Facebook size={18} />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:scale-110 transition-all shadow-md"
                      aria-label="Twitter"
                    >
                      <Twitter size={18} />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition-all shadow-md"
                      aria-label="Instagram"
                    >
                      <Instagram size={18} />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-indigo-700 text-white flex items-center justify-center hover:scale-110 transition-all shadow-md"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FaqSection
          title="Frequently Asked"
          highlightText="Questions"
          subtitle="Everything you need to know about our project consultation, delivery timelines, intellectual property, and 24/7 post-launch maintenance."
        />

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Contact;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  tag: string;
  answer: React.ReactNode;
}

const defaultFaqs: FaqItem[] = [
  {
    question: "What services does HakamTechSol provide?",
    tag: "Web • Mobile • SaaS • E-commerce • Marketing",
    answer: (
      <>
        We deliver end-to-end digital solutions: custom software development, web application development, mobile apps (Flutter, React Native, and FlutterFlow), SaaS platforms, Shopify & e-commerce stores, AI and workflow automation, UI/UX design, staff augmentation, and performance marketing. You can check our services by visiting{" "}
        <Link to="/services" className="font-bold underline text-white hover:text-sky-200 transition-colors">
          Our Services 
        </Link>Page.
      </>
    )
  },
  {
    question: "Which industries do you work with?",
    tag: "Real Estate • Healthcare • EdTech • Retail • Sports",
    answer: (
      <>
        We work across many sectors including real estate, healthcare and clinical systems, education and e-learning, e-commerce and retail, sports and analytics, hospitality, manufacturing, and financial services. Our portfolio includes property management platforms, hospital management systems, learning portals, loyalty apps, and operations dashboards. You can check our industries by visiting{" "}
        <a href="/#industries" className="font-bold underline text-white hover:text-sky-200 transition-colors">
          Industries We Transform
        </a>.
      </>
    )
  },
  {
    question: "How much does a custom software or app development project cost?",
    tag: "Scope-Based Pricing • Fixed Quotes",
    answer: (
      <>
        Cost depends on the scope, features, platform (web, iOS, Android, or all), integrations, and timeline. We prepare a detailed written proposal after a free discovery call and technical assessment, with a fixed, transparent quote — no hidden fees. Share your requirements through our {" "}
        <Link to="/quote" className="font-bold underline text-white hover:text-sky-200 transition-colors">
           Get A Quote
        </Link> form and we'll respond within 24 hours.
      </>
    )
  },
  {
    question: "How long does a typical project take?",
    tag: "Agile Sprints • 6-10 Weeks Average",
    answer: "Development timelines depend on project complexity. Typical MVPs and mobile apps are delivered within 6 to 10 weeks, while larger enterprise ERPs, healthcare systems, or full SaaS platforms take 3 to 4 months. We work in weekly or bi-weekly sprints and share live demos so you always see progress."
  },
  {
    question: "What technologies do you use to build products?",
    tag: "React • Laravel • Flutter • Node.js • .NET",
    answer: "We choose the right stack for each project. Commonly we use React, React Native, Node.js, and TypeScript for dynamic web and cross-platform apps; Laravel, PHP, and MySQL for robust backends; Flutter and FlutterFlow for mobile; .NET for enterprise systems; and Firebase, Supabase, and cloud services for real-time features and AI integrations."
  },

  {
    question: "Do you sign NDAs before discussing a project?",
    tag: "Strict Non-Disclosure Agreements",
    answer: "Absolutely. We are happy to sign a Non-Disclosure Agreement (NDA) prior to technical discovery so you can share your idea, business data, and requirements with complete confidence. Confidentiality is non-negotiable for us."
  },
  {
    question: "How do you communicate with clients during development?",
    tag: "Weekly Demos • Project Manager • Slack/WhatsApp",
    answer: "Every project has a dedicated point of contact. We share progress through weekly or bi-weekly live demos, maintain a transparent task board, and stay available on WhatsApp, Slack, or email. You can see the product taking shape in real time and give feedback at every sprint."
  },
  {
    question: "Do you provide post-launch support and maintenance?",
    tag: "24/7 SLA • Zero-Downtime Releases",
    answer: "Yes. We provide dedicated post-launch support, server monitoring, security updates, and zero-downtime CI/CD deployment pipelines. We also offer flexible retainers for continuous feature development, performance scaling, and 24/7 SLA-backed support so your platform keeps running smoothly."
  },
  {
    question: "How is data privacy and compliance handled in your builds?",
    tag: "GDPR • CCPA • Consent by Design",
    answer: "We treat privacy and data protection as core architectural constraints, not afterthoughts. Data collection is minimized, consent is explicit, and user rights — access, deletion, and portability — are built into the database schema from day one, aligning with standards like GDPR and CCPA."
  },
  {
    question: "What security standards do you deliver on?",
    tag: "SOC2 • ISO 27001 • Bank-Grade Encryption",
    answer: "Every build includes encrypted database connections, role-based access control (RBAC), automated vulnerability scanning, and end-to-end TLS encryption across web and mobile API endpoints. We follow industry security practices throughout development, testing, and deployment."
  },
  {
    question: "Can you work with our existing team or technology stack?",
    tag: "Staff Augmentation • Team Extension",
    answer: "Yes. Beyond building complete products, we offer staff augmentation and team extension. We can drop senior developers, designers, or AI engineers into your existing team and work within your current codebase, tools, and processes, no matter what stack you already use."
  }
];

interface FaqSectionProps {
  title?: string;
  highlightText?: string;
  subtitle?: string;
  faqs?: FaqItem[];
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  title = "Everything You",
  highlightText = "Need to Know",
  subtitle = "Straight answers about our process, pricing, technologies, security, and the support you get when you build a product with HakamTechSol.",
  faqs = defaultFaqs,
}) => {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0b1320] text-white border-t border-slate-800">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column Text */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              {title} <span className="text-sky-400">{highlightText}</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              {subtitle}
            </p>
          </div>

          {/* Right Column Accordion Items (Unified Blue & White Design!) */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeIdx === idx;

              return (
                <div
                  key={idx}
                  onClick={() => setActiveIdx(isOpen ? null : idx)}
                  className={`rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden shadow-lg ${
                    isOpen
                      ? "bg-[#0f6cbd] text-white p-6 sm:p-7 shadow-blue-500/20"
                      : "bg-[#f4f4f6] text-slate-900 hover:bg-white p-5 sm:p-6"
                  }`}
                >
                  {/* Header Row */}
                  <div className="flex items-center justify-between gap-4">
                    <h3
                      className={`text-base sm:text-lg font-bold leading-snug ${
                        isOpen ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {faq.question}
                    </h3>

                    {/* Circular +/- Button */}
                    <button
                      type="button"
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-lg shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? "bg-white text-[#0f6cbd]"
                          : "bg-white text-slate-800 shadow-sm"
                      }`}
                      aria-label={isOpen ? "Collapse FAQ" : "Expand FAQ"}
                    >
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </button>
                  </div>

                  {/* Expanded Body */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="space-y-3 pt-4"
                      >
                        {/* Sub-tag pill */}
                        <div className="text-[11px] font-extrabold uppercase tracking-widest text-sky-100 opacity-90">
                          {faq.tag}
                        </div>

                        {/* Answer text */}
                        <p className="text-xs sm:text-sm text-white/95 leading-relaxed font-medium">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

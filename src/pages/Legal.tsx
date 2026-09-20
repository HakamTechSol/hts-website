import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import SEO from "@/components/SEO";

type LegalProps = {
  type: "privacy" | "terms";
};

type LegalSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

const privacySections: LegalSection[] = [
  {
    heading: "1. Information We Collect",
    paragraphs: [
      "We collect only the information needed to respond to your inquiries and provide our services. You are never required to share more than what you are comfortable providing.",
    ],
    bullets: [
      "Information you provide: your name, email address, phone number, company or organisation name, and the details of your project or requirements. This is collected when you fill in our contact form, request a quote, or reach out to our team directly.",
      "Usage information: pages you visit, the type of device and browser you use, your general location, and how long you spend on the website. This helps us understand how visitors use our site and improve it.",
      "Communications: the content of messages you send us by email, form, WhatsApp, or through our chat widget, along with related metadata.",
    ],
  },
  {
    heading: "2. How We Use Your Information",
    paragraphs: [
      "We use the information we collect to communicate with you, understand your requirements, and deliver the services we have agreed to provide. This includes the following purposes:",
    ],
    bullets: [
      "Responding to your inquiries and providing project estimates, proposals, and quotes.",
      "Planning, developing, delivering, and supporting the software, websites, and digital products we build for you.",
      "Sending you relevant updates about your project, service communications, and occasional marketing information if you have opted in.",
      "Improving our website, services, and user experience through analytics.",
      "Preventing fraud, maintaining security, and complying with legal obligations.",
    ],
  },
  {
    heading: "3. Cookies & Analytics",
    paragraphs: [
      "Our website may use cookies and similar technologies to remember your preferences, analyse site traffic, and make our site easier to use. You can control or disable cookies through your browser settings. Disabling cookies may affect certain features of the website, but you can still contact us to discuss a project.",
    ],
  },
  {
    heading: "4. How We Share Your Information",
    paragraphs: [
      "We do not sell, rent, or trade your personal information. We only disclose information when it is needed to deliver our services, operate our business, or meet legal requirements:",
    ],
    bullets: [
      "Trusted service providers who help us host the website, send emails, process payments, or provide analytics. These providers only receive the information required to perform their role and are bound to protect it.",
      "Our team members and partners who are directly involved in delivering your project under confidentiality agreements.",
      "Regulators, courts, or law enforcement agencies where disclosure is required or permitted by applicable law.",
    ],
  },
  {
    heading: "5. Data Security",
    paragraphs: [
      "We take the protection of your information seriously and apply reasonable technical and organisational safeguards. These include secure connections (TLS/HTTPS), access controls, and restricted access to your data on a need-to-know basis. While no method of transmission or storage is completely secure, we continuously review and improve our practices.",
    ],
  },
  {
    heading: "6. Data Retention",
    paragraphs: [
      "We keep your information only for as long as necessary to fulfil the purposes described in this policy, to support your ongoing projects, or to meet legal, accounting, and reporting requirements. When information is no longer needed, we delete or anonymise it securely.",
    ],
  },
  {
    heading: "7. Your Rights & Choices",
    paragraphs: [
      "Depending on your location, you may have the right to access, correct, or delete the personal information we hold about you, to restrict or object to certain processing, to request a copy of your data, and to withdraw consent at any time. To exercise any of these rights, please contact us and we will respond within a reasonable time.",
    ],
  },
  {
    heading: "8. Third-Party Links",
    paragraphs: [
      "Our website and project communications may contain links to third-party websites and services, such as app stores, social media platforms, and partner tools. We are not responsible for the privacy practices or content of those third parties, so we encourage you to review their policies before providing them with your information.",
    ],
  },
  {
    heading: "9. Children's Privacy",
    paragraphs: [
      "Our website and services are intended for businesses and professionals and are not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with their information, please contact us so we can remove it.",
    ],
  },
  {
    heading: "10. International Data Transfers",
    paragraphs: [
      "We work with clients and service providers around the world. Where your information is transferred outside your country of residence, we take steps to ensure it is protected in line with this policy and applicable data protection laws.",
    ],
  },
  {
    heading: "11. Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. The latest version will always be available on this page with a revised 'Last updated' date. Significant changes will be communicated by posting a prominent notice on our website.",
    ],
  },
  {
    heading: "12. Contact Us",
    paragraphs: [
      "If you have any questions about this Privacy Policy or how we handle your information, please get in touch:",
    ],
    bullets: [
      "Email: contact@hakamtechsol.com",
      "Phone: +92 309 2271214",
      "Address: Karachi IT Park, Gulshan-e-Jamal, Rashid Minhas Road, Karachi, Pakistan",
    ],
  },
];

const termsSections: LegalSection[] = [
  {
    heading: "1. Acceptance of These Terms",
    paragraphs: [
      "By accessing or using the HakamTechSol website (hakamtechsol.com) and related services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree with any part of these terms, please do not use our website or services.",
    ],
  },
  {
    heading: "2. Use of This Website",
    paragraphs: [
      "You may use this website for lawful purposes only and in a way that does not interfere with its operation or the experience of other users. You agree not to attempt to breach the security of the website, introduce harmful code, scrape content at scale, or misuse any information displayed on it.",
    ],
  },
  {
    heading: "3. Intellectual Property",
    paragraphs: [
      "The content on this website — including text, graphics, logos, case studies, images, and software demonstrations — is owned by HakamTechSol or its licensors and is protected by intellectual property laws. You may not copy, reproduce, redistribute, or use this content for commercial purposes without our prior written permission.",
    ],
  },
  {
    heading: "4. Our Services & Project Estimates",
    paragraphs: [
      "HakamTechSol provides custom software development, web and mobile app development, SaaS platforms, e-commerce solutions, AI & automation, digital marketing, and related professional services. Any estimates, quotes, timelines, or project scopes discussed on this website, by email, or during discussions are preliminary unless confirmed in a written proposal or service agreement. The final scope, pricing, and deliverables are defined exclusively in the applicable agreement.",
    ],
  },
  {
    heading: "5. Project Delivery & Timelines",
    paragraphs: [
      "We work in iterative sprints and provide regular progress updates and demos. While we make every effort to meet agreed timelines, delivery dates may be affected by factors outside our control, including delays in receiving client feedback, information, or approvals. Any timeline is an estimate and not a guarantee unless otherwise stated in a written agreement.",
    ],
  },
  {
    heading: "6. Confidentiality & Intellectual Property Transfer",
    paragraphs: [
      "We treat client information as confidential and sign Non-Disclosure Agreements (NDAs) prior to technical discovery when requested. Unless otherwise agreed in writing, upon full payment, the final deliverables, source code, design assets, and database schemas created specifically for your project are transferred to you and become your intellectual property.",
    ],
    bullets: [
      "Pre-existing tools, frameworks, libraries, and components we own or are licensed under open-source terms remain the property of their respective owners.",
      "You are responsible for protecting your login credentials, account information, and the confidentiality of any proprietary data you share with us.",
    ],
  },
  {
    heading: "7. Client Responsibilities",
    paragraphs: [
      "To deliver successful projects, we rely on timely input from our clients. You agree to provide accurate project information, respond to questions and requests in a reasonable time, and make internal resources and approvals available as needed for us to complete the work on schedule.",
    ],
  },
  {
    heading: "8. Payment Terms",
    paragraphs: [
      "Payment terms are defined in the applicable proposal, invoice, or service agreement. Unless agreed otherwise, work begins after the initial agreed payment is received, and deliverables are released upon settlement of outstanding invoices. Amounts not paid when due may affect project timelines and access to completed work.",
    ],
  },
  {
    heading: "9. Third-Party Services & Links",
    paragraphs: [
      "Our website and projects may reference or integrate with third-party platforms, tools, and services, such as payment gateways, hosting providers, app stores, and analytics products. We are not responsible for the availability, content, or performance of third-party services, and your use of them may be subject to their own terms and policies.",
    ],
  },
  {
    heading: "10. Disclaimer of Warranties",
    paragraphs: [
      "Our website and the information on it are provided 'as is' and 'as available' without warranties of any kind, whether express or implied, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement. Software and services are delivered in accordance with the specific terms of your written agreement.",
    ],
  },
  {
    heading: "11. Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by law, HakamTechSol and its team members shall not be liable for any indirect, incidental, consequential, special, or punitive damages, or for any loss of profits, data, or business opportunities arising from your use of this website or our services. Our total liability for any claim related to our services is limited to the amount you actually paid us for the specific project or engagement giving rise to the claim.",
    ],
  },
  {
    heading: "12. Termination",
    paragraphs: [
      "We may suspend or terminate your access to this website, or pause a project engagement, if you breach these terms or the applicable service agreement. You may cancel a project at any time subject to the payment and cancellation terms set out in your agreement. Sections that by their nature should survive termination — including intellectual property, confidentiality, and limitation of liability — will continue to apply.",
    ],
  },
  {
    heading: "13. Governing Law & Jurisdiction",
    paragraphs: [
      "These Terms of Services are governed by the laws applicable in Pakistan. Any disputes arising out of or relating to these terms or our services shall be resolved under the jurisdiction of the competent courts of Karachi, Pakistan, unless otherwise agreed in writing.",
    ],
  },
  {
    heading: "14. Changes to These Terms",
    paragraphs: [
      "We may update these Terms of Services from time to time. The latest version will always be posted on this page with a revised 'Last updated' date. Your continued use of the website after an update means you accept the revised terms.",
    ],
  },
  {
    heading: "15. Contact Information",
    paragraphs: [
      "If you have questions about these Terms of Services or would like to discuss a project, please contact us:",
    ],
    bullets: [
      "Email: contact@hakamtechsol.com",
      "Phone: +92 309 2271214",
      "Address: Karachi IT Park, Gulshan-e-Jamal, Rashid Minhas Road, Karachi, Pakistan",
    ],
  },
];

const Legal = ({ type }: LegalProps) => {
  const isPrivacy = type === "privacy";
  const title = isPrivacy ? "Privacy Policy" : "Terms of Services";
  const intro = isPrivacy
    ? "This policy explains how HakamTechSol collects, uses, and protects your information when you visit our website, contact our team, or use our services."
    : "These terms explain the rules for using the HakamTechSol website and engaging our software development and digital services.";
  const sections = isPrivacy ? privacySections : termsSections;
  const lastUpdated = "September 15, 2026";

  return (
    <PageTransition>
      <SEO title={title} description={intro} canonicalUrl={`https://hakamtechsol.com/${isPrivacy ? "privacy-policy" : "terms"}`} />
      <div className="min-h-screen bg-slate-50 text-slate-800">
        <Navbar />
        <main className="px-4 pb-20 pt-28 sm:px-6 md:pt-36 lg:px-8 lg:pb-28">
          <div className="container mx-auto max-w-4xl">
            <header className="rounded-[32px] bg-gradient-to-br from-[#0f6cbd] via-sky-600 to-blue-800 px-7 py-12 text-white shadow-xl sm:px-12 sm:py-16">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-200">HakamTechSol</p>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-sky-50 sm:text-base">{intro}</p>
            </header>

            <article className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Last updated: {lastUpdated}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                HakamTechSol, Karachi IT Park, Gulshan-e-Jamal, Rashid Minhas Road, Karachi, Pakistan. For questions about this{" "}
                {isPrivacy ? "policy" : "agreement"}, email us at{" "}
                <a href="mailto:contact@hakamtechsol.com" className="font-semibold text-[#0f6cbd] hover:underline">
                  contact@hakamtechsol.com
                </a>{" "}
                or call{" "}
                <span className="font-semibold">+92 309 2271214</span>.
              </p>
              <div className="mt-8 space-y-9">
                {sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="text-lg font-extrabold text-slate-900">{section.heading}</h2>
                    {section.paragraphs.map((paragraph, idx) => (
                      <p key={idx} className="mt-2 text-sm leading-relaxed text-slate-600">
                        {paragraph}
                      </p>
                    ))}
                    {section.bullets && (
                      <ul className="mt-3 space-y-2">
                        {section.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0f6cbd]" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>
            </article>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Legal;
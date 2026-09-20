import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import SEO from "@/components/SEO";
import servicesHeroBackground from "@/assets/services-hero-background.jpg";
import { ServiceIllustration, ServiceIllustrationType } from "@/components/ServiceIllustration";

const services: { illustration: ServiceIllustrationType; title: string; subtitle: string; features: string[] }[] = [
  { illustration: "ai", title: "AI & Automations", subtitle: "AI-enabled workflows, intelligent assistants and data insights", features: ["Custom AI agents", "NLP and analytics", "Automated business workflows"] },
  { illustration: "mobile", title: "Mobile App Development", subtitle: "Native iOS, Android & cross-platform applications", features: ["iOS & Android engineering", "Flutter & React Native", "Push notifications and offline sync"] },
  { illustration: "software", title: "Custom Software Development", subtitle: "Tailored ERP, CRM, and custom software for enterprise workflows", features: ["ERP & CRM platforms", "Business-specific workflows", "Reports and integrations"] },
  { illustration: "web", title: "Web Development & Portals", subtitle: "Modern client portals, web apps and commerce experiences", features: ["React & Node.js applications", "E-commerce and payments", "SEO-ready responsive platforms"] },
  { illustration: "cms", title: "CMS Development", subtitle: "Flexible and scalable CMS solutions for easy content management and business growth.", features: ["Custom content workflows", "Scalable publishing tools", "Easy administration"] },
  { illustration: "design", title: "Graphic Designing", subtitle: "Visual identity and product design that makes your brand memorable", features: ["Brand identity systems", "Product UI/UX design", "Campaign-ready creative assets"] },
  { illustration: "marketing", title: "Social Media Marketing", subtitle: "Content and performance campaigns designed for measurable growth", features: ["Social content strategy", "Paid campaign management", "Audience and performance reporting"] },
  { illustration: "marketing", title: "Digital Marketing", subtitle: "Data-led marketing strategies built for visibility, engagement, and growth", features: ["Search and social campaigns", "Content strategy and creative", "Performance reporting"] },
  { illustration: "team", title: "Staff Augmentation", subtitle: "Experienced engineers who integrate with your delivery team", features: ["Mobile and full-stack talent", "Flexible sprint engagement", "Direct collaboration and ownership"] },
];

const Services = () => (
  <PageTransition>
    <SEO 
      title="Services"
      description="Comprehensive technology services including custom software development, web development, mobile app development, Shopify development, AI & automation, digital marketing, and staff augmentation. Transform your business with HakamTechSol's expert solutions."
      keywords="custom software development, web development services, mobile app development, Shopify development agency, React Native development, Flutter development, AI automation services, digital marketing services, SEO services, SaaS development, UI/UX design services, staff augmentation, enterprise software development"
      canonicalUrl="https://hakamtechsol.com/services"
    />
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <section className="relative overflow-hidden border-b border-slate-800 bg-slate-950 px-4 pb-20 pt-28 text-white sm:px-6 md:pt-36 lg:px-8 lg:pb-28">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${servicesHeroBackground})` }} aria-hidden="true" />
        <div className="absolute inset-0 bg-slate-950/80" aria-hidden="true" />
        <div className="container relative z-10 mx-auto max-w-5xl text-center">
          <span className="inline-flex rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-sky-300">Full-spectrum engineering</span>
          <h1 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">Custom Software Development & <span className="text-sky-400">Digital Marketing Services</span></h1>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-slate-200 sm:text-lg">Expert web development, mobile app development, Shopify development, AI automation, and digital marketing services for US, UK, Canada, and Australia markets.</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/quote"><Button size="lg" className="w-full rounded-full bg-[#0f6cbd] px-8 py-6 font-extrabold text-white hover:bg-blue-700 sm:w-auto">GET A FREE QUOTE <ArrowRight size={18} className="ml-2" /></Button></Link>
            <Link to="/portfolio"><Button size="lg" variant="outline" className="w-full rounded-full border-slate-600 bg-slate-900/70 px-8 py-6 font-bold text-white hover:bg-slate-800 sm:w-auto">Explore Case Studies</Button></Link>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-2xl text-center"><span className="rounded-full bg-sky-100 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#0f6cbd]">Our core services</span><h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-5xl">Custom Software Development & Digital Services</h2><p className="mt-3 text-sm text-slate-600">Choose the expertise that fits your next product, platform, or growth initiative. Shopify, React Native, Flutter, and more.</p></div>
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              return <article key={service.title} className="flex min-h-[360px] flex-col rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl">
                <div className="flex h-14 items-center"><ServiceIllustration type={service.illustration} /></div>
                <h2 className="mt-5 text-xl font-extrabold text-slate-900">{service.title}</h2><p className="mt-2 text-sm font-semibold text-[#0f6cbd]">{service.subtitle}</p>
                <ul className="mt-5 flex-1 space-y-2 text-sm text-slate-600">{service.features.map((feature) => <li key={feature} className="flex gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#0f6cbd]" />{feature}</li>)}</ul>
                <Link to={`/quote?service=${encodeURIComponent(service.title)}`} className="mt-7"><Button className="w-full rounded-xl bg-[#0f6cbd] font-extrabold text-white hover:bg-blue-700">Get Service Quote <ArrowRight size={15} className="ml-2" /></Button></Link>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 px-4 py-20 sm:px-6 lg:px-8"><div className="container mx-auto max-w-5xl"><div className="mx-auto mb-12 max-w-2xl text-center"><span className="rounded-full bg-sky-100 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#0f6cbd]">Delivery workflow</span><h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">A clear path from idea to launch</h2></div><div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">{[["01", "Discover", "Align goals, users, and scope."], ["02", "Design", "Shape the experience and architecture."], ["03", "Build", "Deliver in transparent, iterative sprints."], ["04", "Scale", "Launch, monitor, and improve."]].map(([step, title, description]) => <div key={step} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"><div className="text-3xl font-extrabold text-[#0f6cbd]">{step}</div><h2 className="mt-2 font-extrabold text-slate-900">{title}</h2><p className="mt-2 text-xs leading-relaxed text-slate-600">{description}</p></div>)}</div></div></section>
      <Footer />
    </div>
  </PageTransition>
);

export default Services;

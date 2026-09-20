import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, CheckCircle2, Code2, Smartphone, Star, Users, Zap, Database,
  Sparkles, Trophy, Cpu, Building2, Stethoscope, GraduationCap, Car, ShoppingCart, Activity, PenTool, Megaphone, Clock3, Landmark, Truck, Plane, Clapperboard, Factory
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ProjectFlipCard } from "@/components/ProjectFlipCard";
import ClientLogoMarquee from "@/components/ClientLogoMarquee";
import { projectsData } from "@/data/projectsData";
import webDevImage from "@/assets/web-dev.jpg";
import mobileDevImage from "@/assets/mobile-dev.jpg";
import freelanceImage from "@/assets/freelance.jpg";
import teamImage from "@/assets/team.jpg";
import homeHeroVideo from "@/assets/home-hero-technology.mp4";
import automotiveImage from "@/assets/industries/automotive.jpg";
import healthcareImage from "@/assets/industries/healthcare.jpg";
import educationImage from "@/assets/industries/education.jpg";
import realEstateImage from "@/assets/industries/real-estate.jpg";
import sportsImage from "@/assets/industries/sports.jpg";
import ecommerceImage from "@/assets/industries/ecommerce.jpg";
import manufacturingImage from "@/assets/industries/manufacturing.jpg";
import travelAndHospitalityImage from "@/assets/industries/travel-and-hospitality.jpg";
import mediaEntertainmentImage from "@/assets/industries/media-entertainment.webp";

const servicesList = [
  { category: "AI & Automations", desc: "Workflow automation, NLP, and intelligent data modeling.", icon: Cpu },
  { category: "Mobile App Development", desc: "iOS, Android, and FlutterFlow cross-platform apps built for high retention.", icon: Smartphone },
  {
    category: "Custom Software Development",
    desc: "Tailored ERP, CRM, and custom software solutions designed around your enterprise workflows.",
    icon: Code2,
  },
  {
    category: "Web Development & Portals",
    desc: "Product-led web applications using Laravel, React, and PHP.",
    icon: Building2,
  },
  {
    category: "CMS Development",
    desc: "Flexible and scalable CMS solutions for easy content management and business growth.",
    icon: Database,
  },
  {
    category: "Digital Marketing",
    desc: "Data-led digital marketing strategies that build visibility, engagement, and measurable growth.",
    icon: Megaphone,
  },
  {
    category: "Graphic Designing",
    desc: "Distinctive visual identities, product interfaces, and campaign-ready creative assets.",
    icon: PenTool,
  },
  {
    category: "Social Media Marketing",
    desc: "Audience-focused social strategy, content, and performance campaigns that drive growth.",
    icon: Megaphone,
  },
  {
    category: "Staff Augmentation",
    desc: "Dedicated senior Android, iOS, and full-stack developers for your team.",
    icon: Users,
  },
];

const industriesList = [
  { name: "Automotive", desc: "Transforming automotive logistics & vehicle coordination.", icon: Car, image: automotiveImage },
  { name: "Healthcare", desc: "Clinical patient records, visit tracking & medical reports.", icon: Stethoscope, image: healthcareImage },
  { name: "Education", desc: "Quranic learning portals & student progress tracking.", icon: GraduationCap, image: educationImage },
  { name: "Real Estate", desc: "Property portals, realtor dashboards & listing tools.", icon: Building2, image: realEstateImage },
  { name: "Sports Analytics", desc: "Player evaluation, squad analytics & performance radar.", icon: Trophy, image: sportsImage },
  { name: "ECommerce & Retail", desc: "High-conversion web stores & inventory management.", icon: ShoppingCart, image: ecommerceImage },
  { name: "On-Demand", desc: "Fast, reliable booking and service-delivery platforms.", icon: Clock3, image: automotiveImage },
  { name: "Fintech", desc: "Secure financial experiences, workflows, and digital products.", icon: Landmark, image: healthcareImage },
  { name: "Logistics", desc: "Connected fleet, delivery, and operational visibility tools.", icon: Truck, image: realEstateImage },
  { name: "Travel & Hospitality", desc: "Connected booking and guest experiences for travel and hospitality businesses.", icon: Plane, image: travelAndHospitalityImage },
  { name: "Media & Entertainment", desc: "Engaging digital platforms for media and entertainment experiences.", icon: Clapperboard, image: mediaEntertainmentImage },
  { name: "Manufacturing", desc: "Practical manufacturing technology for smarter operations.", icon: Factory, image: manufacturingImage },
];

const Index = () => {
  return (
    <PageTransition>
      <SEO 
        title="HakamTechSol | Custom Software & App Development"
        description="HakamTechSol is a leading custom software development company specializing in web development, mobile app development, Shopify development, and digital marketing. Transform your business with our expert team."
        keywords="custom software development, web development agency, mobile app development, Shopify development, React Native development, Flutter development, digital marketing, SEO services, SaaS development, UI/UX design, staff augmentation, enterprise software development"
        canonicalUrl="https://hakamtechsol.com"
      />
      <div className="min-h-screen bg-white text-slate-800">
        <Navbar />

        {/* 1. Hero Section */}
        <section className="relative overflow-hidden border-b border-slate-800 bg-slate-950 pb-14 pt-24 sm:pb-16 sm:pt-28 md:pb-24 md:pt-36">
          <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover" aria-hidden="true">
            <source src={homeHeroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-slate-950/75" aria-hidden="true" />
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center">
              <div className="flex flex-col items-center space-y-5 text-center sm:space-y-6">
                {/* <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-sky-300">
                </div> */}

                <h1 className="max-w-6xl text-3xl font-extrabold leading-tight text-white sm:text-6xl">
                  Custom Software Development & <span className="text-sky-400">Digital Solutions</span> for Business Growth
                </h1>

                <p className="max-w-4xl text-base leading-7 text-slate-200 sm:text-xl sm:leading-relaxed">
                  HakamTechSol partners with ambitious teams globally to engineer web portals, mobile apps, SaaS platforms, and enterprise software. Expert Shopify development, React Native, and Flutter services.
                </p>

                <div className="flex w-full max-w-sm flex-col gap-3 pt-2 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
                  <Link to="/quote" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full sm:w-auto bg-[#0f6cbd] hover:bg-blue-700 text-white font-extrabold px-8 py-6 text-base rounded-full shadow-lg">
                      GET A QUOTE <ArrowRight size={18} className="ml-2" />
                    </Button>
                  </Link>
                  <Link to="/portfolio" className="w-full sm:w-auto">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-slate-600 bg-slate-900/80 hover:bg-slate-800 text-white font-bold px-8 py-6 text-base rounded-full shadow-sm">
                      Explore Case Studies
                    </Button>
                  </Link>
                </div>

                {/* Key Stats Bar */}
                <div className="grid w-full max-w-5xl grid-cols-2 gap-x-3 gap-y-5 border-t border-slate-700 pt-6 text-center sm:grid-cols-5 sm:gap-4 sm:pt-8">
                  <div>
                    <div className="text-2xl font-extrabold text-white">100+</div>
                    <div className="text-xs text-white font-medium">Projects Delivered</div>
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-white">100%</div>
                    <div className="text-xs text-white font-medium">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-white">100%</div>
                    <div className="text-xs text-white font-medium">On-Time Delivery</div>
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-white">100%</div>
                    <div className="text-xs text-white font-medium">Client Retention</div>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <div className="text-2xl font-extrabold text-white">24/7</div>
                    <div className="text-xs text-white font-medium">Dedicated Support</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <ClientLogoMarquee />

        {/* 2. Featured Case Studies Section (With 3D Card Flip Effect!) */}
        <section className="border-b border-slate-200 bg-slate-50 px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-9 flex flex-col items-start justify-between gap-4 md:mb-12 md:flex-row md:items-end">
              <div>
                <span className="px-3.5 py-1 rounded-full bg-sky-100 text-[#0f6cbd] text-xs font-extrabold uppercase tracking-widest">
                  Featured Case Studies
                </span>
                <h2 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-4xl">
                  <span className="flip-instruction flip-instruction--hover">Hover to Flip</span>
                  <span className="flip-instruction flip-instruction--touch">Touch to Flip</span> & Explore Our Software Development Projects
                </h2>
              </div>
              <Link to="/portfolio" className="text-sm font-extrabold text-[#0f6cbd] hover:underline flex items-center gap-1">
                View All Case Studies →
              </Link>
            </div>

            {/* 3D Flip Card Grid */}
            <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 md:gap-8">
              {projectsData.filter((project) => ["khyratna-ecommerce-app", "matchpro-operations-platform", "players-evaluation-system", "kls-property-portal"].includes(project.id)).map((project) => (
                <ProjectFlipCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* 3. Services Grid */}
        <section className="border-b border-slate-200 bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="container mx-auto">
            <div className="mx-auto mb-10 max-w-2xl space-y-3 text-center sm:mb-14">
              <span className="px-3.5 py-1.5 rounded-full bg-sky-100 text-[#0f6cbd] text-xs font-extrabold uppercase tracking-widest">
                Our Core Services
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 sm:text-4xl">
                End-to-End Technology Solutions
              </h2>
              <p className="text-slate-600 text-sm">
                From product strategy and design to cloud engineering and deployment.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
              {servicesList.map((service, index) => (
                <div key={index} className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-sky-300 hover:shadow-lg transition-all space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0f6cbd] text-white flex items-center justify-center font-bold shadow-md">
                    <service.icon size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{service.category}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{service.desc}</p>
                  <Link to="/services" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f6cbd] hover:underline pt-2">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Industries We Serve */}
        <section id="industries" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
              <span className="px-3.5 py-1.5 rounded-full bg-sky-500/20 text-sky-400 text-xs font-extrabold uppercase tracking-widest border border-sky-500/30">
                Domain Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Industries We Transform
              </h2>
              <p className="text-slate-300 text-sm">
                Bespoke tech solutions tailored for high-growth sectors globally.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {industriesList.map((ind, idx) => (
                <div key={idx} className="group relative min-h-[248px] overflow-hidden rounded-2xl border border-sky-400/25 bg-slate-950 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/60 hover:shadow-sky-950/50">
                  <img
                    src={ind.image}
                    alt={ind.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-950/5" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end gap-3 p-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-sky-400/40 bg-slate-950/80 text-sky-400 backdrop-blur-sm">
                      <ind.icon size={25} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-bold text-white">{ind.name}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-slate-300">{ind.desc}</p>
                    </div>
                    <div className="mb-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors group-hover:bg-sky-500">
                      <ArrowRight size={17} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Contact CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-4xl">
            <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-8 sm:p-14 text-white text-center shadow-2xl space-y-6 border border-slate-800">
              <span className="inline-flex max-w-full justify-center whitespace-normal px-4 py-1.5 text-center leading-relaxed rounded-full bg-[#0f6cbd] text-white text-xs font-extrabold uppercase tracking-widest">
                Start Your Digital Transformation
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Ready to build something extraordinary?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
                Schedule a consultation call with our solution architects to get a scope proposal and project estimation.
              </p>
              <div>
                <Link to="/quote">
                  <Button size="lg" className="bg-[#0f6cbd] hover:bg-blue-700 text-white font-extrabold px-9 py-6 text-base rounded-full shadow-lg">
                    GET A QUOTE NOW
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;

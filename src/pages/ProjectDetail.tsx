import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, ChevronRight, Sparkles, Send, Check, Rocket, ShieldCheck, FileText, Clock3, Calculator } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import SEO from "@/components/SEO";
import NotFound from "@/pages/NotFound";
import { getProjectById, projectArchitectures, projectsData } from "@/data/projectsData";
import { CaseStudyGallery } from "@/components/CaseStudyGallery";
import { ProjectMockupFrame } from "@/components/ProjectMockupFrame";
import { PlatformBadges } from "@/components/PlatformBadges";
import { Button } from "@/components/ui/button";

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);

  if (!project) {
    return <NotFound />;
  }

  const architecture = projectArchitectures[project.id] ?? {
    title: `${project.title} Solution Overview`,
    description: project.fullDescription,
  };
  const currentIndex = projectsData.findIndex((p) => p.id === project.id);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];
  const prevProject = projectsData[(currentIndex - 1 + projectsData.length) % projectsData.length];

  return (
    <PageTransition>
      <SEO
        title={`${project.title} - Case Study`}
        description={project.subtitle}
        canonicalUrl={`https://hakamtechsol.com/portfolio/${project.id}`}
      />
      <div className="min-h-screen bg-white text-slate-800">
        <Navbar />

        {/* 1. Top Breadcrumb */}
        <section className="bg-slate-50 border-b border-slate-200 pt-24 pb-4 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
              <Link to="/" className="hover:text-[#0f6cbd]">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link to="/portfolio" className="hover:text-[#0f6cbd]">Portfolio</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-slate-900 font-bold">{project.title}</span>
            </div>

            <button
              onClick={() => navigate("/portfolio")}
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-[#0f6cbd] bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-sm transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Case Studies</span>
            </button>
          </div>
        </section>

        {/* 2. Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50/50 py-12 md:py-20 border-b border-slate-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-6">
                <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
                  {project.title}
                </h1>

                <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-medium">
                  {project.subtitle}
                </p>

                {/* Store Availability Badges */}
                <div className="pt-2">
                  <PlatformBadges platforms={project.platforms} />
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-2">
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-2">Technologies Used:</span>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-800 font-bold text-xs shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Hero Phone Showcase Container */}
              <div className="lg:col-span-5">
                {project.visualImages ? (
                  <img
                    src={project.visualImages.detail ?? project.visualImages.card}
                    alt={`${project.title} project showcase`}
                    className="h-auto w-full object-contain"
                  />
                ) : (
                  <div className="rounded-3xl bg-slate-900 p-6 border-4 border-slate-800 shadow-2xl space-y-4">
                    <div className="flex justify-between items-center text-xs text-slate-400 border-b border-slate-800 pb-3">
                      <span className="font-bold text-sky-400">Featured Production UI</span>
                      <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 font-bold text-[10px]">VERIFIED CASE STUDY</span>
                    </div>
                    <ProjectMockupFrame project={project} variant="detail" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 3. Hero Spotlight Dark Card */}
        <section className="py-12 bg-slate-950 text-white border-b border-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-8 text-center shadow-2xl sm:p-12 border border-sky-500/30">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold uppercase">
                  <Sparkles className="w-3.5 h-3.5" /> {architecture.title}
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                  {architecture.title}
                </h2>
                <p className="mx-auto max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
                  {architecture.description}
                </p>
                <div className="flex items-center justify-center gap-6 pt-2">
                  <div>
                    <div className="text-2xl font-extrabold text-sky-400">{project.metrics[0]?.value || "500K+"}</div>
                    <div className="text-xs text-slate-400">Active Users</div>
                  </div>
                  <div className="h-8 w-px bg-slate-700" />
                  <div>
                    <div className="text-2xl font-extrabold text-sky-400">{project.metrics[1]?.value || "4.9/5.0"}</div>
                    <div className="text-xs text-slate-400">User Rating</div>
                  </div>
                  <div className="h-8 w-px bg-slate-700" />
                  <div>
                    <div className="text-2xl font-extrabold text-sky-400">{project.metrics[2]?.value || "60%"}</div>
                    <div className="text-xs text-slate-400">Retention</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. Project gallery and feature breakdown */}
        <section className="border-b border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12 max-w-2xl"><span className="inline-block rounded-full bg-sky-100 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#0f6cbd]">Product experience</span><h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">Screens, architecture & key features</h2><p className="mt-3 text-sm leading-relaxed text-slate-600">Explore the product interface alongside the specific capabilities and technical approach behind this project.</p></div>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
              <CaseStudyGallery project={project} />
              <div className="space-y-5 md:h-[500px] md:overflow-y-auto md:pr-3" style={{ scrollbarWidth: "thin", scrollbarColor: "#0f6cbd #e0f2fe" }}>
                <article className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm"><h3 className="text-lg font-extrabold text-slate-900">Architecture & technical approach</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{architecture.description}</p></article>
                <div><div className="mb-4 flex items-center justify-between gap-4"><h3 className="text-lg font-extrabold text-slate-900">Key Features Included</h3><span className="rounded-full bg-[#0f6cbd] px-3 py-1 text-xs font-bold text-white">{project.keyFeatures.length} modules</span></div><div className="grid gap-3 sm:grid-cols-2">{project.keyFeatures.map((feature, index) => <article key={feature} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-sky-300 hover:shadow-md"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100 text-xs font-extrabold text-[#0f6cbd]">{index + 1}</span><h4 className="mt-3 text-sm font-bold leading-snug text-slate-900">{feature}</h4></article>)}</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. App Features Phone Screenshots Showcase Grid */}
        <section className="hidden">
          <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
              <span className="inline-block px-4 py-1.5 rounded-full bg-sky-100 text-[#0f6cbd] text-xs font-extrabold uppercase tracking-widest">
                Screen Gallery & UI Layouts
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">App Screens & Interface Gallery</h2>
              <p className="text-slate-600 text-sm">
                Explore the actual user experience and screen flows engineered for this application.
              </p>
            </div>

            {project.galleryImages ? (
              <div className={project.category === "Mobile App" ? "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5" : "grid grid-cols-1 gap-6"}>
                {project.galleryImages.map((image) => (
                  project.category === "Mobile App" ? (
                    <div key={image.src} className="rounded-2xl border border-slate-200 bg-white p-2 shadow-md transition-shadow hover:shadow-xl">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-full rounded-xl object-contain"
                      />
                    </div>
                  ) : (
                    <img
                      key={image.src}
                      src={image.src}
                      alt={image.alt}
                      className="h-auto w-full rounded-2xl object-contain shadow-md"
                    />
                  )
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {[
                "Login & Authentication",
                "User Profile Dashboard",
                "Primary Search & Index",
                "Detailed Record Sheet",
                "Real-Time Alerts Log",
                "Analytics & Reports",
                "Settings & Preferences",
                "Role Management",
                "Activity History",
                "Support & Help Center"
              ].map((screenName, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-3 border border-slate-200 shadow-md hover:shadow-xl hover:border-sky-300 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="bg-slate-900 rounded-2xl p-2 border-2 border-slate-800 aspect-[9/16] flex flex-col justify-between overflow-hidden relative">
                    <div className="w-10 h-2 bg-slate-800 rounded-full mx-auto" />
                    <div className="p-2 bg-slate-800/90 rounded-xl space-y-1 text-center">
                      <div className="w-6 h-6 mx-auto rounded-lg bg-sky-500/20 text-sky-400 font-bold text-xs flex items-center justify-center">
                        {idx + 1}
                      </div>
                      <div className="text-[10px] font-bold text-slate-200 line-clamp-1">{screenName}</div>
                      <div className="h-1 bg-slate-700 rounded w-3/4 mx-auto" />
                    </div>
                    <div className="w-full bg-[#0f6cbd]/40 text-sky-300 text-[8px] font-bold text-center py-1 rounded">
                      SCREEN 0{idx + 1}
                    </div>
                  </div>

                  <div className="mt-3 text-center">
                    <h4 className="text-xs font-bold text-slate-800 group-hover:text-[#0f6cbd] transition-colors">
                      {screenName}
                    </h4>
                  </div>
                </div>
              ))}
              </div>
            )}
          </div>
        </section>

        {/* 5. Key Features Specifications Grid */}
        <section className="hidden">
          <div className="container mx-auto max-w-6xl space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#0f6cbd] text-white text-xs font-extrabold uppercase tracking-widest shadow-md">
                KEY FEATURES INCLUDED
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">Comprehensive Module Breakdown</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-sky-300 hover:shadow-md transition-all flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-sky-100 text-[#0f6cbd] font-extrabold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">{feat}</h4>
                    <p className="text-xs text-slate-500 mt-1">Full production component with security audit & real-time sync.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Previous and next case study navigation */}
        <section className="py-10 bg-slate-50 border-t border-slate-200 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              to={`/portfolio/${prevProject.id}`}
              className="w-full sm:w-auto p-4 rounded-2xl bg-white border border-slate-200 hover:border-[#0f6cbd] transition-all flex items-center gap-4 group shadow-sm"
            >
              <ArrowLeft className="w-5 h-5 text-slate-400 group-hover:text-[#0f6cbd] transition-colors" />
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase">Previous Case Study</div>
                <div className="text-sm font-bold text-slate-800 group-hover:text-[#0f6cbd]">{prevProject.title}</div>
              </div>
            </Link>

            <Link
              to={`/portfolio/${nextProject.id}`}
              className="w-full sm:w-auto p-4 rounded-2xl bg-white border border-slate-200 hover:border-[#0f6cbd] transition-all flex items-center justify-end text-right gap-4 group shadow-sm"
            >
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase">Next Case Study</div>
                <div className="text-sm font-bold text-slate-800 group-hover:text-[#0f6cbd]">{nextProject.title}</div>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-[#0f6cbd] transition-colors" />
            </Link>
          </div>
        </section>

        {/* Dedicated quote call to action */}
        <section className="relative isolate overflow-hidden bg-white px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-blue-600/15 blur-[100px]" />
            <div className="absolute -right-16 bottom-0 h-96 w-96 rounded-full bg-violet-600/15 blur-[110px]" />
            <div className="absolute inset-x-0 bottom-0 h-40 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(ellipse at bottom, transparent 45%, #60a5fa 46%, transparent 46.5%)", backgroundSize: "100% 100%" }} />
          </div>
          <div className="container mx-auto max-w-6xl">
            <div className="relative grid overflow-hidden rounded-[2rem] border border-sky-400/20 bg-gradient-to-br from-slate-900 via-[#111a33] to-indigo-950 p-7 shadow-[0_20px_70px_-30px_rgba(15,23,42,0.55)] sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-8 lg:p-14">
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(ellipse_at_top_left,rgba(14,165,233,0.10),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.10),transparent_45%)]" />
              <div className="relative z-10 text-center lg:text-left">
                <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-gradient-to-r from-sky-500/15 to-indigo-500/15 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-sky-300 shadow-[0_0_24px_-12px_rgba(56,189,248,0.7)]">
                  <Rocket size={14} /> Ready to start?
                </span>
                <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:mx-0 lg:text-5xl">
                  Let’s Build a More <span className="bg-gradient-to-r from-sky-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">Trusted Tomorrow</span>
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base lg:mx-0">
                  Tell our product team about the platform you want to build and receive a tailored scope, timeline, and estimate.
                </p>
                <Link to="/quote" className="mt-8 inline-block">
                  <Button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-6 font-extrabold text-white shadow-[0_10px_30px_-12px_rgba(59,130,246,0.8)] transition-all duration-300 hover:-translate-y-1 hover:from-blue-500 hover:to-violet-500 hover:shadow-[0_14px_36px_-12px_rgba(99,102,241,0.9)]">
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    <span className="relative inline-flex items-center">Get a Quote <ArrowRight size={17} className="ml-2 transition-transform group-hover:translate-x-1" /></span>
                  </Button>
                </Link>
              </div>
              <div className="relative mx-auto mt-10 flex h-56 w-full max-w-sm items-center justify-center sm:h-64 lg:mt-0 lg:h-72">
                <div aria-hidden="true" className="absolute h-48 w-48 rounded-full border border-dashed border-sky-300/20 sm:h-56 sm:w-56" />
                <div aria-hidden="true" className="absolute h-36 w-36 rounded-full border border-indigo-300/15 sm:h-44 sm:w-44" />
                <div className="relative flex h-36 w-32 -rotate-3 flex-col items-center justify-center rounded-2xl border border-sky-200/20 bg-gradient-to-br from-white/10 to-white/[0.03] shadow-[0_20px_70px_-25px_rgba(56,189,248,0.5)] backdrop-blur-xl sm:h-40 sm:w-36">
                  <div className="absolute inset-x-5 top-5 h-1 rounded-full bg-sky-200/30" />
                  <div className="absolute inset-x-5 top-9 h-1 rounded-full bg-slate-300/15" />
                  <ShieldCheck className="h-14 w-14 text-sky-300 drop-shadow-[0_0_18px_rgba(56,189,248,0.6)]" strokeWidth={1.5} />
                  <div className="mt-3 flex gap-2"><span className="h-1.5 w-10 rounded-full bg-sky-300/50" /><span className="h-1.5 w-5 rounded-full bg-violet-300/50" /></div>
                </div>
                <div className="absolute left-0 top-8 flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 text-[11px] font-semibold text-slate-200 shadow-lg backdrop-blur-md sm:left-2"><FileText size={14} className="text-sky-300" /> Tailored Scope</div>
                <div className="absolute right-0 top-16 flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 text-[11px] font-semibold text-slate-200 shadow-lg backdrop-blur-md sm:right-0"><Clock3 size={14} className="text-violet-300" /> Timeline</div>
                <div className="absolute bottom-5 left-4 flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 text-[11px] font-semibold text-slate-200 shadow-lg backdrop-blur-md sm:bottom-8 sm:left-7"><Calculator size={14} className="text-cyan-300" /> Estimate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Retained source markup is hidden; quote requests use the shared Quote page above. */}
        <section id="contact-form" className="hidden">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <span className="px-3.5 py-1.5 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold uppercase tracking-widest border border-sky-500/30">
                  Ready to Start Your Project?
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                  Get a Personalized Quote for Your App or Web Platform
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Fill out the form to schedule a technical consultation with our engineering architects. We’ll discuss your vision, tech stack, and deliver a detailed roadmap.
                </p>
                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-sky-400" />
                    <span>Free technical scope consultation & NDA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-sky-400" />
                    <span>Detailed cost proposal & project timeline</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-sky-400" />
                    <span>Dedicated product engineering team</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="bg-white text-slate-900 p-8 rounded-3xl shadow-2xl border border-slate-200">
                  {formSubmitted ? (
                    <div className="text-center py-10 space-y-4">
                      <div className="w-14 h-14 bg-sky-100 text-[#0f6cbd] rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                        ✓
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">Thank You!</h3>
                      <p className="text-sm text-slate-600">
                        Your inquiry has been received. Our senior product consultant will contact you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setFormSubmitted(true);
                      }}
                      className="space-y-4"
                    >
                      <h3 className="text-xl font-extrabold text-slate-900 mb-4">Request a Quote</h3>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Full Name</label>
                          <input
                            required
                            type="text"
                            placeholder="John Doe"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f6cbd]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Email Address</label>
                          <input
                            required
                            type="email"
                            placeholder="john@company.com"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f6cbd]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Phone Number</label>
                          <input
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f6cbd]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Project Type</label>
                          <select className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f6cbd] bg-white">
                            <option>Mobile App Development</option>
                            <option>Custom Software / ERP</option>
                            <option>Web Platform / Portal</option>
                            <option>SaaS & AI Analytics</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Project Details</label>
                        <textarea
                          rows={4}
                          placeholder="Tell us about your project requirements, scope, or timeline..."
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f6cbd]"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-[#0f6cbd] hover:bg-blue-700 text-white font-extrabold py-4 rounded-xl shadow-lg text-base"
                      >
                        Submit Request <Send size={16} className="ml-2" />
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default ProjectDetail;

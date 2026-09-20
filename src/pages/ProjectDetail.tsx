import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, ChevronRight, Sparkles, Send, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import SEO from "@/components/SEO";
import { getProjectById, projectArchitectures, projectsData } from "@/data/projectsData";
import { CaseStudyGallery } from "@/components/CaseStudyGallery";
import { ProjectMockupFrame } from "@/components/ProjectMockupFrame";
import { PlatformBadges } from "@/components/PlatformBadges";
import { Button } from "@/components/ui/button";

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);

  if (!project) {
    return (
      <PageTransition>
        <SEO title="Case Study Not Found" description="The requested project case study could not be found." noindex={true} />
        <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
          <Navbar />
          <div className="container mx-auto px-4 py-32 text-center">
            <h1 className="text-3xl font-bold text-slate-800">Case Study Not Found</h1>
            <p className="mt-4 text-slate-600">The project case study you requested could not be found.</p>
            <Link to="/portfolio" className="mt-6 inline-block">
              <Button className="bg-[#0f6cbd] text-white font-bold">Return to Portfolio</Button>
            </Link>
          </div>
          <Footer />
        </div>
      </PageTransition>
    );
  }

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
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3.5 py-1 rounded-full bg-[#0f6cbd] text-white text-xs font-extrabold uppercase tracking-wide">
                    {project.badge}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white text-slate-700 text-xs font-bold border border-slate-200">
                    Client: {project.client}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white text-slate-700 text-xs font-bold border border-slate-200">
                    Timeline: {project.duration}
                  </span>
                </div>

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
                  <Sparkles className="w-3.5 h-3.5" /> {projectArchitectures[project.id].title}
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                  {projectArchitectures[project.id].title}
                </h2>
                <p className="mx-auto max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
                  {projectArchitectures[project.id].description}
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
                <article className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm"><h3 className="text-lg font-extrabold text-slate-900">Architecture & technical approach</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{projectArchitectures[project.id].description}</p></article>
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

        {/* Dedicated quote call to action */}
        <section className="bg-slate-900 px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl rounded-3xl border border-sky-500/30 bg-slate-900 p-8 text-center shadow-2xl sm:p-12">
            <span className="rounded-full bg-sky-500/20 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-300">Ready to start?</span>
            <h2 className="mt-4 text-3xl font-extrabold">Get a personalized quote for your project</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">Tell our product team about the platform you want to build and receive a tailored scope, timeline, and estimate.</p>
            <Link to="/quote" className="mt-7 inline-block"><Button className="rounded-full bg-[#0f6cbd] px-8 py-6 font-extrabold text-white hover:bg-blue-700">Get a Quote <ArrowRight size={16} className="ml-2" /></Button></Link>
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

        {/* 7. Bottom Navigation */}
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

        <Footer />
      </div>
    </PageTransition>
  );
};

export default ProjectDetail;

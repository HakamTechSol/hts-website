import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Sparkles, Code2, Layers } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { projectsData } from "@/data/projectsData";
import { ProjectFlipCard } from "@/components/ProjectFlipCard";
import portfolioBackgroundImage from "@/assets/portfolio-bg.jpg";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const categories = [
  "All",
  "Web Application",
  "Mobile App",
  "SaaS & Analytics",
  "EdTech",
  "Healthcare System",
];

const Portfolio: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const location = useLocation();
  const selectedCategory = new URLSearchParams(location.search).get('category') || 'All';

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.keyFeatures.some((feat) => feat.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <PageTransition>
      <div className="min-h-screen bg-slate-50 text-slate-800">
        <Navbar />
        {/* Hero Header Section */}
        <section className="relative flex min-h-screen w-full items-center overflow-hidden border-b border-slate-900 pt-28 pb-16 md:pt-36 md:pb-20">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${portfolioBackgroundImage})` }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-black/80 via-slate-950/70 to-black/60"
            aria-hidden="true"
          />
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              {/* <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/40 bg-slate-950/30 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-sky-200 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-sky-200" />
                <span>Our Portfolio & Case Studies</span>
              </div> */}
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                Explore Our <span className="text-sky-300">Featured Digital Projects</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto">
                Hover over any project card to flip it and view the full case study overview, key metrics, store links, and detailed statistics.
              </p>
            </div>
            {/* Search Input */}
            <div className="mt-10 max-w-4xl mx-auto space-y-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by Project Name, Tech Stack, or Features..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 bg-white shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-[#0f6cbd] transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg"
                  >
                    Clear
                  </button>
                )}
              </div>
              {/* Simple Tab Navigation */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                {categories.map((cat) => (
                  <Link
                    key={cat}
                    to={`/portfolio${cat === "All" ? "" : `?category=${encodeURIComponent(cat)}`}`}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                      (new URLSearchParams(window.location.search).get('category') || 'All') === cat
                        ? "bg-[#0f6cbd] text-white shadow-md scale-105"
                        : "border border-white/40 bg-white/10 text-white backdrop-blur-sm hover:border-sky-300 hover:bg-white/20"
                    }`}
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2-Column Grid with 3D Card Flip */}
        <section className="px-4 pb-12 pt-16 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            {filteredProjects.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 max-w-lg mx-auto shadow-sm">
                <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-800">No Case Studies Found</h3>
                <p className="text-slate-500 text-sm mt-2">
                  No projects match your search criteria. Try a different search query.
                </p>
                <Button onClick={() => { setSearchQuery(""); }} className="mt-6 bg-[#0f6cbd] text-white font-bold">
                  Reset Search
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                {filteredProjects.map((project) => (
                  <ProjectFlipCard key={project.id} project={project} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="px-4 pb-16 pt-12 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl">
            <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl border border-slate-800">
              <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                <span className="inline-flex max-w-full justify-center whitespace-normal px-4 py-1.5 text-center leading-relaxed rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold uppercase tracking-widest border border-sky-500/30">
                  Ready To Build Your Next Big Product?
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-white">
                  Let’s transform your idea into a market-ready product.
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Our team of senior engineers and product designers can help you design, build, and scale custom web platforms, mobile apps, and enterprise software.
                </p>
                <div className="pt-2">
                  <Link to="/contact">
                    <Button size="lg" className="bg-[#0f6cbd] hover:bg-blue-700 text-white font-extrabold px-8 py-6 text-base rounded-full shadow-lg">
                      GET A QUOTE NOW
                    </Button>
                  </Link>
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

export default Portfolio;

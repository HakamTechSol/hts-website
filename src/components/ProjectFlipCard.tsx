import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Project } from "@/data/projectsData";
import { ProjectMockupFrame } from "./ProjectMockupFrame";
import { PlatformBadges } from "./PlatformBadges";

interface ProjectFlipCardProps {
  project: Project;
}

export const ProjectFlipCard: React.FC<ProjectFlipCardProps> = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("a") || target.closest("button")) {
      return;
    }
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div
      className="group relative w-full h-[480px] sm:h-[510px] lg:h-[540px] [perspective:1000px] cursor-pointer select-none [-webkit-tap-highlight-color:transparent]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={handleCardClick}
    >
      {/* Flipping Container */}
      <div
        className={`relative w-full h-full duration-700 [transform-style:preserve-3d] transition-transform ease-out rounded-3xl border border-slate-200 shadow-md ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* FRONT SIDE */}
        <div
          className={`absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-3xl bg-white p-4 sm:p-5 flex flex-col justify-between overflow-hidden transition-opacity duration-300 ${
            isFlipped ? "pointer-events-none opacity-0" : "pointer-events-auto opacity-100"
          }`}
        >
          {/* Top Header Tag */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="px-3 py-1 rounded-full bg-sky-100 text-[#0f6cbd] text-xs font-extrabold uppercase tracking-wide">
              {project.badge}
            </span>
            <span className="flip-instruction flip-instruction--hover text-xs font-semibold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md">
              Hover to Flip ↻
            </span>
            <span className="flip-instruction flip-instruction--touch text-xs font-semibold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md">
              View Details
            </span>
          </div>

          {/* Visual Device Frame */}
          <div className="my-2 flex min-h-0 flex-1 items-center justify-center overflow-hidden">
            <ProjectMockupFrame project={project} variant="card" />
          </div>
        </div>

        {/* BACK SIDE (Unified Blue & White Theme) */}
        <div
          className={`absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-3xl bg-gradient-to-br from-sky-50/95 via-white to-blue-50/90 p-5 sm:p-7 flex flex-col justify-between border-2 border-sky-300/80 shadow-2xl overflow-y-auto [-webkit-overflow-scrolling:touch] transition-opacity duration-300 z-30 ${
            isFlipped ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          {/* Logo & Header */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0f6cbd] to-sky-500 flex items-center justify-center text-white font-black text-base shadow">
                  {project.title.charAt(0)}
                </div>
                <span className="text-[11px] font-bold text-[#0f6cbd] uppercase tracking-wider bg-sky-100 px-2.5 py-0.5 rounded-full">
                  Case Study Specs
                </span>
              </div>
              <span className="text-[10px] text-slate-400 font-bold uppercase">FLIPPED VIEW</span>
            </div>

            {/* Title & Paragraph */}
            <div className="space-y-1.5">
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
                {project.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-4 sm:line-clamp-5">
                {project.fullDescription}
              </p>
            </div>

            {/* Available On Badges */}
            <div className="space-y-1 pt-1">
              <div className="text-[10px] font-extrabold text-slate-700 uppercase tracking-wider">
                Available on
              </div>
              <PlatformBadges platforms={project.platforms} size="compact" />
            </div>
          </div>

          {/* Key Metrics Stats Grid */}
          <div className="space-y-3 pt-3 border-t border-sky-200">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2 rounded-xl bg-white border border-sky-100 shadow-sm">
                <div className="text-xs sm:text-base font-extrabold text-slate-900">
                  {project.metrics[0]?.value || "500K+"}
                </div>
                <div className="text-[9px] sm:text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                  Active Users
                </div>
              </div>
              <div className="p-2 rounded-xl bg-white border border-sky-100 shadow-sm">
                <div className="text-xs sm:text-base font-extrabold text-slate-900">
                  {project.metrics[1]?.value || "4.9/5.0"}
                </div>
                <div className="text-[9px] sm:text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                  User Rating
                </div>
              </div>
              <div className="p-2 rounded-xl bg-white border border-sky-100 shadow-sm">
                <div className="text-xs sm:text-base font-extrabold text-slate-900">
                  {project.metrics[2]?.value || "60%"}
                </div>
                <div className="text-[9px] sm:text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                  Retention Rate
                </div>
              </div>
            </div>

            {/* View Case Study Clickable Link */}
            <Link
              to={`/portfolio/${project.id}`}
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="w-full py-3 px-6 rounded-full border-2 border-[#0f6cbd] bg-white hover:bg-[#0f6cbd] text-[#0f6cbd] hover:text-white font-extrabold text-xs sm:text-sm transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer z-50 text-center uppercase tracking-wider"
            >
              <span>View Case Study</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

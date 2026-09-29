import React from "react";
import logo from "@/assets/logo.png";
import { Project } from "@/data/projectsData";
import { 
  Building2, Car, Trophy, GraduationCap, Stethoscope, Gift, Gamepad2, ShoppingBag,
  CheckCircle2, ShieldCheck, Cpu, Smartphone, Monitor, Layout, FileText, Activity, Users, Star 
} from "lucide-react";

interface ProjectMockupFrameProps {
  project: Project;
  variant?: "card" | "detail";
}

export const ProjectMockupFrame: React.FC<ProjectMockupFrameProps> = ({ project, variant = "card" }) => {
  const projectImage = project.visualImages?.[variant] ?? project.visualImages?.card;

  const getIcon = () => {
    switch (project.id) {
      case "kls-property-portal":
        return <Building2 className="w-6 h-6 text-sky-500" />;
      case "parking-alert-app":
        return <Car className="w-6 h-6 text-indigo-500" />;
      case "players-evaluation-system":
        return <Trophy className="w-6 h-6 text-emerald-500" />;
      case "learning-management-system":
        return <GraduationCap className="w-6 h-6 text-blue-500" />;
      case "hospital-management-system":
        return <Stethoscope className="w-6 h-6 text-cyan-500" />;
      case "angelopoulos-loyalty-app":
        return <Gift className="w-6 h-6 text-rose-500" />;
      case "matchpro-operations-platform":
        return <Gamepad2 className="w-6 h-6 text-amber-500" />;
      case "khyratna-ecommerce-app":
        return <ShoppingBag className="w-6 h-6 text-emerald-500" />;
      default:
        return <Cpu className="w-6 h-6 text-sky-500" />;
    }
  };

  if (projectImage) {
    return (
      <div className={`relative h-full w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl ${
        variant === "detail" ? "p-3 md:p-4" : "p-2"
      }`}>
        <img
          src={projectImage}
          alt={`${project.title} project showcase`}
          className="h-full w-full rounded-xl object-contain"
        />
      </div>
    );
  }

  return (
    <div className={`relative h-full w-full overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 via-white to-slate-100 shadow-xl ${
      variant === "detail" ? "p-6 md:p-8" : "p-4"
    }`}>
      {/* Top HakamTechSol Branding Header */}
      <div className="flex items-center justify-between border-b border-slate-200/80 pb-3 mb-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="HakamTechSol Logo" className="h-7 w-auto object-contain" />
        </div>
      </div>

      {/* Hero Visual Area */}
      <div className="relative rounded-xl overflow-hidden bg-slate-900 text-white p-5 sm:p-6 shadow-inner">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="relative z-10 grid gap-6 md:grid-cols-12 items-center">
          {/* Left Text & Key Features Badge */}
          <div className={`${variant === "detail" ? "md:col-span-6" : "md:col-span-7"} space-y-3`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-sky-300">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>{project.techStack.slice(0, 3).join(" • ")}</span>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white line-clamp-1">
              {project.title}
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
              {project.subtitle}
            </p>

            {/* Key Features Pill Badge */}
            <div className="pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600 text-white text-xs font-bold shadow-md">
                <FileText className="w-3.5 h-3.5" />
                <span>KEY FEATURES INCLUDED</span>
              </div>
            </div>

            {/* Mini Feature Bullets */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-2 text-[11px] text-slate-300">
              {project.keyFeatures.slice(0, 4).map((feat, idx) => (
                <li key={idx} className="flex items-center gap-1.5 line-clamp-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Interactive Device Mockup Visual */}
          <div className={`${variant === "detail" ? "md:col-span-6" : "md:col-span-5"} flex justify-center`}>
            {project.category === "Mobile App" || project.category === "EdTech" ? (
              /* Mobile Screen Graphic Representation */
              <div className="relative w-full max-w-[220px] aspect-[9/16] bg-slate-950 rounded-[32px] p-2.5 border-4 border-slate-700 shadow-2xl">
                <div className="w-16 h-3.5 bg-slate-800 rounded-full mx-auto mb-2" />
                <div className="h-[calc(100%-24px)] rounded-[22px] bg-slate-900 border border-slate-800 p-3 flex flex-col justify-between overflow-hidden">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-[10px] font-bold text-sky-400">{project.title.split(" ")[0]} App</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  
                  {/* Internal Mockup Content */}
                  <div className="space-y-2 py-2 text-center">
                    <div className="w-10 h-10 mx-auto rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
                      {getIcon()}
                    </div>
                    <div className="text-[11px] font-semibold text-slate-200">{project.client}</div>
                    <div className="h-1.5 w-3/4 mx-auto bg-slate-700 rounded" />
                    <div className="h-1.5 w-1/2 mx-auto bg-slate-800 rounded" />
                    
                    <div className="grid grid-cols-2 gap-1 mt-2 text-[9px]">
                      <div className="p-1.5 bg-slate-800/80 rounded border border-slate-700 text-cyan-300 font-semibold">
                        Alert Active
                      </div>
                      <div className="p-1.5 bg-slate-800/80 rounded border border-slate-700 text-indigo-300 font-semibold">
                        Push Notif
                      </div>
                    </div>
                  </div>

                  <div className="p-2 rounded-lg bg-sky-600 text-center text-[10px] font-bold text-white shadow">
                    View Live Details
                  </div>
                </div>
              </div>
            ) : (
              /* Browser Desktop Screen Graphic Representation */
              <div className="w-full bg-slate-950 rounded-xl border border-slate-700 p-2 shadow-2xl">
                <div className="flex items-center gap-1.5 pb-2 px-1 border-b border-slate-800">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <div className="ml-2 flex-1 bg-slate-900 rounded px-2 py-0.5 text-[9px] text-slate-400 font-mono">
                    https://{project.id}.hakamtechsol.com/dashboard
                  </div>
                </div>

                <div className="p-3 bg-slate-900 rounded-b-lg space-y-2">
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="font-semibold text-sky-400 flex items-center gap-1">
                      <Layout className="w-3 h-3" /> Dashboard Overview
                    </span>
                    <span className="text-slate-400 text-[9px]">{project.techStack[0]} Engine</span>
                  </div>

                  <div className="grid grid-cols-3 gap-1.5">
                    <div className="bg-slate-800/90 p-1.5 rounded border border-slate-700 text-center">
                      <div className="text-[8px] text-slate-400">Total Logs</div>
                      <div className="text-[11px] font-bold text-emerald-400">{project.metrics[0]?.value || "10,000+"}</div>
                    </div>
                    <div className="bg-slate-800/90 p-1.5 rounded border border-slate-700 text-center">
                      <div className="text-[8px] text-slate-400">Efficiency</div>
                      <div className="text-[11px] font-bold text-cyan-400">{project.metrics[1]?.value || "99.9%"}</div>
                    </div>
                    <div className="bg-slate-800/90 p-1.5 rounded border border-slate-700 text-center">
                      <div className="text-[8px] text-slate-400">Status</div>
                      <div className="text-[11px] font-bold text-sky-400">Active</div>
                    </div>
                  </div>

                  {/* Mockup Data List Lines */}
                  <div className="space-y-1 pt-1">
                    <div className="h-2 bg-slate-800 rounded w-full flex justify-between px-1">
                      <div className="w-1/3 bg-sky-500/40 h-full rounded" />
                      <div className="w-1/4 bg-slate-700 h-full rounded" />
                    </div>
                    <div className="h-2 bg-slate-800 rounded w-full flex justify-between px-1">
                      <div className="w-1/2 bg-indigo-500/40 h-full rounded" />
                      <div className="w-1/5 bg-slate-700 h-full rounded" />
                    </div>
                    <div className="h-2 bg-slate-800 rounded w-full flex justify-between px-1">
                      <div className="w-2/5 bg-emerald-500/40 h-full rounded" />
                      <div className="w-1/3 bg-slate-700 h-full rounded" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

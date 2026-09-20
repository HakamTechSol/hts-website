import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { TeamMember } from "@/data/teamData";

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard = ({ member }: TeamCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const showToggle = member.bio.length > 150;

  return (
    <article className="relative grid grid-cols-1 items-center gap-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg sm:grid-cols-[180px_1fr] sm:gap-9 sm:p-8">
      <div className={`mx-auto aspect-square w-24 overflow-hidden rounded-full bg-sky-50 sm:w-44 ${member.imageHasFrame ? "border-0 shadow-none" : "border-4 border-[#0f6cbd] shadow-md"}`}>
        <img src={member.image} alt={`${member.name}, ${member.role}`} className={`h-full w-full ${member.imagePosition || "object-center"} brightness-[1.03] contrast-[1.04] saturate-[1.03] ${member.imageHasFrame ? "object-contain" : "object-cover"}`} />
      </div>
      <div>
        <h2 className="text-xl font-extrabold leading-tight text-[#0f5c99] sm:text-3xl">{member.name}</h2>
        <p className="text-sm font-medium leading-tight text-[#0f5c99] sm:text-xl">{member.role}</p>
        <p className={`mt-2 text-[13px] leading-relaxed text-slate-600 sm:mt-3 sm:text-base ${expanded ? "line-clamp-none" : "line-clamp-3"} sm:line-clamp-none`}>
          {member.bio}
        </p>
        {showToggle && (
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-[#0f6cbd] hover:underline sm:hidden"
            aria-expanded={expanded}
          >
            {expanded ? "Show Less" : "Read More"}
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        )}
      </div>
    </article>
  );
};
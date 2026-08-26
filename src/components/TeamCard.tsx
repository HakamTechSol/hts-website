import { TeamMember } from "@/data/teamData";

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard = ({ member }: TeamCardProps) => (
  <article className="relative grid grid-cols-1 items-center gap-7 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg sm:grid-cols-[180px_1fr] sm:gap-9 sm:p-8">
    <div className={`mx-auto aspect-square w-40 overflow-hidden rounded-full bg-sky-50 sm:w-44 ${member.imageHasFrame ? "border-0 shadow-none" : "border-4 border-[#0f6cbd] shadow-md"}`}>
      <img src={member.image} alt={`${member.name}, ${member.role}`} className={`h-full w-full object-center brightness-[1.03] contrast-[1.04] saturate-[1.03] ${member.imageHasFrame ? "object-contain" : "object-cover"}`} />
    </div>
    <div>
      <h2 className="text-2xl font-extrabold leading-tight text-[#0f5c99] sm:text-3xl">{member.name}</h2>
      <p className="text-lg font-medium leading-tight text-[#0f5c99] sm:text-xl">{member.role}</p>
      <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{member.bio}</p>
    </div>
  </article>
);

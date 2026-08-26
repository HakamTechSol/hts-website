import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { TeamCard } from "@/components/TeamCard";
import { teamMembers } from "@/data/teamData";

const teamOrder = ["Arbaz Ali", "Hunain Haider", "Sanawar Hussain Jaffri", "Mustufa Ali", "Talha Khan"];
const orderedTeamMembers = [...teamMembers].sort((a, b) => teamOrder.indexOf(a.name) - teamOrder.indexOf(b.name));

const Team = () => (
  <PageTransition>
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-white via-sky-50 to-blue-100/70 pb-12 pt-28 md:pb-16 md:pt-36">
        <div className="pointer-events-none absolute -left-20 top-12 h-72 w-72 animate-pulse rounded-full bg-sky-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 animate-pulse rounded-full bg-blue-400/20 blur-3xl [animation-delay:1.5s]" />
        <div className="pointer-events-none absolute inset-0 opacity-30 bg-[radial-gradient(#60a5fa_1px,transparent_1px)] [background-size:18px_18px]" />
        <div className="container relative mx-auto flex flex-col items-center px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0f6cbd]">HakamTechSol</span>
          <h1 className="mt-2 text-4xl font-extrabold text-[#0f5c99] sm:text-5xl">Our Team</h1>
          <div className="mt-3 h-1 w-28 bg-[#0f6cbd]" />
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">Meet the talented people behind our technology and digital solutions.</p>
        </div>
      </section>
      <section className="relative overflow-hidden bg-slate-50 px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="pointer-events-none absolute -left-24 top-12 h-96 w-96 rounded-full border-[52px] border-sky-100/70" />
        <div className="pointer-events-none absolute -right-36 bottom-8 h-80 w-80 rotate-45 border-[42px] border-sky-100/60" />
        <div className="container relative mx-auto max-w-5xl">
          <div className="space-y-8 sm:space-y-10">
            {orderedTeamMembers.map((member) => <TeamCard key={member.name} member={member} />)}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  </PageTransition>
);

export default Team;

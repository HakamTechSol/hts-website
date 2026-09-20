import { ArrowRight, Award, BrainCircuit, Cloud, Heart, Lightbulb, Rocket, Smartphone, UsersRound } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import SEO from "@/components/SEO";
import heroImage from "@/assets/team.jpg";

const stats = [
  { value: "100+", label: "Projects Delivered", icon: Rocket },
  { value: "15+", label: "Global Partners", icon: UsersRound },
  { value: "7+", label: "Years Experience", icon: Award },
  { value: "24/7", label: "Support Available", icon: Cloud },
];

const values = [
  { title: "Innovation", text: "We explore new technologies and practical ideas that create measurable value.", icon: Lightbulb },
  { title: "Practical Insight", text: "We share clear, useful knowledge teams can apply to real digital challenges.", icon: Heart },
  { title: "Excellence", text: "Every insight is grounded in quality engineering and thoughtful product decisions.", icon: Award },
  { title: "Collaboration", text: "We learn with our clients and partners to make technology work better together.", icon: UsersRound },
];

const Insights = () => (
  <PageTransition>
    <SEO
      title="Insights"
      description="Explore technical insights, company values, and digital innovation articles from HakamTechSol."
      canonicalUrl="https://hakamtechsol.com/insights"
    />
    <div className="min-h-screen overflow-hidden bg-white text-slate-800">
      <Navbar />

      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-white via-sky-50/70 to-blue-50 pt-28 md:pt-36">
        <div className="pointer-events-none absolute -bottom-36 -left-32 h-96 w-96 rounded-full border-[52px] border-sky-100/80" />
        <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 bg-[radial-gradient(#bfdbfe_1px,transparent_1px)] [background-size:12px_12px] opacity-50" />
        <div className="container relative mx-auto grid grid-cols-1 items-center gap-10 px-4 pb-14 sm:px-6 md:pb-20 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#0f6cbd]">Our Insights</span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-slate-950 sm:text-5xl">Ideas That Shape <span className="block text-[#146ee8]">Digital Innovation</span></h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-700 sm:text-lg">Discover the latest technology insights, emerging development trends, innovative digital solutions, and proven transformation strategies designed to help businesses stay ahead in a rapidly evolving digital landscape. Explore practical ideas, industry perspectives, and actionable guidance on modern technologies, software development, automation, AI, cloud solutions, and digital experiences that can improve efficiency, strengthen customer engagement, and drive sustainable business growth.</p>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="overflow-hidden rounded-[28px] border border-sky-100 bg-white p-2 shadow-2xl"><img src={heroImage} alt="HakamTechSol team collaborating on technology solutions" className="h-[300px] w-full rounded-3xl object-cover sm:h-[390px]" /></div>
            <div className="absolute -bottom-4 -right-2 w-36 rounded-2xl border border-slate-100 bg-white p-4 text-center shadow-xl sm:-right-10 sm:w-40 sm:p-5"><div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-[#146ee8]"><BrainCircuit size={28} /></div><p className="mt-3 text-xs font-medium text-slate-600">Latest</p><p className="text-sm font-extrabold text-[#146ee8]">Insights</p></div>
          </div>
        </div>
      </section>

      <section id="insight-focus" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#0f6cbd]">Our Perspective</span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl">Building Smarter Digital Solutions <span className="text-[#146ee8]">for Modern Businesses</span></h2>
            <div className="mt-5 h-1 w-10 bg-[#146ee8]" />
            <p className="mt-6 text-sm leading-relaxed text-slate-700 sm:text-base">Technology delivers its strongest results when it connects real business goals with experiences people enjoy using. Our insights explore how teams can make that connection with confidence.</p>
            <p className="mt-5 text-sm leading-relaxed text-slate-700 sm:text-base">From product strategy and web development to AI automation and cloud delivery, we break down the decisions that help businesses become more efficient, resilient, and ready to grow.</p>
            <p className="mt-5 text-sm leading-relaxed text-slate-700 sm:text-base">We share ideas shaped by real-world product work, so every article offers a practical perspective for the next stage of your digital journey.</p>
          </div>
          <div className="space-y-5">
            <div className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-7 pl-28 shadow-lg"><div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-b from-[#1876ef] to-[#0f54c8]" /><div className="absolute left-10 top-1/2 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-[#146ee8] text-white shadow-lg"><BrainCircuit size={28} /></div><h3 className="text-2xl font-extrabold text-slate-950">Technology Trends</h3><p className="mt-2 text-sm leading-relaxed text-slate-700">Explore practical perspectives on AI, software development, cloud platforms, and the technologies influencing modern business.</p></div>
            <div className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-7 pl-28 shadow-lg"><div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-b from-[#1876ef] to-[#0f54c8]" /><div className="absolute left-10 top-1/2 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-[#146ee8] text-white shadow-lg"><Lightbulb size={28} /></div><h3 className="text-2xl font-extrabold text-slate-950">Actionable Strategies</h3><p className="mt-2 text-sm leading-relaxed text-slate-700">Clear guidance for turning new digital possibilities into useful products, better workflows, and sustainable business growth.</p></div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8"><div className="container mx-auto grid max-w-6xl grid-cols-2 overflow-hidden rounded-3xl bg-gradient-to-r from-[#0c418b] via-[#146ee8] to-[#0c5ac6] text-white shadow-xl md:grid-cols-4">{stats.map(({ value, label, icon: Icon }, index) => <div key={label} className={`p-6 text-center sm:p-8 ${index ? "md:border-l md:border-white/25" : ""}`}><Icon className="mx-auto text-sky-100" size={28} /><div className="mt-3 text-3xl font-extrabold">{value}</div><div className="mt-1 text-xs font-semibold text-sky-100">{label}</div></div>)}</div></section>

      <section className="border-t border-slate-100 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8"><div className="container mx-auto max-w-6xl"><div className="text-center"><span className="text-xs font-extrabold uppercase tracking-wider text-[#0f6cbd]">Our Values</span><h2 className="mt-2 text-3xl font-extrabold text-slate-950 sm:text-4xl">What Drives Our Insights</h2></div><div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">{values.map(({ title, text, icon: Icon }) => <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg"><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sky-50 text-[#146ee8]"><Icon size={28} /></div><h3 className="mt-5 text-lg font-extrabold text-slate-950">{title}</h3><div className="mx-auto mt-2 h-0.5 w-6 bg-[#146ee8]" /><p className="mt-4 text-sm leading-relaxed text-slate-600">{text}</p></div>)}</div></div></section>

      <section className="px-4 py-12 sm:px-6 lg:px-8"><div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 rounded-3xl border border-sky-100 bg-gradient-to-r from-sky-100 via-white to-blue-100 px-7 py-7 shadow-sm md:flex-row"><div className="flex items-center gap-5"><div className="hidden h-16 w-16 items-center justify-center rounded-full bg-[#146ee8] text-white sm:flex"><Rocket size={30} /></div><div><h2 className="text-2xl font-extrabold text-slate-950">Stay Ahead With Our Latest Insights</h2><p className="mt-1 max-w-xl text-sm text-slate-700">Discover ideas that help you plan, build, and grow your digital products with clarity.</p></div></div><a href="/quote" className="inline-flex shrink-0 items-center gap-3 rounded-lg bg-[#146ee8] px-7 py-3.5 text-sm font-extrabold text-white shadow-md hover:bg-blue-700">Get A Quote <ArrowRight size={17} /></a></div></section>
      <Footer />
    </div>
  </PageTransition>
);

export default Insights;

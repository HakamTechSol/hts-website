import Footer from "@/components/Footer";
import { FaqSection } from "@/components/FaqSection";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import SEO from "@/components/SEO";

const Faq = () => (
  <PageTransition>
    <SEO
      title="FAQ"
      description="Frequently Asked Questions about HakamTechSol services, processes, and tech solutions."
      canonicalUrl="https://hakamtechsol.com/faq"
    />
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main>
        <section className="bg-gradient-to-br from-[#0f6cbd] via-sky-600 to-blue-800 px-4 pb-16 pt-32 text-center text-white sm:px-6 md:pt-36 lg:px-8">
          <div className="container mx-auto max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-200">HakamTechSol</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Frequently Asked Questions</h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-sky-50 sm:text-base">
              Find answers to common questions about our process, project delivery, security, and ongoing support.
            </p>
          </div>
        </section>
        <FaqSection />
      </main>
      <Footer />
    </div>
  </PageTransition>
);

export default Faq;

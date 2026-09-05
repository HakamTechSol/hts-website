import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Users, Award, Lightbulb, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import SEO from "@/components/SEO";
import teamImage from "@/assets/team.jpg";
import heroImage from "@/assets/hero-tech.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const values = [
  { icon: Lightbulb, title: "Innovation", description: "We embrace new technologies and creative solutions to stay ahead of the curve." },
  { icon: Heart, title: "Passion", description: "We pour our heart into every project, treating your success as our own." },
  { icon: Award, title: "Excellence", description: "We strive for perfection in every line of code and pixel of design." },
  { icon: Users, title: "Collaboration", description: "We work closely with our clients, fostering transparent partnerships." },
];

const stats = [
  { number: "100+", label: "Projects Completed" },
  { number: "50+", label: "Happy Clients" },
  { number: "5+", label: "Years Experience" },
  { number: "24/7", label: "Support Available" },
];

const About = () => {
  return (
    <PageTransition>
      <SEO 
        title="About Us - Custom Software Development Company"
        description="Learn about HakamTechSol - a leading custom software development company with 100+ projects delivered, 5+ years of experience, and expertise in web development, mobile app development, and digital transformation."
        keywords="software development company, about HakamTechSol, custom software development team, web development agency, mobile app development company, digital transformation services, technology consulting"
        canonicalUrl="https://hakamtechsol.com/about"
      />
      <div className="min-h-screen bg-white text-slate-700">
        <Navbar />
        {/* Animated Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-r from-[#0f6cbd] via-[#3b82f6] to-[#60a5fa]">
          <motion.div
            className="absolute inset-0"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
            >
              The Story Behind <span className="text-[#0f6cbd]">HakamTechSol</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-white max-w-2xl mx-auto"
            >
              We are a passionate team of developers and innovators dedicated to transforming businesses through technology.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-8">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-[#0f6cbd] hover:bg-slate-100 font-bold">
                  Get In Touch <ArrowRight size={18} className="inline-block ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-10 lg:py-12">
          <div className="container mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative lg:pl-16"
              >
                <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
                  <img src={teamImage} alt="HakamTechSol Team" className="h-full w-full object-cover" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-sm font-medium uppercase tracking-wider text-[#0f6cbd]">Our Story</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mt-4 mb-6">Building Dreams, One Line of Code at a Time</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    HakamTechSol was founded with a simple yet powerful vision: to bridge the gap between cutting‑edge technology and real‑world business needs.
                  </p>
                  <p>
                    Our journey has been fueled by an unwavering commitment to excellence and a deep understanding that every business is unique. We craft digital experiences that drive growth, enhance efficiency, and create lasting value.
                  </p>
                  <p>
                    Today, we continue to push the boundaries of what’s possible, embracing new technologies while staying true to our core values of innovation, quality, and client success.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-10 lg:py-15 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 lg:p-8 shadow-card max-w-md mx-auto"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#0f6cbd] flex items-center justify-center mb-6">
                  <Target className="text-white" size={32} />
                </div>
                <h3 className="mb-4 text-2xl font-display font-bold text-slate-900 lg:text-3xl">Our Mission</h3>
                <p className="font-semibold leading-relaxed text-slate-600">
                  To empower businesses with innovative technology solutions that transform challenges into opportunities, enabling our clients to achieve their goals and stay ahead in an ever‑evolving digital landscape.
                </p>
              </motion.div>
              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="bg-card rounded-2xl p-6 lg:p-8 shadow-card max-w-md mx-auto"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/20">
                  <Eye className="text-sky-600" size={24} />
                </div>
                <h3 className="mb-4 text-2xl font-display font-bold text-slate-900 lg:text-3xl">Our Vision</h3>
                <p className="font-semibold leading-relaxed text-slate-600">
                  To be a global leader in technology innovation, recognized for turning visionary ideas into reality and making digital transformation accessible to organizations of all sizes.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-10 lg:py-15 bg-hero-gradient text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl lg:text-5xl font-display font-bold mb-2">{stat.number}</div>
                  <div className="text-primary-foreground/70 text-sm lg:text-base">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-15 lg:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-accent font-medium text-sm uppercase tracking-wider">Our Values</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-4">What Drives Us Forward</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-[24px] border border-slate-200 bg-white p-6 text-center shadow-[0_16px_50px_rgba(15,23,42,0.08)]"
                >
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
                    <value.icon className="text-[#0f6cbd]" size={32} />
                  </div>
                  <h3 className="mb-3 text-xl font-display font-semibold text-slate-900">{value.title}</h3>
                  <p className="text-sm font-medium text-slate-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-32 bg-secondary/50">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to Join Our Journey?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Let's work together to bring your ideas to life. Contact us today and discover how HakamTechSol can transform your business.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-hero-gradient hover:opacity-90 hover:scale-105 transition-all gap-2">
                  Get In Touch <ArrowRight size={18} />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight, Car, Cross, Clock3, GraduationCap, ShoppingCart, Building2, Landmark, Truck, Trophy, Plane, Clapperboard, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import builtToWinImage from "@/assets/built-to-win-phones-transparent.png";
import technologiesDropdownImage from "@/assets/technologies-dropdown.png";

const servicesMegaMenu = [
  {
    category: "Mobile App Development",
    items: ["iOS App Development", "Android App Development", "Cross Platform App Development"],
  },
  {
    category: "Custom Software Development",
    items: ["ERP Solution", "CRM Solution", "Business Workflow Software"],
  },
  {
    category: "CMS Development",
    items: ["Custom CMS Solutions", "Content Workflows", "CMS Migration"],
  },
  {
    category: "Web Development",
    items: ["Ecommerce Website Development", "Web Portals", "ERP & HRMS Development"],
  },
  {
    category: "Game Development",
    items: ["2D Game Development", "3D Game Development", "Web3 Game Development"],
  },
  {
    category: "AI & Automations",
    items: ["Generative AI", "Natural Language Processing", "AI Agent Development"],
  },
  {
    category: "Staff Augmentation",
    items: ["Hire Android App Developer", "Hire iOS App Developer", "Hire NodeJs Developer"],
  },
  {
    category: "Blockchain Development",
    items: ["Metaverse Development", "NFT Development"],
  },
  {
    category: "Digital Marketing Services",
    items: ["Graphic Designing", "Social Media Marketing", "Search Engine Optimization"],
  },
];

const industriesMegaMenu = [
  { title: "Automotive", desc: "Transforming automotive industry with bespoke tech.", icon: Car },
  { title: "Healthcare", desc: "Better, accessible healthcare through tailored tech solutions.", icon: Cross },
  { title: "Education", desc: "Enhancing education with new-age EdTech.", icon: GraduationCap },
  { title: "Sports Analytics", desc: "Turning player and team data into actionable performance insights.", icon: Trophy },
  { title: "ECommerce & Retail", desc: "Driving online growth with reliable commerce solutions.", icon: ShoppingCart },
  { title: "Real Estate", desc: "Innovating real estate with custom tech.", icon: Building2 },
  { title: "Fintech", desc: "Empowering fintech with specialized tech services.", icon: Landmark },
  { title: "Logistics", desc: "Optimizing logistics with intelligent tech.", icon: Truck },
  { title: "Travel & Hospitality", desc: "Creating connected experiences for travel and hospitality businesses.", icon: Plane },
  { title: "Media & Entertainment", desc: "Building engaging digital platforms for media and entertainment.", icon: Clapperboard },
  { title: "Manufacturing", desc: "Streamlining operations with practical manufacturing technology.", icon: Factory },
  { title: "On-Demand", desc: "Elevating on-demand services with innovative tech.", icon: Clock3 },
];

const technologiesMegaMenu = [
  { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React JS", "TypeScript", "Next JS", "Vue JS",  "Angular JS" ,"Solid JS", "Tailwind CSS", "Bootstrap", "Vite" , "EcmaScript" ,"MaterialUI" , "VBScript" , "JQuery" ,"AJAX" , "Three JS" ] },
  { category: "Backend", items: ["Node JS", "Python", "Laravel","CodeIgniter", "PHP", ".NET", "C#", "C++" , "Go", "Ruby", "Express JS", "Nest JS", "Django", "Spring Boot", "FastAPI", "Supabase", "Oracle" , "SQL" , "MySQL" , "MongoDB" , "Docker" , ] },
  { category: "Mobile Development", items: ["React Native", "Flutter", "Dart", "Android", "iOS", "Kotlin", "Swift", "Java", "Android Studio", "Xcode", "Ionic", "Expo", "Firebase" ,"Xamarin" ,  "Unity3D" , "Cordova" , "Objective C"] },
  { category: "Marketing", items: [ "Meta Ads" , "On-Page Optimization" , "Off-Page Optimization" , "Google Ads" , "Email Marketing"  , ]  },
  { category: "Graphics", items: ["Adobe Photoshop", "Adobe Illustrator", "Adobe After Effects", "Adobe Premiere Pro", "Figma", "Sketch", "Canva", "Blender", "CorelDRAW", "SVG", "HTML5 Canvas",    ] },
];

const CMS = ["WordPress", "Shopify", "Webflow", "Wix", "Drupal", "Joomla", "Strapi",  "Magento" , "Cake PHP" ];

const portfolioItems = [
  { id: "kls-property-portal", name: "KLS Property Portal", category: "Laravel / PHP" },
  { id: "parking-alert-app", name: "Parking Alert App", category: "FlutterFlow" },
  { id: "players-evaluation-system", name: "Players Evaluation System", category: "SaaS Analytics" },
  { id: "learning-management-system", name: "Learning Management System", category: "EdTech App" },
  { id: "hospital-management-system", name: "Hospital Management System", category: "Healthcare PHP" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"services" | "industries" | "technology" | "portfolio" | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (value) => setIsScrolled(value > 24));

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    if (!activeDropdown) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeDropdown]);

  return (
    <>
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled ? "bg-white/95 backdrop-blur-md border-slate-200 shadow-sm" : "bg-white border-slate-150"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 lg:h-20 items-center justify-between">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="HakamTechSol Logo" className="h-9 sm:h-11 w-auto object-contain" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              <Link
                to="/"
                className={`text-sm font-semibold transition-colors ${
                  location.pathname === "/" ? "text-[#0f6cbd]" : "text-slate-800 hover:text-[#0f6cbd]"
                }`}
              >
                Home
              </Link>

              {/* Services Dropdown Button */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => setActiveDropdown(activeDropdown === "services" ? null : "services")}
                  className={`flex items-center gap-1 text-sm font-semibold transition-colors py-2 ${
                    activeDropdown === "services" || location.pathname === "/services"
                      ? "text-[#0f6cbd]"
                      : "text-slate-800 hover:text-[#0f6cbd]"
                  }`}
                >
                  Services
                  <ChevronDown size={15} className={`transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180 text-[#0f6cbd]" : ""}`} />
                </button>
              </div>

              {/* Industries Dropdown Button */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("industries")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => setActiveDropdown(activeDropdown === "industries" ? null : "industries")}
                  className={`flex items-center gap-1 text-sm font-semibold transition-colors py-2 ${
                    activeDropdown === "industries" ? "text-[#0f6cbd]" : "text-slate-800 hover:text-[#0f6cbd]"
                  }`}
                >
                  Industries
                  <ChevronDown size={15} className={`transition-transform duration-200 ${activeDropdown === "industries" ? "rotate-180 text-[#0f6cbd]" : ""}`} />
                </button>
              </div>

              {/* Technologies Dropdown Button */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("technology")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => setActiveDropdown(activeDropdown === "technology" ? null : "technology")}
                  className={`flex items-center gap-1 text-sm font-semibold transition-colors py-2 ${
                    activeDropdown === "technology" ? "text-[#0f6cbd]" : "text-slate-800 hover:text-[#0f6cbd]"
                  }`}
                >
                  Tools &amp; Technologies
                  <ChevronDown size={15} className={`transition-transform duration-200 ${activeDropdown === "technology" ? "rotate-180 text-[#0f6cbd]" : ""}`} />
                </button>
              </div>

              <Link
                to="/insights"
                className={`text-sm font-semibold transition-colors ${location.pathname === "/insights" ? "text-[#0f6cbd]" : "text-slate-800 hover:text-[#0f6cbd]"}`}
              >
                Insights
              </Link>

              {/* Portfolio Link & Hover Menu */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown(null)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to="/portfolio"
                  className={`text-sm font-semibold transition-colors py-2 ${
                    location.pathname.startsWith("/portfolio") ? "text-[#0f6cbd]" : "text-slate-800 hover:text-[#0f6cbd]"
                  }`}
                >
                  Portfolio
                </Link>

                <AnimatePresence>
                  {activeDropdown === "portfolio" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute right-0 top-full mt-2 w-[340px] rounded-2xl border border-slate-200 bg-white p-4 shadow-xl z-50"
                    >
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2 px-2">Featured Case Studies</p>
                      <div className="space-y-1">
                        {portfolioItems.map((item) => (
                          <Link
                            key={item.id}
                            to={`/portfolio/${item.id}`}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center justify-between rounded-xl p-2.5 hover:bg-sky-50 transition-colors group"
                          >
                            <div>
                              <div className="text-sm font-bold text-slate-800 group-hover:text-[#0f6cbd]">{item.name}</div>
                              <div className="text-xs text-slate-500">{item.category}</div>
                            </div>
                            <ArrowRight size={14} className="text-slate-400 group-hover:text-[#0f6cbd]" />
                          </Link>
                        ))}
                      </div>
                      <div className="mt-3 pt-3 border-t border-slate-100 text-right">
                        <Link
                          to="/portfolio"
                          onClick={() => setActiveDropdown(null)}
                          className="text-xs font-bold text-[#0f6cbd] hover:underline"
                        >
                          View All Projects →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/team" className={`text-sm font-semibold transition-colors ${location.pathname === "/team" ? "text-[#0f6cbd]" : "text-slate-800 hover:text-[#0f6cbd]"}`}>
                Team
              </Link>
            </div>

            {/* Right GET A QUOTE CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link to="/quote">
                <Button className="bg-[#0f6cbd] hover:bg-blue-700 text-white font-extrabold px-7 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all text-sm tracking-wide">
                  GET A QUOTE
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden rounded-xl border border-slate-200 p-2.5 text-slate-800 shadow-sm transition-all hover:bg-sky-50 hover:text-[#0f6cbd] active:scale-95"
              aria-label="Toggle Navigation"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Services Mega Menu Overlay */}
      <AnimatePresence>
        {activeDropdown === "services" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
            className="fixed left-0 right-0 top-[4rem] z-40 border-b border-slate-200 bg-white shadow-2xl lg:top-[5rem]"
          >
            <div className="container mx-auto px-6 py-8 lg:py-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Side Highlight Box */}
                <div className="flex min-h-[430px] flex-col rounded-3xl border border-slate-200/80 bg-slate-50 p-8 lg:col-span-3 lg:p-9">
                  <div className="space-y-3">
                    <h3 className="max-w-[240px] text-3xl font-extrabold leading-tight text-slate-900">Developed to Perform</h3>
                    <p className="max-w-[300px] text-sm leading-relaxed text-slate-600 sm:text-base">
                      Transforming business with our future-ready tech solutions. Get custom products for accelerated digital transformation across industries globally.
                    </p>
                  </div>
                  
                  {/* Product Visual */}
                  <div className="mt-auto flex justify-center pt-8">
                    <div className="flex h-48 w-full items-center justify-center overflow-hidden rounded-2xl sm:h-56 lg:h-52">
                      <img
                        src={builtToWinImage}
                        alt="Mobile dashboard and digital wallet applications"
                        className="h-full w-full object-contain object-center"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Columns Grid */}
                <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6">
                  {servicesMegaMenu.map((group) => (
                    <div key={group.category} className="space-y-2 border-b sm:border-b-0 border-slate-100 pb-4 sm:pb-0">
                      <h4 className="text-sm font-extrabold text-slate-900 tracking-tight">
                        {group.category}
                      </h4>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {group.items.map((item) => (
                          <li key={item}>
                            <Link
                              to="/services"
                              onClick={() => setActiveDropdown(null)}
                              className="inline-flex items-center gap-1.5 hover:text-[#0f6cbd] transition-colors group"
                            >
                              <span className="text-slate-400 group-hover:text-[#0f6cbd]">›</span>
                              <span>{item}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      {group.category === "CMS" && (
                        <div className="space-y-1.5 pt-4">
                          <h4 className="text-sm font-extrabold tracking-tight text-slate-900">Marketing</h4>
                          <ul className="space-y-1.5 text-xs text-slate-600">
                            {CMS.map((item) => (
                              <li key={item}>
                                <Link to="/services" onClick={() => setActiveDropdown(null)} className="inline-flex items-center gap-1.5 text-left transition-colors hover:text-[#0f6cbd] group">
                                  <span className="text-slate-400 transition-colors group-hover:text-[#0f6cbd]">â€º</span>
                                  <span>{item}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Industries Mega Menu Overlay */}
      <AnimatePresence>
        {activeDropdown === "industries" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onMouseEnter={() => setActiveDropdown("industries")}
            onMouseLeave={() => setActiveDropdown(null)}
            className="fixed left-0 right-0 top-[4rem] z-40 border-b border-slate-200 bg-white shadow-2xl lg:top-[5rem]"
          >
            <div className="container mx-auto px-6 py-8 lg:py-10">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                <div className="flex min-h-[430px] flex-col rounded-3xl border border-slate-200/80 bg-slate-50 p-8 lg:col-span-3 lg:p-9">
                  <div className="space-y-3">
                    <h3 className="max-w-[250px] text-3xl font-extrabold leading-tight text-slate-900">Industries We Transform</h3>
                    <p className="max-w-[300px] text-sm leading-relaxed text-slate-600 sm:text-base">
                      We create tailored technology solutions that help ambitious businesses innovate, operate smarter, and grow with confidence.
                    </p>
                  </div>
                  <div className="mt-auto flex justify-center pt-8">
                    <div className="flex h-48 w-full items-center justify-center overflow-hidden rounded-2xl sm:h-56 lg:h-52">
                      <img
                        src={builtToWinImage}
                        alt="Mobile dashboard and digital wallet applications"
                        className="h-full w-full object-contain object-center"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:col-span-9">
                  {industriesMegaMenu.map((ind) => {
                    const Icon = ind.icon;
                    return (
                    <div key={ind.title} className="space-y-1">
                      <Link
                        to="/services"
                        onClick={() => setActiveDropdown(null)}
                        className="flex items-center gap-2 text-sm font-extrabold text-slate-900 hover:text-[#0f6cbd] transition-colors"
                      >
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-100 text-[#0f6cbd]"><Icon size={15} /></span>
                        {ind.title}
                      </Link>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {ind.desc}
                      </p>
                    </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Technologies Mega Menu Overlay */}
      <AnimatePresence>
        {activeDropdown === "technology" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onMouseEnter={() => setActiveDropdown("technology")}
            onMouseLeave={() => setActiveDropdown(null)}
            className="fixed left-0 right-0 top-[4rem] z-40 max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-slate-200 bg-white shadow-2xl lg:top-[5rem] lg:max-h-[calc(100vh-5rem)]"
          >
            <div className="container mx-auto px-6 py-8 lg:py-10">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                <div className="flex min-h-[430px] flex-col rounded-3xl border border-slate-200/80 bg-slate-50 p-8 lg:col-span-3 lg:p-9">
                  <div className="space-y-3">
                    <h3 className="max-w-[250px] text-3xl font-extrabold leading-tight text-slate-900">Tools &amp; Technologies</h3>
                  </div>
                  <div className="mt-[28px] flex justify-center">
                    <div className="flex h-48 w-full items-center justify-center overflow-hidden rounded-2xl bg-slate-950 sm:h-56 lg:h-52">
                      <img
                        src={technologiesDropdownImage}
                        alt="Technology solutions for web, mobile, backend, and commerce development"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 lg:col-span-9 lg:grid-cols-5">
                  {technologiesMegaMenu.map((group) => (
                    <div key={group.category} className="space-y-2 border-b border-slate-100 pb-4 sm:border-b-0 sm:pb-0">
                      <h4 className="text-sm font-extrabold tracking-tight text-slate-900">{group.category}</h4>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {group.items.map((item) => (
                          <li key={item}>
                            <Link
                              to="/services"
                              onClick={() => setActiveDropdown(null)}
                              className="inline-flex items-center gap-1.5 text-left transition-colors hover:text-[#0f6cbd] group"
                            >
                              <span className="text-slate-400 transition-colors group-hover:text-[#0f6cbd]">›</span>
                              <span>{item}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      {group.category === "Marketing" && (
                        <div className="space-y-1.5 pt-4">
                          <h4 className="text-sm font-extrabold tracking-tight text-slate-900">CMS</h4>
                          <ul className="space-y-1.5 text-xs text-slate-600">
                            {CMS.map((item) => (
                              <li key={item}>
                              <Link to="/services" onClick={() => setActiveDropdown(null)} className="inline-flex items-center gap-1.5 text-left transition-colors hover:text-[#0f6cbd] group">
                                <span className="text-slate-400 transition-colors group-hover:text-[#0f6cbd]">›</span>
                                <span>{item}</span>
                              </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
          <motion.button
            type="button"
            aria-label="Close navigation menu"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-slate-950/30 backdrop-blur-[1px] lg:hidden"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 240, damping: 25 }}
            className="fixed inset-y-0 right-0 top-16 z-50 w-[88vw] max-w-sm overflow-y-auto border-l border-slate-200 bg-white p-5 shadow-2xl lg:hidden sm:p-6"
          >
            <div className="flex flex-col gap-2">
              <Link to="/" onClick={() => setIsOpen(false)} className="text-base font-bold text-slate-800 hover:text-[#0f6cbd] py-2 border-b border-slate-100">
                Home
              </Link>
              <Link to="/services" onClick={() => setIsOpen(false)} className="text-base font-bold text-slate-800 hover:text-[#0f6cbd] py-2 border-b border-slate-100">
                Services
              </Link>
              <Link to="/portfolio" onClick={() => setIsOpen(false)} className="text-base font-bold text-slate-800 hover:text-[#0f6cbd] py-2 border-b border-slate-100">
                Portfolio
              </Link>
              <Link to="/team" onClick={() => setIsOpen(false)} className="text-base font-bold text-slate-800 hover:text-[#0f6cbd] py-2 border-b border-slate-100">
                Team
              </Link>
              <Link to="/insights" onClick={() => setIsOpen(false)} className="text-base font-bold text-slate-800 hover:text-[#0f6cbd] py-2 border-b border-slate-100">
                Insights
              </Link>
              <Link to="/quote" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-[#0f6cbd] hover:bg-blue-700 text-white font-extrabold mt-4 py-3 rounded-full shadow-md">
                  GET A QUOTE
                </Button>
              </Link>
            </div>
          </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <img src={logo} alt="HakamTechSol Logo" className="h-12 w-auto bg-white/90 p-1.5 rounded-xl shadow-md sm:h-14" />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Digitalizing your businesses with innovative, high-growth technology solutions. Custom web portals, mobile applications, and AI platforms tailored for global success.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/profile.php?id=100069162042893"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#f97316] hover:border-[#f97316] transition-all"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/hakamtechsolofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#f97316] hover:border-[#f97316] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.instagram.com/hakamtechsol/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#f97316] hover:border-[#f97316] transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><Link to="/" className="hover:text-[#f97316] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#f97316] transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-[#f97316] transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-[#f97316] transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-[#f97316] transition-colors">Contact Us</Link></li>
              <li><Link to="/quote" className="hover:text-[#f97316] transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider mb-4">Solutions</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><Link to="/services" className="hover:text-[#f97316] transition-colors">Mobile App Development</Link></li>
              <li><Link to="/services" className="hover:text-[#f97316] transition-colors">Custom ERP & Software</Link></li>
              <li><Link to="/services" className="hover:text-[#f97316] transition-colors">Web Development & Portals</Link></li>
              <li><Link to="/services" className="hover:text-[#f97316] transition-colors">AI & Automations</Link></li>
              <li><Link to="/services" className="hover:text-[#f97316] transition-colors">Cloud & Staff Augmentation</Link></li>
              <li><Link to="/services" className="hover:text-[#f97316] transition-colors">Graphic Designing</Link></li>
              <li><Link to="/services" className="hover:text-[#f97316] transition-colors">Social Media Marketing</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider mb-4">Contact Us</h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="text-[#f97316] shrink-0 mt-0.5" />
                <a href="mailto:alhakamsofts@gmail.com" className="break-all hover:text-white transition-colors">alhakamsofts@gmail.com</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="text-[#f97316] shrink-0 mt-0.5" />
                <a href="mailto:info@hakamtechsol.com" className="break-all hover:text-white transition-colors">info@hakamtechsol.com</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="text-[#f97316] shrink-0 mt-0.5" />
                <span>+92 309 2271214<br />+92 320 123 5249</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#f97316] shrink-0 mt-0.5" />
                <span>Karachi IT Park, Rashid Minhas Road, Gulshan-e-Jamal.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} HakamTechSol. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

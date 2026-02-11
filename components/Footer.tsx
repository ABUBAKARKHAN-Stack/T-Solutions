import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { footerLinks, footerServices } from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <span className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
              T<span className="text-accent">-</span>Solutions
            </span>
            <p className="text-foreground/50 mt-4 leading-relaxed max-w-sm text-sm">
              Building high-performance digital products with full stack development, cloud solutions, DevOps, and AI. We turn your ideas into scalable reality.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-xs uppercase tracking-[0.2em] text-foreground/40 mb-6">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-foreground/60 hover:text-accent transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold text-xs uppercase tracking-[0.2em] text-foreground/40 mb-6">Services</h4>
            <ul className="space-y-3">
              {footerServices.map((s) => (
                <li key={s}>
                  <span className="text-sm text-foreground/60">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold text-xs uppercase tracking-[0.2em] text-foreground/40 mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-foreground/60">
                <div className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center shrink-0">
                  <Mail className="h-3.5 w-3.5" />
                </div>
                hello@t-solutions.com
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground/60">
                <div className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center shrink-0">
                  <Phone className="h-3.5 w-3.5" />
                </div>
                +1 (555) 123-4567
              </li>
              <li className="flex items-start gap-3 text-sm text-foreground/60">
                <div className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="h-3.5 w-3.5" />
                </div>
                123 Green Street, Suite 100
                <br />
                Portland, OR 97201
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-foreground/10 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-foreground/30">© {new Date().getFullYear()} T-Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs text-foreground/30 hover:text-foreground/60 transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-xs text-foreground/30 hover:text-foreground/60 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

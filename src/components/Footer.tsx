import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-navy py-12 text-slate-300">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/custom-logo.svg" alt="Seven Billion's Data Engine" className="h-8 w-auto" />
            </div>
            <p className="font-body text-slate-400 text-sm leading-relaxed max-w-xs">
              FMCG Decision Intelligence implementation partner. Single source of truth in 90–120 days.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white text-base mb-4 tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#case-studies" className="font-body text-sm text-slate-400 hover:text-teal-400 transition-colors">Case Studies</a></li>
              <li><a href="#why-us" className="font-body text-sm text-slate-400 hover:text-teal-400 transition-colors">Why Us</a></li>
              <li><Link to="/apply" className="font-body text-sm text-slate-400 hover:text-teal-400 transition-colors">Book 1:1 strategy call</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white text-base mb-4 tracking-wide">Ready to get started?</h4>
            <p className="font-body text-slate-400 text-sm mb-6">Claim your free 45-minute FMCG Decision Engine™ strategy session.</p>
            <Link
              to="/apply"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-body text-sm font-bold hover:scale-105 transition-all shadow-lg"
            >
              Book 1:1 strategy call
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="font-body text-slate-500 text-xs">© 2024 Seven Billion's Data Engine. All rights reserved.</p>
          <p className="font-body text-slate-500 text-xs font-medium">FMCG Decision Intelligence · Built for Indian Enterprise</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

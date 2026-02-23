import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-xl shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex items-center gap-2">
            <img src="/custom-logo.svg" alt="Seven Billion's Data Engine" className="h-8 w-auto" />
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          <a href="/#case-studies" className="font-body text-sm font-medium text-gray-600 hover:text-navy transition-colors">Case Studies</a>
          <a href="/#why-us" className="font-body text-sm font-medium text-gray-600 hover:text-navy transition-colors">Why Us</a>
          <Link
            to="/apply"
            className="inline-flex items-center px-6 py-2.5 rounded-full bg-primary text-white font-body text-sm font-semibold hover:scale-[1.02] transition-all duration-300 shadow-sm hover:shadow"
          >
            Book Free Strategy Call
          </Link>
        </nav>

        <button
          className="md:hidden text-navy hover:text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-xl px-6 py-6 flex flex-col gap-5 shadow-lg">
          <a href="/#case-studies" className="font-body text-base font-medium text-gray-700 hover:text-primary" onClick={() => setMobileOpen(false)}>Case Studies</a>
          <a href="/#why-us" className="font-body text-base font-medium text-gray-700 hover:text-primary" onClick={() => setMobileOpen(false)}>Why Us</a>
          <Link
            to="/apply"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-primary text-white font-body text-base font-bold mt-2 shadow-sm"
            onClick={() => setMobileOpen(false)}
          >
            Book Free Strategy Call
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;

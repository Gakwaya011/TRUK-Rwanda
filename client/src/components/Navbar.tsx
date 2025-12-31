import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// IMPORT BOTH LOGOS
import logoDark from "../assets/Logo-01.png";   // Your existing Black Text Logo
import logoLight from "../assets/logo-white.png"; // NEW: You need to create this (White Text Logo)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // --- DYNAMIC STYLES ---

  const navContainerStyle = isHome && !scrolled
    ? "bg-black/30 backdrop-blur-md border-white/10 shadow-lg"
    : "bg-white shadow-2xl border-white/20";

  const textColor = isHome && !scrolled
    ? "text-white hover:text-[#FAD201]"
    : "text-gray-800 hover:text-trukGreen";

  const chevronColor = isHome && !scrolled ? "text-white" : "text-gray-600";

  // LOGIC TO SWAP THE IMAGE SOURCE
  // If we are on top (Transparent), use the WHITE logo.
  // If we scroll down (White BG), use the DARK logo.
  const currentLogo = isHome && !scrolled ? logoLight : logoDark;

  const serviceLinks = [
    { name: "Refrigerated Transport", path: "/services/transport" },
    { name: "Cold Storage", path: "/services/storage" },
    { name: "Logistics Solutions", path: "/services/logistics" },
    { name: "Cross-Border Trade", path: "/services/cross-border" },
  ];

  return (
    <header className="fixed left-0 right-0 mx-auto top-4 z-50 max-w-[1200px] px-4 sm:px-6 lg:px-8 font-sans">
      
      <div className={`px-6 py-3 flex items-center justify-between rounded-2xl transition-all duration-500 ease-in-out ${navContainerStyle}`}>
        
        {/* LOGO IMAGE SWAPPER */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={currentLogo} // Uses the variable we defined above
            alt="TRUK Logo"
            className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300" 
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`text-[13px] font-bold uppercase tracking-wide transition ${textColor}`}>
            Home
          </Link>
          <Link to="/about" className={`text-[13px] font-bold uppercase tracking-wide transition ${textColor}`}>
            About Us
          </Link>
          <Link to="/blog" className={`text-[13px] font-bold uppercase tracking-wide transition ${textColor}`}>
            News
          </Link>

          <div 
            className="relative group h-full flex items-center py-2"
            onMouseEnter={() => setServiceDropdown(true)}
            onMouseLeave={() => setServiceDropdown(false)}
          >
            <Link 
              to="/services" 
              className={`flex items-center gap-1 text-[13px] font-bold uppercase tracking-wide transition cursor-pointer ${textColor}`}
            >
              Our Services
              <ChevronDown size={14} className={`transition-transform duration-300 ${chevronColor} ${serviceDropdown ? 'rotate-180' : ''}`} />
            </Link>

            <AnimatePresence>
              {serviceDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full -left-4 w-64 pt-4"
                >
                  <div className="bg-white shadow-2xl rounded-xl border-t-4 border-trukGreen overflow-hidden ring-1 ring-black/5">
                    <div className="py-2">
                      {serviceLinks.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-6 py-3 text-sm font-bold text-gray-600 hover:bg-gray-50 hover:text-trukGreen transition border-b border-gray-50 last:border-none"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/careers" className={`text-[13px] font-bold uppercase tracking-wide transition ${textColor}`}>
            Careers
          </Link>
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden md:block px-5 py-2.5 text-xs font-bold text-black bg-[#FAD201] rounded-full hover:bg-white hover:text-trukGreen transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Contact Us
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition ${isHome && !scrolled ? "text-white hover:bg-white/10" : "text-gray-800 bg-gray-100"}`}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, scale: 0.95 }}
            animate={{ opacity: 1, height: "auto", scale: 1 }}
            exit={{ opacity: 0, height: 0, scale: 0.95 }}
            className="md:hidden mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              <Link to="/" className="block text-sm font-bold text-gray-800" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/about" className="block text-sm font-bold text-gray-800" onClick={() => setIsOpen(false)}>About Us</Link>
              
              <div className="pl-4 border-l-2 border-gray-100 space-y-3">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Our Services</p>
                {serviceLinks.map((subItem) => (
                   <Link 
                      key={subItem.name} 
                      to={subItem.path} 
                      className="block text-sm font-medium text-gray-600 hover:text-trukGreen"
                      onClick={() => setIsOpen(false)}
                   >
                     {subItem.name}
                   </Link>
                ))}
              </div>

              <Link to="/careers" className="block text-sm font-bold text-gray-800" onClick={() => setIsOpen(false)}>Careers</Link>
              
              <Link to="/contact" className="block w-full py-3 text-center text-sm font-bold text-black bg-[#FAD201] rounded-lg shadow-md mt-4 hover:bg-gray-100" onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
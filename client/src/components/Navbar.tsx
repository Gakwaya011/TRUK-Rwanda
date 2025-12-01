import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Logo-01.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);

  const serviceLinks = [
    { name: "Refrigerated Transport", path: "/services/transport" },
    { name: "Cold Storage", path: "/services/storage" },
    { name: "Farm-to-Market", path: "/services/farm-to-market" },
    { name: "Cross-Border Trade", path: "/services/cross-border" },
  ];

  return (
    <header className="fixed left-0 right-0 mx-auto top-4 z-50 max-w-[1200px] px-4 sm:px-6 lg:px-8">
      
      {/* SOLID WHITE CARD */}
      <div className="bg-white shadow-2xl rounded-2xl border border-white/20 px-6 py-3 flex items-center justify-between transition-all duration-300">
        
        {/* LOGO ONLY (Text removed) */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="TRUK Logo"
            className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-[13px] font-bold text-gray-800 hover:text-trukGreen uppercase tracking-wide transition">
            Home
          </Link>
          <Link to="/about" className="text-[13px] font-bold text-gray-800 hover:text-trukGreen uppercase tracking-wide transition">
            About Us
          </Link>

          {/* SERVICES DROPDOWN */}
          <div 
            className="relative group h-full flex items-center py-2"
            onMouseEnter={() => setServiceDropdown(true)}
            onMouseLeave={() => setServiceDropdown(false)}
          >
            <Link 
              to="/services" 
              className="flex items-center gap-1 text-[13px] font-bold text-gray-800 group-hover:text-trukGreen uppercase tracking-wide transition cursor-pointer"
            >
              Our Services
              <ChevronDown size={14} className={`transition-transform duration-300 ${serviceDropdown ? 'rotate-180' : ''}`} />
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
                  <div className="bg-white shadow-xl rounded-xl border-t-4 border-trukGreen overflow-hidden">
                    <div className="py-2">
                      {serviceLinks.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-6 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-trukGreen transition border-b border-gray-50 last:border-none"
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

          <Link to="/careers" className="text-[13px] font-bold text-gray-800 hover:text-trukGreen uppercase tracking-wide transition">
            Careers
          </Link>
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden md:block px-5 py-2 text-xs font-bold text-white bg-trukGreen rounded-full hover:bg-[#0d522b] transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Contact Us
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-800 bg-gray-100 rounded-lg"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
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
              
              <Link to="/contact" className="block w-full py-3 text-center text-sm font-bold text-white bg-trukGreen rounded-lg shadow-md mt-4" onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
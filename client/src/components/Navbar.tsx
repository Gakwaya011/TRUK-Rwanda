import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Logo-01.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Contact Us is removed from here because we manually place it as a button
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Careers", path: "/careers" },
  ];

  const container = {
    hidden: { opacity: 0, y: -18 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } },
  };

  const item = {
    hidden: { opacity: 0, y: -6 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  };

  return (
    <motion.header
      initial="hidden"
      animate="show"
      variants={container}
      className={`fixed left-0 right-0 mx-auto top-4 z-50 max-w-[1200px] px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-white/70 shadow-lg" : "backdrop-blur-md bg-white/60"
      } rounded-2xl`}
    >
      <div className="flex items-center justify-between gap-4 py-3">
        
        {/* LEFT LOGO */}
        <motion.div variants={item} className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <motion.img
              src={logo}
              alt="TRUK Logo"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03, rotate: -3 }}
              transition={{ duration: 0.45 }}
              className="h-10 md:h-12 w-auto object-contain"
            />
            <div className="hidden sm:block">
              <div className="text-sm font-bold text-gray-800">TRUK Rwanda</div>
              <div className="text-[11px] text-gray-500">Safe · Fresh · On Time</div>
            </div>
          </Link>
        </motion.div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex flex-1 items-center justify-center">
          <nav className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <motion.div key={link.name} variants={item} className="relative group">
                <Link
                  to={link.path}
                  className="text-[13px] font-semibold text-gray-800 uppercase tracking-wider px-2 py-1 relative inline-block group"
                >
                  <span className="relative z-10">{link.name}</span>

                  {/* center underline */}
                  <span className="absolute left-1/2 top-full -translate-x-1/2 w-0 h-[2px] bg-trukGreen rounded-full transition-all duration-300 group-hover:w-full"></span>

                  {/* glow */}
                  <motion.span
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileHover={{ opacity: 0.25, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="pointer-events-none absolute inset-0 bg-trukGreen blur-md rounded opacity-0"
                  />
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3">
          
          {/* Search */}
          <motion.div variants={item} className="relative">
            <div className="flex items-center gap-2">
              <AnimatePresence>
                {searchOpen && (
                  <motion.input
                    key="search"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 220, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="px-3 py-2 rounded-full border border-gray-200 bg-white text-sm shadow-sm outline-none"
                    placeholder="Search jobs, services..."
                    autoFocus
                    onBlur={() => setSearchOpen(false)}
                  />
                )}
              </AnimatePresence>

              <button
                onClick={() => setSearchOpen((s) => !s)}
                className="p-2 rounded-full hover:bg-gray-100 active:scale-95 transition"
              >
                <Search size={18} />
              </button>
            </div>
          </motion.div>

          {/* Desktop Contact Button */}
          <motion.div variants={item} className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="px-3 py-2 text-sm rounded-lg bg-trukGreen text-white font-semibold shadow-sm hover:opacity-95 transition"
            >
              Contact us
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <motion.div variants={item} className="md:hidden">
            <button
              onClick={() => setIsOpen((s) => !s)}
              className="p-2 rounded-lg bg-white/80 border border-gray-100 shadow-sm"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </motion.div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            // Added bg-white/95 so the menu is readable over images
            className="md:hidden mt-2 px-4 pb-4 bg-white/95 backdrop-blur-xl rounded-2xl border border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-3 py-2 rounded-lg font-semibold text-gray-800 hover:bg-gray-100 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {/* ADDED: Mobile Contact Button */}
              <Link
                to="/contact"
                className="block px-3 py-3 mt-2 rounded-lg font-bold text-white bg-trukGreen text-center shadow-md active:scale-95 transition"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
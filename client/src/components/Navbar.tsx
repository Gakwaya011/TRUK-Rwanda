import React, { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact us', href: '#contact' },
  ];

  return (
    // "Floating" White Box with nice shadow and rounded corners
    <nav className="bg-white rounded-lg shadow-xl py-4 px-6 md:px-10 mx-auto w-full max-w-[85rem] font-sans relative z-50 transition-all duration-300">
      <div className="flex justify-between items-center h-12">
        
        {/* --- LOGO SECTION --- */}
        <div className="flex-shrink-0 flex flex-col items-start cursor-pointer group">
          <h1 className="text-4xl font-black tracking-tighter text-black leading-none group-hover:opacity-80 transition-opacity">
            TRUK
          </h1>
          {/* The Flag Colors Bars */}
          <div className="flex space-x-1 mt-1.5">
            <div className="h-1.5 w-5 bg-[#00A3E0] rounded-sm"></div> {/* Blue */}
            <div className="h-1.5 w-5 bg-[#FAD201] rounded-sm"></div> {/* Yellow */}
            <div className="h-1.5 w-5 bg-[#20603D] rounded-sm"></div> {/* Green */}
          </div>
        </div>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden md:flex flex-1 justify-end items-center space-x-8 mr-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-[13px] font-bold text-gray-800 hover:text-trukGreen uppercase tracking-widest transition duration-300 group"
            >
              {link.name}
              {/* Cool Hover Underline Effect */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-trukGreen transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* --- SEARCH ICON --- */}
        <div className="hidden md:flex items-center border-l-2 border-gray-100 pl-6 h-10">
          <button className="text-gray-400 hover:text-trukGreen hover:scale-110 transition-all duration-300">
            <Search size={24} strokeWidth={2.5} />
          </button>
        </div>

        {/* --- MOBILE MENU BUTTON --- */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 hover:text-trukGreen focus:outline-none transition-transform duration-300"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE DROPDOWN --- */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-4 border-t pt-4' : 'max-h-0 opacity-0'}`}>
        <div className="space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-4 py-3 text-sm font-bold text-gray-700 hover:text-white hover:bg-trukGreen uppercase rounded-lg transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom'; // 1. Import Link

const Footer = () => {
  return (
    // Dark Green Background
    <footer className="bg-[#0d3326] text-white font-sans pt-24 pb-8 relative z-0">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8 border-b border-white/10 pb-8">
          
          {/* LEFT: Logo & Inline Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-1 tracking-wide">TRUK Rwanda Ltd</h3>
            <p className="text-xs text-gray-400 mb-4">Cold-Chain Logistics • Transport • Storage</p>
            
            {/* 2. UPDATED LINKS TO USE REACT ROUTER */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 text-[11px] text-gray-300 uppercase font-bold tracking-wider">
              <Link to="/" className="hover:text-[#FAD201] transition">Home</Link> <span>|</span>
              <Link to="/about" className="hover:text-[#FAD201] transition">About</Link> <span>|</span>
              <Link to="/services" className="hover:text-[#FAD201] transition">Services</Link> <span>|</span>
              <Link to="/careers" className="hover:text-[#FAD201] transition">Careers</Link> <span>|</span>
              <Link to="/contact" className="hover:text-[#FAD201] transition">Contact</Link>
            </div>
            
             <div className="mt-2 text-[10px] text-gray-500">
                <Link to="#" className="hover:text-white">Terms & Privacy</Link>
            </div>
          </div>

          {/* RIGHT: Contact Details with Icons */}
          <div className="flex flex-col items-center md:items-end space-y-3 text-xs text-gray-300">
            <div className="flex items-center space-x-2 flex-row-reverse space-x-reverse">
              <Phone size={15} className="text-[#FAD201]" />
              <span>+250 788 254 169</span>
            </div>
            <div className="flex items-center space-x-2 flex-row-reverse space-x-reverse">
              <Mail size={15} className="text-[#FAD201]" />
              <a href="mailto:truk@panielgroup.com" className="hover:text-white">truk@panielgroup.com</a>
            </div>
            <div className="flex items-start space-x-2 flex-row-reverse space-x-reverse text-right">
              <MapPin size={15} className="text-[#FAD201] flex-shrink-0" />
              <span>Kimironko, ITUZE House,<br/>KG 11 Avenue, Kigali</span>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="text-center mt-8 text-[10px] text-[#FAD201] opacity-70 font-medium tracking-widest">
          © 2025 TRUK Rwanda Ltd. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
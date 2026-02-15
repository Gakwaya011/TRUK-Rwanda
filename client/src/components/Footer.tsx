import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    // Dark Green Background
    <footer className="bg-[#0d3326] text-white font-sans pt-24 pb-8 relative z-0 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8 border-b border-white/10 pb-8">
          
          {/* LEFT: Logo & Inline Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-1 tracking-wide text-white">TRUK Rwanda Ltd</h3>
            <p className="text-xs text-gray-400 mb-6 font-medium">Cold-Chain Logistics • Transport • Storage</p>
            
            {/* NAVIGATION LINKS */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-[11px] text-gray-300 uppercase font-bold tracking-wider">
              <Link to="/" className="hover:text-[#FAD201] transition-colors">Home</Link> 
              <span className="text-gray-600">|</span>
              <Link to="/about" className="hover:text-[#FAD201] transition-colors">About</Link> 
              <span className="text-gray-600">|</span>
              <Link to="/services" className="hover:text-[#FAD201] transition-colors">Services</Link> 
              <span className="text-gray-600">|</span>
              <Link to="/careers" className="hover:text-[#FAD201] transition-colors">Careers</Link> 
              <span className="text-gray-600">|</span>
              <Link to="/contact" className="hover:text-[#FAD201] transition-colors">Contact</Link>
            </div>
          </div>

          {/* RIGHT: Contact Details with Icons */}
          <div className="flex flex-col items-center md:items-end space-y-5 text-xs text-gray-300">
            
            {/* Phone - CLEANER LAYOUT */}
            <div className="flex items-start gap-3 md:flex-row-reverse text-center md:text-right">
              <div className="p-1.5 bg-white/5 rounded-md text-[#FAD201] mt-0.5">
                <Phone size={14} />
              </div>
              <div className="flex flex-col md:items-end gap-1.5">
                {/* Toll Free Line with Badge */}
                <div className="flex items-center gap-2">
                   <span className="text-[9px] border border-[#FAD201] text-[#FAD201] px-1.5 py-px rounded uppercase tracking-wider font-bold">Toll Free</span>
                   <span className="font-bold text-white text-sm tracking-wide">6030</span>
                </div>
                {/* Mobile Line */}
                <a href="tel:+250788254169" className="font-medium text-gray-400 hover:text-white transition-colors tracking-wide">
                  +250 788 254 169
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 md:flex-row-reverse">
              <div className="p-1.5 bg-white/5 rounded-md text-[#FAD201]">
                <Mail size={14} />
              </div>
              <a href="mailto:info@trukrwanda.com" className="font-medium tracking-wide hover:text-white transition-colors">
                info@trukrwanda.com
              </a>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3 md:flex-row-reverse text-center md:text-right">
              <div className="p-1.5 bg-white/5 rounded-md text-[#FAD201] mt-0.5">
                <MapPin size={14} />
              </div>
              <span className="font-medium leading-relaxed">
                28 KG11AVE,<br/>
                Opposite Amahoro Stadium
              </span>
            </div>

          </div>

        </div>

        {/* BOTTOM: COPYRIGHT & LEGAL */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-[10px] text-gray-500 font-medium tracking-wide">
          <div className="opacity-70">
             © 2026 TRUK Rwanda Ltd. All Rights Reserved.
          </div>
          <div className="flex gap-4 mt-2 md:mt-0">
             <Link to="#" className="hover:text-[#FAD201] transition-colors">Privacy Policy</Link>
             <Link to="#" className="hover:text-[#FAD201] transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

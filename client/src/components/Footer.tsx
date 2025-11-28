import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const FooterSection = () => {
  return (
    <div className="font-sans">
      
      {/* --- CONTACT HEADER (White Background) --- */}
      <section id="contact" className="py-12 bg-white text-center">
        <h2 className="text-3xl font-extrabold text-[#114232] uppercase tracking-tight">
          Contact us
        </h2>
        {/* Yellow Line */}
        <div className="w-16 h-1 bg-[#FAD201] mx-auto mt-2 rounded-full"></div>
      </section>

      {/* --- DARK GREEN WRAPPER --- */}
      <div className="bg-[#114232] text-white">
        
        {/* FORM SECTION */}
        <div className="max-w-5xl mx-auto px-6 pt-12 pb-16">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Thin Line Inputs */}
              <input type="text" placeholder="Name" className="w-full bg-transparent border-b border-gray-400 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#FAD201] transition-colors"/>
              <input type="email" placeholder="Email" className="w-full bg-transparent border-b border-gray-400 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#FAD201] transition-colors"/>
              <input type="tel" placeholder="Phone Number" className="w-full bg-transparent border-b border-gray-400 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#FAD201] transition-colors"/>
            </div>
            
            <textarea rows={3} placeholder="Message" className="w-full bg-transparent border-b border-gray-400 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#FAD201] transition-colors resize-none"></textarea>

            <div className="text-center mt-8">
              <button className="bg-[#FAD201] hover:bg-[#ffe135] text-black font-bold py-2 px-10 rounded-full text-sm shadow-md transition-transform transform hover:-translate-y-1">
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* --- FOOTER BAR (Darker/Same Tone) --- */}
        <footer className="border-t border-white/10 bg-[#0d3326] py-10">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-end gap-8">
            
            {/* LEFT: Logo & Links */}
            <div className="w-full md:w-auto text-center md:text-left">
              <h3 className="text-xl font-bold mb-1">TRUK Rwanda Ltd</h3>
              <p className="text-xs text-gray-300 mb-4">Cold-Chain Logistics • Transport • Storage</p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-2 text-xs text-gray-300 uppercase font-semibold">
                <a href="#" className="hover:text-white">Home</a> <span>|</span>
                <a href="#about" className="hover:text-white">About</a> <span>|</span>
                <a href="#services" className="hover:text-white">Services</a> <span>|</span>
                <a href="#careers" className="hover:text-white">Careers</a> <span>|</span>
                <a href="#contact" className="hover:text-white">Contact</a>
              </div>
              <div className="mt-2 text-[10px] text-gray-400">
                <a href="#">Terms & Privacy</a>
              </div>
            </div>

            {/* RIGHT: Contact Details */}
            <div className="w-full md:w-auto flex flex-col items-center md:items-end space-y-2 text-xs text-gray-200">
              <div className="flex items-center space-x-2">
                <span className="text-right">+250 788 254 169</span>
                <Phone size={14} className="text-[#FAD201]" />
              </div>
              <div className="flex items-center space-x-2">
                <a href="mailto:truk@panielgroup.com" className="hover:text-white">truk@panielgroup.com</a>
                <Mail size={14} className="text-[#FAD201]" />
              </div>
              <div className="flex items-center space-x-2 text-right">
                <span>Kimironko, ITUZE House,<br/>KG 11 Avenue, Kigali</span>
                <MapPin size={14} className="text-[#FAD201]" />
              </div>
            </div>

          </div>

          {/* COPYRIGHT */}
          <div className="text-center mt-10 text-[10px] text-[#FAD201] opacity-80">
            © 2025 TRUK Rwanda Ltd. All Rights Reserved.
          </div>
        </footer>

      </div>
    </div>
  );
};

export default FooterSection;
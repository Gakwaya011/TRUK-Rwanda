import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="font-sans bg-white">
      
      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-[50vh] min-h-[400px] flex flex-col">
        {/* Background Image - Reusing the fleet image for consistency */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2940&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Navbar */}
        <div className="relative z-50 pt-6 px-4 sm:px-6 lg:px-8 w-full">
          <Navbar />
        </div>

        {/* Hero Title */}
        <div className="relative z-10 flex-grow flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white uppercase tracking-widest drop-shadow-2xl mt-8">
            Contact Us
          </h1>
        </div>
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Split Layout: "Get In Touch" Text vs Contact Details */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-10">
          
          {/* Left: Text */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#116D3B] mb-6">Get In Touch</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-md">
              Have questions or want to request a service quotation? Our team is here to assist.
            </p>
          </div>

          {/* Right: Contact Info (Icons + Text) */}
          <div className="md:w-1/2 flex flex-col space-y-6 md:items-end">
            
            <div className="flex items-center gap-4">
              <Phone className="text-[#116D3B]" size={24} />
              <span className="text-lg font-medium text-gray-800">+250 788 254 169</span>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-[#116D3B]" size={24} />
              <a href="mailto:truk@panielgroup.com" className="text-lg font-medium text-gray-800 hover:text-[#116D3B] transition-colors">
                truk@panielgroup.com
              </a>
            </div>

            <div className="flex items-start gap-4 text-left md:text-right">
              <MapPin className="text-[#116D3B] mt-1 flex-shrink-0" size={24} />
              <span className="text-lg font-medium text-gray-800">
                Kimironko, ITUZE House,<br />
                KG 11 Avenue, Kigali
              </span>
            </div>

          </div>
        </div>

        {/* --- THE GREEN FORM BLOCK --- */}
        <div className="bg-[#116D3B] rounded-none md:rounded-lg p-8 md:p-16 shadow-2xl">
          <form className="space-y-12">
            
            {/* Input Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full bg-transparent border-b border-gray-300 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-[#FAD201] transition-colors"
                />
              </div>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-transparent border-b border-gray-300 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-[#FAD201] transition-colors"
                />
              </div>
              <div className="relative">
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full bg-transparent border-b border-gray-300 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-[#FAD201] transition-colors"
                />
              </div>
            </div>

            {/* Message Area */}
            <div className="relative">
              <textarea 
                rows={4} 
                placeholder="Message" 
                className="w-full bg-transparent border-b border-gray-300 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-[#FAD201] transition-colors resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button className="bg-[#FAD201] hover:bg-[#ffe135] text-black font-bold py-3 px-16 rounded-full text-lg shadow-lg transition-transform transform hover:-translate-y-1">
                Submit
              </button>
            </div>

          </form>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
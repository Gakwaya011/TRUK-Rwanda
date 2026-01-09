import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Phone, Mail, MapPin, Send, Clock, Globe, ArrowRight } from 'lucide-react';
import { Reveal } from '../components/Reveal';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:info@trukrwanda.com?subject=Inquiry from ${formData.name}&body=${formData.message}%0D%0A%0D%0APhone: ${formData.phone}`;
  };

  return (
    <div className="font-sans bg-gray-100">
      <Navbar />
      
      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-[55vh] min-h-[450px] flex flex-col justify-center items-center overflow-hidden bg-[#0d3326]">
        
        <img 
           src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
           alt="Global Connections"
           className="absolute inset-0 w-full h-full object-cover opacity-40" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d3326]/80 via-transparent to-[#0d3326]/90"></div>

        <div className="relative z-10 text-center px-4 mt-10">
          <Reveal width="100%">
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-wider mb-4 drop-shadow-2xl">
              Let's <span className="text-[#FAD201]">Connect</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-md">
              Your gateway to reliable, temperature-controlled logistics across East Africa.
            </p>
          </Reveal>
        </div>
      </div>

      {/* --- FLOATING INFO CARDS --- */}
      <div className="max-w-7xl mx-auto px-6 relative z-20 -mt-20 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          
          {/* Card 1: Phone (UPDATED) */}
          <Reveal delay={0.1}>
            <div className="bg-white p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-50 hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 bg-trukGreen/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FAD201] transition-colors duration-300">
                <Phone className="text-trukGreen group-hover:text-black transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-wide">Call Us</h3>
              <p className="text-gray-500 text-sm mb-4 font-medium">Mon-Fri from 8am to 6pm</p>
              
              <div className="mt-auto flex flex-col items-center gap-1">
                <p className="text-trukGreen font-black text-3xl">6030 <span className="text-xs text-gray-400 font-bold uppercase align-middle ml-1">Toll Free</span></p>
                <p className="text-gray-600 font-bold text-lg">+250 788 254 169</p>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Email */}
          <Reveal delay={0.2}>
            <div className="bg-white p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-50 hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 bg-trukGreen/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FAD201] transition-colors duration-300">
                <Mail className="text-trukGreen group-hover:text-black transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-wide">Email Us</h3>
              <p className="text-gray-500 text-sm mb-4 font-medium">We reply within 24hrs</p>
              <a href="mailto:info@trukrwanda.com" className="text-trukGreen font-black text-xl hover:underline mt-auto">info@trukrwanda.com</a>
            </div>
          </Reveal>

          {/* Card 3: Location */}
          <Reveal delay={0.3}>
            <div className="bg-white p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-50 hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 bg-trukGreen/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FAD201] transition-colors duration-300">
                <MapPin className="text-trukGreen group-hover:text-black transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-wide">Visit HQ</h3>
              <p className="text-gray-500 text-sm mb-4 font-medium">Opposite Amahoro Stadium</p>
              <p className="text-trukGreen font-black text-lg leading-tight mt-auto">28 KG11AVE,<br/>Kigali, Rwanda</p>
            </div>
          </Reveal>

        </div>
      </div>

      {/* --- MAIN FORM SECTION --- */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <Reveal width="100%">
          <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[750px]">
            
            {/* LEFT SIDE: Visual Context with Frost Effect */}
            <div className="lg:w-5/12 relative bg-[#114232] text-white p-12 lg:p-16 flex flex-col justify-between overflow-hidden">
              <div 
                className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" 
                style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/frost.png')" }}
              ></div>
               <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#FAD201]/20 to-transparent opacity-60"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-3 mb-10">
                   <div className="p-2 bg-[#FAD201] rounded-lg text-[#114232]">
                     <Globe size={20} />
                   </div>
                   <span className="text-[#FAD201] font-bold uppercase tracking-widest text-sm">Global Standards. Local Expertise.</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-8">
                  Ready to <span className="text-[#FAD201] underline decoration-4 decoration-[#FAD201]/30">Move?</span>
                </h2>
                <p className="text-gray-200 text-lg leading-relaxed font-medium">
                  Fill out the form and our logistics specialists will analyze your cold chain needs and provide a tailored solution.
                </p>
              </div>

              {/* Bottom Info */}
              <div className="relative z-10 mt-16">
                <div className="flex items-center gap-4 mb-8 bg-white/5 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
                  <div className="p-3 bg-[#FAD201] rounded-xl text-[#114232] shadow-lg">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-[#FAD201] uppercase font-black tracking-wider mb-1">Hours of Operation</p>
                    <p className="font-bold text-white text-lg">Mon - Sat: 8am - 6pm</p>
                  </div>
                </div>
                 <div className="flex items-center gap-2 text-[#FAD201] font-bold text-sm uppercase tracking-widest">
                   <ArrowRight size={18} /> Excellence Delivered.
                 </div>
              </div>
            </div>

            {/* RIGHT SIDE: The Clean Form */}
            <div className="lg:w-7/12 p-12 lg:p-20 bg-white">
              <div className="mb-10">
                 <h3 className="text-3xl font-black text-gray-900 mb-3 uppercase tracking-tight">
                   Send a Request
                 </h3>
                 <p className="text-gray-500 text-lg">We usually respond within a few hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group">
                    <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-3 ml-1">Full Name *</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-trukGreen focus:bg-white transition-all font-medium"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="group">
                    <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-3 ml-1">Email Address *</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-trukGreen focus:bg-white transition-all font-medium"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-3 ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-trukGreen focus:bg-white transition-all font-medium"
                    placeholder="Enter your phone number (optional)"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div className="group">
                  <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-3 ml-1">How can we help? *</label>
                  <textarea 
                    required
                    rows={5} 
                    className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-trukGreen focus:bg-white transition-all font-medium resize-none"
                    placeholder="Tell us about your cargo, storage needs, or questions..."
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full md:w-auto md:px-12 bg-[#FAD201] hover:bg-[#e6c200] text-[#114232] font-black py-5 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 uppercase tracking-widest text-sm"
                >
                  <span>Submit Inquiry</span>
                  <Send size={20} className="font-bold" />
                </button>
              </form>
            </div>

          </div>
        </Reveal>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
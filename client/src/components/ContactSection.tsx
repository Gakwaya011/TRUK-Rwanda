import React, { useState } from 'react';
import { Reveal } from './Reveal';
import { Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Opens the user's email client with the message pre-filled
    window.location.href = `mailto:info@trukrwanda.com?subject=New Website Inquiry from ${formData.name}&body=${formData.message}%0D%0A%0D%0AContact Details:%0D%0APhone: ${formData.phone}%0D%0AEmail: ${formData.email}`;
  };

  return (
    // OUTER SECTION: White background, adjusted padding
    <section id="contact" className="py-24 bg-white font-sans relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal width="100%">
            <div className="flex flex-col items-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#114232] uppercase tracking-tight">
                    Get in Touch
                </h2>
                <div className="w-24 h-1.5 bg-[#FAD201] mt-6 rounded-full"></div>
            </div>
          </Reveal>
        </div>

        {/* THE FLOATING GREEN CARD */}
        <Reveal width="100%" delay={0.2}>
            <div className="max-w-5xl mx-auto bg-[#114232] rounded-3xl shadow-2xl overflow-hidden relative">
                {/* Decorative Background Element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <div className="p-8 md:p-16 relative z-10">
                    <form onSubmit={handleSubmit} className="space-y-10">
                    
                    {/* Input Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        <div className="group">
                            <input 
                              required
                              type="text" 
                              placeholder="Name" 
                              className="w-full bg-transparent border-b border-gray-400/50 py-3 text-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#FAD201] transition-colors font-light"
                              value={formData.name}
                              onChange={e => setFormData({...formData, name: e.target.value})}
                            />
                        </div>
                        <div className="group">
                            <input 
                              required
                              type="email" 
                              placeholder="Email" 
                              className="w-full bg-transparent border-b border-gray-400/50 py-3 text-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#FAD201] transition-colors font-light"
                              value={formData.email}
                              onChange={e => setFormData({...formData, email: e.target.value})}
                            />
                        </div>
                        <div className="group">
                            <input 
                              type="tel" 
                              placeholder="Phone Number" 
                              className="w-full bg-transparent border-b border-gray-400/50 py-3 text-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#FAD201] transition-colors font-light"
                              value={formData.phone}
                              onChange={e => setFormData({...formData, phone: e.target.value})}
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div>
                        <textarea 
                          required
                          rows={4} 
                          placeholder="How can we help you?" 
                          className="w-full bg-transparent border-b border-gray-400/50 py-3 text-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#FAD201] transition-colors resize-none font-light"
                          value={formData.message}
                          onChange={e => setFormData({...formData, message: e.target.value})}
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center pt-4">
                        <button type="submit" className="group bg-[#FAD201] hover:bg-white hover:text-trukGreen text-black font-extrabold py-4 px-12 rounded-full text-sm uppercase tracking-widest shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3 mx-auto">
                            <span>Send Message</span>
                            <Send size={16} className="group-hover:translate-x-1 transition-transform"/>
                        </button>
                    </div>

                    </form>
                </div>
            </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactSection;
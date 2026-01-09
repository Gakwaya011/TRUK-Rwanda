import React, { useState } from 'react';
import { Reveal } from './Reveal';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:info@trukrwanda.com?subject=Inquiry from ${formData.name}&body=${formData.message}%0D%0A%0D%0APhone: ${formData.phone}`;
  };

  return (
    // SECTION BG: Light Gray with a subtle texture feel
    <section id="contact" className="py-24 bg-gray-100 relative z-10 overflow-hidden">
      
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-trukGreen/5 rounded-full blur-3xl"></div>
          <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] bg-[#FAD201]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h2 className="text-3xl md:text-4xl font-black text-trukGreen uppercase tracking-tight">
                Get in Touch
            </h2>
            <div className="w-20 h-1.5 bg-[#FAD201] mt-4 mx-auto rounded-full"></div>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
                Have a question about our logistics or storage solutions? We are here to help.
            </p>
          </Reveal>
        </div>

        {/* THE SPLIT CARD */}
        <Reveal width="100%" delay={0.2}>
            <div className="bg-[#114232] rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[600px]">
                
                {/* LEFT SIDE: Contact Info (Dark Green) */}
                <div className="lg:w-2/5 p-10 lg:p-14 bg-[#0d3528] text-white flex flex-col justify-between relative overflow-hidden">
                    {/* Decor */}
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#FAD201] opacity-10 rounded-tl-full"></div>
                    
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                        <p className="text-gray-300 mb-12 leading-relaxed">
                            Fill out the form and our team will get back to you within 24 hours.
                        </p>

                        <div className="space-y-8">
                            {/* UPDATED PHONE SECTION */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/10 rounded-lg text-[#FAD201]">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Call Us</p>
                                    <p className="font-black text-2xl text-[#FAD201]">6030 <span className="text-xs text-white/60 font-medium align-middle">TOLL FREE</span></p>
                                    <p className="font-medium text-gray-300 mt-1">+250 788 254 169</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/10 rounded-lg text-[#FAD201]">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Email Us</p>
                                    <p className="font-semibold text-lg">info@trukrwanda.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/10 rounded-lg text-[#FAD201]">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Visit Us</p>
                                    <p className="font-semibold text-lg leading-relaxed">
                                        28 KG11AVE,<br/>
                                        Opposite Amahoro Stadium
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 lg:mt-0">
                       <p className="text-sm text-gray-400">© 2025 TRUK Rwanda.</p>
                    </div>
                </div>

                {/* RIGHT SIDE: The Form (Lighter Green) */}
                <div className="lg:w-3/5 p-10 lg:p-14 bg-[#114232] relative">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="group">
                                <label className="text-xs font-bold text-[#FAD201] uppercase tracking-wider mb-2 block">Your Name</label>
                                <input 
                                  required
                                  type="text" 
                                  placeholder="John Doe" 
                                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FAD201] focus:bg-white/10 transition-all"
                                  value={formData.name}
                                  onChange={e => setFormData({...formData, name: e.target.value})}
                                />
                            </div>
                            <div className="group">
                                <label className="text-xs font-bold text-[#FAD201] uppercase tracking-wider mb-2 block">Your Email</label>
                                <input 
                                  required
                                  type="email" 
                                  placeholder="john@example.com" 
                                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FAD201] focus:bg-white/10 transition-all"
                                  value={formData.email}
                                  onChange={e => setFormData({...formData, email: e.target.value})}
                                />
                            </div>
                        </div>

                        <div className="group">
                            <label className="text-xs font-bold text-[#FAD201] uppercase tracking-wider mb-2 block">Phone Number</label>
                            <input 
                              type="tel" 
                              placeholder="+250..." 
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FAD201] focus:bg-white/10 transition-all"
                              value={formData.phone}
                              onChange={e => setFormData({...formData, phone: e.target.value})}
                            />
                        </div>

                        <div className="group">
                            <label className="text-xs font-bold text-[#FAD201] uppercase tracking-wider mb-2 block">Message</label>
                            <textarea 
                              required
                              rows={4} 
                              placeholder="Tell us about your logistics needs..." 
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FAD201] focus:bg-white/10 transition-all resize-none"
                              value={formData.message}
                              onChange={e => setFormData({...formData, message: e.target.value})}
                            ></textarea>
                        </div>

                        <div className="pt-4">
                            <button type="submit" className="w-full md:w-auto bg-[#FAD201] hover:bg-white hover:text-trukGreen text-black font-extrabold py-4 px-10 rounded-xl text-sm uppercase tracking-widest shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3">
                                <span>Send Message</span>
                                <Send size={18} />
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
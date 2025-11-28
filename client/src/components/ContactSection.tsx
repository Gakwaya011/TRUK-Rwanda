import React from 'react';

const ContactSection = () => {
  return (
    // OUTER SECTION: White background, extra padding at bottom to separate from footer
    <section id="contact" className="py-16 bg-white font-sans relative z-10 mb-[-40px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Dark Text on White BG */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-[#114232] uppercase tracking-tight">
            Contact us
          </h2>
          <div className="w-16 h-1 bg-[#FAD201] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* THE FLOATING GREEN CARD */}
        <div className="max-w-4xl mx-auto bg-[#114232] rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12">
                <form className="space-y-8">
                
                {/* Input Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <input type="text" placeholder="Name" className="w-full bg-transparent border-b border-gray-400 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#FAD201] transition-colors"/>
                    <input type="email" placeholder="Email" className="w-full bg-transparent border-b border-gray-400 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#FAD201] transition-colors"/>
                    <input type="tel" placeholder="Phone Number" className="w-full bg-transparent border-b border-gray-400 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#FAD201] transition-colors"/>
                </div>

                {/* Message */}
                <textarea rows={4} placeholder="Message" className="w-full bg-transparent border-b border-gray-400 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#FAD201] transition-colors resize-none"></textarea>

                {/* Submit Button */}
                <div className="text-center mt-8">
                    <button type="button" className="bg-[#FAD201] hover:bg-[#ffe135] text-black font-bold py-3 px-12 rounded-full text-sm uppercase tracking-wide shadow-md transition-transform transform hover:-translate-y-1">
                    Submit
                    </button>
                </div>

                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
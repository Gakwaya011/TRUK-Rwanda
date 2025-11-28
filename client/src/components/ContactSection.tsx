import React from 'react';

const ContactSection = () => {
  return (
    // Background color matches the footer to create a seamless look
    <section id="contact" className="py-20 bg-[#0f3b2b] text-white font-sans">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-trukGreen mb-12">
           {/* The UI uses a specific green for the header "Contact us" even on green bg? 
               Actually in the image it looks dark green on white? 
               Wait, looking at the image: "Contact us" is Dark Green text on White background ABOVE the dark green box.
           */}
           <span className="text-[#0f3b2b]">Contact us</span>
        </h2>

        {/* The Green Card Box containing the Form */}
        <div className="bg-[#114232] rounded-none md:rounded-lg p-0 md:p-8">
            <form className="space-y-12 max-w-5xl mx-auto">
            
            {/* Input Row: Name, Email, Phone */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                
                {/* Name */}
                <div className="relative group">
                <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full bg-transparent border-b border-gray-400 py-3 text-sm text-white placeholder-gray-300 focus:outline-none focus:border-white transition-colors"
                />
                </div>

                {/* Email */}
                <div className="relative group">
                <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full bg-transparent border-b border-gray-400 py-3 text-sm text-white placeholder-gray-300 focus:outline-none focus:border-white transition-colors"
                />
                </div>

                {/* Phone */}
                <div className="relative group">
                <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full bg-transparent border-b border-gray-400 py-3 text-sm text-white placeholder-gray-300 focus:outline-none focus:border-white transition-colors"
                />
                </div>
            </div>

            {/* Message Row */}
            <div className="relative group">
                <textarea 
                rows={4} 
                placeholder="Message" 
                className="w-full bg-transparent border-b border-gray-400 py-3 text-sm text-white placeholder-gray-300 focus:outline-none focus:border-white transition-colors resize-none"
                ></textarea>
            </div>

            {/* Submit Button - Centered and Yellow */}
            <div className="text-center mt-12">
                <button 
                type="button" 
                className="bg-[#FAD201] hover:bg-[#ffe135] text-black font-bold py-3 px-16 rounded-full text-sm uppercase tracking-wide shadow-md transition-transform transform hover:-translate-y-1"
                >
                Submit
                </button>
            </div>

            </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
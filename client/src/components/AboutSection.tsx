import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-trukGreen mb-8 uppercase tracking-tight">
          About TRUK
        </h2>

        {/* Decorative Line */}
        <div className="w-24 h-1.5 bg-[#FAD201] mx-auto mb-10 rounded-full"></div>

        {/* Main Text Content */}
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
          TRUK Rwanda Ltd is a leading cold-chain logistics provider offering 
          temperature-controlled transportation and storage for perishable and 
          non-perishable goods. 
        </p>

        <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
          Since 2020, we have supported farmers, agribusinesses, and industries 
          with reliable logistics solutions powered by technology and a modern fleet.
        </p>

      </div>
    </section>
  );
};

export default AboutSection;
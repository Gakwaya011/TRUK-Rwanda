import React from 'react';
import { Reveal } from './Reveal';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      {/* FULL WIDTH CONTAINER */}
      <div className="w-full px-6 lg:px-12 text-center">
        
        {/* Header */}
        <Reveal width="100%">
            <div className="flex flex-col items-center">
                <h2 className="text-3xl md:text-5xl font-extrabold text-trukGreen mb-8 uppercase tracking-tight">
                About TRUK
                </h2>
                <div className="w-24 h-2 bg-[#FAD201] mb-12 rounded-full"></div>
            </div>
        </Reveal>

        {/* Text Content - Wider max-width (max-w-7xl) so it fills more space */}
        <Reveal width="100%" delay={0.2}>
            <div className="flex flex-col items-center max-w-[90rem] mx-auto"> 
                <p className="text-xl md:text-3xl text-gray-800 leading-relaxed font-medium">
                TRUK Rwanda Ltd is a leading cold-chain logistics provider offering 
                temperature-controlled transportation and storage for perishable and 
                non-perishable goods. 
                </p>

                <p className="mt-8 text-lg md:text-2xl text-gray-600 leading-relaxed font-medium">
                Since 2020, we have supported farmers, agribusinesses, and industries 
                with reliable logistics solutions powered by technology and a modern fleet.
                </p>
            </div>
        </Reveal>

      </div>
    </section>
  );
};

export default AboutSection;
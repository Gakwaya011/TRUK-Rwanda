import React from 'react';
import { Reveal } from './Reveal';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Header - Stagger 1 */}
        <Reveal width="100%">
            <div className="flex flex-col items-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-trukGreen mb-8 uppercase tracking-tight">
                About TRUK
                </h2>
                <div className="w-24 h-1.5 bg-[#FAD201] mb-10 rounded-full"></div>
            </div>
        </Reveal>

        {/* Text Content - Stagger 2 (delayed slightly) */}
        <Reveal width="100%" delay={0.2}>
            <div className="flex flex-col items-center">
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
        </Reveal>

      </div>
    </section>
  );
};

export default AboutSection;
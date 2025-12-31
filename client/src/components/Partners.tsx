import React from 'react';
import { Reveal } from './Reveal';

// IMPORT LOCAL LOGOS
import p1 from '../assets/partners/1.jpg';
import p2 from '../assets/partners/2.png';
import p3 from '../assets/partners/3.png';
import p4 from '../assets/partners/4.webp';
import p5 from '../assets/partners/5.png';
import p6 from '../assets/partners/6.png';
import p7 from '../assets/partners/7.png';
import p8 from '../assets/partners/8.png';
import p9 from '../assets/partners/9.png';
import p10 from '../assets/partners/10.png';
import p11 from '../assets/partners/11.png';
import p12 from '../assets/partners/12.png';
import p13 from '../assets/partners/13.webp';
import p14 from '../assets/partners/14.jpg';
import p15 from '../assets/partners/15.png';

const partners = [
  p1, p2, p3, p4, p5, 
  p6, p7, p8, p9, p10, 
  p11, p12, p13, p14, p15
];

const Partners = () => {
  return (
    <section className="py-24 bg-stone-50 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h2 className="text-3xl font-black text-trukGreen uppercase tracking-tight mb-4">
              Our Partners
            </h2>
            <div className="w-16 h-1.5 bg-[#FAD201] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              We are proud to work with the region's leading industries, retailers, and distributors.
            </p>
          </Reveal>
        </div>

        {/* THE GRID: 2 cols on mobile, 3 on tablet, 5 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {partners.map((logo, index) => (
            <Reveal key={index} delay={index * 0.05}>
              <div 
                className="group bg-gray-50 h-32 rounded-2xl border border-gray-100 flex items-center justify-center p-6 hover:shadow-xl hover:-translate-y-1 hover:bg-white transition-all duration-300"
              >
                <img 
                  src={logo} 
                  alt={`Partner ${index + 1}`} 
                  className="max-w-full max-h-full object-contain" 
                  // No grayscale, just full color always
                />
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Partners;
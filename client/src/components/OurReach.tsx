import React from 'react';
import { Reveal } from './Reveal';

const OurReach = () => {
  return (
    <section className="py-20 bg-gray-50 font-sans overflow-hidden">
      
      {/* 1. Header Content (Stays exactly the same) */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center mb-12">
        <Reveal width="100%">
            <h2 className="text-3xl md:text-4xl font-extrabold text-trukGreen uppercase tracking-tight">
                Our Reach
            </h2>
            <p className="mt-4 text-lg text-gray-600 font-medium max-w-2xl mx-auto">
                From our headquarters in Kigali to regional depots in Rubavu, Huye, and Kayonza, 
                we ensure your goods remain fresh across the entire country.
            </p>
        </Reveal>
      </div>

      {/* 2. Google Map Embed (Full Width) */}
      <Reveal width="100%" delay={0.2}>
        <div className="w-full h-[600px] relative z-0 shadow-xl">
           <iframe 
             width="100%" 
             height="100%" 
             id="gmap_canvas" 
             // Updated Address: 28 KG 11 Ave, Kigali
             src="https://maps.google.com/maps?q=28+KG+11+Ave,+Kigali,+Rwanda&t=&z=15&ie=UTF8&iwloc=&output=embed"
             frameBorder="0" 
             scrolling="no" 
             marginHeight={0} 
             marginWidth={0}
             title="TRUK HQ Location"
             className="w-full h-full"
           ></iframe>
           
           {/* Protective overlay to prevent accidental scrolling when scrolling down the page */}
           <div className="absolute inset-0 pointer-events-none border-t border-gray-200"></div>
        </div>
      </Reveal>

    </section>
  );
};

export default OurReach;
import React from 'react';
import Navbar from './Navbar'; 

const Hero = () => {
  return (
    // CHANGED: h-screen to h-[85vh] (smaller height)
    <div className="relative w-full h-[85vh] min-h-[500px] flex flex-col font-sans">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2940&auto=format&fit=crop')" 
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30"></div>
      </div>

      {/* Navbar Container */}
      {/* CHANGED: Reduced top padding (pt-6) */}
      <div className="relative z-50 pt-6 px-4 sm:px-6 lg:px-8 w-full">
        <Navbar />
      </div>

      {/* Hero Text Content */}
      <div className="relative z-10 flex-grow flex items-center justify-center -mt-10">
        <div className="max-w-6xl mx-auto px-6 text-white w-full text-center md:text-left">
          
          {/* CHANGED: Text sizes scaled down (text-4xl md:text-6xl) */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl mb-4 drop-shadow-lg">
            RELIABLE <span className="text-[#FAD201]">COLD-CHAIN</span> LOGISTICS ACROSS RWANDA <br className="hidden md:block"/> & EAST AFRICA
          </h1>

          {/* CHANGED: Subtitle text reduced */}
          <p className="text-base md:text-xl text-gray-100 max-w-2xl mb-8 font-light leading-relaxed drop-shadow-md">
            Delivering fresh, safe, and temperature-controlled goods with efficiency, technology, and care.
          </p>

          {/* CHANGED: Button sizing reduced */}
          <button className="group relative bg-[#FAD201] hover:bg-[#ffe135] text-black font-extrabold py-3 px-8 rounded-full text-base shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <span className="relative z-10">Explore Our Services</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
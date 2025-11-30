import React from 'react';
import Navbar from './Navbar'; 
import { motion } from 'framer-motion'; 
import { Link } from 'react-router-dom'; // 1. Import Link

const Hero = () => {
  return (
    <div className="relative w-full h-[85vh] min-h-[550px] flex flex-col font-sans">
      
      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2940&auto=format&fit=crop')" 
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/50"></div>
      </motion.div>

      <div className="relative z-50 pt-4 px-4 sm:px-6 lg:px-8 w-full">
        <Navbar />
      </div>

      <div className="relative z-10 flex-grow flex items-center justify-center -mt-6">
        <div className="max-w-6xl mx-auto px-6 text-white w-full text-center md:text-left">
          
          {/* Animated Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-4xl mb-5 drop-shadow-xl"
          >
            RELIABLE <span className="text-[#FAD201]">COLD-CHAIN</span> LOGISTICS ACROSS RWANDA <br className="hidden md:block"/> & EAST AFRICA
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-xl text-gray-100 max-w-2xl mb-8 font-light leading-relaxed drop-shadow-md"
          >
            Delivering fresh, safe, and temperature-controlled goods with efficiency, technology, and care.
          </motion.p>

          {/* Animated Button */}
          <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5, delay: 0.6 }}
          >
            {/* 2. WRAP BUTTON IN LINK TO /services */}
            <Link to="/services">
              <button className="group relative bg-[#FAD201] hover:bg-[#ffe135] text-black font-extrabold py-3 px-8 rounded-full text-base shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <span className="relative z-10">Explore Our Services</span>
              </button>
            </Link>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
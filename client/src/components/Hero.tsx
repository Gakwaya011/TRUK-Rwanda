import React from 'react';
import Navbar from './Navbar'; 
import { motion } from 'framer-motion'; 
import { Link } from 'react-router-dom'; 
import { ArrowRight, ThermometerSnowflake } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative w-full h-[90vh] min-h-[600px] flex flex-col font-sans">
      
      {/* 1. BACKGROUND IMAGE */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          // White Refrigerated Truck
          backgroundImage: "url('https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?q=80&w=2940&auto=format&fit=crop')" 
        }}
      >
        {/* GRADIENT OVERLAY: Stronger on the LEFT to support the text */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent"></div>
      </motion.div>

      {/* 2. NAVBAR */}
      <div className="relative z-50 pt-4 px-4 sm:px-6 lg:px-8 w-full">
        <Navbar />
      </div>

      {/* 3. HERO TEXT CONTENT - Shifted Left */}
      {/* Added 'lg:px-20' to push it nicely from the edge, but kept it on the left */}
      <div className="relative z-10 flex-grow flex items-center px-6 lg:px-20 -mt-10">
        
        {/* Restricted max-width to 3xl so it doesn't stretch to the middle */}
        <div className="w-full max-w-3xl text-left">
          
          {/* A. BADGE */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8"
          >
            <ThermometerSnowflake size={16} className="text-[#FAD201]" />
            <span className="text-xs font-bold text-white uppercase tracking-widest">
              Premier Temperature Control
            </span>
          </motion.div>

          {/* B. MAIN HEADLINE */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-6 drop-shadow-2xl"
          >
            RELIABLE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAD201] to-yellow-500">
              COLD-CHAIN
            </span> LOGISTICS
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-4 mb-8"
          >
             <div className="h-1 w-16 bg-[#FAD201] rounded-full"></div>
             <h2 className="text-xl md:text-2xl font-bold text-white tracking-widest uppercase">
                Rwanda & East Africa
             </h2>
          </motion.div>

          {/* C. SUBTITLE */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-gray-300 max-w-xl font-light leading-relaxed mb-10"
          >
            Delivering fresh, safe, and temperature-controlled goods with 
            <span className="text-white font-medium"> efficiency</span>, 
            <span className="text-white font-medium"> technology</span>, and 
            <span className="text-white font-medium"> care</span>.
          </motion.p>

          {/* D. CTA BUTTON */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Link to="/services">
              <button className="group relative bg-[#FAD201] hover:bg-white text-black font-extrabold py-4 px-10 rounded-full text-lg shadow-[0_0_20px_rgba(250,210,1,0.4)] transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3">
                <span>Explore Our Services</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
import React from 'react';
import { motion } from 'framer-motion'; 
import { Link } from 'react-router-dom'; 
import { ArrowRight, ThermometerSnowflake } from 'lucide-react';

// IMPORT THE VIDEO FILE
import heroVideo from '../assets/hero-video.mp4'; 

const Hero = () => {
  return (
    <div className="relative w-full h-[100vh] min-h-[600px] flex flex-col font-sans overflow-hidden">
      
      {/* 1. BACKGROUND VIDEO */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        
        {/* Gradients to make text pop against any video */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
      </div>

      {/* 2. HERO CONTENT */}
      {/* Added pt-20 to account for the transparent navbar sitting on top */}
      <div className="relative z-20 flex-grow flex items-center px-6 lg:px-20 pt-20">
        <div className="w-full max-w-5xl text-left">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8"
          >
            <ThermometerSnowflake size={18} className="text-[#FAD201]" />
            <span className="text-sm font-bold text-white uppercase tracking-widest">
              Smart Cold-Chain Transport
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-9xl font-black text-white leading-[0.9] mb-8 drop-shadow-2xl tracking-tighter"
          >
            MOVING YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAD201] to-yellow-400">
              HARVEST
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-6 mb-10 pl-2 border-l-4 border-[#FAD201]"
          >
             <h2 className="text-xl md:text-3xl font-bold text-white tracking-wide uppercase">
                Preserving Freshness.<br/>
                <span className="text-gray-300 text-lg md:text-xl font-medium normal-case">From Farm to Market.</span>
             </h2>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.7 }}
             className="flex flex-wrap gap-4"
          >
            <Link to="/services">
              <button className="group relative bg-[#FAD201] hover:bg-white text-black font-extrabold py-4 px-10 rounded-full text-lg shadow-[0_0_30px_rgba(250,210,1,0.3)] transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3">
                <span>Our Services</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            
            <Link to="/contact">
              <button className="px-10 py-4 rounded-full border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-trukGreen transition-all">
                Contact Us
              </button>
            </Link>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
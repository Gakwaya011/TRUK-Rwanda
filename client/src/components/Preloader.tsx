import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) {
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev < 90) return prev + Math.random() * 25;
          return prev;
        });
      }, 300);

      return () => clearInterval(progressInterval);
    } else {
      setProgress(100);
    }
  }, [isLoading]);

  return (
    <AnimatePresence mode='wait'>
      {isLoading && (
        <motion.div
            initial={{ y: 0 }}
            exit={{ 
                y: "-100%", 
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#0d3326] to-[#1a4d3a]"
        >
            <div className="text-center">
                
                {/* 1. BRAND TEXT */}
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-2"
                >
                    TRUK
                </motion.h1>

                {/* 2. SUBTITLE */}
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-[#FAD201] font-bold text-sm tracking-[0.3em] uppercase mb-16"
                >
                    Cold Chain Logistics
                </motion.p>

                {/* 3. ADVANCED SMOOTH LOADER */}
                <div className="mb-16 flex justify-center">
                    <div className="relative w-28 h-28">
                        {/* Gradient rotating circle */}
                        <motion.div
                            className="absolute inset-0 rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                            style={{
                                background: 'conic-gradient(from 0deg, #FAD201, #4ade80, #FAD201)',
                                boxShadow: '0 0 40px rgba(250, 210, 1, 0.5), inset 0 0 40px rgba(250, 210, 1, 0.2)',
                            }}
                        />
                        
                        {/* Inner mask circle */}
                        <div className="absolute inset-2 rounded-full bg-[#0d3326]" />
                        
                        {/* Center glow */}
                        <motion.div
                            className="absolute inset-6 rounded-full bg-gradient-to-br from-[#FAD201] to-green-400"
                            animate={{
                                scale: [0.9, 1.1, 0.9],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                            }}
                            style={{
                                filter: 'blur(8px)',
                                opacity: 0.6,
                            }}
                        />
                    </div>
                </div>

                {/* 4. ADVANCED LOADING BAR */}
                <div className="w-72 h-2 bg-white/10 rounded-full mx-auto overflow-hidden relative mb-8">
                    <motion.div 
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "easeOut" }}
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#FAD201] to-green-400 rounded-full"
                        style={{
                          boxShadow: '0 0 20px rgba(250, 210, 1, 0.8), 0 0 40px rgba(74, 222, 128, 0.4)'
                        }}
                    ></motion.div>
                </div>

                {/* 5. PROGRESS PERCENTAGE */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-white/50 text-xs font-mono tracking-[0.2em]"
                >
                    {Math.round(progress)}% LOADING
                </motion.div>

            </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
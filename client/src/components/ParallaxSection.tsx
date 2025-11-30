import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Props {
  imageUrl: string;
  children: React.ReactNode;
  height?: string; // Optional height prop
}

const ParallaxSection = ({ imageUrl, children, height = "500px" }: Props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Animate from when top enters viewport to when bottom leaves
  });

  // As we scroll down, move the background image up slightly to create the parallax effect
  // Adjust the range [-10%, 10%] to control the speed. A smaller range means a more subtle effect.
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section 
      ref={ref}
      className="relative overflow-hidden flex items-center justify-center"
      style={{ height: height }}
    >
      {/* Background Image Layer */}
      <motion.div
        style={{ 
          y: y, // Apply the parallax movement
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="absolute inset-0 z-0 scale-110" // Scale up slightly to prevent whitespace during movement
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </motion.div>

      {/* Content Layer */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;
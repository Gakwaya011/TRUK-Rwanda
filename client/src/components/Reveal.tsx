import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
}

export const Reveal = ({ children, width = "fit-content", delay = 0.1 }: Props) => {
  const ref = useRef(null);
  // margin: "-75px" means the animation triggers only when the element 
  // is 75px up from the bottom of the screen (not immediately when it touches the edge)
  const isInView = useInView(ref, { once: true, margin: "-75px" }); 
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "visible" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 }, // Starts 50px lower
          visible: { opacity: 1, y: 0 }, // Floats up to original position
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ 
            duration: 0.8, // Slow, cinematic speed
            ease: [0.17, 0.55, 0.55, 1], // Smooth braking curve
            delay: delay 
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
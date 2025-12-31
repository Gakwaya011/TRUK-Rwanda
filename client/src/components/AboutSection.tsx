import React, { useEffect, useRef } from 'react';
import { Reveal } from './Reveal';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

// --- COUNTER COMPONENT (Keep this for the %) ---
const Counter = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 50, damping: 20, duration: 2000 });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toFixed(0) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref} />;
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* LEFT SIDE */}
          <div className="lg:col-span-4 text-left lg:sticky lg:top-32">
            <Reveal width="100%">
                <div>
                    <h2 className="text-4xl md:text-6xl font-black text-trukGreen uppercase tracking-tighter leading-none mb-6">
                        About <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAD201] to-amber-500">
                            TRUK
                        </span>
                    </h2>
                    <div className="h-2 w-20 bg-trukGreen rounded-full"></div>
                </div>
            </Reveal>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-8">
            <Reveal width="100%" delay={0.2}>
                <div className="space-y-8">
                    <p className="text-2xl md:text-3xl text-gray-800 font-medium leading-relaxed">
                        TRUK Rwanda was established with one simple philosophy: that our customers 
                        deserve the highest level of service and reliability.
                    </p>

                    <div className="h-px w-full bg-gray-200"></div>

                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                        We are a logistic and transportation company specialized in perishable goods handling. 
                        Our mission is to regard our customer as the most important person in the company 
                        and foster long-term relationships.
                    </p>

                    {/* KEY STATS ROW */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8">
                        
                        {/* STAT 1: 2020 (Year - Static/Fade In) */}
                        {/* We don't animate the number value, we just reveal the block */}
                        <div>
                            <h4 className="text-4xl md:text-5xl font-black text-trukGreen">
                                2020
                            </h4>
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-2">Established</p>
                        </div>

                        {/* STAT 2: 100% (Quantity - Animated Count) */}
                        {/* This is a quantity, so animation makes it feel "Full" */}
                        <div>
                            <h4 className="text-4xl md:text-5xl font-black text-trukGreen">
                                <Counter value={100} suffix="%" />
                            </h4>
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-2">Reliability</p>
                        </div>

                        {/* STAT 3: 24/7 (Format - Static) */}
                        <div>
                            <h4 className="text-4xl md:text-5xl font-black text-trukGreen">
                                24/7
                            </h4>
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-2">Support</p>
                        </div>

                    </div>
                </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Rocket, Binoculars, ThumbsUp, ShieldCheck, Lightbulb, HeartHandshake, Award, TrendingUp, Users, Globe, Linkedin } from 'lucide-react';
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Reveal } from '../components/Reveal'; 

// --- 1. GLOBAL ASSETS ---
import aboutPage from '../assets/aboutPage.jpg';
const HERO_IMAGE = aboutPage; 
const VALUES_IMAGE = "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop";

// --- 2. TEAM IMPORTS ---
import herveImg from '../assets/herve.jpg';
import bertinImg from '../assets/bertin.jpg';
import justineImg from '../assets/justine.jpg';
import sharonImg from '../assets/sharon.jpg';
import rogerImg from '../assets/roger.jpg';
import kalisaImg from '../assets/kalisa.jpg'; // RESTORED KALISA
import deborahImg from '../assets/deborah.jpeg';
import chelseaImg from '../assets/chelsea1.jpeg';

// --- COUNTER COMPONENT ---
const Counter = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
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

// --- DATA ---
const values = [
  { title: 'Reliability', icon: <ThumbsUp size={28} />, desc: 'Consistent performance you can trust, every single time.' },
  { title: 'Integrity', icon: <ShieldCheck size={28} />, desc: 'Honesty and transparency in all our business dealings.' },
  { title: 'Innovation', icon: <Lightbulb size={28} />, desc: 'Constantly finding better, smarter ways to serve you.' },
  { title: 'Commitment', icon: <HeartHandshake size={28} />, desc: 'Deeply invested in the success of our clients and community.' },
  { title: 'Excellence', icon: <Award size={28} />, desc: 'Striving for the highest quality standards in everything we do.' },
];

const team = [
  // LEADERSHIP
  { name: 'Herve Tuyishime', role: 'CEO', image: herveImg },
  { name: 'Bertin Nsengiyumva', role: 'Managing Director', image: bertinImg },
  
  // CHELSEA (Placeholder)
  { 
    name: 'Chelsea Ellingsen', 
    role: 'Investments & Sustainability Exec', 
    image: chelseaImg
  },
  
  { name: 'Justine Umuhoza', role: 'HR Manager', image: justineImg },
  
  // MANAGEMENT
  { name: 'Sharon Zitoni', role: 'Operations Associate', image: sharonImg },
  { name: 'Roger Nshimiyimana', role: 'Accountant', image: rogerImg },
  
  // KALISA (Restored Real Image)
  { name: 'Kalisa Karangwa', role: 'Fleet Manager', image: kalisaImg },
  
  { name: 'Deborah Robwa', role: 'AG Project Manager', image: deborahImg },
];

const stats = [
  { icon: <TrendingUp />, value: 2020, suffix: "", label: "Founded" },
  { icon: <Users />, value: 50, suffix: "+", label: "Expert Team Members" },
  { icon: <Globe />, value: 3, suffix: "", label: "Countries Served" },
  { icon: <Award />, value: 100, suffix: "%", label: "Client Satisfaction Goal" },
];

const AboutPage = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]); 

  return (
    <div className="font-sans bg-white">
      <Navbar />
      
      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[#0d3326]">
        <motion.div 
          style={{ y, backgroundImage: `url('${HERO_IMAGE}')` }}
          className="absolute inset-0 bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-[#0d3326]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d3326] via-transparent to-black/30"></div>

        <div className="relative z-10 text-center px-4 mt-20">
          <Reveal width="100%">
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-6 drop-shadow-2xl leading-none">
              About <span className="text-[#FAD201]">TRUK</span>
            </h1>
            <div className="h-2 w-24 bg-[#FAD201] mx-auto rounded-full mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-lg">
               Pioneering cold-chain logistics in East Africa.
            </p>
          </Reveal>
        </div>
      </div>

      {/* --- STORY & STATS SECTION --- */}
      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div>
                <Reveal>
                    <h2 className="text-3xl font-bold text-trukGreen mb-6 uppercase tracking-tight">Our Journey</h2>
                </Reveal>
                <Reveal delay={0.2}>
                    <div className="prose prose-lg text-gray-700 leading-relaxed">
                        <p className="mb-6">
                            TRUK Rwanda Ltd was born from a critical need: reliable, temperature-controlled transport in East Africa. Formerly known as Paniel Transport and Logistics, we established ourselves in **2020** with a clear mission to reduce food waste and support agribusiness growth.
                        </p>
                        <p>
                            Today, we have grown into one of Rwanda's most trusted logistics partners, combining state-of-the-art refrigerated fleet technology with deep local expertise. Our success is built on the understanding that every shipment we handle is vital to our client's business.
                        </p>
                    </div>
                </Reveal>
            </div>

            <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, idx) => (
                    <Reveal key={idx} delay={idx * 0.1}>
                        <div className="bg-gray-50 p-8 rounded-3xl text-center border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                            <div className="text-trukGreen mb-4 flex justify-center group-hover:scale-110 transition-transform">
                                {React.cloneElement(stat.icon, { size: 32 })}
                            </div>
                            <div className="text-4xl font-black text-gray-900 mb-2">
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-sm font-bold text-gray-500 uppercase tracking-wider">{stat.label}</div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
      </section>

      {/* --- MISSION & VISION --- */}
      <section className="relative py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <Reveal width="100%">
            <div className="bg-white p-10 rounded-[2rem] shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-trukGreen/10 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:bg-trukGreen/20"></div>
              <div className="w-16 h-16 bg-trukGreen text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg relative z-10">
                <Rocket size={32} />
              </div>
              <h3 className="text-2xl font-bold text-trukGreen mb-4 uppercase tracking-wide">Our Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed font-medium relative z-10">
                To deliver safe, efficient, and reliable cold-chain logistics solutions that preserve product quality, reduce food waste, and support business growth across the region.
              </p>
            </div>
          </Reveal>

          <Reveal width="100%" delay={0.2}>
            <div className="bg-white p-10 rounded-[2rem] shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FAD201]/20 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:bg-[#FAD201]/30"></div>
              <div className="w-16 h-16 bg-[#FAD201] text-trukGreen rounded-2xl flex items-center justify-center mb-8 shadow-lg relative z-10">
                <Binoculars size={32} />
              </div>
              <h3 className="text-2xl font-bold text-trukGreen mb-4 uppercase tracking-wide">Our Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed font-medium relative z-10">
                To become East Africa's most trusted cold-chain logistics partner, driving innovation and empowering farmers, agribusinesses, and industries through world-class solutions.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* --- VALUES --- */}
      <section className="relative py-24 bg-[#0d3326] overflow-hidden">
         <div 
            className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-cover bg-center opacity-10 lg:opacity-60" 
            style={{ backgroundImage: `url('${VALUES_IMAGE}')` }}
         >
             <div className="absolute inset-0 bg-[#0d3326]/60 lg:bg-[#0d3326]/80 lg:bg-gradient-to-r lg:from-[#0d3326] lg:to-transparent"></div>
         </div>

         <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
             <div className="text-white">
                 <Reveal>
                     <h2 className="text-4xl font-extrabold mb-6 uppercase tracking-tight">Our Core Values</h2>
                     <div className="h-1.5 w-20 bg-[#FAD201] rounded-full mb-8"></div>
                 </Reveal>
                 <Reveal delay={0.2}>
                     <p className="text-xl text-gray-300 font-light leading-relaxed">
                         These principles guide every decision we make. They are the foundation of our culture and our promise to you.
                     </p>
                 </Reveal>
             </div>
             <div className="grid gap-6">
                 {values.map((val, idx) => (
                     <Reveal key={idx} delay={idx * 0.1} width="100%">
                         <div className="flex items-start gap-6 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all duration-300 hover:-translate-x-2 group">
                             <div className="text-[#FAD201] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform">
                                 {val.icon}
                             </div>
                             <div>
                                 <h3 className="text-xl font-bold text-white mb-2">{val.title}</h3>
                                 <p className="text-gray-300 text-sm leading-relaxed">{val.desc}</p>
                             </div>
                         </div>
                     </Reveal>
                 ))}
             </div>
         </div>
      </section>

      {/* --- MEET OUR TEAM --- */}
      <section className="py-32 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Reveal width="100%">
            <h2 className="text-3xl font-bold text-trukGreen mb-4 uppercase tracking-tight">Meet Our Team</h2>
            <div className="h-1.5 w-20 bg-[#FAD201] mx-auto rounded-full mb-16"></div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="group relative overflow-hidden rounded-[2rem] shadow-xl aspect-[3/4] bg-white">
                  {/* Image */}
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    // RESTORED: Grayscale by default, Color on Hover
                    // ADDED: mix-blend-multiply to fix "shiny/reflected" light on white backgrounds
                    className="w-full h-full object-cover object-top transition-all duration-700 filter grayscale group-hover:grayscale-0 group-hover:scale-110 mix-blend-multiply group-hover:mix-blend-normal"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d3326] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                  
                  {/* Content (No LinkedIn) */}
                  <div className="absolute bottom-0 left-0 w-full p-6 text-left transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-white text-lg leading-tight mb-1">{member.name}</h3>
                    <p className="text-[#FAD201] text-xs font-bold uppercase tracking-widest">{member.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
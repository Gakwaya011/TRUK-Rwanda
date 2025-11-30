import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Rocket, Binoculars, ThumbsUp, ShieldCheck, Lightbulb, HeartHandshake, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal } from '../components/Reveal'; 

// IMPORT THE BACKGROUND IMAGE
import valuesBg from '../assets/values-bg.jpg';

const AboutPage = () => {
  
  const values = [
    { title: 'Reliability', icon: <ThumbsUp size={32} /> },
    { title: 'Integrity', icon: <ShieldCheck size={32} /> },
    { title: 'Innovation', icon: <Lightbulb size={32} /> },
    { title: 'Customer Commitment', icon: <HeartHandshake size={32} /> },
    { title: 'Excellence', icon: <Award size={32} /> },
  ];

  const team = [
    { 
      name: 'Herve Tuyishime', 
      role: 'CEO', 
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop' 
    },
    { 
      name: 'Gilles Uwimpaye', 
      role: 'CFO', 
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop' 
    },
    { 
      name: 'Nsimba Samuel', 
      role: 'Operations Manager', 
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop' 
    },
    { 
      name: 'Rukinga Theophille', 
      role: 'Fleet Manager', 
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop' 
    },
  ];

  return (
    <div className="font-sans bg-white">
      
      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-[65vh] min-h-[500px] flex flex-col bg-white">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2940&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </motion.div>

        <div className="relative z-50 pt-6 px-4 sm:px-6 lg:px-8 w-full">
          <Navbar />
        </div>

        <div className="relative z-10 flex-grow flex items-center justify-center pb-10">
          <Reveal delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white uppercase tracking-widest drop-shadow-2xl mt-12">
              About Us
            </h1>
          </Reveal>
        </div>
      </div>


      {/* --- WHO WE ARE --- */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none bg-repeat"
          style={{ 
            backgroundImage: "url('https://img.freepik.com/premium-vector/vegetables-seamless-pattern-healthy-food-background-vector-illustration_536356-429.jpg')",
            backgroundSize: "400px" 
          }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Reveal width="100%">
            <h2 className="text-3xl font-bold text-trukGreen mb-8 uppercase tracking-tight">Who We Are</h2>
          </Reveal>
          <Reveal width="100%" delay={0.2}>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
              TRUK Rwanda Ltd is a cold-chain logistics company dedicated to providing high-quality,
              temperature-controlled transportation and storage solutions. Formerly known as Paniel
              Transport and Logistics, the company was established in 2020 and has grown into one
              of Rwanda's most trusted logistics partners.
            </p>
          </Reveal>
        </div>
      </section>


      {/* --- MISSION & VISION --- */}
      <section className="relative py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-10">
          
          <Reveal width="100%">
            <div className="bg-[#EAEAEA] rounded-3xl p-10 text-center relative shadow-sm hover:shadow-md transition-shadow mt-10 md:mt-0">
              <div className="w-24 h-24 bg-trukGreen rounded-full flex items-center justify-center mx-auto -mt-20 border-8 border-gray-50 mb-8 shadow-lg">
                <Rocket className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-trukGreen mb-4">Our Mission</h3>
              <p className="text-gray-700 font-medium leading-relaxed">
                To deliver safe, efficient, and reliable cold-chain logistics solutions that
                preserve product quality, reduce food waste, and support business growth
                across the region.
              </p>
            </div>
          </Reveal>

          <Reveal width="100%" delay={0.3}>
            <div className="bg-[#EAEAEA] rounded-3xl p-10 text-center relative shadow-sm hover:shadow-md transition-shadow mt-10 md:mt-0">
              <div className="w-24 h-24 bg-trukGreen rounded-full flex items-center justify-center mx-auto -mt-20 border-8 border-gray-50 mb-8 shadow-lg">
                <Binoculars className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-trukGreen mb-4">Our Vision</h3>
              <p className="text-gray-700 font-medium leading-relaxed">
                To become East Africa's most trusted cold-chain logistics partner, driving
                innovation and empowering farmers, agribusinesses, and industries through
                world-class logistics solutions.
              </p>
            </div>
          </Reveal>

        </div>
      </section>


      {/* --- OUR VALUES (FIXED BACKGROUND REVEAL) --- */}
      {/* 'bg-fixed' keeps the image static while the page scrolls, creating the window effect */}
      <section 
        className="relative py-32 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${valuesBg})` }}
      >
        {/* Dark Overlay - Makes text readable */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          
          <Reveal width="100%">
            <h2 className="text-4xl font-extrabold mb-16 uppercase tracking-tight drop-shadow-lg">
              Our Values
            </h2>
          </Reveal>
          
          <div className="flex flex-wrap justify-center gap-10">
            {values.map((val, idx) => (
              <Reveal key={idx} delay={idx * 0.15}>
                {/* Glassmorphism Card Effect:
                   - bg-white/10: Slight white tint
                   - backdrop-blur-sm: Blurs the image behind the card
                   - border-white/20: Subtle border
                */}
                <div className="flex flex-col items-center justify-center p-6 w-40 md:w-48 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group hover:-translate-y-2">
                  
                  {/* Icon */}
                  <div className="text-trukYellow mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {val.icon}
                  </div>
                  
                  {/* Text */}
                  <span className="font-bold text-white text-sm md:text-base tracking-wide text-center">
                    {val.title}
                  </span>

                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* --- MEET OUR TEAM --- */}
      <section className="py-24 bg-[#EAEAEA]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Reveal width="100%">
            <h2 className="text-3xl font-bold text-trukGreen mb-16 uppercase tracking-tight">Meet Our Team</h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {team.map((member, idx) => (
              <Reveal key={idx} delay={idx * 0.2}>
                <div className="flex flex-col items-center group">
                  <div className="relative w-48 h-48 mb-6 transition-transform duration-300 transform group-hover:scale-105">
                    <div className="absolute inset-0 rounded-full border-4 border-[#116D3B] z-20 pointer-events-none"></div>
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full rounded-full object-cover shadow-xl border-4 border-white"
                    />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
                  <p className="text-gray-600 text-sm font-medium">{member.role}</p>
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
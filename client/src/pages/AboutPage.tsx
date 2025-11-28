import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Rocket, Binoculars, ThumbsUp, ShieldCheck, Lightbulb, HeartHandshake, Award } from 'lucide-react';

const AboutPage = () => {
  
  // DATA FOR VALUES
  const values = [
    { title: 'Reliability', icon: <ThumbsUp size={32} /> },
    { title: 'Integrity', icon: <ShieldCheck size={32} /> },
    { title: 'Innovation', icon: <Lightbulb size={32} /> },
    { title: 'Customer Commitment', icon: <HeartHandshake size={32} /> },
    { title: 'Excellence', icon: <Award size={32} /> },
  ];

  // DATA FOR TEAM
  // TIP: To use real photos, put images in 'client/public/' and change image to '/photo.jpg'
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
      {/* Feedback Addressed: Increased height (h-[65vh]) and added margin-top to title so it breathes */}
      <div className="relative w-full h-[65vh] min-h-[500px] flex flex-col">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2940&auto=format&fit=crop')" }}
        >
          {/* Darker overlay for better contrast against white text */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Navbar */}
        <div className="relative z-50 pt-6 px-4 sm:px-6 lg:px-8 w-full">
          <Navbar />
        </div>

        {/* Hero Title - Centered & Breathing */}
        <div className="relative z-10 flex-grow flex items-center justify-center pb-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white uppercase tracking-widest drop-shadow-2xl mt-12">
            About Us
          </h1>
        </div>
      </div>


      {/* --- WHO WE ARE (With Produce Texture) --- */}
      <section className="relative py-24 bg-white overflow-hidden">
        
        {/* TEXTURE BACKGROUND: Faint leafy greens pattern (3% Opacity) */}
        {/* Feedback Addressed: Removes the "plain white" look */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none bg-repeat"
          style={{ 
            backgroundImage: "url('https://img.freepik.com/premium-vector/vegetables-seamless-pattern-healthy-food-background-vector-illustration_536356-429.jpg')",
            backgroundSize: "400px" 
          }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-trukGreen mb-8 uppercase tracking-tight">Who We Are</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
            TRUK Rwanda Ltd is a cold-chain logistics company dedicated to providing high-quality,
            temperature-controlled transportation and storage solutions. Formerly known as Paniel
            Transport and Logistics, the company was established in 2020 and has grown into one
            of Rwanda's most trusted logistics partners.
          </p>
        </div>
      </section>


      {/* --- MISSION & VISION --- */}
      <section className="relative py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-10">
          
          {/* Mission Card */}
          <div className="bg-[#EAEAEA] rounded-3xl p-10 text-center relative shadow-sm hover:shadow-md transition-shadow mt-10 md:mt-0">
            {/* Floating Green Icon Circle */}
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

          {/* Vision Card */}
          <div className="bg-[#EAEAEA] rounded-3xl p-10 text-center relative shadow-sm hover:shadow-md transition-shadow mt-10 md:mt-0">
             {/* Floating Green Icon Circle */}
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

        </div>
      </section>


      {/* --- OUR VALUES (With Texture) --- */}
      <section className="relative py-24 bg-white">
        
        {/* TEXTURE REPEATED */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ 
            backgroundImage: "url('https://img.freepik.com/premium-vector/vegetables-seamless-pattern-healthy-food-background-vector-illustration_536356-429.jpg')",
            backgroundSize: "400px" 
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-trukGreen mb-16 uppercase tracking-tight">Our Values</h2>
          
          <div className="flex flex-wrap justify-center gap-12 md:gap-20">
            {values.map((val, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="w-20 h-20 rounded-full border-2 border-trukGreen flex items-center justify-center text-trukGreen bg-white transition-all duration-300 group-hover:bg-trukGreen group-hover:text-white shadow-sm hover:shadow-lg">
                  {val.icon}
                </div>
                <span className="mt-4 font-bold text-gray-800 text-sm md:text-base">{val.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* --- MEET OUR TEAM --- */}
      <section className="py-24 bg-[#EAEAEA]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-trukGreen mb-16 uppercase tracking-tight">Meet Our Team</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {team.map((member, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                
                {/* IMAGE CONTAINER */}
                <div className="relative w-48 h-48 mb-6 transition-transform duration-300 transform group-hover:scale-105">
                  {/* The Green Border Ring (matches UI design) */}
                  <div className="absolute inset-0 rounded-full border-4 border-[#116D3B] z-20 pointer-events-none"></div>
                  
                  {/* The Actual Image */}
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full rounded-full object-cover shadow-xl border-4 border-white"
                  />
                </div>

                <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
                <p className="text-gray-600 text-sm font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;
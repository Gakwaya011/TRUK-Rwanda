import React from 'react';
import { Thermometer, Map, Sprout, Users, Snowflake } from 'lucide-react';
import { Reveal } from './Reveal'; 

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Real-time temperature monitoring',
      icon: <Thermometer size={32} strokeWidth={1.5} />,
    },
    {
      title: 'Nationwide and regional coverage',
      icon: <Map size={32} strokeWidth={1.5} />,
    },
    {
      title: 'Reduced product spoilage',
      icon: <Sprout size={32} strokeWidth={1.5} />,
    },
    {
      title: 'Experienced management team',
      icon: <Users size={32} strokeWidth={1.5} />,
    },
    {
      title: 'Modern refrigerated fleet',
      icon: <Snowflake size={32} strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="py-24 bg-white font-sans">
      {/* Full width container */}
      <div className="w-full px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-24">
          <Reveal width="100%">
            <div className="flex flex-col items-center">
              <h2 className="text-3xl md:text-5xl font-extrabold text-trukGreen uppercase tracking-tight">
                Why Choose Us
              </h2>
              <div className="w-24 h-2 bg-[#FAD201] mt-6 rounded-full"></div>
            </div>
          </Reveal>
        </div>

        {/* Icons Grid - Spreads full width */}
        {/* 'justify-around' pushes items to fill the space */}
        <div className="flex flex-wrap justify-between gap-8 md:gap-0 text-center w-full">
          {features.map((feature, index) => (
            <Reveal key={index} delay={index * 0.15}>
              <div className="flex flex-col items-center group cursor-default w-full md:w-auto">
                
                {/* Circle Icon Container */}
                <div className="w-28 h-28 rounded-full border-2 border-trukGreen flex items-center justify-center text-trukGreen mb-6 transition-all duration-300 group-hover:bg-trukGreen group-hover:text-white group-hover:shadow-xl bg-white transform group-hover:-translate-y-2">
                  {feature.icon}
                </div>

                {/* Text */}
                <h3 className="text-lg md:text-xl font-bold text-gray-800 max-w-[200px] leading-tight">
                  {feature.title}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
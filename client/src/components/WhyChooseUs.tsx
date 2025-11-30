import React from 'react';
import { Thermometer, Map, Sprout, Users, Snowflake } from 'lucide-react';
import { Reveal } from './Reveal'; // Import the animation wrapper

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
    <section className="py-20 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header - Slides up first */}
        <div className="text-center mb-16">
          <Reveal width="100%">
            <div className="flex flex-col items-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-trukGreen uppercase tracking-tight">
                Why Choose Us
              </h2>
              {/* Yellow separator line */}
              <div className="w-24 h-1.5 bg-[#FAD201] mt-6 rounded-full"></div>
            </div>
          </Reveal>
        </div>

        {/* Icons Grid - Staggered animation */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          {features.map((feature, index) => (
            // delay={index * 0.15} creates a wave effect from left to right
            <Reveal key={index} delay={index * 0.15}>
              <div className="flex flex-col items-center group cursor-default">
                
                {/* Circle Icon Container */}
                <div className="w-24 h-24 rounded-full border-[1.5px] border-trukGreen flex items-center justify-center text-trukGreen mb-6 transition-all duration-300 group-hover:bg-trukGreen group-hover:text-white group-hover:shadow-lg bg-white">
                  {feature.icon}
                </div>

                {/* Text */}
                <h3 className="text-sm md:text-base font-bold text-gray-800 max-w-[150px] leading-tight">
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
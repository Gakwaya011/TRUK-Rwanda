import React from 'react';
import { Thermometer, Map, Sprout, Users, Snowflake } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Real-time temperature monitoring',
      // Thermometer icon for temperature control
      icon: <Thermometer size={32} strokeWidth={1.5} />,
    },
    {
      title: 'Nationwide and regional coverage',
      // Map icon to show coverage area
      icon: <Map size={32} strokeWidth={1.5} />,
    },
    {
      title: 'Reduced product spoilage',
      // Sprout icon representing fresh produce/agriculture
      icon: <Sprout size={32} strokeWidth={1.5} />,
    },
    {
      title: 'Experienced management team',
      // Users icon for the team
      icon: <Users size={32} strokeWidth={1.5} />,
    },
    {
      title: 'Modern refrigerated fleet',
      // Snowflake icon representing Cold Chain/Refrigeration
      icon: <Snowflake size={32} strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="py-20 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-trukGreen uppercase tracking-tight">
            Why Choose Us
          </h2>
          {/* Yellow separator line */}
          <div className="w-24 h-1.5 bg-[#FAD201] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Icons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center group cursor-default">
              
              {/* Circle Icon Container - Designed to match the UI thin green border */}
              <div className="w-24 h-24 rounded-full border-[1.5px] border-trukGreen flex items-center justify-center text-trukGreen mb-6 transition-all duration-300 group-hover:bg-trukGreen group-hover:text-white group-hover:shadow-lg bg-white">
                {feature.icon}
              </div>

              {/* Text */}
              <h3 className="text-sm md:text-base font-bold text-gray-800 max-w-[150px] leading-tight">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
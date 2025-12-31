import React from 'react';
import { Thermometer, Map, Leaf, Users, Truck } from 'lucide-react';
import { Reveal } from './Reveal';

const features = [
  { icon: <Thermometer size={32} />, title: "Real-time Monitoring", desc: "Live temperature tracking for total peace of mind." },
  { icon: <Map size={32} />, title: "Regional Coverage", desc: "Seamless logistics across Rwanda and East Africa." },
  { icon: <Leaf size={32} />, title: "Reduced Spoilage", desc: "Advanced cooling tech minimizes product loss." },
  { icon: <Users size={32} />, title: "Expert Team", desc: "Managed by logistics veterans with decades of experience." },
  { icon: <Truck size={32} />, title: "Modern Fleet", desc: "Reliable, well-maintained refrigerated vehicles." }
];

const WhyChooseUs = () => {
  return (
    // CHANGED: bg-[#114232] (This is the official TRUK Green)
    // It is lighter than the black-green, but still rich and premium.
    <section className="py-24 bg-[#114232] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        
        <Reveal width="100%">
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight">
            Why Choose <span className="text-[#FAD201]">TRUK?</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#FAD201] mx-auto rounded-full mb-16"></div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
          {features.map((feature, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="flex flex-col items-center group">
                
                {/* Icon: White Outline, fills with Yellow on hover */}
                <div className="w-20 h-20 rounded-full border-2 border-white/20 group-hover:bg-[#FAD201] group-hover:border-[#FAD201] group-hover:text-black flex items-center justify-center mb-6 transition-all duration-500">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed max-w-[200px] mx-auto group-hover:text-white transition-colors">
                  {feature.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
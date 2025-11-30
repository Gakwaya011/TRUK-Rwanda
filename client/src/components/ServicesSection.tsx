import React from 'react';
import { Truck, Warehouse, Handshake } from 'lucide-react';
import { Reveal } from './Reveal'; 

const ServicesSection = () => {
  const services = [
    {
      title: 'Transport',
      icon: <Truck size={32} className="text-white" />,
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1000&auto=format&fit=crop', 
      description: 'Reliable refrigerated transport across the region.',
    },
    {
      title: 'Logistics',
      icon: <Warehouse size={32} className="text-white" />,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop', 
      description: 'State-of-the-art cold storage and inventory management.',
    },
    {
      title: 'Agri-Business',
      icon: <Handshake size={32} className="text-white" />,
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1000&auto=format&fit=crop', 
      description: 'Connecting farmers to markets with minimal spoilage.',
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header - Drifts in slowly when you scroll to it */}
        <div className="text-center mb-24">
          <Reveal width="100%">
            <div className="flex flex-col items-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-trukGreen uppercase tracking-tight">
                Our Services
              </h2>
              <div className="w-24 h-1.5 bg-[#FAD201] mt-6 rounded-full"></div>
            </div>
          </Reveal>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            // The delay creates a "staggered" effect (1st card, then 2nd, then 3rd)
            <Reveal key={index} delay={index * 0.2}>
              
              {/* Added mt-12 to make room for the floating icon */}
              <div className="group relative h-80 mt-12 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                
                {/* 1. FLOATING ICON (Sitting on the top border) */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-24 h-24 bg-trukGreen rounded-full flex items-center justify-center border-8 border-gray-50 shadow-lg transition-transform duration-500 group-hover:-translate-y-2">
                    {service.icon}
                  </div>
                </div>

                {/* 2. BACKGROUND IMAGE */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                   <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  ></div>
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-500"></div>
                </div>

                {/* 3. CONTENT */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-6 pt-12">
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">{service.title}</h3>
                  
                  {/* Description fades in only on hover */}
                  <p className="text-gray-100 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 ease-out">
                    {service.description}
                  </p>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
import React from 'react';
import { Truck, Warehouse, Handshake } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: 'Transport',
      icon: <Truck size={32} className="text-trukGreen" />,
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1000&auto=format&fit=crop', // Truck image
      description: 'Reliable refrigerated transport across the region.',
    },
    {
      title: 'Logistics',
      icon: <Warehouse size={32} className="text-trukGreen" />,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop', // Warehouse image
      description: 'State-of-the-art cold storage and inventory management.',
    },
    {
      title: 'Agri-Business',
      icon: <Handshake size={32} className="text-trukGreen" />,
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1000&auto=format&fit=crop', // Agriculture image
      description: 'Connecting farmers to markets with minimal spoilage.',
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-trukGreen uppercase tracking-tight">
            Our Services
          </h2>
          <div className="w-24 h-1.5 bg-[#FAD201] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="group relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${service.image}')` }}
              ></div>

              {/* Green Overlay (Always visible but gets darker on hover) */}
              <div className="absolute inset-0 bg-trukGreen/70 group-hover:bg-trukGreen/80 transition-colors duration-300"></div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-6">
                
                {/* Floating Icon Circle */}
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-md transform group-hover:-translate-y-2 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                
                {/* Description (Optional - I added this for better UX) */}
                <p className="text-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
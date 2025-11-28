import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ServicesPage = () => {
  
  const servicesData = [
    {
      title: "Temperature-Controlled Transportation",
      description: "We provide transport solutions for goods requiring stable temperature conditions, including fruits, vegetables, dairy, meat, fish, beverages, pharmaceuticals, and more.",
      // Using a vector-style truck image similar to your design
      image: "https://www.kd-transport.cz/data/services/frigo.png"
    },
    {
      title: "Cold Storage Solutions",
      description: "We offer safe and reliable cold storage facilities for temporary or extended storage. Our solutions support businesses looking to maintain product freshness before distribution.",
      // Image of veg in fridge
      image: "https://media.istockphoto.com/id/2209841249/photo/refrigeration-chamber-with-close-up-of-fruits-and-vegetables-in-the-crates.jpg?s=612x612&w=0&k=20&c=CS28iKyYfuXcINu4kQ_Ck_VQQWJR2GJdpuI1GREepAU="
    },
    {
      title: "Farm-to-Market Services",
      description: "We link farmers directly to markets by transporting goods from farms to the Kigali Wholesale Market and other distribution points across the country.",
      // Image of farmer holding box
      image: "https://www.shutterstock.com/image-photo/young-beautiful-customer-shopping-fresh-260nw-2412962977.jpg"
    },
    {
      title: "Cross-Border Logistics",
      description: "We provide import and export transportation services across East and Southern Africa, covering: Uganda, Kenya, Tanzania, DRC, Zambia, Malawi, Mozambique, Zimbabwe, and Burundi.",
      // Image of shipping containers/port
      image: "https://media.licdn.com/dms/image/v2/D5612AQG9DBBI47S7zg/article-cover_image-shrink_720_1280/B56ZbtnCotG4AM-/0/1747743166045?e=2147483647&v=beta&t=ahuGhTmVnYnJgMqrGJiThG4w1-cnVl2QEd0obFSvtM0"
    }
  ];

  return (
    <div className="font-sans bg-white">
      
      {/* --- HERO HEADER --- */}
      {/* Reusing the style from home but shorter (60vh) */}
      <div className="relative w-full h-[60vh] min-h-[400px] flex flex-col">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2940&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        </div>

        <div className="relative z-50 pt-4 px-4 sm:px-6 lg:px-8 w-full">
          <Navbar />
        </div>

        <div className="relative z-10 flex-grow flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white uppercase tracking-wider drop-shadow-lg">
            Our Services
          </h1>
        </div>
      </div>

      {/* --- SERVICES GRID --- */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-trukGreen uppercase tracking-tight">
            Our Services
          </h2>
          {/* Note: In your image, there is no yellow line here, just the text, so I kept it clean */}
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {servicesData.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              
              {/* Image Card */}
              <div className="w-full h-64 md:h-72 overflow-hidden rounded-2xl shadow-lg mb-8 group">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Text Content */}
              <h3 className="text-xl md:text-2xl font-bold text-trukGreen mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-lg mx-auto">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Reusing the Footer we built */}
      <Footer />
    </div>
  );
};

export default ServicesPage;
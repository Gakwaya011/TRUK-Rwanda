import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowUpRight } from 'lucide-react'; 
import { motion } from 'framer-motion'; // Using direct motion

// IMPORTS
import truckImage from '../assets/service-truck.jpg';
import farmerImage from '../assets/service-farmer.jpg';

const ServicesPage = () => {
  
  const servicesData = [
    {
      id: 1,
      title: "Refrigerated Transport",
      category: "Logistics",
      description: "We provide transport solutions for goods requiring stable temperature conditions, including fruits, vegetables, dairy, meat, fish, beverages, pharmaceuticals, and more.",
      image: truckImage 
    },
    {
      id: 2,
      title: "Cold Storage Solutions",
      category: "Warehousing",
      description: "We offer safe and reliable cold storage facilities for temporary or extended storage. Our solutions support businesses looking to maintain product freshness before distribution.",
      image: "https://media.istockphoto.com/id/2209841249/photo/refrigeration-chamber-with-close-up-of-fruits-and-vegetables-in-the-crates.jpg?s=612x612&w=0&k=20&c=CS28iKyYfuXcINu4kQ_Ck_VQQWJR2GJdpuI1GREepAU="
    },
    {
      id: 3,
      title: "Farm-to-Market",
      category: "Agri-Business",
      description: "We link farmers directly to markets by transporting goods from farms to the Kigali Wholesale Market and other distribution points across the country.",
      image: farmerImage
    },
    {
      id: 4,
      title: "Cross-Border Trade",
      category: "International",
      description: "We provide import and export transportation services across East and Southern Africa, covering Uganda, Kenya, Tanzania, DRC, Zambia, Malawi, Mozambique, and Burundi.",
      image: "https://media.licdn.com/dms/image/v2/D5612AQG9DBBI47S7zg/article-cover_image-shrink_720_1280/B56ZbtnCotG4AM-/0/1747743166045?e=2147483647&v=beta&t=ahuGhTmVnYnJgMqrGJiThG4w1-cnVl2QEd0obFSvtM0"
    }
  ];

  return (
    <div className="font-sans bg-gray-50">
      
      {/* --- HERO HEADER --- */}
      <div className="relative w-full h-[50vh] min-h-[400px] flex flex-col">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2940&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>

        <div className="relative z-50 pt-4 px-4 sm:px-6 lg:px-8 w-full">
          <Navbar />
        </div>

        <div className="relative z-10 flex-grow flex items-center px-6 lg:px-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-trukYellow font-bold tracking-widest uppercase mb-2">What we do</p>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter drop-shadow-2xl">
              Our Services
            </h1>
          </motion.div>
        </div>
      </div>

      {/* --- CINEMATIC CARDS GRID --- */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            
            // USING DIRECT MOTION.DIV HERE INSTEAD OF REVEAL COMPONENT
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }} // Trigger slightly before element is fully in view
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              
              {/* CARD CONTAINER */}
              <div className="group relative h-[500px] w-full overflow-hidden rounded-[2rem] shadow-2xl cursor-pointer bg-gray-900">
                
                {/* 1. BACKGROUND IMAGE */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url('${service.image}')` }}
                ></div>

                {/* 2. DARK OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                {/* 3. CONTENT AREA */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  
                  {/* Top Right Arrow Icon */}
                  <div className="absolute top-8 right-8 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 transform translate-x-12 -translate-y-12 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <ArrowUpRight size={24} />
                  </div>

                  {/* Category Tag */}
                  <span className="text-trukYellow font-bold tracking-widest text-sm uppercase mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {service.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {service.title}
                  </h3>

                  {/* Description (Slides up and fades in on hover) */}
                  <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-700 ease-in-out overflow-hidden">
                    <p className="text-gray-300 text-lg leading-relaxed border-l-2 border-trukYellow pl-4 mb-4">
                      {service.description}
                    </p>
                  </div>

                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
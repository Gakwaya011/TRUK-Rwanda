import React from 'react';
import { Truck, Warehouse, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from './Reveal'; 

// 1. IMPORT THE LOCAL IMAGE HERE
// (Make sure the filename matches exactly what is in your folder)
import truckImg from '../assets/truck-highway-sunny-sky.jpg';

const ServicesSection = () => {
  return (
    <section id="services" className="bg-white">
      
      {/* HEADER SECTION */}
      <div className="py-20 text-center px-6">
        <Reveal width="100%">
           <h2 className="text-4xl md:text-5xl font-black text-trukGreen uppercase tracking-tight mb-4">
              OUR SERVICES
           </h2>
           <div className="w-20 h-1.5 bg-[#FAD201] mx-auto rounded-full mb-6"></div>
           <p className="text-gray-500 max-w-2xl mx-auto text-lg">
             We specialize in keeping your perishable goods fresh with premium transport and storage solutions.
           </p>
        </Reveal>
      </div>

      {/* --- SERVICE 1: TRANSPORT --- */}
      <div className="w-full flex flex-col lg:flex-row">
        
        {/* IMAGE SIDE (Left) */}
        <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px] relative overflow-hidden group">
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
          
          {/* 2. USE THE IMPORTED VARIABLE HERE */}
          <img 
            src={truckImg} 
            alt="Transport"
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
          />
        </div>

        {/* CONTENT SIDE (Right) */}
        <div className="w-full lg:w-1/2 bg-gray-50 flex items-center p-8 lg:p-24">
          <Reveal>
            <div className="max-w-xl">
              <div className="w-16 h-16 bg-[#FAD201] rounded-2xl flex items-center justify-center mb-8 text-black shadow-md">
                <Truck size={32} />
              </div>
              <h3 className="text-4xl font-black text-trukGreen mb-6 uppercase">
                Transport
              </h3>
              <p className="text-gray-600 text-xl leading-relaxed mb-10">
                A modern fleet of temperature-controlled trucks ensuring your produce arrives fresh. We handle full truckloads (FTL) and consolidated cargo across the entire East African region.
              </p>
              <Link to="/services" className="inline-flex items-center gap-3 text-trukGreen font-bold uppercase tracking-widest hover:text-[#FAD201] transition-colors border-b-2 border-trukGreen pb-1 hover:border-[#FAD201]">
                View Transport Details <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      {/* --- SERVICE 2: LOGISTICS --- */}
      <div className="w-full flex flex-col lg:flex-row-reverse">
        
        {/* IMAGE SIDE (Right) */}
        <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px] relative overflow-hidden group">
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
          <img 
            src="https://africasupplychainmag.com/wp-content/uploads/2023/08/Nigeria-needs-a-logistics-revolution-to-prepare-for-the-free-trade-agreement-1.jpg" 
            alt="Logistics"
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
          />
        </div>

        {/* CONTENT SIDE (Left) */}
        <div className="w-full lg:w-1/2 bg-[#114232] text-white flex items-center p-8 lg:p-24">
          <Reveal>
            <div className="max-w-xl">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 text-trukGreen shadow-md">
                <Warehouse size={32} />
              </div>
              <h3 className="text-4xl font-black text-white mb-6 uppercase">
                Logistics
              </h3>
              <p className="text-gray-300 text-xl leading-relaxed mb-10">
                State-of-the-art cold storage facilities to store your harvest at the perfect temperature. Our inventory management systems ensure zero loss and total visibility.
              </p>
              <Link to="/services" className="inline-flex items-center gap-3 text-white font-bold uppercase tracking-widest hover:text-[#FAD201] transition-colors border-b-2 border-white pb-1 hover:border-[#FAD201]">
                View Logistics Details <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

    </section>
  );
};

export default ServicesSection;
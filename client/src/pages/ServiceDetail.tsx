import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft, CheckCircle } from 'lucide-react';

// Import images
import truckImage from '../assets/service-truck.jpg';
import farmerImage from '../assets/service-farmer.jpg';

// DATA STORE
const serviceDetails: any = {
  "transport": {
    title: "Refrigerated Transport",
    image: truckImage,
    subtitle: "Keeping your goods fresh from point A to point B.",
    content: "We provide top-tier refrigerated transport solutions designed for perishable goods. Our fleet is equipped with advanced temperature monitoring systems to ensure that fruits, vegetables, dairy, meat, and pharmaceuticals maintain their quality throughout the journey.",
    benefits: ["Real-time GPS Tracking", "Temperature Logs", "Diverse Fleet Size", "24/7 Support"]
  },
  "storage": {
    title: "Cold Storage Solutions",
    image: "https://media.istockphoto.com/id/2209841249/photo/refrigeration-chamber-with-close-up-of-fruits-and-vegetables-in-the-crates.jpg?s=612x612&w=0&k=20&c=CS28iKyYfuXcINu4kQ_Ck_VQQWJR2GJdpuI1GREepAU=",
    subtitle: "State-of-the-art warehousing for your inventory.",
    content: "Our cold storage facilities offer a reliable environment for temporary or long-term storage. Whether you need frozen, chilled, or ambient storage, our warehouses are designed to reduce spoilage and extend shelf life.",
    benefits: ["Multi-temperature Zones", "Inventory Management", "Security Surveillance", "Backup Power Systems"]
  },
  "farm-to-market": {
    title: "Farm-to-Market",
    image: farmerImage,
    subtitle: "Bridging the gap between farmers and consumers.",
    content: "We empower farmers by providing direct logistics links to major markets. By reducing post-harvest losses through proper handling and cold chain integration, we help increase farmer income and ensure food security.",
    benefits: ["Reduced Spoilage", "Market Access", "Fair Pricing Support", "Quality Control"]
  },
  "cross-border": {
    title: "Cross-Border Trade",
    image: "https://media.licdn.com/dms/image/v2/D5612AQG9DBBI47S7zg/article-cover_image-shrink_720_1280/B56ZbtnCotG4AM-/0/1747743166045?e=2147483647&v=beta&t=ahuGhTmVnYnJgMqrGJiThG4w1-cnVl2QEd0obFSvtM0",
    subtitle: "Seamless logistics across East Africa.",
    content: "Navigating borders can be complex. We handle the logistics and documentation required to move goods across Rwanda, Uganda, Kenya, Tanzania, and beyond. Our experience ensures minimal delays at customs.",
    benefits: ["Customs Clearance", "Regional Network", "Compliance Handling", "End-to-End Visibility"]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams(); // Get the ID from the URL
  const service = serviceDetails[serviceId || "transport"]; // Fallback to transport if not found

  return (
    <div className="font-sans bg-white">
      <Navbar />
      
      {/* HEADER */}
      <div className="relative h-[60vh] min-h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${service.image}')` }}
        >
            <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 pt-20">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">{service.title}</h1>
            <p className="text-xl text-gray-200 max-w-2xl">{service.subtitle}</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        
        <Link to="/services" className="inline-flex items-center text-trukGreen font-bold mb-8 hover:underline">
            <ArrowLeft size={20} className="mr-2"/> Back to Services
        </Link>

        <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-10">
                {service.content}
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.benefits.map((benefit: string, idx: number) => (
                    <div key={idx} className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <CheckCircle className="text-trukGreen mr-3" size={24} />
                        <span className="font-bold text-gray-700">{benefit}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-trukGreen rounded-2xl text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
            <p className="mb-8">Contact us today for a quote on {service.title}.</p>
            <Link to="/contact" className="inline-block bg-[#FAD201] text-black font-bold py-3 px-8 rounded-full hover:bg-white transition">
                Get a Quote
            </Link>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
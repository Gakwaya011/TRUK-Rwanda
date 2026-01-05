import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft, CheckCircle, AlertTriangle } from 'lucide-react';

// Import images
import truckImage from '../assets/service-truck.jpg';
import farmerImage from '../assets/service-farmer.jpg';

// DATA STORE - KEYS MATCH NAVBAR AND SERVICESPAGE
const serviceDetails: Record<string, any> = {
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
  const { serviceId } = useParams();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  // Safely get the service
  const service = serviceId ? serviceDetails[serviceId] : undefined;

  // SAFETY CHECK: Prevents Crash
  if (!service) {
    return (
      <div className="font-sans bg-gray-50 min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center text-center px-6">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-6 text-gray-400">
                <AlertTriangle size={32} />
            </div>
            <h2 className="text-3xl font-black text-gray-900 mb-4">Service Not Found</h2>
            <p className="text-gray-600 mb-8 max-w-md">
                The service page you are looking for does not exist or has been moved.
            </p>
            <Link to="/services" className="inline-flex items-center px-8 py-3 bg-trukGreen text-white rounded-xl font-bold hover:bg-[#0d3326] transition-colors">
                <ArrowLeft size={18} className="mr-2"/> Back to Services
            </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="font-sans bg-white">
      <Navbar />
      
      {/* HERO */}
      <div className="relative h-[60vh] min-h-[400px]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${service.image}')` }}>
            <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 pt-20">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 uppercase tracking-tight drop-shadow-xl">{service.title}</h1>
            <div className="h-1.5 w-24 bg-[#FAD201] rounded-full mb-6"></div>
            <p className="text-xl text-gray-200 max-w-2xl font-medium leading-relaxed">{service.subtitle}</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <Link to="/services" className="inline-flex items-center text-gray-500 font-bold mb-8 hover:text-trukGreen transition-colors">
            <ArrowLeft size={20} className="mr-2"/> Back to Services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-trukGreen mb-6">Overview</h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-10 whitespace-pre-line">{service.content}</p>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.benefits.map((benefit: string, idx: number) => (
                        <div key={idx} className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-trukGreen/30 transition-colors">
                            <CheckCircle className="text-[#FAD201] mr-3 mt-0.5 flex-shrink-0" size={20} />
                            <span className="font-bold text-gray-700">{benefit}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="lg:col-span-1">
                <div className="bg-[#114232] rounded-3xl p-8 text-white sticky top-32 shadow-xl">
                    <h3 className="text-2xl font-bold mb-4">Ready to move?</h3>
                    <p className="mb-8 text-gray-300 leading-relaxed">Get a tailored quote for {service.title} today. Our team is ready to assist.</p>
                    <Link to="/contact" className="block w-full text-center bg-[#FAD201] text-[#114232] font-black py-4 px-8 rounded-xl hover:bg-white transition-all shadow-lg uppercase tracking-wide text-sm">Get a Quote</Link>
                    <div className="mt-6 text-center border-t border-white/10 pt-6">
                        <p className="text-sm text-gray-400 mb-1">Need immediate help?</p>
                        <p className="font-bold text-lg">+250 788 123 456</p>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
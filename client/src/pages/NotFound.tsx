import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, AlertTriangle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <div className="font-sans bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex flex-col items-center justify-center px-6 text-center pt-24 pb-12">
        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-6 text-gray-400 animate-pulse">
            <AlertTriangle size={48} />
        </div>
        
        <h1 className="text-6xl font-black text-[#0d3326] mb-2">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
           The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
            <Link 
                to="/" 
                className="flex items-center justify-center gap-2 px-8 py-3 bg-[#FAD201] text-[#0d3326] font-bold rounded-xl shadow-lg hover:bg-white transition-all uppercase text-sm tracking-wide"
            >
                <Home size={18} /> Go Home
            </Link>
            <button 
                onClick={() => window.history.back()} 
                className="flex items-center justify-center gap-2 px-8 py-3 bg-white border border-gray-200 text-gray-600 font-bold rounded-xl hover:bg-gray-50 transition-all uppercase text-sm tracking-wide"
            >
                <ArrowLeft size={18} /> Go Back
            </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
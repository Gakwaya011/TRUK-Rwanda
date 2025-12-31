import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Search, MapPin, Briefcase, Clock, ArrowRight, Filter, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';

interface Job {
  id: number;
  title: string;
  type: string;
  location: string;
  department: string;
  created_at?: string;
}

const CareersPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://truk-rwanda-backend.onrender.com/api/jobs')
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filteredJobs = jobs.filter(job => 
    job.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.department?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <Navbar />
      
      {/* --- HERO: IMMERSIVE & DARK --- */}
      <div className="relative pt-40 pb-32 px-6 bg-[#0d3326] overflow-hidden">
        {/* Abstract Pattern */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FAD201] opacity-[0.03] rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white opacity-[0.05] rounded-full blur-[80px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <Reveal width="100%">
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.9]">
              Join the <br/>
              <span className="text-[#FAD201]">Movement.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
               We aren't just moving cargo. We are moving East Africa forward. 
               Find your place in the region's most advanced cold-chain network.
            </p>
          </Reveal>
        </div>
      </div>

      {/* --- FLOATING SEARCH BAR --- */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-20">
         <div className="bg-white p-2 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col md:flex-row items-center gap-2 border border-gray-100">
             <div className="flex-grow w-full relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={22} />
                <input 
                    type="text"
                    placeholder="Search for roles (e.g. Driver, Logistics)..."
                    className="w-full pl-16 pr-6 py-5 bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none text-lg font-medium rounded-xl"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
             </div>
             <button className="w-full md:w-auto px-10 py-5 bg-trukGreen hover:bg-[#0a271d] text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 uppercase tracking-wide text-sm shadow-lg">
                Search Jobs
             </button>
         </div>
      </div>

      {/* --- JOBS LIST --- */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-12">
            <div>
                <h2 className="text-3xl font-bold text-gray-900">Current Openings</h2>
                <p className="text-gray-500 mt-2">Find the role that fits your skills.</p>
            </div>
            <div className="hidden md:block text-right">
                <span className="text-4xl font-black text-trukGreen">{filteredJobs.length}</span>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Positions</p>
            </div>
        </div>

        <div className="space-y-4">
          {loading ? (
             <div className="space-y-4">
                {[1, 2, 3].map(i => <div key={i} className="h-32 bg-gray-200 rounded-2xl animate-pulse"></div>)}
             </div>
          ) : filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <Reveal key={job.id} delay={index * 0.1} width="100%">
                  <Link 
                    to={`/careers/${job.id}`} 
                    className="group relative block bg-white border border-gray-200 rounded-2xl p-8 hover:border-trukGreen hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  >
                    {/* Hover Accent Line */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-trukGreen transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        {/* Left: Info */}
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-[11px] font-black uppercase tracking-widest rounded-lg">
                                    {job.department}
                                </span>
                                {index === 0 && <span className="text-xs font-bold text-[#FAD201] animate-pulse">● New</span>}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-trukGreen transition-colors">
                                {job.title}
                            </h3>
                            <div className="flex flex-wrap gap-6 text-sm text-gray-500 font-medium">
                                <span className="flex items-center gap-2"><Briefcase size={16}/> {job.type}</span>
                                <span className="flex items-center gap-2"><MapPin size={16}/> {job.location}</span>
                                <span className="flex items-center gap-2"><Clock size={16}/> Posted Recently</span>
                            </div>
                        </div>

                        {/* Right: Action */}
                        <div className="flex items-center">
                             <span className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-trukGreen group-hover:text-white transition-all duration-300">
                                <ArrowRight size={20} />
                             </span>
                        </div>
                    </div>
                  </Link>
              </Reveal>
            ))
          ) : (
            <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-gray-300">
                <p className="text-gray-400 font-medium text-lg">No roles found matching "{searchTerm}"</p>
                <button onClick={() => setSearchTerm('')} className="text-trukGreen font-bold mt-4 hover:underline">View all jobs</button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareersPage;
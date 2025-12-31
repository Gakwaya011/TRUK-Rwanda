import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Search, MapPin, Briefcase, Clock } from 'lucide-react';

// Define the Job interface so TypeScript knows what a "job" looks like
interface Job {
  id: number;
  title: string;
  type: string;     // e.g. "On-site"
  location: string;
  department: string;
  date?: string;    // "Posted X days ago" (Optional because backend might not send it initially)
}

const CareersPage = () => {
  // State for jobs list (Fetched from API)
  const [jobs, setJobs] = useState<Job[]>([]);
  // State for loading status
  const [loading, setLoading] = useState(true);
  // State for search filter
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch Jobs from the Backend when the page loads
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('https://truk-rwanda-backend.onrender.com/api/jobs');
        if (response.ok) {
          const data = await response.json();
          setJobs(data);
        }
      } catch (error) {
        console.error("Failed to connect to server:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Filter logic based on search term
  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="font-sans bg-white">
      
      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-[50vh] min-h-[400px] flex flex-col">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2940&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-50 pt-6 px-4 sm:px-6 lg:px-8 w-full">
          <Navbar />
        </div>

        <div className="relative z-10 flex-grow flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white uppercase tracking-widest drop-shadow-2xl">
            Join Our Team
          </h1>
        </div>
      </div>

      {/* --- CONTENT SECTION --- */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        
        {/* Header Text */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-trukGreen mb-4">Job Openings</h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            At TRUK Rwanda Ltd, we are committed to building a skilled and motivated team that 
            supports our mission of delivering top-quality cold-chain logistics services.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-3xl mx-auto mb-16">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="text-gray-400" size={20} />
          </div>
          <input 
            type="text"
            placeholder="Search for a role or department..."
            className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-300 focus:border-trukGreen focus:ring-2 focus:ring-trukGreen/20 focus:outline-none shadow-sm transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Job List */}
        <div className="space-y-6">
          {loading ? (
            <div className="text-center py-10 text-gray-400">Loading jobs...</div>
          ) : filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div 
                key={job.id} 
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-trukGreen/30 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                {/* Job Info */}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-trukGreen group-hover:text-[#116D3B] transition-colors mb-2">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Briefcase size={16} /> {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={16} /> {job.location}
                    </span>
                    {/* Only show date if it exists */}
                    {job.date && (
                      <span className="flex items-center gap-1">
                        <Clock size={16} /> {job.date}
                      </span>
                    )}
                  </div>
                </div>

                {/* Department Badge & Apply Button */}
                <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto mt-4 md:mt-0">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold uppercase tracking-wider rounded-md">
                    {job.department}
                  </span>
                  <button className="text-trukGreen font-bold hover:underline underline-offset-4 decoration-2">
                    Apply Now &rarr;
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10 text-gray-500">
              No jobs found matching your search.
            </div>
          )}
        </div>

      </section>

      <Footer />
    </div>
  );
};

export default CareersPage;
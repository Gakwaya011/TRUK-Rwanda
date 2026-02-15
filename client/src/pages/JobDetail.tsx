import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft, MapPin, Briefcase, Clock, CheckCircle2, Send, Calendar, DollarSign, AlertTriangle, Share2 } from 'lucide-react';

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);

    fetch(`${import.meta.env.VITE_API_URL}/jobs/${id}`)
      .then(res => {
        if (!res.ok) throw new Error(`Job #${id} not found.`);
        return res.json();
      })
      .then(data => {
        setJob(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-trukGreen"></div></div>;

  if (error || !job) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center px-6">
            <div className="text-center max-w-md">
                <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <AlertTriangle size={32} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Role Not Found</h2>
                <p className="text-gray-500 mb-8">This position ID ({id}) does not exist or has been closed.</p>
                <Link to="/careers" className="inline-block px-8 py-3 bg-trukGreen text-white font-bold rounded-xl hover:bg-[#0a271d] transition-all">Back to Careers</Link>
            </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Mailto Link Logic
  const mailSubject = encodeURIComponent(`Application: ${job.title}`);
  const mailBody = encodeURIComponent(`Dear Hiring Team,\n\nI am applying for the ${job.title} position.\n\n[Please attach your CV]\n\nBest regards,`);
  const mailToLink = `mailto:careers@trukrwanda.com?subject=${mailSubject}&body=${mailBody}`;

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      <Navbar />

      {/* --- HEADER --- */}
      <div className="bg-[#0d3326] text-white pt-36 pb-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
           <Link to="/careers" className="inline-flex items-center text-gray-400 hover:text-[#FAD201] font-bold text-xs uppercase tracking-widest mb-8 transition-colors">
                <ArrowLeft size={14} className="mr-2"/> All Positions
           </Link>
           
           <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
               <div>
                   <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight max-w-4xl">{job.title}</h1>
                   <div className="flex flex-wrap gap-6 text-sm font-medium text-gray-300">
                        <span className="flex items-center gap-2"><Briefcase size={18} className="text-[#FAD201]"/> {job.type}</span>
                        <span className="flex items-center gap-2"><MapPin size={18} className="text-[#FAD201]"/> {job.location}</span>
                        <span className="flex items-center gap-2"><Clock size={18} className="text-[#FAD201]"/> {new Date(job.created_at || Date.now()).toLocaleDateString()}</span>
                   </div>
               </div>
               
               {/* Quick Apply (Desktop) */}
               <div className="hidden lg:block">
                    <a href={mailToLink} className="flex items-center gap-3 bg-[#FAD201] hover:bg-white text-[#0d3326] font-black py-4 px-10 rounded-xl shadow-xl hover:-translate-y-1 transition-all uppercase tracking-wide text-sm">
                        Apply Now <Send size={16} />
                    </a>
               </div>
           </div>
        </div>
      </div>

      {/* --- CONTENT --- */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* LEFT: INFO */}
            <div className="lg:col-span-8 space-y-12">
                <div className="prose prose-lg text-gray-600 max-w-none">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">About the Role</h3>
                    <p className="whitespace-pre-line leading-relaxed">{job.description}</p>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Are Looking For</h3>
                    <ul className="space-y-4">
                        {/* Assuming description/responsibilities are text, we mock a list visual style */}
                        <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                             <CheckCircle2 className="text-trukGreen mt-1 flex-shrink-0" size={20}/>
                             <span className="text-gray-700">Experience in {job.department} or related field.</span>
                        </li>
                        <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                             <CheckCircle2 className="text-trukGreen mt-1 flex-shrink-0" size={20}/>
                             <span className="text-gray-700">Commitment to safety and reliability protocols.</span>
                        </li>
                        <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                             <CheckCircle2 className="text-trukGreen mt-1 flex-shrink-0" size={20}/>
                             <span className="text-gray-700">Ability to work in {job.location} with potential travel.</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* RIGHT: SIDEBAR */}
            <div className="lg:col-span-4">
                <div className="sticky top-32 bg-white p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">Job Summary</h3>
                    
                    <div className="space-y-4 mb-8">
                        <div className="flex justify-between py-3 border-b border-gray-50">
                            <span className="text-gray-500 text-sm">Department</span>
                            <span className="font-bold text-gray-900 text-sm">{job.department}</span>
                        </div>
                        <div className="flex justify-between py-3 border-b border-gray-50">
                            <span className="text-gray-500 text-sm">Location</span>
                            <span className="font-bold text-gray-900 text-sm">{job.location}</span>
                        </div>
                        <div className="flex justify-between py-3 border-b border-gray-50">
                            <span className="text-gray-500 text-sm">Contract</span>
                            <span className="font-bold text-gray-900 text-sm">{job.type}</span>
                        </div>
                    </div>

                    <a href={mailToLink} className="w-full flex items-center justify-center gap-2 bg-[#FAD201] hover:bg-[#e6c200] text-[#0d3326] font-black py-4 rounded-xl shadow-lg transition-all uppercase tracking-widest text-sm mb-4">
                        Apply Now
                    </a>
                    
                    <div className="text-center">
                        <button className="text-xs font-bold text-gray-400 hover:text-trukGreen flex items-center justify-center gap-2 mx-auto">
                            <Share2 size={12}/> Share this job
                        </button>
                    </div>
                </div>
            </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JobDetail;

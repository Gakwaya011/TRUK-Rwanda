import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft, MapPin, Briefcase, Clock, CheckCircle } from 'lucide-react';

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/jobs/${id}`) // Using your backend API
      .then(res => res.json())
      .then(data => {
        setJob(data); // Ensure your backend returns the single job object
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, [id]);

  if (loading) return <div className="text-center pt-40">Loading job details...</div>;
  if (!job) return <div className="text-center pt-40">Job not found.</div>;

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        
        {/* Back Button */}
        <Link to="/careers" className="inline-flex items-center text-gray-500 hover:text-trukGreen font-bold mb-8">
            <ArrowLeft size={18} className="mr-2"/> Back to Careers
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 pb-8 border-b border-gray-100">
                <div>
                    <span className="bg-trukGreen/10 text-trukGreen px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                        {job.department}
                    </span>
                    <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">{job.title}</h1>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 font-medium">
                        <span className="flex items-center gap-1"><Briefcase size={16}/> {job.type}</span>
                        <span className="flex items-center gap-1"><MapPin size={16}/> {job.location}</span>
                        <span className="flex items-center gap-1"><Clock size={16}/> Posted recently</span>
                    </div>
                </div>

                {/* APPLY BUTTON - Opens Email Client */}
                <a 
                    href={`mailto:careers@trukrwanda.com?subject=Application for ${job.title}&body=Dear Hiring Team,%0D%0A%0D%0AI am writing to apply for the position of ${job.title}...`}
                    className="bg-trukGreen text-white font-bold py-3 px-8 rounded-xl hover:bg-[#0d522b] transition shadow-lg transform active:scale-95 text-center whitespace-nowrap"
                >
                    Apply Now
                </a>
            </div>

            {/* Description */}
            <div className="prose prose-lg text-gray-700 max-w-none">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Job Description</h3>
                <p className="whitespace-pre-line leading-relaxed mb-8">
                    {job.description}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">How to Apply</h3>
                <ul className="list-none space-y-2 pl-0">
                    <li className="flex items-start gap-3">
                        <CheckCircle className="text-trukGreen mt-1" size={20} />
                        <span>Click the "Apply Now" button above.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="text-trukGreen mt-1" size={20} />
                        <span>Attach your CV and Cover Letter.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="text-trukGreen mt-1" size={20} />
                        <span>Ensure your subject line includes the Job Title.</span>
                    </li>
                </ul>
            </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JobDetail;
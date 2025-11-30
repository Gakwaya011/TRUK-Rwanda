  import React, { useState, useEffect } from 'react';
  import { useParams, Link } from 'react-router-dom';
  import Navbar from '../components/Navbar';
  import Footer from '../components/Footer';
  import { MapPin, Briefcase, ArrowLeft, CheckCircle } from 'lucide-react';

  interface Job {
    id: number;
    title: string;
    type: string;
    location: string;
    department: string;
    description: string;
    requirements: string;
    date: string;
  }

  const JobDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const [job, setJob] = useState<Job | null>(null);

    useEffect(() => {
      const savedJobs = localStorage.getItem('truk_jobs');
      if (savedJobs && id) {
        const parsedJobs: Job[] = JSON.parse(savedJobs);
        // Find the job that matches the ID from the URL
        const foundJob = parsedJobs.find(j => j.id === Number(id));
        if (foundJob) setJob(foundJob);
      }
    }, [id]);

    if (!job) return <div className="min-h-screen flex items-center justify-center">Job not found.</div>;

    return (
      <div className="font-sans bg-white">
        {/* HEADER */}
        <div className="bg-trukGreen text-white pt-24 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <Link to="/careers" className="text-white/80 hover:text-white flex items-center gap-2 mb-6 font-bold text-sm">
              <ArrowLeft size={16} /> Back to Careers
            </Link>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">{job.title}</h1>
            <div className="flex flex-wrap gap-6 text-white/90 font-medium">
              <span className="flex items-center gap-2"><Briefcase size={18} /> {job.department}</span>
              <span className="flex items-center gap-2"><MapPin size={18} /> {job.location}</span>
              <span className="px-2 py-0.5 bg-white/20 rounded text-sm uppercase">{job.type}</span>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <div className="md:col-span-2 space-y-10">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Job Description</h2>
                <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">{job.description}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h2>
                <ul className="space-y-3">
                  {job.requirements.split('\n').map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600">
                      <CheckCircle className="text-trukGreen flex-shrink-0 mt-1" size={18} />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="md:col-span-1">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 sticky top-24">
                <h3 className="text-lg font-bold mb-4">Interested?</h3>
                <p className="text-sm text-gray-500 mb-6">
                  To apply for this role, please send your CV to our HR team.
                </p>
                <a 
                  href={`mailto:careers@panielgroup.com?subject=Application for ${job.title}`}
                  className="block w-full bg-trukGreen text-white text-center font-bold py-3 rounded-lg hover:bg-[#116D3B] transition mb-4"
                >
                  Apply via Email
                </a>
              </div>
            </div>

          </div>
        </div>
        <Footer />
      </div>
    );
  };

  export default JobDetailsPage;
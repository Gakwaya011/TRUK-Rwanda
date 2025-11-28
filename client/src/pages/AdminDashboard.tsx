import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Trash2, LogOut } from 'lucide-react';

// Define the shape of a Job object to fix "any" type errors
interface Job {
  id: number;
  title: string;
  type: string;
  location: string;
  department: string;
  date?: string;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  // Use the interface here instead of <any[]>
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isAdding, setIsAdding] = useState(false);

  // Form State
  const [newJob, setNewJob] = useState({
    title: '',
    type: 'On-site',
    location: '',
    department: ''
  });

  // Check Auth & Fetch Jobs on Load
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/truk-admin'); // Kick them out if not logged in
    } else {
      fetchJobs();
    }
  }, [navigate]); // Added dependency to fix linter warning

  const fetchJobs = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/jobs');
      if (res.ok) {
        const data = await res.json();
        setJobs(data);
      }
    } catch (error) {
      console.error("Failed to fetch jobs:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/');
  };

  const handleDelete = async (id: number) => {
    // Use window.confirm to avoid linter "restricted global" errors
    if (window.confirm('Are you sure you want to delete this job?')) {
      try {
        await fetch(`http://localhost:5000/api/jobs/${id}`, { method: 'DELETE' });
        fetchJobs(); // Refresh list
      } catch (error) {
        console.error("Failed to delete job:", error);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:5000/api/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newJob),
      });
      setIsAdding(false);
      setNewJob({ title: '', type: 'On-site', location: '', department: '' }); // Reset form
      fetchJobs(); // Refresh list
    } catch (error) {
      console.error("Failed to add job:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans p-8">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-10 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-trukGreen">Job Dashboard</h1>
        <button onClick={handleLogout} className="flex items-center gap-2 text-red-600 hover:text-red-800 font-bold">
          <LogOut size={20} /> Logout
        </button>
      </div>

      <div className="max-w-5xl mx-auto">
        
        {/* Add Button */}
        {!isAdding && (
          <button 
            onClick={() => setIsAdding(true)}
            className="mb-8 bg-trukGreen text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-[#116D3B]"
          >
            <Plus size={20} /> Post New Job
          </button>
        )}

        {/* Add Job Form */}
        {isAdding && (
          <div className="bg-white p-6 rounded-xl shadow-lg mb-8 border border-gray-200">
            <h2 className="text-xl font-bold mb-4">New Job Details</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                placeholder="Job Title (e.g. Driver)" 
                className="border p-3 rounded" 
                required
                value={newJob.title}
                onChange={e => setNewJob({...newJob, title: e.target.value})}
              />
              <select 
                className="border p-3 rounded"
                value={newJob.type}
                onChange={e => setNewJob({...newJob, type: e.target.value})}
              >
                <option>On-site</option>
                <option>Remote</option>
                <option>Hybrid</option>
              </select>
              <input 
                placeholder="Location (e.g. Kigali)" 
                className="border p-3 rounded" 
                required
                value={newJob.location}
                onChange={e => setNewJob({...newJob, location: e.target.value})}
              />
              <input 
                placeholder="Department (e.g. Logistics)" 
                className="border p-3 rounded" 
                required
                value={newJob.department}
                onChange={e => setNewJob({...newJob, department: e.target.value})}
              />
              
              <div className="col-span-2 flex gap-4 mt-2">
                <button className="bg-trukGreen text-white px-6 py-2 rounded font-bold">Save Job</button>
                <button 
                  type="button" 
                  onClick={() => setIsAdding(false)} 
                  className="bg-gray-300 text-black px-6 py-2 rounded font-bold"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Job List */}
        <div className="space-y-4">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
                <p className="text-gray-500 text-sm">{job.department} • {job.location} • {job.type}</p>
              </div>
              <button 
                onClick={() => handleDelete(job.id)}
                className="text-red-500 hover:bg-red-50 p-2 rounded-full transition"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
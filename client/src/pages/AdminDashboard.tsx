import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Trash2, LogOut, Edit2 } from 'lucide-react';

// Define Job Interface
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

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  // Form Data
  const [formData, setFormData] = useState({
    title: '',
    type: 'On-site',
    location: '',
    department: '',
    description: '',
    requirements: ''
  });

  // 1. Check Login & Load Jobs from LocalStorage
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/truk-admin');
    } else {
      loadJobs();
    }
  }, [navigate]);

  const loadJobs = () => {
    const savedJobs = localStorage.getItem('truk_jobs');
    if (savedJobs) {
      setJobs(JSON.parse(savedJobs));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/');
  };

  const saveToLocalStorage = (updatedJobs: Job[]) => {
    localStorage.setItem('truk_jobs', JSON.stringify(updatedJobs));
    setJobs(updatedJobs);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      const updatedJobs = jobs.filter(job => job.id !== id);
      saveToLocalStorage(updatedJobs);
    }
  };

  const handleEdit = (job: Job) => {
    setFormData({
      title: job.title,
      type: job.type,
      location: job.location,
      department: job.department,
      description: job.description,
      requirements: job.requirements
    });
    setEditingId(job.id);
    setIsAdding(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let updatedJobs = [...jobs];

    if (editingId) {
      // Update existing job
      updatedJobs = updatedJobs.map(job => 
        job.id === editingId ? { ...job, ...formData } : job
      );
    } else {
      // Create new job
      const newJob: Job = {
        id: Date.now(), // Generate ID based on time
        ...formData,
        date: new Date().toISOString()
      };
      // Add to beginning of array
      updatedJobs.unshift(newJob);
    }

    saveToLocalStorage(updatedJobs);
    
    // Reset Form
    setIsAdding(false);
    setEditingId(null);
    setFormData({ title: '', type: 'On-site', location: '', department: '', description: '', requirements: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans p-8">
      
      <div className="flex justify-between items-center mb-10 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-trukGreen">Job Dashboard</h1>
        <button onClick={handleLogout} className="flex items-center gap-2 text-red-600 hover:text-red-800 font-bold border border-red-200 px-4 py-2 rounded-lg bg-white">
          <LogOut size={18} /> Logout
        </button>
      </div>

      <div className="max-w-5xl mx-auto">
        
        {!isAdding && (
          <button 
            onClick={() => { setIsAdding(true); setEditingId(null); setFormData({ title: '', type: 'On-site', location: '', department: '', description: '', requirements: '' }); }}
            className="mb-8 bg-trukGreen text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-[#116D3B] shadow-md transition-transform transform hover:-translate-y-1"
          >
            <Plus size={20} /> Post New Job
          </button>
        )}

        {isAdding && (
          <div className="bg-white p-8 rounded-xl shadow-xl mb-8 border border-gray-200">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">{editingId ? 'Edit Job' : 'New Job Details'}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Job Title</label>
                  <input 
                    className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-trukGreen outline-none" 
                    required
                    value={formData.title}
                    onChange={e => setFormData({...formData, title: e.target.value})}
                    placeholder="e.g. Senior Driver"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Type</label>
                  <select 
                    className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-trukGreen outline-none bg-white"
                    value={formData.type}
                    onChange={e => setFormData({...formData, type: e.target.value})}
                  >
                    <option>On-site</option>
                    <option>Remote</option>
                    <option>Hybrid</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Location</label>
                  <input 
                    className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-trukGreen outline-none" 
                    required
                    value={formData.location}
                    onChange={e => setFormData({...formData, location: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Department</label>
                  <input 
                    className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-trukGreen outline-none" 
                    required
                    value={formData.department}
                    onChange={e => setFormData({...formData, department: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Job Description</label>
                <textarea 
                  className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-trukGreen outline-none h-32" 
                  required
                  value={formData.description}
                  onChange={e => setFormData({...formData, description: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Requirements (One per line)</label>
                <textarea 
                  className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-trukGreen outline-none h-32" 
                  required
                  value={formData.requirements}
                  onChange={e => setFormData({...formData, requirements: e.target.value})}
                />
              </div>
              
              <div className="flex gap-4 pt-4 border-t">
                <button className="bg-trukGreen text-white px-8 py-3 rounded-lg font-bold hover:bg-[#116D3B] transition">
                  {editingId ? 'Update Job' : 'Publish Job'}
                </button>
                <button 
                  type="button" 
                  onClick={() => setIsAdding(false)} 
                  className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Active Listings ({jobs.length})</h2>
          {jobs.length === 0 ? (
            <div className="text-center py-10 bg-white rounded-xl border border-dashed border-gray-300 text-gray-400">
              No jobs posted yet. Click "Post New Job" to start.
            </div>
          ) : (
            jobs.map((job) => (
              <div key={job.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{job.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className="text-xs font-bold px-2 py-1 bg-blue-50 text-blue-700 rounded uppercase">{job.department}</span>
                    <span className="text-xs font-bold px-2 py-1 bg-green-50 text-green-700 rounded uppercase">{job.type}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleEdit(job)}
                    className="text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition flex items-center gap-1 text-sm font-bold"
                  >
                    <Edit2 size={18} /> Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(job.id)}
                    className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition flex items-center gap-1 text-sm font-bold"
                  >
                    <Trash2 size={18} /> Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
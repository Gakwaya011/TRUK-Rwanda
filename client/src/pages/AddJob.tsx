import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const AddJob = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    type: 'Full-time',
    location: 'Kigali, Rwanda',
    department: 'Logistics',
    description: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${import.meta.env.VITE_API_URL}/jobs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        navigate('/admin/dashboard');
      } else {
        alert("Failed to create job");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        
        <button onClick={() => navigate('/admin/dashboard')} className="flex items-center gap-2 text-gray-500 hover:text-trukGreen mb-8 font-bold">
          <ArrowLeft size={18} /> Back to Dashboard
        </button>

        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          <h1 className="text-2xl font-black text-gray-900 mb-6">Post New Job</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Job Title</label>
                    <input 
                        required 
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-trukGreen/20 outline-none"
                        placeholder="e.g. Truck Driver"
                        value={formData.title}
                        onChange={e => setFormData({...formData, title: e.target.value})}
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Type</label>
                    <select 
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-trukGreen/20 outline-none"
                        value={formData.type}
                        onChange={e => setFormData({...formData, type: e.target.value})}
                    >
                        <option>Full-time</option>
                        <option>Part-time</option>
                        <option>Contract</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Location</label>
                    <input 
                        required 
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-trukGreen/20 outline-none"
                        value={formData.location}
                        onChange={e => setFormData({...formData, location: e.target.value})}
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Department</label>
                    <input 
                        required 
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-trukGreen/20 outline-none"
                        placeholder="e.g. Logistics"
                        value={formData.department}
                        onChange={e => setFormData({...formData, department: e.target.value})}
                    />
                </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Description</label>
              <textarea 
                required 
                rows={5}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-trukGreen/20 outline-none"
                placeholder="Job requirements..."
                value={formData.description}
                onChange={e => setFormData({...formData, description: e.target.value})}
              />
            </div>

            <button type="submit" disabled={loading} className="w-full bg-trukGreen text-white font-bold py-4 rounded-xl hover:bg-[#0d522b] transition shadow-lg">
              {loading ? 'Posting...' : 'Post Job'}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJob;

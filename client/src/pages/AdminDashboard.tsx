import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate, Link } from 'react-router-dom';
import { Plus, Trash2, Pencil, Briefcase, FileText, LogOut } from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'jobs' | 'blogs'>('blogs'); // Default to blogs (Farmer stories)
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Check if logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) navigate('/admin/login');
    fetchData();
  }, [activeTab, navigate]);

  const fetchData = async () => {
    setLoading(true);
    try {
      // Fetch either jobs or blogs based on the tab
      const endpoint = activeTab === 'jobs' 
  ? `${import.meta.env.VITE_API_URL}/jobs` 
  : `${import.meta.env.VITE_API_URL}/blogs`;
      const res = await fetch(endpoint);
      const data = await res.json();
      setItems(data);
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number | string) => {
    if(!window.confirm("Are you sure you want to delete this?")) return;

    const token = localStorage.getItem('token');
    const endpoint = activeTab === 'jobs'
  ? `${import.meta.env.VITE_API_URL}/jobs/${id}` 
  : `${import.meta.env.VITE_API_URL}/blogs/${id}`;

    try {
      const res = await fetch(endpoint, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      
      if (res.ok) {
        setItems(items.filter(item => item.id !== id && item._id !== id)); // Handle both ID types
      } else {
        alert("Failed to delete. You might not be authorized.");
      }
    } catch (error) {
      alert("Server error");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-black text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-500">Manage your Farmer Stories and Job Openings</p>
          </div>
          <button onClick={handleLogout} className="flex items-center gap-2 text-red-600 font-bold hover:bg-red-50 px-4 py-2 rounded-lg transition">
            <LogOut size={18} /> Logout
          </button>
        </div>

        {/* TABS */}
        <div className="flex gap-4 mb-8 border-b border-gray-200">
          <button 
            onClick={() => setActiveTab('blogs')}
            className={`pb-3 px-4 font-bold flex items-center gap-2 transition-all ${activeTab === 'blogs' ? 'text-trukGreen border-b-4 border-trukGreen' : 'text-gray-400 hover:text-gray-600'}`}
          >
            <FileText size={20} /> Farmer Stories (News)
          </button>
          <button 
            onClick={() => setActiveTab('jobs')}
            className={`pb-3 px-4 font-bold flex items-center gap-2 transition-all ${activeTab === 'jobs' ? 'text-trukGreen border-b-4 border-trukGreen' : 'text-gray-400 hover:text-gray-600'}`}
          >
            <Briefcase size={20} /> Job Openings
          </button>
        </div>

        {/* ACTION BAR */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-700">
            {activeTab === 'blogs' ? 'All Stories & News' : 'Active Jobs'}
          </h2>
          <Link 
            to={activeTab === 'blogs' ? '/admin/add-blog' : '/admin/add-job'}
            className="bg-trukGreen text-white px-5 py-2.5 rounded-full font-bold shadow-lg hover:bg-[#0d522b] flex items-center gap-2 transition transform hover:-translate-y-1"
          >
            <Plus size={20} /> Add New {activeTab === 'blogs' ? 'Story' : 'Job'}
          </Link>
        </div>

        {/* LIST */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {loading ? (
            <div className="p-10 text-center text-gray-500">Loading data...</div>
          ) : items.length === 0 ? (
            <div className="p-10 text-center text-gray-400 italic">No items found. Click "Add New" to create one.</div>
          ) : (
            <div>
              {items.map((item: any) => (
                <div key={item.id || item._id} className="p-6 border-b border-gray-50 last:border-none flex justify-between items-center hover:bg-gray-50 transition">
                  
                  {/* Left Side: Title & Info */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-500">
                      {activeTab === 'blogs' ? item.category : `${item.department} • ${item.location}`}
                    </p>
                  </div>

                  {/* Right Side: Action Buttons */}
                  <div className="flex items-center gap-2">
                    
                    {/* EDIT BUTTON (Only shows for Blogs/Stories for now) */}
                    {activeTab === 'blogs' && (
                      <Link 
                        to={`/admin/edit-blog/${item.id || item._id}`}
                        className="p-2 text-gray-400 hover:text-trukGreen hover:bg-green-50 rounded-lg transition"
                        title="Edit"
                      >
                        <Pencil size={20} />
                      </Link>
                    )}

                    {/* DELETE BUTTON */}
                    <button 
                      onClick={() => handleDelete(item.id || item._id)}
                      className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                      title="Delete"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;

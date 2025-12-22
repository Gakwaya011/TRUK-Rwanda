import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, UploadCloud, Link as LinkIcon } from 'lucide-react';

const AddBlog = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [imageMode, setImageMode] = useState<'upload' | 'url'>('upload');

  // 1. Initialize State with is_featured
  const [formData, setFormData] = useState({
    title: '',
    category: 'Success Stories',
    excerpt: '',
    content: '',
    imageUrl: '',
    is_featured: false // Default to false
  });

  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append('title', formData.title);
    data.append('category', formData.category);
    data.append('excerpt', formData.excerpt);
    data.append('content', formData.content);
    
    // 2. Send the checkbox value to backend
    data.append('is_featured', String(formData.is_featured));
    
    if (imageMode === 'upload' && file) {
      data.append('imageFile', file);
    } else if (imageMode === 'url' && formData.imageUrl) {
      data.append('image', formData.imageUrl);
    }

    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:5000/api/blogs', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
        body: data
      });

      if (res.ok) {
        navigate('/admin/dashboard');
      } else {
        const err = await res.json();
        alert(err.message || "Failed to create post.");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
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
          <h1 className="text-2xl font-black text-gray-900 mb-6">Add New Story</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* --- FEATURED TOGGLE --- */}
            <div className="flex items-center gap-3 p-4 bg-yellow-50 border border-[#FAD201] rounded-lg">
              <input 
                type="checkbox" 
                id="featured"
                className="w-5 h-5 text-trukGreen focus:ring-trukGreen border-gray-300 rounded"
                checked={formData.is_featured}
                onChange={e => setFormData({...formData, is_featured: e.target.checked})}
              />
              <label htmlFor="featured" className="font-bold text-gray-800 cursor-pointer select-none">
                Show this story on the Home Page?
              </label>
            </div>
            {/* ----------------------- */}

            {/* Title */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Title</label>
              <input 
                required 
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-trukGreen/20 outline-none"
                value={formData.title}
                onChange={e => setFormData({...formData, title: e.target.value})}
              />
            </div>
            
            {/* Category */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Category</label>
              <select 
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-trukGreen/20 outline-none"
                value={formData.category}
                onChange={e => setFormData({...formData, category: e.target.value})}
              >
                <option value="Success Stories">Success Stories</option>
                <option value="Company News">Company News</option>
              </select>
            </div>

            {/* Image Section */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Cover Image</label>
              <div className="flex gap-4 mb-3">
                <button type="button" onClick={() => setImageMode('upload')} className={`px-4 py-2 rounded-full text-sm font-bold ${imageMode === 'upload' ? 'bg-trukGreen text-white' : 'bg-gray-100 text-gray-500'}`}>Upload File</button>
                <button type="button" onClick={() => setImageMode('url')} className={`px-4 py-2 rounded-full text-sm font-bold ${imageMode === 'url' ? 'bg-trukGreen text-white' : 'bg-gray-100 text-gray-500'}`}>Paste Link</button>
              </div>

              {imageMode === 'upload' ? (
                <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-trukGreen/10 file:text-trukGreen hover:file:bg-trukGreen/20"/>
              ) : (
                <input className="w-full p-3 border border-gray-200 rounded-lg outline-none" placeholder="https://..." value={formData.imageUrl} onChange={e => setFormData({...formData, imageUrl: e.target.value})} />
              )}
            </div>

            {/* Text Areas */}
            <textarea required rows={3} className="w-full p-3 border border-gray-200 rounded-lg outline-none" placeholder="Quote / Summary" value={formData.excerpt} onChange={e => setFormData({...formData, excerpt: e.target.value})} />
            <textarea required rows={6} className="w-full p-3 border border-gray-200 rounded-lg outline-none" placeholder="Full Story" value={formData.content} onChange={e => setFormData({...formData, content: e.target.value})} />

            <button type="submit" disabled={loading} className="w-full bg-trukGreen text-white font-bold py-4 rounded-xl hover:bg-[#0d522b] transition shadow-lg">
              {loading ? 'Publishing...' : 'Publish Story'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddBlog;
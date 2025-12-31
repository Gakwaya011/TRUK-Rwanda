import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, UploadCloud, Link as LinkIcon } from 'lucide-react';

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  
  const [imageMode, setImageMode] = useState<'upload' | 'url'>('url');
  
  // State for form fields
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    excerpt: '',
    content: '',
    imageUrl: '',
    is_featured: false 
  });
  
  const [file, setFile] = useState<File | null>(null);

  // 1. Fetch existing data
  useEffect(() => {
    fetch(`https://truk-rwanda-backend.onrender.com/api/blogs/${id}`)
      .then(res => res.json())
      .then(data => {
        setFormData({
          title: data.title,
          category: data.category,
          excerpt: data.excerpt,
          content: data.content,
          imageUrl: data.image,
          is_featured: data.is_featured || false 
        });
        
        // If the current image is a URL, default to URL mode
        if (data.image) setImageMode('url');
        
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // 2. Prepare Data
    const data = new FormData();
    data.append('title', formData.title);
    data.append('category', formData.category);
    data.append('excerpt', formData.excerpt);
    data.append('content', formData.content);
    data.append('is_featured', String(formData.is_featured));
    
    // Handle Image Logic
    if (imageMode === 'upload' && file) {
      data.append('imageFile', file);
    } else if (imageMode === 'url' && formData.imageUrl) {
      data.append('image', formData.imageUrl);
    }

    try {
      // 3. Get Token
      const token = localStorage.getItem('token');
      
      if (!token) {
        alert("Session expired. Please log in again.");
        navigate('/admin/login');
        return;
      }

      // 4. Send Request
      const res = await fetch(`https://truk-rwanda-backend.onrender.com/api/blogs/${id}`, {
        method: 'PUT',
        headers: { 
          'Authorization': `Bearer ${token}` 
        },
        body: data
      });

      // 5. Handle Response
      if (res.ok) {
        navigate('/admin/dashboard');
      } else if (res.status === 401) {
        alert("Your session has expired. Please log in again.");
        localStorage.removeItem('token'); // Clear bad token
        navigate('/admin/login');
      } else {
        const errorData = await res.json();
        alert(errorData.message || "Failed to update post.");
      }
    } catch (error) {
      console.error("Update Error:", error);
      alert("Server error. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center pt-40 font-bold text-gray-500">Loading story details...</div>;

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        
        <button onClick={() => navigate('/admin/dashboard')} className="flex items-center gap-2 text-gray-500 hover:text-trukGreen mb-8 font-bold">
          <ArrowLeft size={18} /> Cancel Edit
        </button>

        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          <h1 className="text-2xl font-black text-gray-900 mb-6">Edit Story</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* FEATURED TOGGLE */}
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
                <option value="Industry Insights">Industry Insights</option>
              </select>
            </div>

            {/* Image Section */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Cover Image</label>
              <div className="flex gap-4 mb-3">
                <button 
                  type="button"
                  onClick={() => setImageMode('upload')}
                  className={`flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-full transition ${imageMode === 'upload' ? 'bg-trukGreen text-white' : 'bg-gray-100 text-gray-500'}`}
                >
                  <UploadCloud size={16} /> Upload New
                </button>
                <button 
                  type="button"
                  onClick={() => setImageMode('url')}
                  className={`flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-full transition ${imageMode === 'url' ? 'bg-trukGreen text-white' : 'bg-gray-100 text-gray-500'}`}
                >
                  <LinkIcon size={16} /> Keep/Edit Link
                </button>
              </div>

              {imageMode === 'upload' ? (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition relative">
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                  />
                  <div className="flex flex-col items-center pointer-events-none">
                    <UploadCloud className="text-trukGreen mb-2" size={32} />
                    {file ? <div className="text-trukGreen font-bold">{file.name}</div> : <span className="text-gray-500">Click to replace image</span>}
                  </div>
                </div>
              ) : (
                <input 
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-trukGreen/20 outline-none"
                  value={formData.imageUrl}
                  onChange={e => setFormData({...formData, imageUrl: e.target.value})}
                />
              )}
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Quote / Summary</label>
              <textarea 
                required 
                rows={3}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-trukGreen/20 outline-none"
                value={formData.excerpt}
                onChange={e => setFormData({...formData, excerpt: e.target.value})}
              />
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Full Story</label>
              <textarea 
                required 
                rows={6}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-trukGreen/20 outline-none"
                value={formData.content}
                onChange={e => setFormData({...formData, content: e.target.value})}
              />
            </div>

            <button type="submit" disabled={loading} className="w-full bg-trukGreen text-white font-bold py-4 rounded-xl hover:bg-[#0d522b] transition shadow-lg">
              {loading ? 'Saving Changes...' : 'Update Story'}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBlog;
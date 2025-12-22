import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Quote } from 'lucide-react';

const BlogDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/blogs/${id}`)
      .then(res => res.json())
      .then(data => {
        setPost(data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, [id]);

  if (loading) return <div className="text-center pt-40">Loading...</div>;
  if (!post) return <div className="text-center pt-40">Story not found.</div>;

  return (
    <div className="font-sans bg-white min-h-screen">
      <Navbar />

      {/* Hero Image */}
      <div className="w-full h-[50vh] min-h-[400px] relative">
         <div className="absolute inset-0 bg-black/40 z-10"></div>
         <img 
            src={post.image || "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&q=80"} 
            className="w-full h-full object-cover"
         />
         <div className="absolute bottom-0 left-0 w-full z-20 p-6 md:p-12 bg-gradient-to-t from-black/80 to-transparent">
            <div className="max-w-4xl mx-auto text-white">
                <span className="bg-[#FAD201] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                    {post.category}
                </span>
                <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight">{post.title}</h1>
            </div>
         </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link to="/blog" className="inline-flex items-center text-gray-500 hover:text-trukGreen font-bold mb-8">
            <ArrowLeft size={18} className="mr-2"/> Back to Stories
        </Link>

        {/* The Quote Highlight */}
        <div className="bg-gray-50 border-l-4 border-trukGreen p-6 md:p-8 rounded-r-xl mb-10">
            <Quote className="text-trukGreen opacity-30 mb-2" size={32} />
            <p className="text-xl md:text-2xl font-serif italic text-gray-800 leading-relaxed">
                "{post.excerpt}"
            </p>
        </div>

        {/* Main Body */}
        <div className="prose prose-lg text-gray-700 leading-relaxed">
            {post.content.split('\n').map((paragraph: string, idx: number) => (
                <p key={idx} className="mb-4">{paragraph}</p>
            ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogDetail;
import React, { useEffect, useState } from 'react';
import { Reveal } from './Reveal';
import { ArrowRight, Calendar, Tag } from 'lucide-react'; // Added generic icons
import { Link } from 'react-router-dom';

const LatestNews = () => {
  const [stories, setStories] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://truk-rwanda-backend.onrender.com/api/blogs')
      .then(res => res.json())
      .then(data => {
        // FILTER LOGIC
        const featured = data.filter((story: any) => 
            story.is_featured === true || story.is_featured === "true"
        );
        setStories(featured.slice(0, 3));
      })
      .catch(err => console.error(err));
  }, []);

  if (stories.length === 0) return null;

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        
        {/* HEADER: Generalized Title */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <Reveal width="100%">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-trukGreen uppercase tracking-tight">
                Latest News & <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAD201] to-amber-500">
                  Industry Insights
                </span>
              </h2>
              <div className="w-20 h-1.5 bg-trukGreen mt-4 rounded-full"></div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
             <Link to="/blog" className="hidden md:flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-trukGreen uppercase tracking-widest transition-colors">
                View All Stories <ArrowRight size={16} />
             </Link>
          </Reveal>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stories.map((story, index) => (
            <Reveal key={story.id || story._id} delay={index * 0.1}>
              {/* NEW CARD DESIGN: Works for Logistics, Meat, Farming, anything */}
              <Link to={`/blog/${story.id || story._id}`} className="group block h-full">
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  
                  {/* Image Section */}
                  <div className="h-56 overflow-hidden relative">
                     <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                     <img 
                        src={story.image} 
                        alt={story.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                     />
                     {/* Category Badge */}
                     <div className="absolute top-4 left-4 z-20 bg-[#FAD201] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {story.category || "News"}
                     </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-8 flex flex-col flex-grow">
                     
                     {/* Date & Metadata */}
                     <div className="flex items-center gap-4 text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">
                        <div className="flex items-center gap-1">
                           <Calendar size={12} />
                           <span>{new Date(story.createdAt || Date.now()).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                           <Tag size={12} />
                           <span>{story.author || "TRUK Team"}</span>
                        </div>
                     </div>

                     <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-trukGreen transition-colors line-clamp-2">
                        {story.title}
                     </h3>
                     
                     {/* Excerpt - No longer italic, looks like a standard article summary */}
                     <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3 flex-grow">
                        {story.excerpt}
                     </p>

                     <div className="flex items-center text-trukGreen font-bold text-sm uppercase tracking-wide group-hover:gap-2 transition-all">
                        Read Story <ArrowRight size={16} className="ml-1" />
                     </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        
        {/* Mobile Button */}
        <div className="text-center md:hidden">
            <Link to="/blog" className="inline-flex items-center gap-2 px-8 py-3 bg-gray-100 text-gray-900 font-bold rounded-full hover:bg-trukGreen hover:text-white transition-all duration-300 uppercase tracking-wide text-sm">
                Read All News <ArrowRight size={18} />
            </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
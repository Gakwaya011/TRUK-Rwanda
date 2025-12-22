import React, { useEffect, useState } from 'react';
import { Reveal } from './Reveal';
import { Quote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LatestNews = () => {
  const [stories, setStories] = useState<any[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/blogs')
      .then(res => res.json())
      .then(data => {
        console.log("ALL BLOGS:", data); // Check console to see what the server returns!

        // FILTER LOGIC: Check for boolean true OR string "true"
        const featured = data.filter((story: any) => 
            story.is_featured === true || story.is_featured === "true"
        );
        
        console.log("FEATURED:", featured); // See if the filter worked
        setStories(featured.slice(0, 3));
      })
      .catch(err => console.error(err));
  }, []);

  // If no stories are featured, hide the section
  if (stories.length === 0) return null;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h2 className="text-3xl md:text-4xl font-extrabold text-trukGreen uppercase tracking-tight">
              Farmer Success Stories
            </h2>
            <div className="w-24 h-1.5 bg-[#FAD201] mt-6 mx-auto rounded-full"></div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stories.map((story, index) => (
            <Reveal key={story.id || story._id} delay={index * 0.1}>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <Quote size={40} className="text-trukGreen mb-6 opacity-20" />
                <p className="text-gray-700 italic text-lg leading-relaxed mb-6 flex-grow">"{story.excerpt}"</p>
                <div className="flex items-center gap-4 mt-auto">
                   <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                      <img src={story.image} alt="User" className="w-full h-full object-cover"/>
                   </div>
                   <div>
                      <h4 className="font-bold text-gray-900 line-clamp-1">{story.title}</h4>
                      <p className="text-xs text-trukGreen font-bold uppercase tracking-widest">{story.category}</p>
                   </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        
        <div className="text-center">
            <Link to="/blog" className="inline-flex items-center gap-2 px-8 py-3 bg-white border-2 border-trukGreen text-trukGreen font-bold rounded-full hover:bg-trukGreen hover:text-white transition-all duration-300 uppercase tracking-wide text-sm">
                Read More News & Stories <ArrowRight size={18} />
            </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
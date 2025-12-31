import React from 'react';
import { Reveal } from './Reveal';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      {/* Full Width Container */}
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* LEFT SIDE: BIG TITLE (Spans 4 columns) */}
          <div className="lg:col-span-4 text-left lg:sticky lg:top-32">
            <Reveal width="100%">
                <div>
                    <h2 className="text-4xl md:text-6xl font-black text-trukGreen uppercase tracking-tighter leading-none mb-6">
                        About <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAD201] to-amber-500">
                            TRUK
                        </span>
                    </h2>
                    <div className="h-2 w-20 bg-trukGreen rounded-full"></div>
                </div>
            </Reveal>
          </div>

          {/* RIGHT SIDE: CONTENT (Spans 8 columns) */}
          <div className="lg:col-span-8">
            <Reveal width="100%" delay={0.2}>
                <div className="space-y-8">
                    {/* Updated with LinkedIn Philosophy */}
                    <p className="text-2xl md:text-3xl text-gray-800 font-medium leading-relaxed">
                        TRUK Rwanda was established with one simple philosophy: that our customers 
                        deserve the highest level of service and reliability.
                    </p>

                    <div className="h-px w-full bg-gray-200"></div>

                    {/* Updated with LinkedIn Mission */}
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                        We are a logistic and transportation company specialized in perishable goods handling. 
                        Our mission is to regard our customer as the most important person in the company 
                        and foster long-term relationships. We make sure to be there for you, ensuring 
                        your products move efficiently and safely across the region.
                    </p>

                    {/* KEY STATS ROW */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8">
                        <div>
                            <h4 className="text-4xl font-bold text-trukGreen">2020</h4>
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-1">Established</p>
                        </div>
                        <div>
                            <h4 className="text-4xl font-bold text-trukGreen">100%</h4>
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-1">Reliability</p>
                        </div>
                        <div>
                            <h4 className="text-4xl font-bold text-trukGreen">24/7</h4>
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-1">Support</p>
                        </div>
                    </div>
                </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
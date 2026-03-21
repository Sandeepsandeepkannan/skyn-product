"use client";

import React from "react";
import { Star, ShieldCheck, Sparkles, Beaker } from "lucide-react";

export default function GlowEffectResult() {
  return (
    <section className="bg-[#FDFCF8] py-0 px-6 overflow-hidden selection:bg-[#E9F0B1]">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;600&display=swap');
        h2, h3, h4, .serif { font-family: 'Cormorant Garamond', serif; }
        p, span, blockquote { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* Expanded max-width slightly to reduce right-side dead space */}
      <div className="max-w-6xl mx-auto py-12 md:py-20">
        
        {/* 1. HEADER */}
        <header className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-6 bg-[#E9F0B1]" />
            <p className="text-[9px] tracking-[0.4em] uppercase text-gray-400 font-bold">Clinical Results</p>
            <div className="h-[1px] w-6 bg-[#E9F0B1]" />
          </div>
          <h2 className="text-4xl md:text-7xl text-[#1A1A1A] leading-none tracking-tighter">
            The <span className="italic text-[#8C8273]">Glow</span> Reality
          </h2>
        </header>

        {/* 2. LAYOUT - Adjusted to 5:7 ratio to push text further right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:items-stretch">
          
          {/* Left: Product Image */}
          <div className="lg:col-span-5 relative group flex">
            <div className="absolute -inset-8 bg-[#E9F0B1]/15 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            <div className="relative w-full h-[400px] lg:h-full overflow-hidden rounded-sm shadow-2xl border border-black/5 bg-white">
              <img 
                src="bolt.jpg" 
                alt="SKYN BOLT Product"
                className="w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right: Detailed Content - Brighter text and better alignment */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8 lg:pl-10">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl md:text-5xl text-black italic serif">Visual Milestones</h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xl font-light">
                  Our clinical trials demonstrate that the <span className="text-black font-semibold">RPC-6 complex</span> doesn't just sit on the surface. It penetrates the dermal layers to reset your skin's natural luminosity index. 
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Refined Texture", desc: "98% saw smoother surface area", icon: <Sparkles size={16} /> },
                  { title: "Tone Correction", desc: "Visible reduction in redness", icon: <ShieldCheck size={16} /> },
                  { title: "Luminous Vitality", desc: "Deep inner-glow restoration", icon: <Star size={16} /> },
                  { title: "Cellular Velocity", desc: "Faster recovery overnight", icon: <Beaker size={16} /> }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-3 p-6 border border-black/5 bg-white hover:border-[#E9F0B1] transition-all duration-500 group shadow-sm hover:shadow-md">
                    <span className="text-[#E9F0B1] group-hover:scale-110 transition-transform">{item.icon}</span>
                    <div className="space-y-1">
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black">{item.title}</p>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial card - High contrast and bright */}
            <div className="bg-white p-8 border-l-[3px] border-[#E9F0B1] shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-[0.03] pointer-events-none">
                  <Star size={80} fill="black" />
               </div>
               <div className="flex text-[#E9F0B1] gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
               </div>
               <blockquote className="text-black text-lg md:text-xl leading-relaxed italic font-light">
                 "I finally feel confident going makeup free. My face looks more <span className="text-[#8C8273] font-normal">radiant and biologically younger</span> every single day."
               </blockquote>
               <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-black mt-6">— AURELIE EMMA</h4>
            </div>
          </div>
        </div>

        {/* 3. CTA FOOTER */}
        <div className="mt-20 flex flex-col items-center gap-6">
           <div className="h-[1px] w-20 bg-black/10"></div>
           <button className="bg-black text-white px-16 py-5 text-[10px] font-bold uppercase tracking-[0.5em] hover:bg-[#E9F0B1] hover:text-black transition-all duration-700 shadow-2xl active:scale-95">
             Begin Your Ritual
           </button>
        </div>

      </div>
    </section>
  );
}
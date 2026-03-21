"use client";

import React from "react";
import { Star, ShieldCheck, Sparkles } from "lucide-react";

export default function GlowEffectResult() {
  return (
    <section className="bg-[#FDFCF8] py-20 md:py-32 px-6 overflow-hidden selection:bg-[#E9F0B1]">
      {/* Font Injection */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;600&display=swap');
        h2, h3, h4, .serif { font-family: 'Cormorant Garamond', serif; }
        p, span, blockquote { font-family: 'Inter', sans-serif; }
      `}</style>

      <div className="max-w-6xl mx-auto">
        
        {/* 1. MINIMALIST HEADER */}
        <header className="flex flex-col items-center text-center space-y-4 mb-20">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-8 bg-[#E9F0B1]" />
            <p className="text-[10px] tracking-[0.5em] uppercase text-gray-400 font-bold">Clinical Results</p>
            <div className="h-[1px] w-8 bg-[#E9F0B1]" />
          </div>
          <h2 className="text-5xl md:text-8xl text-[#1A1A1A] leading-none tracking-tighter">
            The <span className="italic text-[#8C8273]">Glow</span> Reality
          </h2>
          <p className="max-w-md text-gray-500 text-xs md:text-sm leading-relaxed font-light tracking-wide pt-4">
            A testament to consistent clinical excellence and precision-engineered formulas. 
            Experience the transformative power of SKYN.
          </p>
        </header>

        {/* 2. HIGH-IMPACT IMAGE DISPLAY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Product/Result Highlight */}
          <div className="lg:col-span-7 relative group">
            {/* Soft Glow behind image */}
            <div className="absolute -inset-10 bg-[#E9F0B1]/20 rounded-full blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            <div className="relative aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-sm shadow-2xl border border-black/5">
              <img 
                src="skinreality3.jpg" 
                alt="After SKYN Treatment Result"
                className="w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-105"
              />
              {/* Elegant Label Overlay */}
             
            </div>
          </div>

          {/* Right: Key Transformations (Interactive List) */}
          <div className="lg:col-span-5 space-y-10 lg:pl-10">
            <h3 className="text-3xl md:text-4xl text-black italic serif">Visual Milestones</h3>
            
            <div className="space-y-6">
              {[
                { title: "Refined Texture", icon: <Sparkles size={16} /> },
                { title: "Even Tone Correction", icon: <ShieldCheck size={16} /> },
                { title: "Luminous Vitality", icon: <Star size={16} /> }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 p-6 border border-black/5 bg-white hover:border-[#E9F0B1] transition-all duration-500 group">
                  <span className="text-[#E9F0B1] group-hover:scale-125 transition-transform">{item.icon}</span>
                  <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-black">{item.title}</p>
                </div>
              ))}
            </div>

            {/* Micro-Testimonial Card */}
            <div className="bg-white p-8 border-l-2 border-[#E9F0B1] shadow-xl">
               <div className="flex text-[#E9F0B1] gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
               </div>
               <p className="text-[#1A1A1A] text-sm leading-relaxed italic font-light">
                 "I finally feel confident going makeup free. My face looks more radiant every single day."
               </p>
               <h4 className="text-[10px] font-black uppercase tracking-widest text-black mt-4">— Aurelie Emma</h4>
            </div>
          </div>
        </div>

        {/* 3. CTA FOOTER */}
        <div className="mt-24 flex flex-col items-center gap-8">
           <div className="h-[1px] w-24 bg-black/10"></div>
           <button className="bg-black text-white px-16 py-5 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-[#E9F0B1] hover:text-black transition-all duration-700 shadow-xl">
             Begin Your Own Journey
           </button>
        </div>

      </div>
    </section>
  );
}
"use client"

import React from 'react';

export default function Productimage() {
  return (
    <section className="relative min-h-screen bg-[#FDFCF8] flex items-center overflow-hidden py-24 md:py-32">
      {/* Font Injection */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;600&display=swap');
        h1, h2, h3, .serif { font-family: 'Cormorant Garamond', serif; }
        body, p, span, button { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* 1. DECORATIVE ELEMENTS */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[#E9F0B1] rounded-full blur-[120px] opacity-10 -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto w-full px-8 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
        
        {/* LEFT SECTION: Layered Visuals (Images moved to the left) */}
        <div className="lg:col-span-6 relative flex items-center justify-center order-1">
          
          {/* Background Branding (Vertical) */}
          <div className="absolute -left-10 top-0 h-full flex items-center">
             <span className="text-[120px] font-serif text-black/[0.02] select-none pointer-events-none uppercase rotate-90 origin-center">
               REALITY
             </span>
          </div>

          {/* Main Product Hero */}
          <div className="relative w-full max-w-[400px] aspect-[4/5] z-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden rounded-sm transform lg:translate-x-10">
            <img 
              src="/skynrealityimg4.png" 
              alt="SKYN Reality Product"
              className="w-full h-full object-cover transition-transform duration-[6000ms] hover:scale-110"
            />
          </div>

          {/* Texture Overlay (Shifted to Left-Bottom) */}
          <div className="absolute -bottom-8 -left-4 md:left-0 w-[180px] md:w-[240px] aspect-square z-20 shadow-2xl rounded-sm border-[6px] border-[#FDFCF8] overflow-hidden hidden sm:block">
            <img 
              src="/skynrealityimg5.png" 
              alt="Texture Detail"
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Floating Tier Badge */}
          <div className="absolute top-10 right-0 z-30 bg-black text-white px-6 py-4 rounded-full shadow-2xl transform rotate-12">
             <p className="text-[8px] tracking-[0.3em] font-bold uppercase">Clinical Tier 01</p>
          </div>
        </div>

        {/* RIGHT SECTION: Content (Text moved to the right) */}
        <div className="lg:col-span-6 space-y-12 z-10 order-2 lg:pl-10">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
               <div className="h-[1px] w-8 bg-[#E9F0B1]"></div>
               <p className="text-[10px] tracking-[0.5em] uppercase text-gray-400 font-bold">The RPC-6 Synthesis</p>
            </div>
            <h1 className="text-[50px] md:text-[75px] leading-[1] tracking-tighter text-[#1A1A1A]">
              Beyond the <br />
              <span className="text-[#8C8273] serif italic">Surface Layer.</span>
            </h1>
            <p className="text-gray-500 text-[15px] leading-relaxed font-light max-w-md">
              Skin Reality isn't a temporary fix—it's a reset. Our formula focuses on mitochondrial skin health, ensuring cellular energy remains at its peak 24 hours a day.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 gap-8 py-6 border-y border-black/5">
            <div className="space-y-2">
              <span className="text-[#E9F0B1] text-xl">✦</span>
              <p className="text-xs font-bold uppercase tracking-widest text-black">Molecular Velocity</p>
              <p className="text-[11px] text-gray-400 leading-relaxed">Instant absorption without barrier disruption.</p>
            </div>
            <div className="space-y-2">
              <span className="text-[#E9F0B1] text-xl">✦</span>
              <p className="text-xs font-bold uppercase tracking-widest text-black">Tone Neutrality</p>
              <p className="text-[11px] text-gray-400 leading-relaxed">Clinical correction of persistent redness.</p>
            </div>
          </div>

          {/* Pricing & CTA */}
          <div className="flex items-center gap-10 pt-4">
            <div className="flex flex-col">
               <span className="text-[9px] uppercase tracking-widest text-gray-400 mb-1">Standard Investment</span>
               <span className="text-2xl font-serif text-black">₹ 2,499.00</span>
            </div>
            <button className="flex-1 bg-black text-white py-5 rounded-sm font-bold text-[10px] uppercase tracking-[0.4em] hover:bg-[#E9F0B1] hover:text-black transition-all duration-700 shadow-xl active:scale-95">
              Secure the Ritual
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
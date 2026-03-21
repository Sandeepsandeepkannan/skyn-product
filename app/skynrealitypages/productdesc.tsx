"use client"

import React from 'react';

export default function Productdescripton() {
  return (
    <section className="relative min-h-screen bg-[#FDFCF8] flex items-center overflow-hidden pt-24 md:pt-32">
      {/* Font Injection */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;600&display=swap');
        h1, h2, h3, .serif { font-family: 'Cormorant Garamond', serif; }
        body, p, span, button { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* 1. LAYERED BACKGROUND GLOWS */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E9F0B1] rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#E9F0B1] rounded-full blur-[100px] opacity-10"></div>

      <div className="max-w-7xl mx-auto w-full px-8 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* LEFT CONTENT: Narrative Column */}
        <div className="lg:col-span-6 space-y-10 z-10 order-2 lg:order-1">
          <div className="space-y-4">
            <p className="text-[10px] tracking-[0.5em] uppercase text-gray-400 font-bold">The Science of Radiance</p>
            <h1 className="text-[55px] md:text-[80px] lg:text-[90px] leading-[0.9] tracking-tighter text-[#1A1A1A]">
              Skin <span className="text-[#8C8273] serif italic">Reality</span> <br />
              <span className="font-bold uppercase">Redefined.</span>
            </h1>
          </div>

          <div className="space-y-6 max-w-lg">
            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light">
              Skin Reality utilizes a proprietary **RPC-6 molecular complex** designed to mirror the biological rhythm of your skin. This high-velocity formula accelerates cellular turnover while delivering deep-layer hydration.
            </p>
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed border-l-2 border-[#E9F0B1] pl-6 italic">
              Experience a clinical-grade transformation that bridges the gap between surgical precision and daily ritual luxury.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-6 pt-4">
            <button className="bg-black text-white px-12 py-5 rounded-sm font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-[#E9F0B1] hover:text-black transition-all duration-700 shadow-2xl">
              Explore the Collection
            </button>
            <div className="h-[1px] w-12 bg-black/10"></div>
            <span className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">Dermatologically Verified</span>
          </div>
        </div>

        {/* RIGHT SECTION: Dual Image Composition */}
        <div className="lg:col-span-6 relative order-1 lg:order-2 flex items-center justify-center">
          
          {/* Main Large Poster Image */}
          <div className="relative w-full max-w-[420px] aspect-[4/5] z-10 shadow-2xl overflow-hidden rounded-sm transform lg:-translate-x-10">
            <img 
              src="/skynrealityimg4.png" 
              alt="SKYN BOLT Radiance"
              className="w-full h-full object-cover transition-transform duration-[4000ms] hover:scale-105"
            />
          </div>

          {/* Smaller Offset Image (Texture or Second Product) */}
          <div className="absolute -bottom-10 -right-4 md:right-0 w-[200px] md:w-[280px] aspect-square z-20 shadow-[-20px_20px_50px_rgba(0,0,0,0.2)] rounded-sm border-[8px] border-[#FDFCF8] overflow-hidden hidden sm:block transform hover:rotate-2 transition-transform duration-500">
            <img 
              src="/skynrealityimg5.png" // Replace with your texture or second product image
              alt="SKYN Detail"
              className="w-full h-full object-cover"
            />
            {/* Soft watermark on the smaller image */}
            <div className="absolute top-4 right-4 text-[8px] font-bold text-white uppercase tracking-widest opacity-60">
              Texture 01
            </div>
          </div>

          {/* Subtle Branding Watermark */}
          <div className="absolute -top-10 right-0 text-[100px] font-serif text-black/[0.03] select-none pointer-events-none uppercase">
            SKYN
          </div>
        </div>

      </div>
    </section>
  );
}
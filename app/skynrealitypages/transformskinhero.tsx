"use client"

import React from 'react';
import { Play } from 'lucide-react';

export default function TransformSkinHero() {
  return (
    <section className="relative min-h-screen bg-[#FDFCF8] flex items-center overflow-hidden pt-24 md:pt-32">
      {/* Font Injection */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;600&display=swap');
        h1, h2, h3, .serif { font-family: 'Cormorant Garamond', serif; }
        body, p, span, button { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* 1. BACKGROUND GLOWS */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-[#E9F0B1] rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-[40%] w-48 h-48 bg-[#E9F0B1] rounded-full blur-[120px] opacity-30"></div>

      <div className="max-w-7xl mx-auto w-full px-8 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div className="space-y-10 z-10 order-2 lg:order-1 pb-20">
          <div className="space-y-4">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gray-400 font-bold">Personal Skincare</p>
            <h1 className="text-[55px] md:text-[80px] lg:text-[95px] leading-[1] tracking-tight text-[#1A1A1A]">
              <span className="text-[#8C8273] serif italic">Transform</span> <br />
              <span className="font-bold uppercase">Your Skin</span>
            </h1>
          </div>

          <p className="max-w-md text-gray-500 text-sm md:text-base leading-relaxed font-light tracking-wide">
            Discover premium skincare formulas crafted with clinical precision and the RPC-6 complex to mirror your skin's natural reality.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-6 pt-4">
            <button className="bg-black text-white px-12 py-5 rounded-sm font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-[#E9F0B1] hover:text-black transition-all duration-500 shadow-xl">
              Shop Now
            </button>
            
           
          </div>
ls

          {/* Trust Badges */}
         
        </div>

        {/* RIGHT PRODUCT IMAGE (Fixed Fitting) */}
        <div className="relative flex justify-center  order-1 lg:order-2">
          {/* Subtle light glow behind the image */}
          <div className="absolute z-0 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#E9F0B1]/30 via-transparent to-transparent opacity-50"></div>

          {/* IMAGE CONTAINER: Set a specific width/height to match your poster */}
          <div className="relative   w-full max-w-[500px] aspect-square lg:aspect-auto ">
            <img 
              src="/skynrealityimg1.png" 
              alt="SKYN BOLT Radiance"
              className="w-full h-full object-contain drop-shadow-2xl mb-15 rounded-sm"
              style={{ maxHeight: '80vh' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
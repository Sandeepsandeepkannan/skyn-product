"use client"

import React from 'react';

export default function SkynJourneySection() {
  return (
    <section className="min-h-screen bg-[#FDFCF8] px-8 md:px-20 py-24 flex items-center justify-center overflow-hidden">
      {/* Font Injection */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;600&display=swap');
        h2, h3, .serif { font-family: 'Cormorant Garamond', serif; }
        p, span { font-family: 'Inter', sans-serif; }
        
        .fade-up {
          animation: fadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto w-full relative">
        {/* 1. LAYERED HEADER BLOCK */}
        <div className="mb-20 fade-up">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#E9F0B1]"></div>
            <p className="text-[10px] tracking-[0.5em] uppercase text-gray-400 font-bold">The Heritage</p>
          </div>
          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* 2. LEFT: FOUNDER CARD (Updated Height) */}
          <div className="lg:col-span-5 relative group fade-up" style={{ animationDelay: '0.2s' }}>
            {/* Decorative Background Frame */}
            <div className="absolute -inset-4 border border-[#E9F0B1]/30 translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700"></div>
            
            <div className="relative bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] rounded-sm overflow-hidden">
              {/* Image height reduced to aspect-[16/13] and max-height set */}
              <div className="aspect-[16/13] md:max-h-[400px] overflow-hidden">
                <img 
                  src="/img6.png" 
                  alt="Dr. Shruthi" 
                  className="w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-110"
                />
              </div>
              
              <div className="p-8 md:p-10 bg-white">
                <h2 className="text-4xl font-bold text-black mb-2">Dr. Sruthi  Kishan</h2>
                <p className="text-[9px] tracking-[0.3em] uppercase text-[#8C8273] font-bold mb-4">Founder & Chief Strategist</p>
                <p className="text-gray-500 text-[13px] leading-relaxed font-light tracking-wide">
                  Dr. Shruthi has dedicated her career to the intersection of clinical 
                  dermatology and high-performance luxury. With over 15 years of 
                  expertise, she has pioneered the "Skyn Ritual"—a biological evolution for your skin.
                </p>
              </div>
            </div>
          </div>

          {/* 3. RIGHT: CONTENT & PHILOSOPHY */}
          <div className="lg:col-span-7 space-y-12 lg:pt-4 fade-up" style={{ animationDelay: '0.4s' }}>
            
            {/* Interactive Approach Box */}
            <div className="relative group inline-block">
              <div className="bg-[#E9F0B1] px-8 py-10 md:px-12 md:py-12 rounded-sm shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                <h3 className="text-3xl md:text-4xl text-black serif leading-tight">
                  The Ultimate Journey <br /> of Skin Care
                </h3>
                <div className="h-[2px] w-12 bg-black/10 mt-4"></div>
              </div>
            </div>

            {/* Narrative Content */}
            <div className="space-y-10">
              <div className="flex gap-6 items-start">
                <span className="text-[#E9F0B1] text-2xl mt-1">✦</span>
                <div className="space-y-4">
                  <h4 className="text-xl serif italic">Where Science Becomes Art</h4>
                  <p className="text-gray-500 text-[14px] leading-[1.8] font-light max-w-lg">
                    At Skyn Labs, we believe the ultimate skincare journey begins with 
                    precision. By combining cutting-edge molecular research with 
                    bespoke aesthetic care, we ensure every treatment mirrors the 
                    uniqueness of your skin's own reality.
                  </p>
                </div>
              </div>

              {/* Enhanced Stats List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-4 p-5 border border-black/5 bg-white hover:border-[#E9F0B1] transition-all duration-500 group">
                  <span className="text-lg group-hover:rotate-90 transition-transform duration-500">☀️</span>
                  <div className="flex flex-col">
                    <span className="text-black font-bold text-[10px] uppercase tracking-widest">Global Impact</span>
                    <p className="text-[9px] text-gray-400 uppercase tracking-widest mt-1">10k+ Transformations</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-5 border border-black/5 bg-white hover:border-[#E9F0B1] transition-all duration-500 group">
                  <span className="text-lg group-hover:rotate-90 transition-transform duration-500">📍</span>
                  <div className="flex flex-col">
                    <span className="text-black font-bold text-[10px] uppercase tracking-widest">Chennai Flagship</span>
                    <p className="text-[9px] text-gray-400 uppercase tracking-widest mt-1">Epicenter of Innovation</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
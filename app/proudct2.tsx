import React from 'react';

export default function PremiumValueSection() {
  return (
    <section className="bg-[#FCFCFA] min-h-screen flex items-center justify-center px-6 py-24 font-sans overflow-hidden">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        
        {/* LEFT COLUMN: The Updated Narrative */}
        <div className="md:col-span-7 space-y-12">
          <div className="space-y-6">
            <p className="text-[10px] tracking-[0.5em] uppercase text-gray-400 font-bold">
              Investment in Excellence
            </p>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#1a1a1a] leading-[1.1] uppercase tracking-tighter">
              More than a number, <br />
              <span className="italic font-light text-[#8C8273]">a premium skincare.</span>
            </h2>
          </div>

          <div className="max-w-md space-y-8">
            <p className="text-gray-600 text-lg leading-relaxed font-light italic border-l-2 border-[#E9F0B1] pl-6">
              "True luxury isn't measured in currency, but in the unwavering trust between the formula and the skin."
            </p>
           
          </div>
        </div>

        {/* RIGHT COLUMN: The Watermark Display */}
        <div className="md:col-span-5 relative flex justify-center">
          {/* Brand Accent Glow */}
          <div className="absolute -z-10 w-[400px] h-[400px] bg-[#E9F0B1]/20 rounded-full blur-[100px] opacity-30"></div>
          
          <div className="flex flex-col items-center text-center">
            
            {/* 1. THE STARS: Symmetrical Branding */}
            <div className="flex gap-4 mb-10">
              <span className="text-2xl text-[#E9F0B1] animate-pulse">✦</span>
              <span className="text-3xl text-[#E9F0B1] animate-pulse [animation-delay:200ms]">✦</span>
              <span className="text-2xl text-[#E9F0B1] animate-pulse [animation-delay:400ms]">✦</span>
            </div>

            <span className="text-[10px] uppercase tracking-[1em] text-gray-400 mb-2 font-bold">
              Value Verified
            </span>
            
            <div className="relative group cursor-default">
              {/* 2. THE BIG NUMBER: Now the sole focal point in Dark Charcoal */}
              <h3 className="text-[160px] md:text-[200px] font-serif text-[#1A1A1A] leading-none select-none tracking-tighter transition-all duration-1000 group-hover:text-[#E9F0B1] group-hover:scale-105">
                2499
              </h3>

              {/* Minimalist Underline */}
              <div className="w-24 h-[1px] bg-black/10 mx-auto mt-4 transition-all duration-700 group-hover:w-full group-hover:bg-[#E9F0B1]"></div>
            </div>

            <p className="text-[11px] font-black uppercase tracking-[0.5em] text-black pt-12">
              The Gold Standard
            </p>
            
            <div className="pt-16 w-full">
              <button className="w-full bg-black text-white px-16 py-5 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-[#E9F0B1] hover:text-black transition-all duration-500 shadow-2xl">
                Secure Your Ritual
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
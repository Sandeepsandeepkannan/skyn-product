import React from 'react';

export default function StockistsPage() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center px-6 py-20 bg-[#FDFCF8]">
      {/* 1. SOFT BACKGROUND ELEMENT (Instead of dark image) */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="/img1.png" 
          alt="Premium Background"
          className="h-full w-full object-cover grayscale-[40%] blur-[2px]"
        />
        {/* Soft cream overlay to match Hero section */}
        <div className="absolute inset-0 bg-[#FDFCF8]/80"></div>
      </div>

      {/* 2. CONTENT CONTAINER */}
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE: Brand Narrative */}
        <div className="text-[#1A1A1A] space-y-10 p-8">
          <div>
            <p className="text-[10px] tracking-[0.5em] uppercase text-gray-400 font-bold mb-4">
              Global Accessibility
            </p>
            <h2 className="font-serif text-5xl md:text-7xl leading-[1.1] uppercase tracking-tighter">
              SKYN REALITY <br /> 
              <span className="text-[#E9F0B1] italic">&</span> SKYN BOLT
            </h2>
          </div>

          <div className="space-y-6 border-l border-[#E9F0B1] pl-6">
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-black mb-2 italic">Skyn Reality</h4>
              <p className="text-gray-500 text-sm leading-relaxed font-light tracking-wide">
                Our core overnight regenerator. Engineered with the RPC-6 complex to mirror your skin's natural 24-hour rhythm.
              </p>
            </div>

            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-black mb-2 italic">Skyn Bolt</h4>
              <p className="text-gray-500 text-sm leading-relaxed font-light tracking-wide">
                The high-velocity glow booster. A potent, fast-absorbing serum designed for Tier 1 performance and luminosity.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 pt-4">
            <div className="h-[1px] w-12 bg-[#E9F0B1]"></div>
            <span className="text-[9px] uppercase tracking-[0.3em] text-gray-400 font-medium">
              Precision Science • Luxury Results
            </span>
          </div>
        </div>

        {/* RIGHT SIDE: Platform Links (Updated to White Card Style) */}
        <div className="bg-white border border-black/5 shadow-2xl p-10 md:p-16 rounded-sm">
          <h3 className="text-[#1A1A1A] font-serif text-2xl mb-10 tracking-wide text-center uppercase">
            Official Retail Partners
          </h3>
          
          <div className="space-y-4">
            {/* AMAZON */}
            <a href="#" className="group flex items-center justify-between p-5 border border-black/5 hover:bg-[#E9F0B1] transition-all duration-500 rounded-sm">
              <span className="text-black font-bold text-[11px] uppercase tracking-[0.3em] group-hover:tracking-[0.4em] transition-all">
                Amazon Luxury
              </span>
              <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            {/* FLIPKART */}
            <a href="#" className="group flex items-center justify-between p-5 border border-black/5 hover:bg-[#E9F0B1] transition-all duration-500 rounded-sm">
              <span className="text-black font-bold text-[11px] uppercase tracking-[0.3em] group-hover:tracking-[0.4em] transition-all">
                Flipkart Premium
              </span>
              <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            {/* DIRECT BOUTIQUE */}
            <a href="#" className="group flex items-center justify-between p-5 bg-black hover:bg-[#E9F0B1] transition-all duration-500 rounded-sm">
              <span className="text-white group-hover:text-black font-bold text-[11px] uppercase tracking-[0.3em]">
                Direct Boutique
              </span>
              <span className="text-[9px] text-white group-hover:text-black font-bold uppercase opacity-50 italic tracking-tighter">Priority Shipping</span>
            </a>
          </div>

          <p className="text-center text-gray-400 text-[9px] uppercase tracking-widest mt-10 font-medium">
            Secure Authentication Guaranteed
          </p>
        </div>

      </div>
    </main>
  );
}
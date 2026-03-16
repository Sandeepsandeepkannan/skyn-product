import React from 'react';

export default function SkynBoltDetailSection() {
  return (
    <section className="flex flex-col md:flex-row min-h-screen bg-[#4A0E15]">
      
      {/* LEFT SIDE: Constrained Product Image */}
      <div className="w-full md:w-1/2 relative flex items-center justify-center bg-[#2D090C] p-8 md:p-20">
        
        {/* Main Image Container with fixed aspect ratio to prevent it looking "too big" */}
        <div className="relative w-full max-w-lg aspect-[3/4] overflow-hidden shadow-2xl group border border-white/5">
          {/* Subtle lighting overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          
          <img 
            src="/image1.png" 
            alt="SKYN BOLT Packaging"
            className="w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-110"
          />
          
          {/* Internal Branding overlay */}
          <div className="absolute bottom-8 left-8 z-20">
            <p className="text-[8px] tracking-[0.8em] uppercase text-[#E9F0B1] font-bold mb-2">
              LIVING IN YOUR BEST SKYN
            </p>
            <div className="w-10 h-[1px] bg-[#E9F0B1]"></div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Crimson Typography Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-12 md:px-24 py-20 bg-[#4A0E15]">
        <div className="max-w-md">
          {/* Logo Heading */}
          <div className="mb-12">
            <h2 className="font-serif text-6xl md:text-8xl leading-[0.8] text-white uppercase tracking-tighter">
              SKYN <br />
              <span className="text-[#E9F0B1] italic font-light">BOLT</span>
            </h2>
            <div className="w-full h-[1px] bg-white/10 mt-8"></div>
          </div>

          <div className="space-y-10">
            <div className="space-y-4 text-left">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#E9F0B1]">
                Glowbooster System
              </h4>
              <p className="text-gray-300 text-[15px] leading-[1.7] tracking-wide font-light">
                Redefining the reality of radiance. <span className="text-white font-medium">SKYN BOLT</span> is 
                a high-velocity formula designed for immediate luminosity. It is not just a serum; it is a Tier 1 investment in trust.
              </p>
            </div>

            {/* Feature List with minimal circles */}
            <ul className="space-y-4">
               <li className="flex items-center gap-4 group">
                  <div className="w-1.5 h-1.5 rounded-full border border-[#E9F0B1] group-hover:bg-[#E9F0B1] transition-all"></div>
                  <span className="text-[9px] uppercase tracking-[0.3em] text-white font-semibold">2499 • The Price of Trust</span>
               </li>
               <li className="flex items-center gap-4 group">
                  <div className="w-1.5 h-1.5 rounded-full border border-[#E9F0B1] group-hover:bg-[#E9F0B1] transition-all"></div>
                  <span className="text-[9px] uppercase tracking-[0.3em] text-white font-semibold">RPC-6 High Velocity Complex</span>
               </li>
            </ul>

            {/* CTA Button */}
            <div className="pt-8">
              <button className="w-full bg-[#E9F0B1] text-black px-10 py-4 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-white transition-all shadow-xl">
                Secure Your Glow
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
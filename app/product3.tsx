import React from 'react';

export default function SkynRealityDetailSection() {
  return (
    <section className="flex flex-col md:flex-row min-h-screen bg-[#F4F1EA]">
      
      {/* LEFT SIDE: Skyn Reality Clinical Image */}
      <div className="w-full md:w-1/2 relative flex items-center justify-center bg-[#EAE5D8] p-8 md:p-20">
        
        {/* Container for the square boxes photo */}
        <div className="relative w-full max-w-lg aspect-square overflow-hidden shadow-xl group border border-black/5 bg-white">
          {/* Soft studio lighting overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-tr from-black/5 via-transparent to-transparent opacity-60"></div>
          
          <img 
            src="/image2.png" // Place your new uploaded image in 'public' and rename it
            alt="SKYN REALITY Dark Circle Treatment"
            className="w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-105"
          />
          
          {/* Subtle Branding Tag */}
          <div className="absolute top-6 left-6 z-20">
            <p className="text-[8px] tracking-[0.6em] uppercase text-black/40 font-bold">
              K-PRO CLINICAL
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Minimalist "Reality" Typography */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-12 md:px-24 py-20 bg-[#F4F1EA]">
        <div className="max-w-md">
          {/* Header section matching the clinical look */}
          <div className="mb-12">
            <h2 className="font-serif text-6xl md:text-8xl leading-[0.8] text-[#1A1A1A] uppercase tracking-tighter">
              SKYN <br />
              <span className="italic font-light text-[#8C8273]">REALITY</span>
            </h2>
            <div className="w-full h-[1px] bg-black/10 mt-8"></div>
          </div>

          <div className="space-y-10">
            <div className="space-y-4 text-left">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#8C8273]">
                Dark Circle Treatment
              </h4>
              <p className="text-[#555] text-[15px] leading-[1.7] tracking-wide font-light">
                Authenticity in every gaze. <span className="text-black font-medium">SKYN REALITY</span> is our specialized K-Pro formula 
                engineered to eliminate fatigue and target deep-set dark circles. It brings clinical precision to your most delicate features.
              </p>
            </div>

            {/* Feature List */}
            <ul className="space-y-4">
               <li className="flex items-center gap-4 group">
                  <div className="w-1.5 h-1.5 rounded-full border border-black/20 group-hover:bg-black transition-all"></div>
                  <span className="text-[9px] uppercase tracking-[0.3em] text-black font-semibold tracking-widest">Targeted K-Pro Formula</span>
               </li>
               <li className="flex items-center gap-4 group">
                  <div className="w-1.5 h-1.5 rounded-full border border-black/20 group-hover:bg-black transition-all"></div>
                  <span className="text-[9px] uppercase tracking-[0.3em] text-black font-semibold tracking-widest">24-Hour Orbital Restoration</span>
               </li>
            </ul>

            {/* Price / CTA */}
            <div className="pt-8 flex flex-col sm:flex-row items-center gap-6">
              <div className="flex flex-col shrink-0">
                <span className="text-[8px] uppercase tracking-widest text-gray-400">Treatment Cost</span>
                <span className="text-2xl font-serif text-black italic">1899</span>
              </div>
              <button className="w-full bg-[#1A1A1A] text-white px-10 py-4 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-[#8C8273] transition-all duration-500 shadow-lg">
                Restore Reality
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
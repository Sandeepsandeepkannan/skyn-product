import React from 'react';

export default function PremiumEditorialBanner() {
  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden bg-[#F9F6F2]">
      
      {/* 1. THE BACKGROUND IMAGE (Full Bleed) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/img5.png" 
          alt="SKYN Products" 
          className="w-full h-full object-cover"
        />
        {/* Subtle Gradient Overlay: This ensures the text on the right is readable 
            without making the whole image dark */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/20"></div>
      </div>

      {/* 2. RIGHT-ALIGNED TYPOGRAPHY CONTAINER */}
      <div className="relative z-10 w-full flex justify-end px-6 md:px-20 lg:px-32">
        <div className="max-w-2xl text-right flex flex-col items-end">
          
          {/* Header Text */}
          <h2 className="font-serif text-[45px] md:text-[75px] lg:text-[90px] leading-[1] text-black uppercase tracking-tighter mb-12">
             <br /> 
            <span className="italic font-light opacity-70"></span> <br />
             <br />
            <span className="relative inline-block">
              
              {/* The Gold/Lime accent line from your branding */}
              <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#E9F0B1]"></span>
            </span>
          </h2>

          {/* Call to Action Button */}
         

          {/* Minimalist Watermark/Branding */}
          <div className="mt-20 flex items-center gap-4">
             <span className="text-[9px] text-gray-400 tracking-[0.4em] uppercase font-bold">Skyn Reality x Bol</span>
             <div className="w-12 h-[1px] bg-gray-200"></div>
          </div>
        </div>
      </div>

      {/* Aesthetic Logo Corner (matches your screenshot) */}
      <div className="absolute bottom-10 left-10">
        <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-[12px] font-serif italic">
          N
        </div>
      </div>
    </section>
  );
}
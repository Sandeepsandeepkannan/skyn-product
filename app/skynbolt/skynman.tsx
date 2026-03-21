"use client"

import React from 'react';

export default function SkynManifestoPage() {
  return (
    <main className="min-h-screen bg-[#FDFCF8] selection:bg-[#E9F0B1] flex items-center py-20 px-8 md:px-20">
      {/* Font Injection */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300&family=Inter:wght@200;300;400&display=swap');
        
        .serif-display { font-family: 'Cormorant Garamond', serif; }
        .inter-body { font-family: 'Inter', sans-serif; }
      `}</style>

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* LEFT COLUMN: Header & Key Quote */}
          <header className="space-y-10 border-l border-[#E9F0B1] pl-8">
            <div>
              <p className="inter-body text-[9px] tracking-[0.6em] uppercase text-gray-400 font-bold mb-6">
                Volume 01 — The Ritual
              </p>
              <h1 className="serif-display text-5xl md:text-7xl leading-[0.9] text-[#1A1A1A] tracking-tighter">
                Skin Bolt is a <br />
                <span className="italic text-[#8C8273] font-light">biological choice.</span>
              </h1>
            </div>

            <div className="pt-10">
              <h3 className="serif-display text-3xl md:text-4xl italic text-[#8C8273] font-light leading-tight">
                "Precision is the byproduct <br /> of true luxury."
              </h3>
            </div>
          </header>

          {/* RIGHT COLUMN: The Narrative & Footer */}
          <article className="inter-body text-[#1A1A1A] text-[15px] md:text-[16px] leading-[1.8] font-light tracking-wide space-y-10">
            <p className="opacity-90">
              At SKYN Labs, we recognized that true skin health cannot be achieved through surface-level hydration alone. It requires a fundamental understanding of the <strong className="font-normal border-b border-[#E9F0B1]">RPC-6 Complex</strong>—a proprietary architecture designed to synchronize with your skin's natural rhythm.
            </p>

            <div className="space-y-8 opacity-90">
              <p>
                Our clinical studies prove that consistent exposure to the SKYN Ritual results in a 42% increase in cellular turnover. By utilizing bio-identical lipids, we ensure every drop serves a diagnostic purpose.
              </p>

              <p className="pt-6 border-t border-black/5">
                Step away from the noise and enter a tier of care where the only metric is your biological truth. <span className="font-medium text-black underline decoration-[#E9F0B1] underline-offset-4">2499</span> is the threshold of a new standard.
              </p>
            </div>

            {/* MINIMALIST SIGNATURE */}
            <footer className="pt-10 flex items-center gap-4">
              <div className="h-[1px] w-8 bg-black/10"></div>
              <p className="inter-body text-[8px] tracking-[0.3em] uppercase text-gray-400">
                
              </p>
            </footer>
          </article>
          
        </div>
      </div>
    </main>
  );
}
"use client"

import React from 'react';

export default function SkynManifestoPage() {
  return (
    <main className="min-h-screen bg-[#FDFCF8] selection:bg-[#E9F0B1] pt-32 md:pt-40 pb-24 px-6">
      {/* Font Injection */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Inter:wght@200;300;400;600&display=swap');
        
        .serif-display { font-family: 'Cormorant Garamond', serif; }
        .inter-body { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* Tightened Container (max-w-4xl instead of 6xl) */}
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* 1. REFINED HEADER */}
        <header className="mb-16 text-center space-y-6">
          <p className="inter-body text-[9px] tracking-[0.6em] uppercase text-gray-400 font-bold">
            Volume 01: The Molecular Ritual
          </p>
          <h1 className="serif-display text-5xl md:text-7xl leading-[1] text-[#1A1A1A] tracking-tighter">
            Skin Reality is a <br />
            <span className="italic text-[#8C8273]">biological choice.</span>
          </h1>
          <div className="h-[40px] w-[1px] bg-[#E9F0B1] mx-auto mt-6"></div>
        </header>

        {/* 2. COMPACT BODY TEXT */}
        <article className="inter-body text-[#1A1A1A] text-[14px] md:text-[16px] leading-[1.8] font-light tracking-wide space-y-10 text-center">
          <p className="max-w-2xl mx-auto">
            At SKYN Labs, we recognized that true skin health cannot be achieved through surface-level hydration alone. It requires a fundamental understanding of the <strong className="font-semibold">RPC-6 Complex</strong>—a proprietary architecture designed to synchronize with your skin's natural rhythm.
          </p>

          <h3 className="serif-display text-3xl italic text-[#8C8273] py-4">
            "Precision is the byproduct of luxury."
          </h3>

          <p className="max-w-2xl mx-auto">
            Our clinical studies prove that consistent exposure to the SKYN Ritual results in a 42% increase in cellular turnover. By utilizing bio-identical lipids, we ensure that every drop of <strong className="font-semibold">Skyn Reality</strong> serves a diagnostic purpose.
          </p>

          <p className="max-w-2xl mx-auto">
            Step away from the noise and enter a tier of care where the only metric is your biological truth. 2499 is not just a number—it is the threshold of a new standard.
          </p>
        </article>

        {/* 3. MINIMALIST DATA STRIP */}
        <footer className="mt-20 w-full grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-black/5 pt-12">
          {[
            { label: "Purity", val: "100% Herbal" },
            { label: "Velocity", val: "RPC-6" },
            { label: "Trust", val: "10k+ Success" },
            { label: "Standard", val: "Clinical" }
          ].map((item, i) => (
            <div key={i} className="text-center space-y-1">
              <span className="text-[8px] font-bold uppercase tracking-widest text-gray-400">{item.label}</span>
              <p className="serif-display text-lg italic text-black">{item.val}</p>
            </div>
          ))}
        </footer>

        {/* 4. FINAL CTA */}
        <div className="mt-20">
          <button className="bg-black text-white px-14 py-4 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-[#E9F0B1] hover:text-black transition-all duration-700 shadow-xl">
            Begin the Ritual
          </button>
        </div>
      </div>
    </main>
  );
}
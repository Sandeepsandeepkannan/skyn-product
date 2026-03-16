import React from 'react';

export default function LuxuryFooter() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-24 pb-12 px-8 md:px-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* TOP SECTION: Interactive Brand Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 border-b border-white/10 pb-20">
          <div className="space-y-8">
            <div className="flex flex-col">
              <span className="font-serif text-4xl md:text-5xl tracking-tighter uppercase italic text-[#E9F0B1]">
                SKYN
              </span>
              <span className="text-[10px] uppercase tracking-[0.5em] text-gray-500 mt-2">
                Reality | BOLT
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-light">
              Redefining luxury through precision-engineered formulas. Experience the power of the RPC-6 complex and the velocity of Skyn Bolt.
            </p>
          </div>

          {/* INTERACTIVE NEWSLETTER: Glassmorphism Effect */}
          <div className="relative group">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] mb-6">Join The Inner Circle</h4>
            <div className="flex border-b border-white/30 focus-within:border-[#E9F0B1] transition-colors duration-500 pb-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent w-full text-sm outline-none placeholder:text-gray-600 font-light"
              />
              <button className="text-[10px] font-bold uppercase tracking-widest hover:text-[#E9F0B1] transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-[9px] text-gray-600 uppercase tracking-widest mt-4">
              Priority Access to New Drops & Clinical Insights
            </p>
          </div>
        </div>

        {/* MIDDLE SECTION: Minimalist Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E9F0B1]">Collections</h5>
            <ul className="text-[12px] space-y-4 text-gray-400 font-light">
              <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer">Skyn Reality</li>
              <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer">Skyn Bolt</li>
              <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer">The Ritual Set</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E9F0B1]">Science</h5>
            <ul className="text-[12px] space-y-4 text-gray-400 font-light">
              <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer">RPC-6 Complex</li>
              <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer">Clinical Studies</li>
              <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer">Skin Concierge</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E9F0B1]">Social</h5>
            <ul className="text-[12px] space-y-4 text-gray-400 font-light">
              <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer">Instagram</li>
              <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer">Vogue Portfolio</li>
              <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer">LinkedIn</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E9F0B1]">Support</h5>
            <ul className="text-[12px] space-y-4 text-gray-400 font-light">
              <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer">Shipping</li>
              <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer">Authenticity</li>
              <li className="hover:text-white hover:translate-x-1 transition-all cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>

       
      </div>
    </footer>
  );
}
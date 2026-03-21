"use client";

import React from 'react';

export default function Formpage() {
  return (
    <main className="min-h-screen bg-[#FDFCF8] pt-32 pb-20 px-6 selection:bg-[#E9F0B1]">
      {/* Font Injection */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;600&display=swap');
        h2, .serif { font-family: 'Cormorant Garamond', serif; }
        body, p, label, input, button, select { font-family: 'Inter', sans-serif; }
      `}</style>

      <div className="max-w-4xl mx-auto">
        {/* 1. EDITORIAL HEADER */}
        <header className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="h-[1px] w-8 bg-[#E9F0B1]"></div>
            <p className="text-[10px] tracking-[0.5em] uppercase text-gray-400 font-bold">Secure Registration</p>
            <div className="h-[1px] w-8 bg-[#E9F0B1]"></div>
          </div>
          <h2 className="text-5xl md:text-7xl text-[#1A1A1A] leading-none tracking-tighter">
            Contact <span className="italic text-[#8C8273]">form</span>
          </h2>
         
        </header>

        {/* 2. THE FORM CARD */}
        <div className="bg-white border border-black/5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] rounded-sm p-8 md:p-16">
          <form className="space-y-10">
            
            {/* GRID SECTION: PERSONAL INFO */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              
              {/* Full Name */}
              <div className="relative group border-b border-black/10 focus-within:border-[#E9F0B1] transition-all duration-500">
                <label className="block text-[9px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Alexander Knight" 
                  className="w-full bg-transparent py-2 text-sm text-black outline-none placeholder:text-gray-200"
                />
              </div>

              {/* Email Address */}
              <div className="relative group border-b border-black/10 focus-within:border-[#E9F0B1] transition-all duration-500">
                <label className="block text-[9px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="luxury@skyn.com" 
                  className="w-full bg-transparent py-2 text-sm text-black outline-none placeholder:text-gray-200"
                />
              </div>

              {/* Phone Number */}
              <div className="relative group border-b border-black/10 focus-within:border-[#E9F0B1] transition-all duration-500">
                <label className="block text-[9px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+91 00000 00000" 
                  className="w-full bg-transparent py-2 text-sm text-black outline-none placeholder:text-gray-200"
                />
              </div>

              {/* Skin Concern Selection */}
              <div className="relative group border-b border-black/10 focus-within:border-[#E9F0B1] transition-all duration-500">
                <label className="block text-[9px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-2">Primary Skin Concern</label>
                <select className="w-full bg-transparent py-2 text-sm text-black outline-none cursor-pointer appearance-none">
                  <option>Texture Refinement</option>
                  <option>Hyperpigmentation</option>
                  <option>Orbital Rejuvenation</option>
                  <option>RPC-6 Integration</option>
                </select>
                <div className="absolute right-0 bottom-3 pointer-events-none text-[8px]">▼</div>
              </div>
            </div>

            {/* Message / Details Area */}
            <div className="relative group border-b border-black/10 focus-within:border-[#E9F0B1] transition-all duration-500">
              <label className="block text-[9px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-2">Additional Clinical Details</label>
              <textarea 
                rows={3}
                placeholder="Describe your skin journey..." 
                className="w-full bg-transparent py-2 text-sm text-black outline-none placeholder:text-gray-200 resize-none"
              />
            </div>

            {/* SUBMIT BUTTON */}
            <div className="pt-6 flex flex-col items-center gap-6">
              <button 
                type="submit" 
                className="w-full md:w-auto bg-black text-white px-20 py-5 text-[10px] font-bold uppercase tracking-[0.5em] hover:bg-[#E9F0B1] hover:text-black transition-all duration-700 shadow-2xl active:scale-95"
              >
                Submit Consultation
              </button>
              <p className="text-[8px] text-gray-400 uppercase tracking-widest text-center">
                By submitting, you agree to our <span className="underline cursor-pointer hover:text-black transition-colors">Privacy Protocols</span>
              </p>
            </div>
          </form>
        </div>

        {/* 3. OPTIONAL TRUST FOOTER */}
        <div className="mt-16 flex justify-center gap-12 text-gray-300">
           <span className="text-[9px] font-bold uppercase tracking-widest">Dermatologist Verified</span>
           <span className="text-[9px] font-bold uppercase tracking-widest">Secure Data</span>
           <span className="text-[9px] font-bold uppercase tracking-widest">Tier 1 Support</span>
        </div>
      </div>
    </main>
  );
}
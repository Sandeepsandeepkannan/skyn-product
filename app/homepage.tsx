"use client"

import React from 'react';

export default function SkinProductHero() {
  return (
    <div className="min-h-screen bg-[#FDFCF8] selection:bg-[#E9F0B1]">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;600&display=swap');
        
        h1, h2, h3, .serif {
          font-family: 'Cormorant Garamond', serif;
        }
        body, p, button, input {
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      <main className="flex flex-col lg:flex-row min-h-screen">
        
        {/* LEFT SECTION: CONTENT */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center px-8 md:px-20 py-16 lg:py-0">
          
          <p className="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-semibold mb-23">
            
          </p>

          <h1 className="text-[54px] md:text-[90px] lg:text-[100px] leading-[0.95] text-[#1A1A1A] mb-5 tracking-tight">
            LIVING IN  <br />
            YOUR SKYN <span className="italic"></span>
            
          </h1>

          {/* CLEAN CALL TO ACTION CONSULTATION BOX */}
          <div className="bg-white border border-black/5 shadow-2xl p-8 md:p-10 rounded-sm max-w-lg mb-12">
            <h3 className="text-2xl text-[#1A1A1A] mb-8 uppercase tracking-tight">BOOK NOW</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="border-b border-black/10 focus-within:border-[#E9F0B1] transition-colors pb-2">
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="bg-transparent w-full text-[11px] uppercase tracking-widest outline-none placeholder:text-gray-300"
                  />
                </div>
                {/* Email Input */}
                <div className="border-b border-black/10 focus-within:border-[#E9F0B1] transition-colors pb-2">
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="bg-transparent w-full text-[11px] uppercase tracking-widest outline-none placeholder:text-gray-300"
                  />
                </div>
              </div>

              {/* Number Input */}
              <div className="border-b border-black/10 focus-within:border-[#E9F0B1] transition-colors pb-2">
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="bg-transparent w-full text-[11px] uppercase tracking-widest outline-none placeholder:text-gray-300"
                />
              </div>

              {/* Submit Button */}
              <button className="w-full bg-black text-white py-4 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-[#E9F0B1] hover:text-black transition-all duration-500 shadow-lg">
                Submit Request
              </button>
            </form>
          </div>

          {/* TICKET STUB PRODUCT CARD (Kept below for branding) */}
          
        </div>

        {/* RIGHT SECTION: IMAGE */}
        <div className="w-full lg:w-[45%] relative min-h-[500px] lg:min-h-screen">
          <img
            src="/img1.png"
            alt="Skin Reality Model"
            className="absolute inset-0 w-full h-full object-cover grayscale-[10%]"
          />
        </div>

      </main>
    </div>
  );
}
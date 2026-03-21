"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Effect to handle navbar styling on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to define active link styles
  const linkStyles = (path: string) => `
    cursor-pointer transition-all duration-300 border-b-2 
    ${pathname === path ? 'border-black text-black' : 'border-transparent text-gray-500 hover:text-black hover:border-black/20'}
  `;

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] transition-all duration-500 px-8 md:px-20 py-6 flex justify-between items-center ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' 
          : 'bg-[#FDFCF8]/10 backdrop-blur-[2px] border-b border-black/5' 
      }`}
    >
      {/* 1. BRAND LOGO (Matching your Banner Image) */}
      <Link href="/">
        <div className="flex flex-col items-center group cursor-pointer">
          <div className="flex items-baseline gap-1">
            <span className="font-serif text-2xl tracking-[0.25em] text-[#1A1A1A] group-hover:opacity-70 transition-opacity uppercase">
              SKYN
            </span>
          </div>
          
          {/* The thin divider line from the banner */}
          <div className="w-full h-[1px] my-1 bg-black/20"></div>
          
          <div className="flex gap-2">
             <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-gray-400">
               Reality
             </span>
             <span className="text-[8px] text-black opacity-20">|</span>
             <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-gray-400">
               Bolt
             </span>
          </div>
        </div>
      </Link>

      {/* 2. CENTER NAVIGATION (Using Next.js Routing) */}
      <ul className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-[0.25em]">
        <li>
          <Link href="/" className={linkStyles('/')}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/skynrealitypages" className={linkStyles('/skynrealitypages')}>
            Skyn Bolt
          </Link>
        </li>
        <li>
          <Link href="/products" className={linkStyles('/products')}>
            Skyn Reality 
          </Link>
        </li>
        <li>
          <Link href="/ritual" className={linkStyles('/ritual')}>
            The Ritual
          </Link>
        </li>
      </ul>

      {/* 3. RIGHT ICONS & CONCIERGE */}
      <div className="flex items-center gap-8 text-[#1A1A1A]">
        <button className="hidden sm:block text-[10px] font-bold uppercase tracking-[0.2em] border-b border-transparent hover:border-black transition-all">
          Concierge
        </button>
        
        {/* Shopping Bag / Cart */}
        <div className="relative cursor-pointer group">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <span className="absolute -top-1 -right-2 bg-[#E9F0B1] text-black text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full shadow-sm">
            0
          </span>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden cursor-pointer hover:opacity-50 transition-opacity">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="4" y1="9" x2="20" y2="9"></line>
            <line x1="4" y1="15" x2="20" y2="15"></line>
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
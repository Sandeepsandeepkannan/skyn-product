import React from 'react';
import { Beaker, Leaf, ShieldCheck, Globe, Microscope, Droplets } from 'lucide-react';

export default function TrustCertificationSection() {
  const certifications = [
    {
      title: "Sulphate Free",
      icon: <Droplets className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />,
    },
    {
      title: "Biodegradable Certified",
      icon: <Leaf className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />,
    },
    {
      title: "GMP Certified",
      icon: <ShieldCheck className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />,
    },
    {
      title: "Eco-Certified Ingredients",
      icon: <Globe className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />,
    },
    {
      title: "Dermatologically Tested",
      icon: <Microscope className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />,
    },
    {
      title: "Parabens/SLS Free",
      icon: <Beaker className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Header Section */}
        <div className="mb-16 space-y-2">
          <h3 className="text-xl md:text-2xl font-light text-[#1a5d40] tracking-wide">
            Made Safe For
          </h3>
          <h2 className="font-serif text-3xl md:text-4xl italic text-[#1a5d40] font-semibold">
            The People And The Planet
          </h2>
        </div>

        {/* Icons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 lg:gap-8 items-start">
          {certifications.map((cert, index) => (
            <div key={index} className="flex flex-col items-center space-y-6 group">
              {/* Circle Container */}
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-[#1a5d40] flex items-center justify-center text-[#1a5d40] group-hover:bg-[#1a5d40] group-hover:text-white transition-all duration-500 cursor-default">
                {cert.icon}
              </div>
              
              {/* Label */}
              <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] text-[#1a5d40] max-w-[120px] leading-relaxed">
                {cert.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
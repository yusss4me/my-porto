import React from 'react';
import StoreCatalog from '@/components/organisms/StoreCatalog';

export default function ShopPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-16 py-12 md:py-20 relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="relative z-10">
        {/* Shop Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs text-[#4edea3] tracking-widest uppercase block mb-3">
            Digital Architecture
          </span>
          <h1 className="font-geist text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6 bg-gradient-to-r from-white via-[#adc6ff] to-[#c2c6d6] bg-clip-text text-transparent">
            Digital Tech Assets Store
          </h1>
          <p className="font-inter text-[#c2c6d6] text-base md:text-lg leading-relaxed">
            A curated ecosystem of engineering artifacts. Explore premium, production-ready resources designed to accelerate development across <span className="text-[#3b82f6] font-medium">UI/UX Kits</span>, trained <span className="text-[#10b981] font-medium">AI/ML Models</span>, and robust <span className="text-purple-400 font-medium">Developer Automation Tools</span>.
          </p>
        </div>

        {/* StoreCatalog handles filter tab and empty state */}
        <StoreCatalog />
      </div>
    </div>
  );
}

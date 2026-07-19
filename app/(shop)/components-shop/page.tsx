'use client';

import React from 'react';
import shopData from '@/data/shopData.json';
import ShopProductCard from '@/components/molecules/ShopProductCard';

export default function ShopPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-16 py-12 md:py-20">
      {/* Shop Header */}
      <div className="max-w-3xl mb-16">
        <span className="font-mono text-xs text-[#10b981] tracking-widest uppercase">Premium Assets</span>
        <h1 className="font-geist text-4xl md:text-6xl font-extrabold text-white mt-4 mb-6 leading-tight">
          Next.js 16 UI Tokens & Isolated Components
        </h1>
        <p className="font-inter text-[#c2c6d6] text-base leading-relaxed">
          Premium production-ready, beautifully designed glassmorphic elements implementing Atomic Design and strict layout tokens. Easily drop them into any Next.js application.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {shopData.map((product) => (
          <ShopProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import ProductCardSkeleton from '@/components/molecules/ProductCardSkeleton';

export default function ShopLoading() {
  return (
    <div className="w-full">
      {/* Category Tabs skeleton placeholder */}
      <div className="flex flex-wrap gap-2 mb-10 border-b border-white/10 pb-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-9 w-28 bg-white/5 border border-white/5 rounded-full animate-pulse" />
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}

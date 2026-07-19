import React from 'react';
import ProductCardSkeleton from '@/components/molecules/ProductCardSkeleton';

export default function ShopLoading() {
  return (
    <div className="w-full pb-24 lg:pb-0">
      {/* 2-Column Responsive Layout for loading state */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* Desktop Sidebar Loading Skeleton */}
        <div className="hidden lg:block space-y-6">
          <div className="h-4 w-28 bg-white/5 border border-white/5 rounded animate-pulse" />
          <div className="space-y-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-11 w-full bg-white/5 border border-white/5 rounded-lg animate-pulse"
              />
            ))}
          </div>
        </div>

        {/* Mobile bottom bar is fixed at the bottom, so no static skeleton needed in layout flow */}

        {/* Cards Grid */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

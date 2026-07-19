import React from 'react';
import SkeletonBar from '../atoms/SkeletonBar';

export default function ProductCardSkeleton() {
  return (
    <div className="flex flex-col p-6 rounded-lg bg-[#0c1324]/60 backdrop-blur-md border border-white/10 h-full">
      {/* Badge & Price Header */}
      <div className="flex justify-between items-center mb-4">
        <SkeletonBar className="w-28 h-5 rounded" />
        <SkeletonBar className="w-16 h-5 rounded" />
      </div>

      {/* Subcategory */}
      <SkeletonBar className="w-36 h-3.5 mb-3 rounded" />

      {/* Title */}
      <SkeletonBar className="w-11/12 h-7 mb-3 rounded" />

      {/* Description */}
      <div className="space-y-2 mb-6">
        <SkeletonBar className="w-full h-3 rounded" />
        <SkeletonBar className="w-4/5 h-3 rounded" />
      </div>

      {/* Tech Stack Badges */}
      <div className="flex flex-wrap gap-2 mb-6">
        <SkeletonBar className="w-12 h-5 rounded-full" />
        <SkeletonBar className="w-16 h-5 rounded-full" />
        <SkeletonBar className="w-14 h-5 rounded-full" />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-auto pt-4 border-t border-white/5">
        <SkeletonBar className="flex-1 h-8 rounded" />
        <SkeletonBar className="flex-1 h-8 rounded" />
      </div>
    </div>
  );
}

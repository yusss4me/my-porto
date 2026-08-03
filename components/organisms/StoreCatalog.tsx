import React from 'react';
import ProductCard from '../molecules/ProductCard';
import shopData from '@/data/shopData.json';

interface StoreCatalogProps {
  category?: string;
}

export default async function StoreCatalog({ category }: StoreCatalogProps) {
  // Simulate network latency to demonstrate Next.js Streaming and Skeleton fallback loading state
  await new Promise((resolve) => setTimeout(resolve, 800));

  const categoryLabels: Record<string, string> = {
    all: 'All Products & Assets',
    'ui-ux': 'UI/UX & Frontend Assets',
    ai: 'AI & Data Science',
    fullstack: 'Fullstack & Dev Tools',
  };

  // Server-side filtering logic
  const filteredProducts =
    category && category !== 'all'
      ? shopData.filter((product) => {
          if (category === 'ui-ux') return product.category === 'UI/UX & Frontend Assets';
          if (category === 'ai') return product.category === 'AI & Data Science';
          if (category === 'fullstack') return product.category === 'Fullstack & Dev Tools';
          return true;
        })
      : shopData;

  const currentLabel = categoryLabels[category || 'all'] || 'All Products & Assets';

  return (
    <div className="pb-24 lg:pb-12 w-full">
      {/* Active Filter Header Indicator */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse" />
          <span className="font-mono text-xs text-[#c2c6d6] uppercase tracking-wider">
            Active Filter: <span className="text-white font-bold">{currentLabel}</span>
          </span>
        </div>
        <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#adc6ff]">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'}
        </span>
      </div>

      {/* Full-Width Catalog Cards Grid (3 Columns on Desktop) */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 border border-white/5 rounded-xl bg-[#0c1324]/40 font-mono text-sm text-[#c2c6d6]">
          No products found under this category.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}


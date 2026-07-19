import React from 'react';
import ProductCard from '../molecules/ProductCard';
import StoreNavigation from '../molecules/StoreNavigation';
import shopData from '@/data/shopData.json';

interface StoreCatalogProps {
  category?: string;
}

export default async function StoreCatalog({ category }: StoreCatalogProps) {
  // Simulate network latency to demonstrate Next.js Streaming and Skeleton fallback loading state
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Dynamically calculate category item counts
  const counts = {
    all: shopData.length,
    'ui-ux': shopData.filter((p) => p.category === 'UI/UX & Frontend Assets').length,
    ai: shopData.filter((p) => p.category === 'AI & Data Science').length,
    fullstack: shopData.filter((p) => p.category === 'Fullstack & Dev Tools').length,
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

  return (
    <div className="pb-24 lg:pb-0">
      {/* 2-Column Responsive Layout: Sidebar on Desktop, Bottom bar on Mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* Navigation Sidebar/Bottom Bar Conductor */}
        <div className="lg:col-span-1">
          <StoreNavigation activeCategory={category || 'all'} counts={counts} />
        </div>

        {/* Catalog Cards Grid */}
        <div className="lg:col-span-3">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 border border-white/5 rounded-lg bg-[#0c1324]/40 font-mono text-sm text-[#c2c6d6]">
              No products found under this category.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import ProductCard from '../molecules/ProductCard';
import StoreFilterTabs from '../molecules/StoreFilterTabs';
import shopData from '@/data/shopData.json';

interface StoreCatalogProps {
  category?: string;
}

export default async function StoreCatalog({ category }: StoreCatalogProps) {
  // Simulate network latency to demonstrate Next.js Streaming and Skeleton fallback loading state
  await new Promise((resolve) => setTimeout(resolve, 800));

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
    <div className="space-y-10">
      <StoreFilterTabs activeCategory={category || 'all'} />

      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 border border-white/5 rounded-lg bg-[#0c1324]/40 font-mono text-sm text-[#c2c6d6]">
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

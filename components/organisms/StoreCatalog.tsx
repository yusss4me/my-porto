import React from 'react';
import ClientStoreCatalog from './ClientStoreCatalog';

interface StoreCatalogProps {
  category?: string;
  isSearchOpen?: boolean;
}

export default async function StoreCatalog({ category, isSearchOpen }: StoreCatalogProps) {
  // Simulate network latency to demonstrate Next.js Streaming and Skeleton fallback loading state
  await new Promise((resolve) => setTimeout(resolve, 300));

  return <ClientStoreCatalog category={category} isSearchOpen={isSearchOpen} />;
}



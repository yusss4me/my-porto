import React, { Suspense } from 'react';
import StoreCatalog from '@/components/organisms/StoreCatalog';
import ShopLoading from './loading';

export const dynamic = 'force-dynamic';

interface PageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ShopPage({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const currentCategory = resolvedSearchParams.category;

  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-16 py-12 md:py-20">
      {/* Shop Header (Static Segment - Sent Immediately) */}
      <div className="max-w-3xl mb-16">
        <span className="font-mono text-xs text-[#10b981] tracking-widest uppercase">
          Premium Assets
        </span>
        <h1 className="font-geist text-4xl md:text-6xl font-extrabold text-white mt-4 mb-6 leading-tight">
          Next.js 16 UI Tokens &amp; Isolated Components
        </h1>
        <p className="font-inter text-[#c2c6d6] text-base leading-relaxed">
          Premium production-ready, beautifully designed glassmorphic elements implementing Atomic
          Design and strict layout tokens. Easily drop them into any Next.js application.
        </p>
      </div>

      {/* Dynamic Catalog Segment - Streamed via Suspense */}
      <Suspense fallback={<ShopLoading />}>
        <StoreCatalog category={currentCategory} />
      </Suspense>
    </div>
  );
}

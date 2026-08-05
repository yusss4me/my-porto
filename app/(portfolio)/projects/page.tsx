import React, { Suspense } from 'react';
import StoreCatalog from '@/components/organisms/StoreCatalog';

interface ProjectsPageProps {
  searchParams: Promise<{ category?: string; search?: string }>;
}

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const params = await searchParams;
  const currentCategory = params?.category;
  const isSearchOpen = params?.search === 'open' || params?.search === '';

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16 relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10">
        <Suspense
          fallback={
            <div className="text-center py-20 font-mono text-sm text-slate-400 animate-pulse">
              Loading project catalog...
            </div>
          }
        >
          <StoreCatalog category={currentCategory} isSearchOpen={isSearchOpen} />
        </Suspense>
      </div>
    </div>
  );
}

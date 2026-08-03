import React, { Suspense } from 'react';
import StoreCatalog from '@/components/organisms/StoreCatalog';

interface ProjectsPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const params = await searchParams;
  const currentCategory = params?.category;

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-16 py-12 md:py-20 relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="relative z-10">
        {/* Projects Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs text-[#3b82f6] tracking-widest uppercase block mb-3">
            Digital Engineering Showcase
          </span>
          <h1 className="font-geist text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6 bg-gradient-to-r from-white via-[#adc6ff] to-[#c2c6d6] bg-clip-text text-transparent">
            All Projects & Assets
          </h1>
          <p className="font-inter text-[#c2c6d6] text-base md:text-lg leading-relaxed">
            Ekosistem karya rekayasa lunak. Jelajahi katalog lengkap project, komponen <span className="text-[#3b82f6] font-medium">UI/UX</span>, model <span className="text-[#10b981] font-medium">AI & Data Science</span>, serta <span className="text-purple-400 font-medium">Dev Tools</span> interaktif yang dapat Anda pratinjau (*preview*) secara langsung.
          </p>
        </div>

        {/* Catalog Section with Category Filter */}
        <Suspense fallback={
          <div className="text-center py-20 font-mono text-sm text-[#c2c6d6] animate-pulse">
            Loading project catalog...
          </div>
        }>
          <StoreCatalog category={currentCategory} />
        </Suspense>
      </div>
    </div>
  );
}

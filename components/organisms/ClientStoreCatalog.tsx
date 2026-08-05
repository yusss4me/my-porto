'use client';

import React, { useState, useEffect, useTransition } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search, ChevronDown, Sparkles } from 'lucide-react';
import ProductCard, { ProductData } from '../molecules/ProductCard';
import CTASection from '../molecules/CTASection';
import shopData from '@/data/shopData.json';

interface ClientStoreCatalogProps {
  category?: string;
  isSearchOpen?: boolean;
}

const FILTER_PILLS = [
  { id: 'ALL', label: 'ALL', sidebarKey: 'all' },
  { id: 'WEB_APPS', label: 'WEB_APPS', sidebarKey: 'fullstack' },
  { id: 'AI/ML', label: 'AI/ML', sidebarKey: 'ai' },
  { id: 'FRONTEND/UI', label: 'FRONTEND/UI', sidebarKey: 'ui-ux' },
  { id: 'ACADEMIC', label: 'ACADEMIC', sidebarKey: 'academic' },
];

export default function ClientStoreCatalog({ category, isSearchOpen }: ClientStoreCatalogProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visibleCount, setVisibleCount] = useState<number>(6);

  // Sync state with URL params (handling sidebar navigation)
  useEffect(() => {
    // 1. Sync category from sidebar URL param
    if (category) {
      const pillMatch = FILTER_PILLS.find(
        (p) => p.sidebarKey === category || p.id.toLowerCase() === category.toLowerCase()
      );
      if (pillMatch) {
        setActiveFilter(pillMatch.id);
      }
    } else {
      setActiveFilter('ALL');
    }

    // 2. Focus/open search if triggered from sidebar search button
    if (isSearchOpen && !searchQuery) {
      // Keep default open search
    }
  }, [category, isSearchOpen]);

  // Handle filter selection and sync URL query parameters
  const handleFilterClick = (filterId: string) => {
    setActiveFilter(filterId);

    const pill = FILTER_PILLS.find((p) => p.id === filterId);
    const params = new URLSearchParams(searchParams.toString());

    if (pill && pill.sidebarKey !== 'all') {
      params.set('category', pill.sidebarKey);
    } else {
      params.delete('category');
    }

    startTransition(() => {
      router.push(`/projects?${params.toString()}`, { scroll: false });
    });
  };

  // Filter products by active category filter and search query
  const filteredProducts = (shopData as ProductData[]).filter((product) => {
    // Category match
    let matchesCategory = true;
    if (activeFilter !== 'ALL') {
      matchesCategory = product.category === activeFilter;
    }

    // Search query match
    let matchesSearch = true;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      matchesSearch =
        product.componentName.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q) ||
        product.techStack.some((tech) => tech.toLowerCase().includes(q));
    }

    return matchesCategory && matchesSearch;
  });

  const displayedProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  return (
    <div className="w-full space-y-12 pb-16">
      {/* 1. Header & Controls Section */}
      <div className="space-y-6">
        {/* Section Tag */}
        <div>
          <span className="font-mono text-xs text-blue-400 tracking-[0.25em] uppercase font-bold block mb-2">
            FULL PROJECT ARCHIVE
          </span>

          {/* Title */}
          <h1 className="font-geist text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Featured Projects & <span className="font-serif italic font-normal text-slate-300">Case Studies</span>
          </h1>

          {/* Description */}
          <p className="font-inter text-slate-400 text-base md:text-lg max-w-3xl mt-3 leading-relaxed">
            A curated collection of web applications, AI models, and frontend systems designed to solve complex problems.
          </p>
        </div>

        {/* Search & Filters Container (Flex Space Between) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4 border-t border-white/5">
          {/* Filter Pills (Left/Bottom) */}
          <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {FILTER_PILLS.map((pill) => {
              const isActive = activeFilter === pill.id;
              return (
                <button
                  key={pill.id}
                  onClick={() => handleFilterClick(pill.id)}
                  className={`px-4 py-2 rounded-full font-mono text-xs tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'bg-[#182030] text-white border border-white/20 shadow-[0_0_15px_rgba(59,130,246,0.25)]'
                      : 'bg-[#121620]/60 text-slate-400 border border-white/10 hover:text-white hover:border-white/20'
                  }`}
                >
                  {pill.label}
                </button>
              );
            })}
          </div>

          {/* Search Bar (Right Side) */}
          <div className="relative w-full md:w-72 lg:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search parameters..."
              className="w-full bg-[#121620] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-white/30 transition-all font-mono shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-400 hover:text-white"
              >
                CLEAR
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 2. Project Grid Layout */}
      {displayedProducts.length === 0 ? (
        <div className="text-center py-20 px-6 border border-white/10 rounded-2xl bg-[#121620]/40 space-y-4">
          <div className="inline-flex p-3 rounded-full bg-white/5 text-slate-400">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="font-geist text-lg font-bold text-white">No projects match your query</h3>
          <p className="font-inter text-xs text-slate-400 max-w-sm mx-auto">
            Try adjusting your search criteria or clearing filters to view all available projects.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              handleFilterClick('ALL');
            }}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* 3. Load More Section */}
      {hasMore && (
        <div className="flex justify-center pt-4">
          <button
            onClick={() => setVisibleCount((prev) => prev + 3)}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#121620] border border-white/10 hover:border-white/20 text-slate-300 hover:text-white font-mono text-xs tracking-wider transition-all duration-300 shadow-md group"
          >
            <span>Load More Projects</span>
            <ChevronDown className="w-4 h-4 text-slate-400 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      )}

      {/* 4. Bottom Call-to-Action Banner Section */}
      <CTASection />
    </div>
  );
}

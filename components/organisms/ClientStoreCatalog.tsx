'use client';

import React, { useState, useEffect, useTransition } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search, ChevronDown, X, Server, AlertTriangle } from 'lucide-react';
import ProductCard, { ProductData } from '../molecules/ProductCard';
import SystemSpecsModal from './SystemSpecsModal';
import shopData from '@/data/shopData.json';
import { Project } from '@/src/lib/api';

interface ClientStoreCatalogProps {
  category?: string;
  isSearchOpen?: boolean;
  initialProjects?: Project[] | null;
  isApiError?: boolean;
}

const FILTER_PILLS = [
  { id: 'ALL', label: 'ALL', sidebarKey: 'all' },
  { id: 'WEB_APPS', label: 'WEB_APPS', sidebarKey: 'fullstack' },
  { id: 'AI/ML', label: 'AI/ML', sidebarKey: 'ai' },
  { id: 'FRONTEND/UI', label: 'FRONTEND/UI', sidebarKey: 'ui-ux' },
  { id: 'ACADEMIC', label: 'ACADEMIC', sidebarKey: 'academic' },
];

export function mapDjangoProjectToProductData(p: Project): ProductData {
  let category = p.category || 'WEB_APPS';
  let sidebarCategory = 'fullstack';

  const catUpper = category.toUpperCase();
  if (catUpper.includes('AI') || catUpper.includes('MACHINE LEARNING') || catUpper.includes('ML')) {
    category = 'AI/ML';
    sidebarCategory = 'ai';
  } else if (catUpper.includes('VISION') || catUpper.includes('UI') || catUpper.includes('WEBGL') || catUpper.includes('FRONTEND') || catUpper.includes('COMPUTER VISION')) {
    category = 'FRONTEND/UI';
    sidebarCategory = 'ui-ux';
  } else if (catUpper.includes('ACADEMIC') || catUpper.includes('RESEARCH')) {
    category = 'ACADEMIC';
    sidebarCategory = 'academic';
  } else {
    category = 'WEB_APPS';
    sidebarCategory = 'fullstack';
  }

  const formattedMetrics = p.metrics && typeof p.metrics === 'object'
    ? Object.entries(p.metrics).map(([key, val]) => ({
        label: key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase()),
        value: String(val),
      }))
    : [];

  return {
    id: String(p.id),
    componentName: p.title,
    category: category,
    sidebarCategory: sidebarCategory,
    year: p.created_at ? new Date(p.created_at).getFullYear().toString() : new Date().getFullYear().toString(),
    livePreviewUrl: p.demo_url || '#',
    sourceCodeUrl: p.github_url || '#',
    techStack: p.tags || [],
    description: p.summary || p.description,
    demoType: p.demo_url ? 'EXTERNAL' : 'NONE',
    systemSpecs: formattedMetrics.length > 0 ? {
      architecturePipeline: `${p.title} -> Django REST Framework -> Next.js Client`,
      apiEndpoint: `GET /api/v1/projects/${p.slug}/`,
      requestPayload: { slug: p.slug },
      responsePayload: { id: p.id, title: p.title, category: p.category },
      metrics: formattedMetrics
    } : undefined
  };
}

export default function ClientStoreCatalog({
  category,
  isSearchOpen,
  initialProjects,
  isApiError = false,
}: ClientStoreCatalogProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  const getFilterFromCategory = (cat?: string) => {
    if (cat) {
      const pillMatch = FILTER_PILLS.find(
        (p) => p.sidebarKey === cat || p.id.toLowerCase() === cat.toLowerCase()
      );
      if (pillMatch) return pillMatch.id;
    }
    return 'ALL';
  };

  const getSearchFromParams = (params: ReturnType<typeof useSearchParams>) => {
    const qParam = params.get('q') || (params.get('search') !== 'open' ? params.get('search') : null);
    return qParam || '';
  };

  const [activeFilter, setActiveFilter] = useState<string>(() => getFilterFromCategory(category));
  const [searchQuery, setSearchQuery] = useState<string>(() => getSearchFromParams(searchParams));
  const [visibleCount, setVisibleCount] = useState<number>(6);

  // Selected Product for System Specs Modal
  const [selectedSpecsProduct, setSelectedSpecsProduct] = useState<ProductData | null>(null);

  // Sync state with props/URL params directly during render if props change
  const [prevCategory, setPrevCategory] = useState(category);
  const [prevSearchParams, setPrevSearchParams] = useState(searchParams.toString());

  if (category !== prevCategory || searchParams.toString() !== prevSearchParams) {
    setPrevCategory(category);
    setPrevSearchParams(searchParams.toString());
    setActiveFilter(getFilterFromCategory(category));
    setSearchQuery(getSearchFromParams(searchParams));
  }

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

  const clearSearchQuery = () => {
    setSearchQuery('');
    const params = new URLSearchParams(searchParams.toString());
    params.delete('q');
    params.delete('search');
    startTransition(() => {
      router.push(`/projects?${params.toString()}`, { scroll: false });
    });
  };

  // Determine source data (Django API dynamic projects vs fallback shopData)
  const sourceProducts: ProductData[] = initialProjects && initialProjects.length > 0
    ? initialProjects.map(mapDjangoProjectToProductData)
    : (shopData as ProductData[]);

  // Filter products by active category filter and search query
  const filteredProducts = sourceProducts.filter((product) => {
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
          {initialProjects && initialProjects.length > 0 ? (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs mb-3">
              <Server className="w-3.5 h-3.5" />
              <span>LIVE API: DJANGO DRF CONNECTED ({initialProjects.length} PROJECTS)</span>
            </div>
          ) : isApiError ? (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs mb-3">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>BACKEND API UNREACHABLE — SHOWING OFFLINE CATALOG</span>
            </div>
          ) : null}

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

        {/* Active Search & Category Badge Indicator */}
        {(searchQuery || activeFilter !== 'ALL') && (
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="font-mono text-xs text-slate-400">Filtering by:</span>
            {activeFilter !== 'ALL' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs">
                Category: {activeFilter}
                <button
                  type="button"
                  onClick={() => handleFilterClick('ALL')}
                  className="hover:text-white transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {searchQuery && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
                Search: &quot;{searchQuery}&quot;
                <button
                  type="button"
                  onClick={clearSearchQuery}
                  className="hover:text-white transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </span>
            )}
          </div>
        )}
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
            <ProductCard
              key={product.id}
              product={product}
              onOpenDemo={(p) => router.push(`/projects/${p.id}/demo`)}
              onOpenSpecs={(p) => setSelectedSpecsProduct(p)}
            />
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

      {/* System Engineering Specs Modal */}
      <SystemSpecsModal
        project={selectedSpecsProduct}
        isOpen={Boolean(selectedSpecsProduct)}
        onClose={() => setSelectedSpecsProduct(null)}
      />
    </div>
  );
}

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import ProjectDemoView from '@/components/organisms/ProjectDemoView';
import { mapDjangoProjectToProductData } from '@/components/organisms/ClientStoreCatalog';
import { getProjects, Project } from '@/src/lib/api';
import shopData from '@/data/shopData.json';
import { ProductData } from '@/components/molecules/ProductCard';

interface DemoPageProps {
  params: Promise<{ id: string }>;
}

async function getProjectById(id: string): Promise<ProductData | null> {
  // 1. Try to fetch from Django API
  try {
    const djangoProjects = await getProjects();
    if (djangoProjects && djangoProjects.length > 0) {
      const match = djangoProjects.find(
        (p) => String(p.id) === id || p.slug === id
      );
      if (match) {
        return mapDjangoProjectToProductData(match);
      }
    }
  } catch (error) {
    console.warn('Backend API unavailable when loading project demo, using fallback data:', error);
  }

  // 2. Fallback to static shopData.json
  const staticMatch = (shopData as ProductData[]).find(
    (p) => p.id === id || p.id.toLowerCase() === id.toLowerCase()
  );

  return staticMatch || null;
}

export default async function ProjectDemoPage({ params }: DemoPageProps) {
  const { id } = await params;
  const project = await getProjectById(id);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-6">
        <div className="inline-flex p-4 rounded-full bg-red-500/10 border border-red-500/20 text-red-400">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h1 className="font-geist text-2xl font-bold text-white">Project Demo Not Found</h1>
        <p className="font-inter text-slate-400 text-sm max-w-md mx-auto">
          The requested project demo <code className="text-blue-400 font-mono">{id}</code> could not be found or is no longer available.
        </p>
        <div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-semibold transition-all border border-white/15"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Projects Catalog</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 relative">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="relative z-10">
        <ProjectDemoView project={project} />
      </div>
    </div>
  );
}

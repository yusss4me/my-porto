'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Terminal, Code2, Cpu } from 'lucide-react';

export interface ProductData {
  id: string;
  componentName: string;
  category: string;
  sidebarCategory?: string;
  year: string;
  livePreviewUrl: string;
  sourceCodeUrl: string;
  techStack: string[];
  description: string;
}

interface ProductCardProps {
  product: ProductData;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col rounded-2xl bg-[#121620] border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 shadow-xl"
    >
      {/* Media Header (16:9 aspect ratio) */}
      <div className="relative aspect-video w-full bg-[#0b0e14] overflow-hidden flex items-center justify-center p-4 border-b border-white/5">
        {/* Abstract Dark Glass Preview Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1b2233]/80 via-[#0d111a] to-[#080b11]" />
        
        {/* Subtle decorative mesh / grid pattern inside preview */}
        <div className="absolute inset-0 bg-[radial-[#3b82f6]/10_1px,transparent_1px] [background-size:16px_16px] opacity-40" />

        {/* Center Mock Preview Graphic */}
        <div className="relative z-10 w-full h-full rounded-xl bg-[#131926]/90 border border-white/10 p-3 flex flex-col justify-between shadow-2xl backdrop-blur-sm group-hover:scale-[1.02] transition-transform duration-500">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <div className="flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/60" />
              <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
              <span className="w-2 h-2 rounded-full bg-green-500/60" />
            </div>
            <span className="font-mono text-[9px] text-slate-500">SYSTEM_PREVIEW</span>
          </div>
          <div className="flex-1 flex items-center justify-center my-2">
            {product.category === 'AI/ML' ? (
              <Cpu className="w-8 h-8 text-emerald-400/80" />
            ) : product.category === 'WEB_APPS' ? (
              <Code2 className="w-8 h-8 text-blue-400/80" />
            ) : (
              <Terminal className="w-8 h-8 text-indigo-400/80" />
            )}
          </div>
          <div className="h-1.5 w-2/3 bg-white/10 rounded-full" />
        </div>

        {/* Top-Right Year Badge Overlay */}
        <div className="absolute top-3 right-3 z-20">
          <span className="px-2.5 py-0.5 rounded-full bg-[#0c1017]/80 backdrop-blur-md border border-white/10 font-mono text-[10px] text-slate-300 shadow-md">
            {product.year}
          </span>
        </div>
      </div>

      {/* Card Body (p-6) */}
      <div className="p-6 flex flex-col flex-1">
        {/* Category Tag */}
        <span className="font-mono text-[10px] tracking-widest text-emerald-400 font-semibold uppercase mb-1 block">
          {product.category}
        </span>

        {/* Title */}
        <h3 className="font-geist text-xl font-bold text-white mb-2 leading-snug tracking-tight">
          {product.componentName}
        </h3>

        {/* Description (2-line clamp) */}
        <p className="font-inter text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2 flex-grow">
          {product.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {product.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 text-[9px] font-mono rounded-full bg-white/5 border border-white/10 text-slate-300 tracking-wider uppercase"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Card Footer Actions (2 Equal Width Buttons) */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/5 mt-auto">
          <a
            href={product.livePreviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-slate-200 text-xs font-medium transition-all text-center"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Live Preview</span>
          </a>
          <a
            href={product.sourceCodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-slate-200 text-xs font-medium transition-all text-center"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

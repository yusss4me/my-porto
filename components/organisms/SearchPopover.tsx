'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, X, ArrowRight } from 'lucide-react';

interface ProjectSuggestion {
  id: string;
  componentName: string;
  category: string;
}

interface SearchPopoverProps {
  inputRef: React.RefObject<HTMLInputElement | null>;
  searchQuery: string;
  onSearchChange: (val: string) => void;
  onSearchSubmit: (e?: React.FormEvent) => void;
  onClose: () => void;
  matchingProjects: ProjectSuggestion[];
  onProjectSelect: (name: string) => void;
}

export const SearchPopover: React.FC<SearchPopoverProps> = ({
  inputRef,
  searchQuery,
  onSearchChange,
  onSearchSubmit,
  onClose,
  matchingProjects,
  onProjectSelect,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, x: 12 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.92, x: 12 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="absolute top-1/2 -translate-y-1/2 right-12 lg:left-12 lg:right-auto z-50 w-72 sm:w-80 bg-[#0c1324]/95 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-4 shadow-[0_12px_40px_rgba(0,0,0,0.7)] text-left"
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Search className="w-4 h-4 text-blue-400" />
          <span className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider">
            Search Catalog
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="font-mono text-[9px] bg-white/10 text-slate-400 px-1.5 py-0.5 rounded border border-white/10">
            ESC
          </span>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Search Form */}
      <form onSubmit={onSearchSubmit} className="mt-3 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search projects..."
          className="w-full bg-[#121620] border border-white/15 rounded-xl pl-9 pr-8 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/40 font-mono transition-all"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => onSearchChange('')}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-0.5"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </form>

      {/* Quick Results Preview */}
      {searchQuery.trim() !== '' && (
        <div className="mt-3 space-y-2 max-h-56 overflow-y-auto pr-1 scrollbar-thin">
          <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider px-1">
            Suggestions ({matchingProjects.length})
          </div>

          {matchingProjects.length > 0 ? (
            <div className="space-y-1.5">
              {matchingProjects.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => onProjectSelect(project.componentName)}
                  className="w-full text-left p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-blue-500/30 transition-all flex items-center justify-between group"
                >
                  <div className="truncate pr-2">
                    <div className="font-geist text-xs font-semibold text-white group-hover:text-blue-400 transition-colors truncate">
                      {project.componentName}
                    </div>
                    <div className="font-mono text-[10px] text-slate-400 truncate">
                      {project.category}
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 transition-colors shrink-0" />
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center py-4 font-mono text-xs text-slate-500">
              No projects match query
            </div>
          )}
        </div>
      )}

      {/* Footer Submit Action */}
      <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between">
        <span className="font-mono text-[10px] text-slate-500">
          Press Enter to search
        </span>
        <button
          type="button"
          onClick={() => onSearchSubmit()}
          className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-mono text-[11px] font-semibold flex items-center gap-1.5 transition-colors shadow-md"
        >
          <span>Search</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </motion.div>
  );
};

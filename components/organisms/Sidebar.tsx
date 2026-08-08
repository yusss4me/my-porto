'use client';

import React, { useEffect, useState, useMemo, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight } from 'lucide-react';
import shopData from '@/data/shopData.json';

// Defined navigation configurations for different contexts
const landingSections = [
  {
    id: 'home',
    label: 'Home',
    href: '#home',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  },
  {
    id: 'projects',
    label: 'Projects',
    href: '#projects',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
  },
  {
    id: 'lab',
    label: 'Lab',
    href: '#lab',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '#contact',
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
];

const projectCatalogItems = [
  {
    id: 'search',
    label: 'Search Catalog',
    href: '/projects?search=open',
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  },
  {
    id: 'all',
    label: 'All Projects',
    href: '/projects',
    icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z',
  },
  {
    id: 'ui-ux',
    label: 'UI/UX Assets',
    href: '/projects?category=ui-ux',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-3',
  },
  {
    id: 'ai',
    label: 'AI & Data Science',
    href: '/projects?category=ai',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  },
  {
    id: 'fullstack',
    label: 'Dev Tools & Fullstack',
    href: '/projects?category=fullstack',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  },
];

const aboutSections = [
  {
    id: 'overview',
    label: 'Overview',
    href: '#overview',
    icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
  },
  {
    id: 'journey',
    label: 'Journey',
    href: '#journey',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    id: 'tech-stack',
    label: 'Tech Stack',
    href: '#tech-stack',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  },
  {
    id: 'beyond-code',
    label: 'Beyond Code',
    href: '#beyond-code',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
  },
];

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activeSection, setActiveSection] = useState('home');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const isLandingPage = pathname === '/';
  const isProjectsPage = pathname === '/projects';
  const isAboutPage = pathname === '/about';

  // Determine current active item based on page and scroll/searchParams
  const navItems = useMemo(() => {
    if (isProjectsPage) {
      return projectCatalogItems;
    }
    if (isAboutPage) {
      return aboutSections;
    }
    return landingSections;
  }, [isProjectsPage, isAboutPage]);

  // Click outside & Escape key handlers for popup
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSearchOpen]);

  useEffect(() => {
    if (isLandingPage) {
      const handleScroll = () => {
        const scrollPos = window.scrollY + 200;
        for (const section of landingSections) {
          const el = document.getElementById(section.id);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPos >= top && scrollPos < top + height) {
              setActiveSection(section.id);
            }
          }
        }
      };
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Trigger initial check
      return () => window.removeEventListener('scroll', handleScroll);
    } else if (isAboutPage) {
      const handleScroll = () => {
        const scrollPos = window.scrollY + 250;
        for (const section of aboutSections) {
          const el = document.getElementById(section.id);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPos >= top && scrollPos < top + height) {
              setActiveSection(section.id);
            }
          }
        }
      };
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Trigger initial check
      return () => window.removeEventListener('scroll', handleScroll);
    } else if (isProjectsPage) {
      const currentCategory = searchParams.get('category');
      const isSearch = searchParams.get('search') || searchParams.get('q');
      if (isSearch !== null) {
        setActiveSection('search');
      } else if (!currentCategory) {
        setActiveSection('all');
      } else {
        setActiveSection(currentCategory);
      }
    }
  }, [isLandingPage, isAboutPage, isProjectsPage, searchParams]);

  // Quick live search matching items
  const matchingProjects = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return shopData.filter((item) =>
      item.componentName.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.techStack.some((tech) => tech.toLowerCase().includes(q))
    ).slice(0, 4);
  }, [searchQuery]);

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/projects?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push('/projects');
    }
    setIsSearchOpen(false);
  };

  const handleProjectSelect = (projectName: string) => {
    router.push(`/projects?q=${encodeURIComponent(projectName)}`);
    setIsSearchOpen(false);
  };

  return (
    <aside className="fixed right-3 lg:right-auto lg:left-6 top-1/2 -translate-y-1/2 flex flex-col items-center z-40 bg-[#0c1324]/60 backdrop-blur-md border border-white/10 rounded-full py-5 lg:py-7 px-2.5 lg:px-3.5 shadow-[0_0_20px_rgba(0,0,0,0.4)] scale-90 lg:scale-100 transition-all duration-300">
      {/* Secondary Identity Marker / Logo */}
      <Link href="/" className="relative mb-5 group cursor-pointer" title="Local System Navigator">
        <div className="relative w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-gradient-to-br from-[#10b981]/80 to-[#3b82f6]/80 p-[1px] flex items-center justify-center">
          <div className="w-full h-full bg-[#0c1324] rounded-full flex items-center justify-center">
            <svg
              className="w-3.5 h-3.5 text-[#10b981] animate-pulse"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
        </div>
        <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-[#10b981] rounded-full border border-[#0c1324] shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
      </Link>

      {/* Dynamic Navigation Links */}
      <nav className="flex flex-col gap-3.5 lg:gap-5">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          const isSearchItem = item.id === 'search';

          return (
            <div
              key={item.id}
              ref={isSearchItem ? searchContainerRef : undefined}
              className="relative"
            >
              {isSearchItem ? (
                <button
                  type="button"
                  onClick={() => setIsSearchOpen((prev) => !prev)}
                  className="relative p-2 group rounded-full text-[#c2c6d6] hover:text-white transition-colors duration-300 flex items-center justify-center"
                  aria-label={item.label}
                >
                  {/* Dynamic Sliding Background for Active State */}
                  {(isActive || isSearchOpen) && (
                    <motion.span
                      layoutId="activeSidebarTab"
                      className="absolute inset-0 bg-[#3b82f6]/15 border border-[#3b82f6]/40 rounded-full shadow-[0_0_14px_rgba(59,130,246,0.3)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Icon SVG */}
                  <svg
                    className={`relative z-10 w-4.5 h-4.5 lg:w-5 lg:h-5 transition-transform duration-300 group-hover:scale-110 ${
                      isActive || isSearchOpen ? 'text-[#3b82f6]' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>

                  {/* Tooltip Label (Hide when popup is open) */}
                  {!isSearchOpen && (
                    <span className="absolute right-12 lg:left-12 lg:right-auto top-1/2 -translate-y-1/2 bg-[#0c1324]/90 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-md font-mono text-[10px] text-[#dce1fb] uppercase tracking-wider scale-0 group-hover:scale-100 origin-right lg:origin-left transition-all duration-200 pointer-events-none shadow-lg whitespace-nowrap">
                      {item.label}
                    </span>
                  )}
                </button>
              ) : (
                <Link
                  href={item.href}
                  className="relative p-2 group rounded-full text-[#c2c6d6] hover:text-white transition-colors duration-300 flex items-center justify-center"
                >
                  {/* Dynamic Sliding Background for Active State */}
                  {isActive && (
                    <motion.span
                      layoutId="activeSidebarTab"
                      className="absolute inset-0 bg-[#3b82f6]/15 border border-[#3b82f6]/40 rounded-full shadow-[0_0_14px_rgba(59,130,246,0.3)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Icon SVG */}
                  <svg
                    className={`relative z-10 w-4.5 h-4.5 lg:w-5 lg:h-5 transition-transform duration-300 group-hover:scale-110 ${
                      isActive ? 'text-[#3b82f6]' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>

                  {/* Tooltip Label */}
                  <span className="absolute right-12 lg:left-12 lg:right-auto top-1/2 -translate-y-1/2 bg-[#0c1324]/90 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-md font-mono text-[10px] text-[#dce1fb] uppercase tracking-wider scale-0 group-hover:scale-100 origin-right lg:origin-left transition-all duration-200 pointer-events-none shadow-lg whitespace-nowrap">
                    {item.label}
                  </span>
                </Link>
              )}

              {/* SEARCH POPUP / POPOVER */}
              <AnimatePresence>
                {isSearchItem && isSearchOpen && (
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
                          onClick={() => setIsSearchOpen(false)}
                          className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Search Form */}
                    <form onSubmit={handleSearchSubmit} className="mt-3 relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      <input
                        ref={inputRef}
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search projects..."
                        className="w-full bg-[#121620] border border-white/15 rounded-xl pl-9 pr-8 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/40 font-mono transition-all"
                      />
                      {searchQuery && (
                        <button
                          type="button"
                          onClick={() => setSearchQuery('')}
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
                                onClick={() => handleProjectSelect(project.componentName)}
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
                        onClick={() => handleSearchSubmit()}
                        className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-mono text-[11px] font-semibold flex items-center gap-1.5 transition-colors shadow-md"
                      >
                        <span>Search</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}



'use client';

import React, { useEffect, useState, useMemo, useRef } from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import shopData from '@/data/shopData.json';

// Navigation Data & Atomic Design Imports
import {
  landingSections,
  projectCatalogItems,
  aboutSections,
  contactControlItems,
  NavItemConfig,
} from '@/data/navigationData';
import { SidebarLogo } from '@/components/atoms/SidebarLogo';
import { SidebarNavItem } from '@/components/atoms/SidebarNavItem';
import {
  SearchPopover,
  StatusDiagnosticsPopover,
  DirectChannelsPopover,
  QuickTransmitPopover,
  ProtocolFaqPopover,
} from '@/components/organisms';


export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Navigation & Scroll State
  const [activeSection, setActiveSection] = useState('home');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Contact Control Panel Popovers State
  const [activeControlPopover, setActiveControlPopover] = useState<string | null>(null);
  const [pinging, setPinging] = useState(false);
  const [pingResult, setPingResult] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [quickEmail, setQuickEmail] = useState('');
  const [quickMessage, setQuickMessage] = useState('');
  const [quickSent, setQuickSent] = useState(false);

  // Refs for click outside
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const controlContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Page Route Flags
  const isLandingPage = pathname === '/';
  const isProjectsPage = pathname === '/projects';
  const isAboutPage = pathname === '/about';
  const isContactPage = pathname === '/contact';

  // Context-aware Navigation Items
  const navItems = useMemo(() => {
    if (isProjectsPage) return projectCatalogItems;
    if (isAboutPage) return aboutSections;
    if (isContactPage) return contactControlItems;
    return landingSections;
  }, [isProjectsPage, isAboutPage, isContactPage]);

  // Click-outside and Escape key handlers
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
      if (controlContainerRef.current && !controlContainerRef.current.contains(event.target as Node)) {
        setActiveControlPopover(null);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsSearchOpen(false);
        setActiveControlPopover(null);
      }
    };

    if (isSearchOpen || activeControlPopover !== null) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
      if (isSearchOpen) setTimeout(() => inputRef.current?.focus(), 100);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSearchOpen, activeControlPopover]);

  // Scroll Spy Effect & Projects Category Active Section
  useEffect(() => {
    if (isLandingPage || isAboutPage || isContactPage) {
      const currentSections = isLandingPage
        ? landingSections
        : isAboutPage
        ? aboutSections
        : contactControlItems;

      const handleScroll = () => {
        const scrollPos = window.scrollY + 250;
        for (const section of currentSections) {
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
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    } else if (isProjectsPage) {
      const currentCategory = searchParams.get('category');
      const isSearch = searchParams.get('search') || searchParams.get('q');
      const targetSection = isSearch !== null ? 'search' : !currentCategory ? 'all' : currentCategory;
      setActiveSection(targetSection);
    }
  }, [pathname, searchParams, isLandingPage, isAboutPage, isContactPage, isProjectsPage]);

  // Quick search matching logic
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

  const handlePingDiagnostics = () => {
    setPinging(true);
    setTimeout(() => {
      const ms = Math.floor(Math.random() * 12) + 12;
      setPingResult(`${ms}ms (Clean Response)`);
      setPinging(false);
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('yusss4me@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickEmail || !quickMessage) return;
    setQuickSent(true);
    setTimeout(() => {
      setQuickSent(false);
      setQuickEmail('');
      setQuickMessage('');
      setActiveControlPopover(null);
    }, 2500);
  };

  return (
    <aside className="fixed right-3 lg:right-auto lg:left-6 top-1/2 -translate-y-1/2 flex flex-col items-center z-40 bg-[#0c1324]/60 backdrop-blur-md border border-white/10 rounded-full py-5 lg:py-7 px-2.5 lg:px-3.5 shadow-[0_0_20px_rgba(0,0,0,0.4)] scale-90 lg:scale-100 transition-all duration-300">
      {/* Atom: Sidebar Logo Marker */}
      <SidebarLogo />

      {/* Dynamic Navigation Container */}
      <nav className="flex flex-col gap-3.5 lg:gap-5">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          const isSearchItem = item.id === 'search';
          const isContactControl = isContactPage;
          const isControlPopoverOpen = activeControlPopover === item.id;

          const handleItemClick = () => {
            if (isSearchItem) {
              setIsSearchOpen((prev) => !prev);
            } else if (isContactControl) {
              setActiveControlPopover((prev) => (prev === item.id ? null : item.id));
              const el = document.getElementById(item.id);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
          };

          return (
            <div
              key={item.id}
              ref={isSearchItem ? searchContainerRef : (isContactControl ? controlContainerRef : undefined)}
              className="relative"
            >
              {/* Atom: Nav Item Button or Link */}
              <SidebarNavItem
                item={item}
                isActive={isActive}
                isPopoverOpen={isSearchOpen || isControlPopoverOpen}
                isButton={isSearchItem || isContactControl}
                onClick={handleItemClick}
              />

              {/* Molecules: Popovers */}
              <AnimatePresence>
                {/* Search Popover */}
                {isSearchItem && isSearchOpen && (
                  <SearchPopover
                    inputRef={inputRef}
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                    onSearchSubmit={handleSearchSubmit}
                    onClose={() => setIsSearchOpen(false)}
                    matchingProjects={matchingProjects}
                    onProjectSelect={handleProjectSelect}
                  />
                )}

                {/* Contact Control Popover: System Status */}
                {isContactControl && activeControlPopover === 'status' && item.id === 'status' && (
                  <StatusDiagnosticsPopover
                    pingResult={pingResult}
                    pinging={pinging}
                    onPing={handlePingDiagnostics}
                    onClose={() => setActiveControlPopover(null)}
                  />
                )}

                {/* Contact Control Popover: Direct Channels */}
                {isContactControl && activeControlPopover === 'channels' && item.id === 'channels' && (
                  <DirectChannelsPopover
                    copiedEmail={copiedEmail}
                    onCopyEmail={handleCopyEmail}
                    onClose={() => setActiveControlPopover(null)}
                  />
                )}

                {/* Contact Control Popover: Transmit Terminal */}
                {isContactControl && activeControlPopover === 'transmit-terminal' && item.id === 'transmit-terminal' && (
                  <QuickTransmitPopover
                    quickEmail={quickEmail}
                    setQuickEmail={setQuickEmail}
                    quickMessage={quickMessage}
                    setQuickMessage={setQuickMessage}
                    quickSent={quickSent}
                    onSubmit={handleQuickSubmit}
                    onClose={() => setActiveControlPopover(null)}
                  />
                )}

                {/* Contact Control Popover: Protocol FAQ */}
                {isContactControl && activeControlPopover === 'faq' && item.id === 'faq' && (
                  <ProtocolFaqPopover
                    onClose={() => setActiveControlPopover(null)}
                    onNavigateToFaq={() => {
                      setActiveControlPopover(null);
                      document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  />
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}

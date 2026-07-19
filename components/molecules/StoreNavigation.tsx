'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

interface StoreNavigationProps {
  activeCategory: string;
  counts: {
    all: number;
    'ui-ux': number;
    ai: number;
    fullstack: number;
  };
}

const tabs = [
  {
    id: 'all',
    name: 'All Products',
    label: 'All',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
        />
      </svg>
    ),
  },
  {
    id: 'ui-ux',
    name: 'UI/UX Assets',
    label: 'UI/UX',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-3"
        />
      </svg>
    ),
  },
  {
    id: 'ai',
    name: 'AI & Data Science',
    label: 'AI & ML',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    id: 'fullstack',
    name: 'Fullstack & Dev Tools',
    label: 'Dev Tools',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
];

export default function StoreNavigation({ activeCategory, counts }: StoreNavigationProps) {
  const pathname = usePathname();

  return (
    <>
      {/* 1. Desktop Sidebar Navigation (lg:block, hidden on mobile/tablet) */}
      <aside className="hidden lg:block sticky top-24 self-start space-y-6 w-full pr-4 z-20">
        <div className="font-mono text-[10px] text-[#c2c6d6]/40 uppercase tracking-widest border-b border-white/10 pb-3">
          Product Categories
        </div>
        <nav className="flex flex-col gap-2">
          {tabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            const count = counts[tab.id as keyof typeof counts] || 0;
            return (
              <Link
                key={tab.id}
                href={tab.id === 'all' ? pathname : `${pathname}?category=${tab.id}`}
                className={`group relative flex items-center justify-between px-4 py-3 rounded-lg border text-xs font-mono transition-all duration-300 ${
                  isActive
                    ? 'bg-[#0c1324] border-white/15 text-white font-bold shadow-[0_0_15px_rgba(59,130,246,0.05)]'
                    : 'border-transparent text-[#c2c6d6] hover:bg-white/5 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="desktop-active-indicator"
                    className="absolute left-0 w-1 h-1/2 bg-[#3b82f6] rounded-r"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="flex items-center gap-3">
                  <span
                    className={
                      isActive
                        ? 'text-[#3b82f6]'
                        : 'text-[#c2c6d6]/60 group-hover:text-white transition-colors'
                    }
                  >
                    {tab.icon}
                  </span>
                  {tab.name}
                </span>
                <span
                  className={`px-2 py-0.5 rounded text-[10px] transition-colors ${
                    isActive ? 'bg-[#3b82f6]/20 text-[#adc6ff]' : 'bg-white/5 text-[#c2c6d6]/40'
                  }`}
                >
                  {count}
                </span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* 2. Mobile / Tablet Bottom Bar Navigation (lg:hidden, fixed bottom) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0c1324]/85 backdrop-blur-xl border-t border-white/10 px-4 py-2 flex justify-around items-center shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        {tabs.map((tab) => {
          const isActive = activeCategory === tab.id;
          return (
            <Link
              key={tab.id}
              href={tab.id === 'all' ? pathname : `${pathname}?category=${tab.id}`}
              className={`flex flex-col items-center justify-center py-1.5 px-2 relative transition-colors duration-300 ${
                isActive ? 'text-[#3b82f6]' : 'text-[#c2c6d6]/60 hover:text-white'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="mobile-active-glow"
                  className="absolute -top-2 w-8 h-1 bg-[#3b82f6] rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="mb-1">{tab.icon}</span>
              <span className="text-[9px] font-mono tracking-wider uppercase">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </>
  );
}

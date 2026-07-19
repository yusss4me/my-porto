'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface StoreFilterTabsProps {
  activeCategory: string;
}

const tabs = [
  { id: 'all', name: 'All Products' },
  { id: 'ui-ux', name: 'UI/UX & Frontend Assets' },
  { id: 'ai', name: 'AI & Data Science' },
  { id: 'fullstack', name: 'Fullstack & Dev Tools' },
];

export default function StoreFilterTabs({ activeCategory }: StoreFilterTabsProps) {
  return (
    <div className="flex flex-nowrap overflow-x-auto whitespace-nowrap pb-3 gap-2 border-b border-white/10 relative z-20 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-6 px-6 md:mx-0 md:px-0">
      {tabs.map((tab) => {
        const isActive = activeCategory === tab.id;
        return (
          <Link
            key={tab.id}
            href={tab.id === 'all' ? '/components-shop' : `/components-shop?category=${tab.id}`}
            className={`relative px-4 py-2.5 text-[10px] font-mono tracking-wider transition-colors duration-300 rounded-full uppercase shrink-0 ${
              isActive ? 'text-white font-bold' : 'text-[#c2c6d6] hover:text-white'
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="active-tab-pill"
                className="absolute inset-0 bg-[#0c1324] border border-white/15 rounded-full z-[-1] shadow-[0_0_15px_rgba(59,130,246,0.1)]"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            {tab.name}
          </Link>
        );
      })}
    </div>
  );
}

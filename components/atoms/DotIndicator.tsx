'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface DotIndicatorProps {
  isActive: boolean;
  onClick?: () => void;
  title: string;
  href: string;
}

export default function DotIndicator({ isActive, onClick, title, href }: DotIndicatorProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="relative w-4 h-4 flex items-center justify-center group cursor-pointer"
      title={title}
    >
      {/* Base Inactive Dot (8px) */}
      <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-white/40 transition-colors duration-200" />
      
      {/* Active Dot indicator (12px / w-3 h-3) with spring and layoutId */}
      {isActive && (
        <motion.div
          layoutId="activeDotIndicator"
          transition={{
            type: 'spring',
            stiffness: 380,
            damping: 30,
          }}
          className="absolute w-3 h-3 rounded-full bg-[#3b82f6] shadow-[0_0_12px_rgba(59,130,246,0.8)] z-10"
        />
      )}
    </a>
  );
}

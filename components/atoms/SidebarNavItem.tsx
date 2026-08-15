'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SidebarTooltip } from '@/components/atoms/SidebarTooltip';

export interface NavItemConfig {
  id: string;
  label: string;
  href: string;
  icon: string;
}

interface SidebarNavItemProps {
  item: NavItemConfig;
  isActive: boolean;
  isPopoverOpen?: boolean;
  isButton?: boolean;
  onClick?: () => void;
}

export const SidebarNavItem: React.FC<SidebarNavItemProps> = ({
  item,
  isActive,
  isPopoverOpen = false,
  isButton = false,
  onClick,
}) => {
  const content = (
    <>
      {/* Active Indicator Sliding Background */}
      {(isActive || isPopoverOpen) && (
        <motion.span
          layoutId="activeSidebarTab"
          className="absolute inset-0 bg-[#3b82f6]/15 border border-[#3b82f6]/40 rounded-full shadow-[0_0_14px_rgba(59,130,246,0.3)]"
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}

      {/* SVG Icon */}
      <svg
        className={`relative z-10 w-4.5 h-4.5 lg:w-5 lg:h-5 transition-transform duration-300 group-hover:scale-110 ${
          isActive || isPopoverOpen ? 'text-[#3b82f6]' : ''
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
      </svg>

      {/* Tooltip Label */}
      {!isPopoverOpen && <SidebarTooltip label={item.label} />}
    </>
  );

  if (isButton) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="relative p-2 group rounded-full text-[#c2c6d6] hover:text-white transition-colors duration-300 flex items-center justify-center"
        aria-label={item.label}
      >
        {content}
      </button>
    );
  }

  return (
    <Link
      href={item.href}
      className="relative p-2 group rounded-full text-[#c2c6d6] hover:text-white transition-colors duration-300 flex items-center justify-center"
    >
      {content}
    </Link>
  );
};

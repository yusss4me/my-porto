'use client';

import React from 'react';

interface SidebarTooltipProps {
  label: string;
}

export const SidebarTooltip: React.FC<SidebarTooltipProps> = ({ label }) => {
  return (
    <span className="absolute right-12 lg:left-12 lg:right-auto top-1/2 -translate-y-1/2 bg-[#0c1324]/90 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-md font-mono text-[10px] text-[#dce1fb] uppercase tracking-wider scale-0 group-hover:scale-100 origin-right lg:origin-left transition-all duration-200 pointer-events-none shadow-lg whitespace-nowrap">
      {label}
    </span>
  );
};

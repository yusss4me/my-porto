'use client';

import React from 'react';
import Link from 'next/link';

export const SidebarLogo: React.FC = () => {
  return (
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
  );
};

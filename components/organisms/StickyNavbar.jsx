'use client';

import React from 'react';
import Link from 'next/link';

import Image from 'next/image';

export default function StickyNavbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-navbar">
      <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo/logo.png"
            alt="ARDYUSTIAR Logo"
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
          />
          <span className="font-geist font-extrabold text-white tracking-tight text-xl">
            ARDYUSTIAR
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wider">
          <a href="#home" className="text-white hover:text-white transition-colors relative py-1 group">
            HOME
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#3b82f6] rounded-full scale-0 group-hover:scale-100 transition-transform"></span>
          </a>
          <a href="#projects" className="text-[#c2c6d6] hover:text-white transition-colors relative py-1 group">
            PROJECTS
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#3b82f6] rounded-full scale-0 group-hover:scale-100 transition-transform"></span>
          </a>
          <a href="#lab" className="text-[#c2c6d6] hover:text-white transition-colors relative py-1 group">
            LAB
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#3b82f6] rounded-full scale-0 group-hover:scale-100 transition-transform"></span>
          </a>
          <Link href="/components-shop" className="text-[#4edea3] hover:text-[#4edea3]/80 transition-colors relative py-1 group">
            SHOP
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#10b981] rounded-full scale-0 group-hover:scale-100 transition-transform"></span>
          </Link>
        </nav>
        <div className="hidden md:block">
          <a href="#contact" className="px-5 py-2 font-mono text-xs border border-white/10 rounded-full hover:border-[#3b82f6]/50 transition-all hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] text-white">
            Connect
          </a>
        </div>
      </div>
    </header>
  );
}

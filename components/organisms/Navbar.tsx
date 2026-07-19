'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();

  const navigationItems = [
    { name: 'PORTFOLIO', href: '/' },
    { name: 'TECH STORE', href: '/shop' },
    { name: 'COMPONENTS', href: '/components-shop' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0c1324]/60 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-tr from-[#3b82f6] to-[#10b981] p-[1px] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[#020617] rounded-[7px] flex items-center justify-center overflow-hidden">
              <Image
                src="/logo/logo.png"
                alt="ARDYUSTIAR Logo"
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
                priority
              />
            </div>
          </div>
          <span className="font-geist font-extrabold text-white tracking-tight text-xl bg-gradient-to-r from-white to-[#c2c6d6] bg-clip-text text-transparent group-hover:text-[#3b82f6] transition-colors duration-300">
            ARDI YUSTIAR
          </span>
        </Link>

        {/* Global Navigation Links */}
        <nav className="flex items-center gap-1 md:gap-4 font-mono text-xs tracking-wider">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className="relative px-3 py-2 transition-colors">
                <span className={`relative z-10 transition-colors duration-350 ${
                  isActive ? 'text-white font-bold' : 'text-[#c2c6d6] hover:text-white'
                }`}>
                  {item.name}
                </span>
                
                {/* Active Indicator with Framer Motion */}
                {isActive && (
                  <motion.span
                    layoutId="activeGlobalNav"
                    className="absolute inset-0 bg-white/5 rounded-full border border-white/10 shadow-[0_0_12px_rgba(59,130,246,0.15)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:block">
          <Link
            href="/#contact"
            className="relative px-4 py-2 text-xs font-mono tracking-wider rounded-lg border border-[#3b82f6]/30 bg-[#3b82f6]/10 text-white hover:bg-[#3b82f6]/20 hover:border-[#3b82f6] transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.1)] block"
          >
            CONNECT_
          </Link>
        </div>
      </div>
    </header>
  );
}

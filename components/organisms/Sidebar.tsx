'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Sidebar() {
  const sections = [
    { id: 'home', label: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { id: 'projects', label: 'Projects', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
    { id: 'lab', label: 'Lab', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
    { id: 'contact', label: 'Contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' }
  ];

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 300;
      for (const section of sections) {
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col items-center z-40 bg-[#0c1324]/40 backdrop-blur-md border border-white/10 rounded-full py-8 px-4 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
      {/* Secondary Identity Marker / Logo */}
      <div className="relative mb-8 group cursor-pointer" title="Local System Navigator">
        <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-[#10b981]/80 to-[#3b82f6]/80 p-[1px] flex items-center justify-center">
          <div className="w-full h-full bg-[#0c1324] rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-[#10b981] animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
        <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-[#10b981] rounded-full border border-[#0c1324] shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
      </div>

      {/* Anchor Navigation Links */}
      <nav className="flex flex-col gap-6">
        {sections.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className="relative p-2.5 group rounded-full text-[#c2c6d6] hover:text-white transition-colors duration-300"
            >
              {/* Dynamic Sliding Background for Active State */}
              {isActive && (
                <motion.span
                  layoutId="activeSidebarTab"
                  className="absolute inset-0 bg-[#3b82f6]/10 border border-[#3b82f6]/30 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.2)]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}

              {/* Icon SVG */}
              <svg className={`relative z-10 w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${isActive ? 'text-[#3b82f6]' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={sec.icon} />
              </svg>

              {/* Tooltip Label */}
              <span className="absolute left-14 top-1/2 -translate-y-1/2 bg-[#0c1324]/90 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-md font-mono text-[10px] text-[#dce1fb] uppercase tracking-wider scale-0 group-hover:scale-100 origin-left transition-all duration-200 pointer-events-none shadow-lg whitespace-nowrap">
                {sec.label}
              </span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
}

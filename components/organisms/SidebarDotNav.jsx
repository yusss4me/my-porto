'use client';

import React, { useEffect, useState } from 'react';

export default function SidebarDotNav() {
  const sections = ['home', 'projects', 'lab', 'contact'];
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="hidden md:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col gap-4 z-40">
      {sections.map((sec) => {
        const isActive = activeSection === sec;
        return (
          <a
            key={sec}
            href={`#${sec}`}
            className={`rounded-full transition-all duration-300 ${
              isActive
                ? 'w-3 h-3 bg-[#3b82f6] shadow-[0_0_10px_#3b82f6]'
                : 'w-2 h-2 bg-white/20 hover:bg-white/40'
            }`}
            title={sec}
          />
        );
      })}
    </div>
  );
}

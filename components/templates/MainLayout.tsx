'use client';

import React from 'react';
import Navbar from '@/components/organisms/Navbar';
import Sidebar from '@/components/organisms/Sidebar';
import MobileBottomNav from '@/components/organisms/MobileBottomNav';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative min-h-screen bg-[#020617] text-[#dce1fb] overflow-x-hidden">
      {/* Stars/Dots background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Decorative gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[60%] rounded-full bg-[#10b981]/5 blur-[120px] pointer-events-none" />

      <Navbar />
      <Sidebar />

      {/* Safe padding on mobile (pr-16) to prevent overlap with the right-aligned sidebar */}
      <main className="max-w-[1280px] mx-auto pl-6 pr-16 md:px-16 pt-32 pb-28 w-full">
        {children}
      </main>

      <MobileBottomNav />
    </div>
  );
}

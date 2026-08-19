'use client';

import React, { Suspense } from 'react';
import Navbar from '@/components/organisms/Navbar';
import Sidebar from '@/components/organisms/Sidebar';
import MobileBottomNav from '@/components/organisms/MobileBottomNav';
import ScrollToTop from '@/components/atoms/ScrollToTop';
import Copyright from '@/components/molecules/copyright';


interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative bg-[#020617] text-[#dce1fb] overflow-hidden min-h-screen">
      <ScrollToTop />

      {/* Stars/Dots background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Decorative gradients */}
      <div className="absolute top-0 left-[-10%] w-[50%] h-[60%] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-[-10%] w-[50%] h-[60%] rounded-full bg-[#10b981]/5 blur-[120px] pointer-events-none" />

      <Navbar />
      <Suspense fallback={null}>
        <Sidebar />
      </Suspense>

      {/* Safe padding on mobile (pr-16) to prevent overlap with the right-aligned sidebar */}
      <main className="max-w-6xl mx-auto  pl-8 sm:pl-12 md:pl-16 lg:pl-24 xl:pl-2 pr-20 lg:pr-8 pt-16 w-full">
        {children}
        <Copyright />
      </main>


      <MobileBottomNav />
    </div>
  );
}



import React from 'react';
import Link from 'next/link';

import Image from 'next/image';

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#020617] text-[#dce1fb] relative flex flex-col">
      {/* Top clean header isolated from main portfolio header */}
      <header className="border-b border-white/10 bg-[#0c1324]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-85 transition-opacity">
            <Image
              src="/logo/logo.png"
              alt="ARDYUSTIAR Logo"
              width={28}
              height={28}
              className="w-7 h-7 object-contain"
            />
            <span className="font-geist font-extrabold text-white tracking-tight text-lg">
              ARDYUSTIAR
            </span>
          </Link>
          <div className="font-mono text-xs tracking-wider flex items-center gap-4">
            <span className="text-[#4edea3]">COMPONENT STORE</span>
            <span className="text-white/20">|</span>
            <span className="text-[#c2c6d6]">PREMIUM UI TOKENS</span>
          </div>
        </div>
      </header>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none z-0" />

      <main className="flex-1 relative z-10">{children}</main>

      <footer className="border-t border-white/10 py-6 bg-[#020617] relative z-10">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] text-[#c2c6d6]">
          <span>© {new Date().getFullYear()} Ardi Yustiar. Secure Digital UI Delivery.</span>
          <span>Terms of Service | Privacy Policy</span>
        </div>
      </footer>
    </div>
  );
}

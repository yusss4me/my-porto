'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, FolderGit2, Mail, LogOut, Terminal, ShieldCheck } from 'lucide-react';
import { logout } from '@/src/lib/auth';

const NAV_ITEMS = [
  { label: 'Overview', href: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'Manage Projects', href: '/admin/projects', icon: FolderGit2 },
  { label: 'Inbox Messages', href: '/admin/messages', icon: Mail },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-[#090d16] border-r border-slate-800 text-slate-300 flex flex-col justify-between h-screen sticky top-0 font-mono select-none z-30 shrink-0">
      {/* Top Header */}
      <div>
        <div className="p-6 border-b border-slate-800/80">
          <div className="flex items-center gap-2.5 text-emerald-400">
            <Terminal className="w-5 h-5 animate-pulse" />
            <span className="font-extrabold text-sm tracking-widest uppercase">CORE_ADMIN</span>
          </div>
          <div className="mt-2 text-[10px] text-slate-500 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="tracking-wider">SYSTEM_ONLINE // V2.4</span>
          </div>
        </div>

        {/* User Identity Chip */}
        <div className="px-4 py-3 mx-4 my-4 rounded-lg bg-[#0f172a]/70 border border-slate-800 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-sky-400" />
            <div>
              <div className="font-bold text-white text-[11px]">ADMIN_ROOT</div>
              <div className="text-[9px] text-slate-500">AUTH_LEVEL: 0</div>
            </div>
          </div>
          <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[9px] border border-emerald-500/30">
            ACTIVE
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="px-3 space-y-1">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-xs font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-sky-500/10 text-sky-400 border border-sky-500/40 shadow-[0_0_15px_rgba(56,189,248,0.15)]'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-sky-400' : 'text-slate-500'}`} />
                <span className="tracking-wider uppercase">{item.label}</span>
                {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-sky-400" />}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer / Logout */}
      <div className="p-4 border-t border-slate-800">
        <button
          onClick={logout}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 font-bold text-xs transition-all duration-200 tracking-widest uppercase cursor-pointer"
        >
          <LogOut className="w-4 h-4" />
          <span>TERMINATE_SESSION</span>
        </button>
      </div>
    </aside>
  );
}

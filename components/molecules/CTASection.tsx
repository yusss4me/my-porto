'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sparkles, ArrowRight } from 'lucide-react';

interface CTASectionProps {
  headline?: string;
  subheadline?: string;
  primaryBtnText?: string;
  primaryBtnHref?: string;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
  className?: string;
}

export default function CTASection({
  headline = 'Interested in working together?',
  subheadline = "Let's engineer exceptional digital experiences and intelligent systems.",
  primaryBtnText = 'Get In Touch',
  primaryBtnHref = '/contact',
  secondaryBtnText = 'Explore Projects',
  secondaryBtnHref = '/projects',
  className = '',
}: CTASectionProps) {
  const pathname = usePathname();

  // Rule A (Anti-Redundancy): Hide CTA banner on /contact page
  if (pathname === '/contact') {
    return null;
  }

  return (
    <section
      className={`relative rounded-2xl bg-[#121620] border border-white/10 p-8 sm:p-10 md:p-12 overflow-hidden shadow-2xl my-12 ${className}`}
    >
      {/* Ambient Decorative Glow */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#3b82f6]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="max-w-xl">
          <h2 className="font-geist text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2">
            {headline}
          </h2>
          <p className="font-inter text-slate-400 text-sm sm:text-base leading-relaxed">
            {subheadline}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 shrink-0">
          <Link
            href={primaryBtnHref}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#A5C4FF] hover:bg-[#b8d2ff] active:scale-[0.98] text-slate-950 font-mono font-bold text-sm transition-all duration-200 shadow-[0_0_20px_rgba(165,196,255,0.25)]"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>{primaryBtnText}</span>
          </Link>

          {secondaryBtnText && secondaryBtnHref && (
            <Link
              href={secondaryBtnHref}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-mono text-sm transition-all duration-200"
            >
              <span>{secondaryBtnText}</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';

interface NavbarLinkProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  variant?: 'blue' | 'green';
}

export default function NavbarLink({ href, children, isActive, variant = 'blue' }: NavbarLinkProps) {
  const isExternal = !href.startsWith('#');
  const activeDotColor = variant === 'green' ? 'bg-[#10b981]' : 'bg-[#3b82f6]';
  
  let textColorClasses = '';
  if (isActive) {
    textColorClasses = variant === 'green' ? 'text-[#4edea3]' : 'text-white';
  } else {
    textColorClasses = variant === 'green' ? 'text-[#4edea3]/70 hover:text-[#4edea3]' : 'text-[#c2c6d6] hover:text-white';
  }

  const linkContent = (
    <span className={`relative py-1 group cursor-pointer font-mono text-xs tracking-wider transition-colors ${textColorClasses}`}>
      {children}
      <span
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 ${activeDotColor} rounded-full transition-transform duration-200 ${
          isActive ? 'scale-100' : 'scale-0 group-hover:scale-100'
        }`}
      />
    </span>
  );

  if (isExternal) {
    return (
      <Link href={href} className="inline-flex">
        {linkContent}
      </Link>
    );
  }

  return (
    <a href={href} className="inline-flex">
      {linkContent}
    </a>
  );
}

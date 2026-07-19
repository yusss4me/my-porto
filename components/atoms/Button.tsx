'use client';

import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'blue' | 'green' | 'outline' | 'navbar' | 'shop-outline';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit';
  href?: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
}

export default function Button({
  children,
  variant = 'blue',
  size = 'md',
  type = 'button',
  href,
  className = '',
  onClick,
}: ButtonProps) {
  let baseClasses = 'font-mono tracking-wide transition-all rounded inline-flex items-center justify-center ';
  
  // Variant classes
  let variantClasses = '';
  if (variant === 'blue') {
    variantClasses = 'bg-[#3b82f6] hover:bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]';
  } else if (variant === 'green') {
    variantClasses = 'bg-[#10b981] hover:bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]';
  } else if (variant === 'outline') {
    variantClasses = 'border border-white/10 hover:border-white/20 text-[#dce1fb] hover:text-white';
  } else if (variant === 'shop-outline') {
    variantClasses = 'border border-white/10 hover:border-white/30 text-white';
  } else if (variant === 'navbar') {
    variantClasses = 'border border-white/10 rounded-full hover:border-[#3b82f6]/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] text-white';
  }

  // Size classes
  let sizeClasses = '';
  if (size === 'sm') {
    sizeClasses = 'px-3 py-2 text-xs';
  } else if (size === 'md') {
    sizeClasses = 'px-5 py-2.5 text-xs';
  } else if (size === 'lg') {
    sizeClasses = 'px-6 py-3 text-sm';
  }

  const combinedClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`;

  if (href) {
    if (href.startsWith('#')) {
      return (
        <a href={href} className={combinedClasses} onClick={onClick}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={combinedClasses} onClick={onClick}>
      {children}
    </button>
  );
}

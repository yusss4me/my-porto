import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({
  badge,
  title,
  description,
  className = '',
  align = 'left',
}: SectionHeaderProps) {
  const alignClasses = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`space-y-3 ${alignClasses} ${className}`}>
      {badge && (
        <span className="font-mono text-xs text-[#3b82f6] tracking-[0.2em] uppercase font-semibold inline-block">
          {badge}
        </span>
      )}
      <h2 className="font-geist text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="font-inter text-[#c2c6d6] text-sm md:text-base max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

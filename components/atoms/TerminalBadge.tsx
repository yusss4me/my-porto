import React from 'react';

interface TerminalBadgeProps {
  children: React.ReactNode;
  variant?: 'emerald' | 'muted' | 'sky';
  className?: string;
}

export const TerminalBadge: React.FC<TerminalBadgeProps> = ({
  children,
  variant = 'emerald',
  className = ''
}) => {
  const variantStyles = {
    emerald: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
    sky: 'bg-sky-500/10 border-sky-500/30 text-sky-400',
    muted: 'bg-slate-800/80 border-slate-700 text-slate-400'
  };

  return (
    <span
      className={`px-2 py-0.5 border text-[10px] rounded font-mono uppercase tracking-wider ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

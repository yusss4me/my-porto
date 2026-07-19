import React from 'react';

export default function Badge({ children, variant = 'blue' }) {
  const colorClasses =
    variant === 'green'
      ? 'border-[#10b981] bg-[#10b981]/10 text-[#4edea3]'
      : 'border-[#3b82f6] bg-[#3b82f6]/10 text-[#adc6ff]';

  return (
    <span
      className={`inline-block border rounded-full px-3 py-1 text-[10px] tracking-wider uppercase font-mono ${colorClasses}`}
    >
      {children}
    </span>
  );
}

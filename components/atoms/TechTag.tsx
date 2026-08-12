"use client";

import React from "react";

interface TechTagProps {
  label: string;
  className?: string;
}

export const TechTag: React.FC<TechTagProps> = ({ label, className = "" }) => {
  // Format label to ensure it has brackets if not already present
  const formattedLabel = label.startsWith("[") && label.endsWith("]") ? label : `[ ${label} ]`;

  return (
    <span
      className={`inline-block font-mono text-[11px] font-medium tracking-wider text-slate-300 bg-[#0B0F17]/80 border border-slate-700/60 px-2.5 py-1 rounded hover:border-slate-500 transition-colors duration-200 ${className}`}
    >
      {formattedLabel}
    </span>
  );
};

import React from 'react';

interface ScopeChipProps {
  id: string;
  label: string;
  isActive: boolean;
  onSelect: (id: string) => void;
}

export const ScopeChip: React.FC<ScopeChipProps> = ({
  id,
  label,
  isActive,
  onSelect
}) => {
  return (
    <button
      type="button"
      onClick={() => onSelect(id)}
      className={`px-3.5 py-2 rounded-lg text-xs font-mono transition-all duration-200 ${
        isActive
          ? 'border border-sky-500 bg-sky-500/10 text-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.2)] font-semibold'
          : 'border border-slate-800 bg-[#111622] text-slate-400 hover:border-slate-700 hover:text-slate-200'
      }`}
    >
      {label}
    </button>
  );
};

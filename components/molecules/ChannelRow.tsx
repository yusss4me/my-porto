import React from 'react';
import { TerminalBadge } from '@/components/atoms/TerminalBadge';

interface ChannelRowProps {
  name: string;
  url: string;
  badgeText: string;
  badgeVariant?: 'emerald' | 'muted' | 'sky';
  iconSvg: React.ReactNode;
}

export const ChannelRow: React.FC<ChannelRowProps> = ({
  name,
  url,
  badgeText,
  badgeVariant = 'emerald',
  iconSvg
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3.5 bg-[#111622] hover:bg-[#161c2b] border border-slate-800 hover:border-sky-500/50 hover:bg-sky-500/10 rounded-lg flex items-center justify-between transition-all group font-mono"
    >
      <div className="flex items-center gap-3">
        {iconSvg}
        <span className="text-xs text-slate-200 group-hover:text-white font-medium">{name}</span>
      </div>
      <TerminalBadge variant={badgeVariant}>{badgeText}</TerminalBadge>
    </a>
  );
};

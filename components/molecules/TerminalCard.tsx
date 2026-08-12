"use client";

import React from "react";

import { CornerBracket } from "@/components/atoms/CornerBracket";
import { ArrowRight } from "lucide-react";

interface TerminalCardProps {
  headerTag: string;
  headerRight?: React.ReactNode;
  footerText?: string;
  children: React.ReactNode;
  className?: string;
}

export const TerminalCard: React.FC<TerminalCardProps> = ({
  headerTag,
  headerRight,
  footerText,
  children,
  className = "",
}) => {
  return (
    <div
      className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-xl bg-[#0F1420]/90 backdrop-blur-md border border-slate-800/80 shadow-xl transition-all duration-300 group hover:border-emerald-500/50 hover:shadow-[0_0_24px_rgba(16,185,129,0.12)] ${className}`}
    >
      {/* Cyberpunk Decorative Corner Brackets */}
      <CornerBracket position="top-left" />
      <CornerBracket position="top-right" />
      <CornerBracket position="bottom-left" />
      <CornerBracket position="bottom-right" />

      {/* Terminal Card Header Bar */}
      <div className="flex items-center justify-between gap-3 pb-5 mb-5 border-b border-slate-800/60 font-mono text-xs text-slate-400">
        <span className="font-semibold tracking-wider text-slate-300">
          {headerTag.startsWith("[") ? headerTag : `[ ${headerTag} ]`}
        </span>
        {headerRight && <div>{headerRight}</div>}
      </div>

      {/* Terminal Card Main Content */}
      <div className="flex-1 space-y-4">{children}</div>

      {/* Terminal Card Footer Status Metadata */}
      {footerText && (
        <div className="flex items-center justify-between pt-5 mt-6 border-t border-slate-800/60 font-mono text-[11px] text-slate-400 font-medium tracking-wider group-hover:text-slate-200 transition-colors duration-300">
          <span>{footerText}</span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all duration-300" />
        </div>
      )}
    </div>
  );
};

"use client";

import React from "react";

export interface TechPillProps {
  name: string;
  iconName: string;
  isActive?: boolean;
  onHover?: () => void;
  onLeave?: () => void;
  onClick?: () => void;
  className?: string;
}

const TechIcon: React.FC<{ iconName: string }> = ({ iconName }) => {
  switch (iconName) {
    case "Nextjs":
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 180 180">
          <path d="M117.7 127.3L71.8 62H60v56h11.7V77.1l40 57.2c2.1-2.2 4.1-4.5 6-7z" />
          <path d="M107.6 62h11.7v56h-11.7z" />
          <path d="M90 0C40.3 0 0 40.3 0 90s40.3 90 90 90 90-40.3 90-90S139.7 0 90 0zm0 166.7c-42.4 0-76.7-34.3-76.7-76.7S47.6 13.3 90 13.3s76.7 34.3 76.7 76.7-34.3 76.7-76.7 76.7z" />
        </svg>
      );
    case "React":
      return (
        <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="12" rx="10" ry="4.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      );
    case "Tailwind":
      return (
        <svg className="w-4 h-4 text-sky-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
        </svg>
      );
    case "TypeScript":
      return (
        <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 3h21A1.5 1.5 0 0124 4.5v15a1.5 1.5 0 01-1.5 1.5h-21A1.5 1.5 0 010 19.5v-15A1.5 1.5 0 011.5 3zm10.1 13.8v-6.2h2.3v6.2h-2.3zm-.1-7.8a1.3 1.3 0 100-2.6 1.3 1.3 0 000 2.6zm6.5 7.9c1.9 0 3.1-1.1 3.1-2.7 0-1.7-1.1-2.4-2.7-3l-.4-.2c-.8-.3-1.2-.5-1.2-1 0-.4.4-.7 1-.7a2.6 2.6 0 011.8.7l1.1-1.4c-.8-.7-1.8-1-2.8-1-1.8 0-3 1.1-3 2.6 0 1.5 1 2.2 2.5 2.8l.5.2c.8.3 1.3.6 1.3 1.1 0 .5-.5.8-1.2.8a3.2 3.2 0 01-2.2-.9l-1.1 1.4c1 1 2.2 1.3 3.4 1.3z" />
        </svg>
      );
    case "FramerMotion":
      return (
        <svg className="w-4 h-4 text-pink-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
        </svg>
      );
    case "Python":
      return (
        <svg className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.927 0C6.14 0 6.51 2.518 6.51 2.518v2.607h5.503v.835H4.29S0 5.438 0 11.353c0 5.914 3.737 5.7 3.737 5.7h2.231v-3.136s-.124-3.738 3.676-3.738h6.29s3.522.062 3.522-3.46c0-3.522-3.08-3.724-3.08-3.724h-1.042V2.607S15.894 0 11.927 0zM9.043 1.832a.965.965 0 1 1 0 1.93.965.965 0 0 1 0-1.93zm11.22 10.815s-2.23.003-2.23.003v3.133s.124 3.741-3.676 3.741H8.067s-3.522-.062-3.522 3.46c0 3.522 3.08 3.724 3.08 3.724h1.042v.393s-.562 2.607 3.405 2.607c5.787 0 5.417-2.518 5.417-2.518v-2.607h-5.503v-.835h7.723s4.29.522 4.29-5.393c0-5.915-3.737-5.703-3.737-5.703zm-5.295 9.521a.965.965 0 1 1 0-1.93.965.965 0 0 1 0 1.93z" />
        </svg>
      );
    case "ScikitLearn":
      return (
        <svg className="w-4 h-4 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="3" />
          <circle cx="5" cy="8" r="2.5" />
          <circle cx="19" cy="8" r="2.5" />
          <circle cx="8" cy="19" r="2.5" />
          <circle cx="16" cy="19" r="2.5" />
        </svg>
      );
    case "FastAPI":
      return (
        <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.04 17.5v-4.5H7.72L13.04 6.5v4.5h3.24L10.96 17.5z" />
        </svg>
      );
    case "NumPyPandas":
      return (
        <svg className="w-4 h-4 text-indigo-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zm-9 9h7v7H4v-7zm9 0h7v7h-7v-7z" />
        </svg>
      );
    case "GitHub":
      return (
        <svg className="w-4 h-4 text-slate-200" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );
    case "TensorFlow":
      return (
        <svg className="w-4 h-4 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.292 5.856L11.54 0v24l-4.54-2.616v-9.424l-3.32 1.916V8.22l3.32-1.916V3.688L1.292 7.025V5.856zm21.416 0L12.46 0v24l4.54-2.616v-9.424l3.32 1.916V8.22l-3.32-1.916V3.688l5.708 3.337V5.856z" />
        </svg>
      );
    case "PyTorch":
      return (
        <svg className="w-4 h-4 text-red-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.73 1.83a.62.62 0 00-.88 0l-1.09 1.09a.62.62 0 000 .88l.65.65-4.48 4.48a7.1 7.1 0 101.76 1.76l4.48-4.48.65.65a.62.62 0 00.88 0l1.09-1.09a.62.62 0 000-.88L14.73 1.83zM12 16.71a4.71 4.71 0 110-9.42 4.71 4.71 0 010 9.42z" />
        </svg>
      );
    default:
      return (
        <span className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_6px_#2DD4BF]" />
      );
  }
};

export const TechPill: React.FC<TechPillProps> = ({
  name,
  iconName,
  isActive = false,
  onHover,
  onLeave,
  onClick,
  className = "",
}) => {
  return (
    <button
      type="button"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
      className={`group relative flex items-center gap-3 px-4 py-2.5 rounded-full border bg-[#111625]/90 backdrop-blur-md transition-all duration-300 cursor-pointer select-none whitespace-nowrap ${
        isActive
          ? "border-teal-400/80 bg-teal-950/40 text-white shadow-[0_0_20px_rgba(45,212,191,0.3)] scale-[1.03]"
          : "border-slate-800/80 hover:border-teal-400/50 hover:bg-slate-900/80 text-slate-200 hover:text-white hover:shadow-[0_0_15px_rgba(45,212,191,0.2)] hover:scale-[1.02]"
      } ${className}`}
    >
      {/* Tech Icon Container */}
      <div className="flex items-center justify-center w-5 h-5 transition-transform duration-300 group-hover:scale-110">
        <TechIcon iconName={iconName} />
      </div>

      {/* Tech Name */}
      <span className="font-mono text-sm font-medium tracking-tight">
        {name}
      </span>

      {/* Glowing Status Dot */}
      <span
        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
          isActive
            ? "bg-teal-400 shadow-[0_0_8px_#2DD4BF]"
            : "bg-teal-400/70 group-hover:bg-teal-400 group-hover:shadow-[0_0_8px_#2DD4BF]"
        }`}
      />
    </button>
  );
};

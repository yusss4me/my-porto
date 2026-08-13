'use client';

import React, { useState } from 'react';
import { Copy, Download, Check } from 'lucide-react';

export const QuickActionButton: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const emailAddress = 'ardiyustiar@example.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="p-5 sm:p-6 bg-[#0b0e14]/90 backdrop-blur border border-slate-800 rounded-xl shadow-lg space-y-3 font-mono">
      <div className="text-xs text-slate-400 tracking-wider mb-4">
        [ QUICK_TRANSMIT ]
      </div>

      <button
        onClick={handleCopyEmail}
        type="button"
        className={`w-full px-4 py-3 bg-[#111622] hover:bg-[#161c2b] active:scale-[0.99] border rounded-lg text-xs flex items-center justify-between transition-all group ${
          copiedEmail
            ? 'border-emerald-500/60 bg-emerald-500/10 text-emerald-400 font-bold'
            : 'border-slate-800 hover:border-sky-500/40 text-slate-200'
        }`}
      >
        <div className="flex items-center gap-2.5">
          {copiedEmail ? (
            <Check className="w-4 h-4 text-emerald-400" />
          ) : (
            <Copy className="w-4 h-4 text-slate-400 group-hover:text-sky-400 transition-colors" />
          )}
          <span>{copiedEmail ? '[ COPIED_TO_CLIPBOARD! ]' : '> COPY_DIRECT_EMAIL'}</span>
        </div>
        {copiedEmail && <Check className="w-3.5 h-3.5 text-emerald-400" />}
      </button>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download
        className="w-full px-4 py-3 bg-[#111622] hover:bg-[#161c2b] active:scale-[0.99] border border-slate-800 hover:border-sky-500/40 rounded-lg text-xs text-slate-200 flex items-center justify-between transition-all group"
      >
        <div className="flex items-center gap-2.5">
          <Download className="w-4 h-4 text-slate-400 group-hover:text-sky-400 transition-colors" />
          <span>&gt; DOWNLOAD_RESUME_PDF</span>
        </div>
      </a>
    </div>
  );
};

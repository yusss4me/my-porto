'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Share2, X, ExternalLink, Check, Copy } from 'lucide-react';
import { contactData } from '@/data/contactData';

interface DirectChannelsPopoverProps {
  copiedEmail: boolean;
  onCopyEmail: () => void;
  onClose: () => void;
}

export const DirectChannelsPopover: React.FC<DirectChannelsPopoverProps> = ({
  copiedEmail,
  onCopyEmail,
  onClose,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, x: 12 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.92, x: 12 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="absolute top-1/2 -translate-y-1/2 right-12 lg:left-12 lg:right-auto z-50 w-72 sm:w-80 bg-[#0c1324]/95 backdrop-blur-xl border border-sky-500/30 rounded-2xl p-4 shadow-[0_12px_40px_rgba(0,0,0,0.7)] text-left font-mono"
    >
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Share2 className="w-4 h-4 text-sky-400" />
          <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
            {contactData.popovers.directChannelsTitle}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[9px] bg-white/10 text-slate-400 px-1.5 py-0.5 rounded border border-white/10">
            ESC
          </span>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="mt-3 space-y-2">
        <a
          href="https://github.com/yusss4me"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-xs text-slate-200 transition-all group"
        >
          <span className="font-bold group-hover:text-sky-400">GITHUB // @yusss4me</span>
          <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-400" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-xs text-slate-200 transition-all group"
        >
          <span className="font-bold group-hover:text-sky-400">LINKEDIN // Ardi Yustiar</span>
          <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-400" />
        </a>
      </div>

      <div className="mt-3 pt-2.5 border-t border-white/10">
        <button
          type="button"
          onClick={onCopyEmail}
          className="w-full py-2 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 border border-sky-500/40 text-sky-300 font-bold text-xs flex items-center justify-center gap-2 transition-all"
        >
          {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copiedEmail ? contactData.popovers.copiedText : contactData.popovers.copyButtonText}</span>
        </button>
      </div>
    </motion.div>
  );
};


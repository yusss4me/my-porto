'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, X, ArrowRight } from 'lucide-react';
import { contactData } from '@/data/contactData';

interface ProtocolFaqPopoverProps {
  onClose: () => void;
  onNavigateToFaq: () => void;
}

export const ProtocolFaqPopover: React.FC<ProtocolFaqPopoverProps> = ({
  onClose,
  onNavigateToFaq,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, x: 12 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.92, x: 12 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="absolute top-1/2 -translate-y-1/2 right-12 lg:left-12 lg:right-auto z-50 w-72 sm:w-80 bg-[#0c1324]/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-4 shadow-[0_12px_40px_rgba(0,0,0,0.7)] text-left font-mono"
    >
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-purple-400" />
          <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
            {contactData.popovers.faqTitle}
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

      <div className="mt-3 space-y-2 text-xs">
        <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5 space-y-1">
          <div className="font-bold text-purple-300">&gt; CONTRACTS?</div>
          <div className="text-[11px] text-slate-400">Open for freelance &amp; full-time remote roles.</div>
        </div>
        <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5 space-y-1">
          <div className="font-bold text-purple-300">&gt; LATENCY?</div>
          <div className="text-[11px] text-slate-400">&lt; 24h response on GitHub &amp; LinkedIn.</div>
        </div>
      </div>

      <div className="mt-3 pt-2.5 border-t border-white/10">
        <button
          type="button"
          onClick={onNavigateToFaq}
          className="w-full py-2 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/40 text-purple-300 font-bold text-xs flex items-center justify-center gap-2 transition-all"
        >
          <span>{contactData.popovers.viewFullFaq}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
};


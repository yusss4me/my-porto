'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Send, X } from 'lucide-react';
import { contactData } from '@/data/contactData';

interface QuickTransmitPopoverProps {
  quickEmail: string;
  setQuickEmail: (val: string) => void;
  quickMessage: string;
  setQuickMessage: (val: string) => void;
  quickSent: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onClose: () => void;
}

export const QuickTransmitPopover: React.FC<QuickTransmitPopoverProps> = ({
  quickEmail,
  setQuickEmail,
  quickMessage,
  setQuickMessage,
  quickSent,
  onSubmit,
  onClose,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, x: 12 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.92, x: 12 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="absolute top-1/2 -translate-y-1/2 right-12 lg:left-12 lg:right-auto z-50 w-72 sm:w-80 bg-[#0c1324]/95 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-4 shadow-[0_12px_40px_rgba(0,0,0,0.7)] text-left font-mono"
    >
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Send className="w-4 h-4 text-blue-400" />
          <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
            {contactData.popovers.quickTransmitTitle}
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

      {quickSent ? (
        <div className="mt-3 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400 text-xs text-center font-semibold">
          {contactData.popovers.signalDispatched}
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-3 space-y-2 text-xs">
          <input
            type="email"
            required
            value={quickEmail}
            onChange={(e) => setQuickEmail(e.target.value)}
            placeholder={contactData.popovers.quickEmailPlaceholder}
            className="w-full bg-[#121620] border border-white/15 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/60 font-mono"
          />
          <textarea
            required
            rows={3}
            value={quickMessage}
            onChange={(e) => setQuickMessage(e.target.value)}
            placeholder={contactData.popovers.quickMessagePlaceholder}
            className="w-full bg-[#121620] border border-white/15 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/60 font-mono resize-none"
          />
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-md"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{contactData.popovers.quickTransmitButton}</span>
          </button>
        </form>
      )}
    </motion.div>
  );
};


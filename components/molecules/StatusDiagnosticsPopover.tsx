'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, X, RefreshCw } from 'lucide-react';
import { contactData } from '@/data/contactData';

interface StatusDiagnosticsPopoverProps {
  pingResult: string | null;
  pinging: boolean;
  onPing: () => void;
  onClose: () => void;
}

export const StatusDiagnosticsPopover: React.FC<StatusDiagnosticsPopoverProps> = ({
  pingResult,
  pinging,
  onPing,
  onClose,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, x: 12 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.92, x: 12 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="absolute top-1/2 -translate-y-1/2 right-12 lg:left-12 lg:right-auto z-50 w-72 sm:w-80 bg-[#0c1324]/95 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-4 shadow-[0_12px_40px_rgba(0,0,0,0.7)] text-left font-mono"
    >
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
          <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
            {contactData.popovers.diagnosticsTitle}
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

      <div className="mt-3 space-y-2.5 text-xs text-slate-300">
        <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
          <span className="text-slate-400">STATUS:</span>
          <span className="font-bold text-emerald-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            ONLINE // 99.98%
          </span>
        </div>
        <div className="flex items-center justify-between px-2 py-1.5 rounded-lg bg-white/[0.03]">
          <span className="text-slate-400">PROTOCOL:</span>
          <span className="text-slate-200 font-semibold">TLS 1.3 / AES-256</span>
        </div>
        <div className="flex items-center justify-between px-2 py-1.5 rounded-lg bg-white/[0.03]">
          <span className="text-slate-400">LATENCY:</span>
          <span className="text-sky-400 font-semibold">{pingResult || '18ms (Optimal)'}</span>
        </div>
      </div>

      <div className="mt-4 pt-2.5 border-t border-white/10 flex items-center justify-between">
        <button
          type="button"
          onClick={onPing}
          disabled={pinging}
          className="w-full py-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 font-bold text-xs flex items-center justify-center gap-2 transition-all"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${pinging ? 'animate-spin' : ''}`} />
          <span>{pinging ? contactData.popovers.pingingText : contactData.popovers.pingButtonText}</span>
        </button>
      </div>
    </motion.div>
  );
};


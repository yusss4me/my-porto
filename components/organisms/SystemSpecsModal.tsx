'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Zap,
  Check,
  Copy,
  Terminal,
  Activity,
  ArrowRight,
  Database,
  Layers,
  Code2,
} from 'lucide-react';
import { ProductData, SystemSpecs } from '@/components/molecules/ProductCard';

interface SystemSpecsModalProps {
  project: ProductData | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function SystemSpecsModal({ project, isOpen, onClose }: SystemSpecsModalProps) {
  const [activeTab, setActiveTab] = useState<'REQUEST' | 'RESPONSE'>('REQUEST');
  const [copied, setCopied] = useState<boolean>(false);

  const specs: SystemSpecs | undefined = project?.systemSpecs;

  // Handle ESC key listener to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Reset tab & copy status when project changes
  useEffect(() => {
    if (project) {
      setActiveTab('REQUEST');
      setCopied(false);
    }
  }, [project]);

  if (!isOpen || !project) return null;

  // Parse architecture pipeline string into step badges
  const pipelineSteps = specs?.architecturePipeline
    ? specs.architecturePipeline.split(/\s*->\s*|\s*➔\s*/)
    : [project.category, ...project.techStack];

  // Helper to format JSON or string
  const formatPayload = (payload: Record<string, any> | string | undefined) => {
    if (!payload) return '// No schema payload defined for this endpoint';
    if (typeof payload === 'string') return payload;
    return JSON.stringify(payload, null, 2);
  };

  const currentPayloadText =
    activeTab === 'REQUEST'
      ? formatPayload(specs?.requestPayload)
      : formatPayload(specs?.responsePayload);

  // Handle copy JSON text to clipboard
  const handleCopyJson = () => {
    navigator.clipboard.writeText(currentPayloadText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Determine HTTP method badge styling
  const endpointMethod = specs?.apiEndpoint ? specs.apiEndpoint.split(' ')[0] : 'POST';
  const endpointPath = specs?.apiEndpoint
    ? specs.apiEndpoint.slice(endpointMethod.length).trim()
    : '/api/v1/system/specs';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
        {/* Dark Terminal Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#06080d]/85 backdrop-blur-md"
        />

        {/* Modal Window Drawer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#0b0e14] border border-amber-500/20 rounded-2xl shadow-[0_0_50px_rgba(245,158,11,0.1)] overflow-hidden z-10 flex flex-col max-h-[90vh]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#10141d]/90 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-geist text-lg font-bold text-white tracking-tight">
                    {project.componentName}
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 font-mono text-[9px] text-amber-400 font-bold uppercase tracking-wider">
                    SYSTEM_SPECS_ACTIVE
                  </span>
                </div>
                <p className="font-mono text-[10px] text-slate-400">
                  ENGINEERING CONTRACT & ARCHITECTURE DATA
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-colors border border-white/10"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* 1. Architecture Pipeline Flow Diagram */}
            <div className="p-4 rounded-xl bg-[#121722]/80 border border-white/10 space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-slate-200">
                  <Layers className="w-4 h-4 text-amber-400" />
                  <span>ARCHITECTURE_PIPELINE_FLOW</span>
                </div>
                <span className="font-mono text-[10px] text-slate-500">END_TO_END_SPEC</span>
              </div>

              {/* Visual Pipeline Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {pipelineSteps.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#080b11] border border-amber-500/30 text-amber-300 font-mono text-xs font-semibold shadow-sm">
                      {idx === 0 ? (
                        <Code2 className="w-3.5 h-3.5 text-blue-400" />
                      ) : idx === pipelineSteps.length - 1 ? (
                        <Database className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Activity className="w-3.5 h-3.5 text-purple-400" />
                      )}
                      <span>{step.trim()}</span>
                    </div>
                    {idx < pipelineSteps.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-slate-600 shrink-0" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* 2. API Endpoint & Schema Payload Viewer */}
            <div className="space-y-4 p-5 rounded-xl bg-[#121722]/60 border border-white/10">
              {/* API Endpoint Banner */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-lg bg-[#080b11] border border-white/10 font-mono text-xs">
                <div className="flex items-center gap-2.5 overflow-x-auto">
                  <span
                    className={`px-2.5 py-1 rounded font-bold uppercase text-[10px] ${
                      endpointMethod === 'GET'
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        : endpointMethod === 'WS'
                        ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                        : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    }`}
                  >
                    {endpointMethod}
                  </span>
                  <span className="text-slate-200 font-bold tracking-wide">{endpointPath}</span>
                </div>
                <span className="text-[10px] text-slate-500">PROTOCOL: REST/JSON</span>
              </div>

              {/* Schema Tabs & Copy Button */}
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div className="flex items-center gap-2 font-mono text-xs">
                  <button
                    type="button"
                    onClick={() => setActiveTab('REQUEST')}
                    className={`px-3 py-1.5 rounded-lg border transition-all ${
                      activeTab === 'REQUEST'
                        ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-bold'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    [ REQUEST_SCHEMA ]
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('RESPONSE')}
                    className={`px-3 py-1.5 rounded-lg border transition-all ${
                      activeTab === 'RESPONSE'
                        ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-bold'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    [ RESPONSE_SCHEMA ]
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleCopyJson}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 text-xs font-mono border border-white/10 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>COPY JSON</span>
                    </>
                  )}
                </button>
              </div>

              {/* JSON Code Display Terminal Box */}
              <div className="relative bg-[#040609] border border-white/10 rounded-xl p-4 font-mono text-xs text-amber-300/90 leading-relaxed overflow-x-auto max-h-[220px]">
                <pre>{currentPayloadText}</pre>
              </div>
            </div>

            {/* 3. Key Engineering Metrics Grid */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-slate-300 uppercase tracking-wider">
                <Terminal className="w-4 h-4 text-amber-400" />
                <span>KEY_ENGINEERING_METRICS</span>
              </div>

              {specs?.metrics && specs.metrics.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {specs.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#121722]/80 border border-white/10 flex flex-col justify-between"
                    >
                      <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                        {metric.label}
                      </span>
                      <span className="font-geist text-xl font-extrabold text-amber-400 mt-1">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-[#121722]/40 border border-white/10 font-mono text-xs text-slate-500 text-center">
                  Standard benchmark metrics evaluated under default production payload loads.
                </div>
              )}
            </div>
          </div>

          {/* Footer Bar */}
          <div className="px-6 py-3 border-t border-white/10 bg-[#080b11] flex justify-between items-center font-mono text-[11px] text-slate-500">
            <span>CONTRACT: SPEC_READY_V1</span>
            <span>SPEC_ID: {project.id.toUpperCase()}</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

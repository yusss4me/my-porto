'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Play,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
  RefreshCw,
  Sliders,
  FileCode,
  Activity,
  Zap,
  ExternalLink,
  Server,
  Code2,
} from 'lucide-react';
import { ProductData, UiSandboxConfig, AiModelConfig } from '@/components/molecules/ProductCard';

interface ProjectDemoViewProps {
  project: ProductData;
}

export default function ProjectDemoView({ project }: ProjectDemoViewProps) {
  const [activeTab, setActiveTab] = useState<'DEMO' | 'DOCS'>('DEMO');

  // UI Sandbox State
  const uiConfig: UiSandboxConfig | undefined = project.demoConfig?.uiSandbox;
  const [uiProps, setUiProps] = useState<{
    variant: string;
    theme: string;
    showGrid: boolean;
    glassOpacity: number;
    accentColor: string;
  }>({
    variant: uiConfig?.defaultProps?.variant || 'glass-cyber',
    theme: uiConfig?.defaultProps?.theme || 'dark-emerald',
    showGrid: uiConfig?.defaultProps?.showGrid ?? true,
    glassOpacity: uiConfig?.defaultProps?.glassOpacity ?? 80,
    accentColor: uiConfig?.defaultProps?.accentColor || 'emerald',
  });

  // AI Model State
  const aiConfig: AiModelConfig | undefined = project.demoConfig?.aiModel;
  const [promptText, setPromptText] = useState<string>(
    aiConfig?.defaultPrompt || 'Analyze vector embeddings for pattern anomaly detection.'
  );
  const [confidenceThreshold, setConfidenceThreshold] = useState<number>(
    aiConfig?.parameters?.confidenceThreshold || 0.85
  );
  const [temperature, setTemperature] = useState<number>(
    aiConfig?.parameters?.temperature || 0.5
  );
  const [executionMode, setExecutionMode] = useState<string>(
    aiConfig?.parameters?.executionMode || 'FAST_INFERENCE'
  );
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [inferenceLogs, setInferenceLogs] = useState<string[]>([]);
  const [outputResult, setOutputResult] = useState<Record<string, any> | null>(
    aiConfig?.sampleOutput || null
  );

  const isUiSandbox = project.demoType === 'UI_SANDBOX';
  const isAiModel = project.demoType === 'AI_MODEL';

  // Run simulated AI inference
  const handleRunInference = () => {
    setIsProcessing(true);
    setInferenceLogs(['[SYS_INIT] Loading model tensors into memory...', '[PROCESS] Initializing WebGPU pipeline...']);

    setTimeout(() => {
      setInferenceLogs((prev) => [
        ...prev,
        `[INFERENCE] Mode: ${executionMode} | Confidence Cutoff: ${confidenceThreshold}`,
        `[ATTENTION] Token embedding matrix evaluated with T=${temperature}`,
      ]);
    }, 400);

    setTimeout(() => {
      const calculatedLatency = (Math.random() * 12 + 8).toFixed(2);
      const calculatedScore = (
        confidenceThreshold + (1 - confidenceThreshold) * Math.random()
      ).toFixed(4);

      const dynamicOutput = {
        timestamp: new Date().toISOString(),
        status: '200_OK',
        execution_mode: executionMode,
        latency_ms: Number(calculatedLatency),
        confidence_score: Number(calculatedScore),
        metrics: {
          accuracy: `${(Number(calculatedScore) * 100).toFixed(1)}%`,
          entropy: (temperature * 0.45).toFixed(3),
          active_nodes: Math.floor(Math.random() * 128 + 256),
        },
        input_prompt: promptText,
        predicted_class: Number(calculatedScore) > 0.88 ? 'HIGH_CONFIDENCE_SIGNAL' : 'NORMAL_TELEMETRY',
      };

      setOutputResult(dynamicOutput);
      setInferenceLogs((prev) => [...prev, `[SUCCESS] Output payload generated in ${calculatedLatency}ms`]);
      setIsProcessing(false);
    }, 1100);
  };

  return (
    <div className="space-y-8 py-4">
      {/* Top Header & Breadcrumb Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div className="space-y-2">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-xs text-slate-400 hover:text-blue-400 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects Catalog</span>
          </Link>
          <div className="flex items-center gap-3">
            <h1 className="font-geist text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              {project.componentName}
            </h1>
            <span className="px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 font-mono text-xs text-blue-400 uppercase font-semibold">
              {project.category}
            </span>
          </div>
          <p className="font-inter text-sm text-slate-400 max-w-2xl">
            {project.description}
          </p>
        </div>

        {/* Live Action Buttons */}
        <div className="flex items-center gap-3 shrink-0">
          {project.livePreviewUrl && project.livePreviewUrl !== '#' && (
            <a
              href={project.livePreviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold transition-all shadow-md"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Website</span>
            </a>
          )}
          {project.sourceCodeUrl && project.sourceCodeUrl !== '#' && (
            <a
              href={project.sourceCodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 font-mono text-xs font-semibold transition-all"
            >
              <svg className="w-4 h-4 fill-current text-slate-300" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>Repository</span>
            </a>
          )}
        </div>
      </div>

      {/* Main Terminal Window Frame */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full bg-[#0c1017] border border-white/15 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col"
      >
        {/* Cyber Header Controls Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 border-b border-white/10 bg-[#121722]/90 backdrop-blur-sm gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-sm" />
            </div>
            <div className="h-4 w-[1px] bg-white/10 mx-1" />
            <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
              {isAiModel ? (
                <Cpu className="w-4 h-4 text-emerald-400" />
              ) : (
                <Layers className="w-4 h-4 text-blue-400" />
              )}
              <span className="font-bold text-white">{project.id}</span>
              <span className="text-slate-500">|</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                ENVIRONMENT_LIVE
              </span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center p-1 rounded-xl bg-[#080b11] border border-white/10 font-mono text-xs self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setActiveTab('DEMO')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg transition-all cursor-pointer ${
                activeTab === 'DEMO'
                  ? 'bg-blue-600/30 border border-blue-400/40 text-white font-semibold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>[ INTERACTIVE_DEMO ]</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('DOCS')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg transition-all cursor-pointer ${
                activeTab === 'DOCS'
                  ? 'bg-emerald-600/30 border border-emerald-400/40 text-white font-semibold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileCode className="w-3.5 h-3.5 text-emerald-400" />
              <span>[ ARCHITECTURE_DOCS ]</span>
            </button>
          </div>
        </div>

        {/* Viewport Content */}
        <div className="p-6 space-y-6">
          {activeTab === 'DEMO' ? (
            isUiSandbox ? (
              /* ================= UI SANDBOX DEMO VIEW ================= */
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Controls Column (Left) */}
                <div className="lg:col-span-5 space-y-5 p-6 rounded-xl bg-[#121620]/60 border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <Sliders className="w-4 h-4 text-blue-400" />
                      <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                        PROP_CONTROLS
                      </h4>
                    </div>
                    <span className="font-mono text-[10px] text-slate-500">LIVE_STATE</span>
                  </div>

                  {/* Variant Selector */}
                  {uiConfig?.propOptions?.variant && (
                    <div className="space-y-2">
                      <label className="font-mono text-[11px] text-slate-300 block">Variant Preset</label>
                      <div className="grid grid-cols-3 gap-2">
                        {uiConfig.propOptions.variant.map((v) => (
                          <button
                            key={v}
                            type="button"
                            onClick={() => setUiProps((prev) => ({ ...prev, variant: v }))}
                            className={`px-3 py-2 rounded-lg font-mono text-[10px] border transition-all cursor-pointer ${
                              uiProps.variant === v
                                ? 'bg-blue-500/20 border-blue-400 text-blue-300 font-bold'
                                : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/20'
                            }`}
                          >
                            {v}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Theme Selector */}
                  {uiConfig?.propOptions?.theme && (
                    <div className="space-y-2">
                      <label className="font-mono text-[11px] text-slate-300 block">Theme Scheme</label>
                      <select
                        value={uiProps.theme}
                        onChange={(e) => setUiProps((prev) => ({ ...prev, theme: e.target.value }))}
                        className="w-full px-3 py-2 rounded-lg bg-[#080b11] border border-white/15 text-slate-200 font-mono text-xs focus:outline-none focus:border-blue-400"
                      >
                        {uiConfig.propOptions.theme.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Glass Opacity Slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center font-mono text-[11px] text-slate-300">
                      <span>Glass Transparency</span>
                      <span className="text-blue-400 font-bold">{uiProps.glassOpacity}%</span>
                    </div>
                    <input
                      type="range"
                      min="30"
                      max="100"
                      value={uiProps.glassOpacity}
                      onChange={(e) => setUiProps((prev) => ({ ...prev, glassOpacity: Number(e.target.value) }))}
                      className="w-full accent-blue-500 bg-white/10 rounded-lg cursor-pointer"
                    />
                  </div>

                  {/* Show Grid Checkbox */}
                  <div className="flex items-center justify-between pt-2 border-t border-white/10">
                    <span className="font-mono text-[11px] text-slate-300">Background Cyber Grid</span>
                    <button
                      type="button"
                      onClick={() => setUiProps((prev) => ({ ...prev, showGrid: !prev.showGrid }))}
                      className={`px-3 py-1 rounded-lg font-mono text-xs border transition-all cursor-pointer ${
                        uiProps.showGrid
                          ? 'bg-blue-600/30 border-blue-400 text-blue-300 font-bold'
                          : 'bg-white/5 border-white/10 text-slate-500'
                      }`}
                    >
                      {uiProps.showGrid ? 'ENABLED' : 'DISABLED'}
                    </button>
                  </div>
                </div>

                {/* Component Live Sandbox Viewport (Right) */}
                <div className="lg:col-span-7 flex flex-col rounded-xl bg-[#080b11] border border-white/15 p-6 relative overflow-hidden min-h-[420px]">
                  {/* Optional Grid overlay */}
                  {uiProps.showGrid && (
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                  )}

                  <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-8 text-center space-y-6">
                    {/* Dynamic Rendered Component Preview Box */}
                    <div
                      style={{ opacity: uiProps.glassOpacity / 100 }}
                      className={`w-full max-w-md p-8 rounded-2xl border backdrop-blur-xl transition-all duration-500 shadow-2xl ${
                        uiProps.theme === 'dark-emerald'
                          ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-100 shadow-[0_0_30px_rgba(16,185,129,0.15)]'
                          : uiProps.theme === 'neon-blue'
                          ? 'bg-blue-950/40 border-blue-500/30 text-blue-100 shadow-[0_0_30px_rgba(59,130,246,0.15)]'
                          : 'bg-purple-950/40 border-purple-500/30 text-purple-100 shadow-[0_0_30px_rgba(168,85,247,0.15)]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-white/10 border border-white/20 uppercase font-semibold">
                          PRESET: {uiProps.variant}
                        </span>
                        <Activity className="w-4 h-4 animate-pulse text-emerald-400" />
                      </div>

                      <h3 className="font-geist text-xl font-bold mb-2">
                        {project.componentName}
                      </h3>
                      <p className="font-inter text-xs text-slate-300 leading-relaxed mb-6">
                        Real-time reactive component instance rendering live state props dynamically.
                      </p>

                      <div className="flex items-center justify-center gap-3">
                        <button
                          type="button"
                          className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 font-mono text-xs font-semibold transition-all border border-white/15"
                        >
                          Execute Component
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* ================= AI MODEL DEMO VIEW ================= */
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* AI Input Configuration Panel (Left) */}
                <div className="lg:col-span-5 space-y-4 p-5 rounded-xl bg-[#121620]/60 border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-emerald-400" />
                      <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                        MODEL_INPUT_CONTROLS
                      </h4>
                    </div>
                    <span className="font-mono text-[10px] text-slate-500">PARAM_SET</span>
                  </div>

                  {/* Prompt Text Input */}
                  <div className="space-y-1.5">
                    <label className="font-mono text-[11px] text-slate-300 block">Prompt Payload</label>
                    <textarea
                      rows={3}
                      value={promptText}
                      onChange={(e) => setPromptText(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-[#080b11] border border-white/15 text-slate-200 font-mono text-xs focus:outline-none focus:border-emerald-400 resize-none"
                    />
                  </div>

                  {/* Confidence Cutoff Slider */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center font-mono text-[11px] text-slate-300">
                      <span>Confidence Threshold</span>
                      <span className="text-emerald-400 font-bold">
                        {(confidenceThreshold * 100).toFixed(0)}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0.5"
                      max="0.99"
                      step="0.01"
                      value={confidenceThreshold}
                      onChange={(e) => setConfidenceThreshold(Number(e.target.value))}
                      className="w-full accent-emerald-500 bg-white/10 rounded-lg cursor-pointer"
                    />
                  </div>

                  {/* Temperature Slider */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center font-mono text-[11px] text-slate-300">
                      <span>Sampling Temperature</span>
                      <span className="text-emerald-400 font-bold">{temperature}</span>
                    </div>
                    <input
                      type="range"
                      min="0.1"
                      max="1.0"
                      step="0.05"
                      value={temperature}
                      onChange={(e) => setTemperature(Number(e.target.value))}
                      className="w-full accent-emerald-500 bg-white/10 rounded-lg cursor-pointer"
                    />
                  </div>

                  {/* Execution Mode */}
                  <div className="space-y-1.5">
                    <label className="font-mono text-[11px] text-slate-300 block">Execution Backend</label>
                    <select
                      value={executionMode}
                      onChange={(e) => setExecutionMode(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-[#080b11] border border-white/15 text-slate-200 font-mono text-xs focus:outline-none focus:border-emerald-400"
                    >
                      <option value="FAST_INFERENCE">FAST_INFERENCE (WebGPU Edge)</option>
                      <option value="NEURAL_WASM">NEURAL_WASM (Tensor Core)</option>
                      <option value="SIMULATED_QUANT">SIMULATED_QUANT (INT8 Model)</option>
                    </select>
                  </div>

                  {/* Run Inference Action Button */}
                  <button
                    type="button"
                    disabled={isProcessing}
                    onClick={handleRunInference}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] disabled:opacity-50 cursor-pointer"
                  >
                    {isProcessing ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin text-white" />
                        <span>PROCESSING SIGNAL...</span>
                      </>
                    ) : (
                      <>
                        <Zap className="w-4 h-4 text-yellow-300" />
                        <span>RUN INFERENCE / PROCESS SIGNAL</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Output Terminal Console (Right) */}
                <div className="lg:col-span-7 flex flex-col rounded-xl bg-[#080b11] border border-white/15 p-5 font-mono text-xs min-h-[400px]">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                    <div className="flex items-center gap-2 text-emerald-400">
                      <Terminal className="w-4 h-4" />
                      <span className="font-bold uppercase tracking-wider">TERMINAL_OUTPUT_STREAM</span>
                    </div>
                    {outputResult && (
                      <span className="flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3 h-3" />
                        STATUS 200 OK
                      </span>
                    )}
                  </div>

                  {/* Simulated Processing Logs */}
                  {inferenceLogs.length > 0 && (
                    <div className="space-y-1 mb-4 text-[11px] text-slate-400 border-b border-white/5 pb-3">
                      {inferenceLogs.map((log, idx) => (
                        <div key={idx} className="flex gap-2">
                          <span className="text-emerald-500">&gt;</span>
                          <span>{log}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Formatted JSON Output Display */}
                  <div className="flex-1 bg-[#040609] border border-white/10 rounded-lg p-4 overflow-x-auto text-emerald-300 text-[11px] leading-relaxed shadow-inner">
                    {isProcessing ? (
                      <div className="h-full flex flex-col items-center justify-center space-y-3 py-12 text-slate-400">
                        <RefreshCw className="w-8 h-8 text-emerald-400 animate-spin" />
                        <span className="animate-pulse">Computing tensor math & attention heads...</span>
                      </div>
                    ) : outputResult ? (
                      <pre>{JSON.stringify(outputResult, null, 2)}</pre>
                    ) : (
                      <div className="text-slate-500 text-center py-12">
                        Click [RUN INFERENCE] to process signal and stream outputs...
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          ) : (
            /* ================= ARCHITECTURE DOCS & SPECS TAB ================= */
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-[#080b11] border border-white/10 space-y-4">
                <div className="flex items-center gap-2 text-emerald-400 border-b border-white/10 pb-3">
                  <FileCode className="w-5 h-5" />
                  <h3 className="font-geist text-lg font-bold text-white uppercase tracking-wide">
                    System Architecture & Engineering Specification
                  </h3>
                </div>

                <p className="font-inter text-slate-300 text-sm leading-relaxed">
                  {aiConfig?.architectureDocs ||
                    project.systemSpecs?.architecturePipeline ||
                    'Detailed system architecture documentation detailing data flow pipelines, UI state reactivity, component encapsulation, and optimized execution workers.'}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                  <div className="p-4 rounded-xl bg-[#121620] border border-white/10 space-y-1">
                    <h5 className="font-mono text-xs font-bold text-blue-400 uppercase">Tech Stack Engine</h5>
                    <p className="font-inter text-xs text-slate-300">
                      {project.techStack?.join(', ') || 'Next.js, TypeScript, Tailwind'}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#121620] border border-white/10 space-y-1">
                    <h5 className="font-mono text-xs font-bold text-emerald-400 uppercase">Execution Model</h5>
                    <p className="font-inter text-xs text-slate-300">
                      {project.demoType || 'CLIENT_SIDE_RENDER'}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#121620] border border-white/10 space-y-1">
                    <h5 className="font-mono text-xs font-bold text-purple-400 uppercase">Year Created</h5>
                    <p className="font-inter text-xs text-slate-300">{project.year || '2024'}</p>
                  </div>
                </div>
              </div>

              {/* System Engineering Metrics if available */}
              {project.systemSpecs && (
                <div className="p-6 rounded-xl bg-[#080b11] border border-white/10 space-y-4 font-mono text-xs">
                  <div className="flex items-center gap-2 text-blue-400 border-b border-white/10 pb-3">
                    <Server className="w-5 h-5" />
                    <h3 className="font-geist text-base font-bold text-white uppercase tracking-wide">
                      API Specifications & Data Payload
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <span className="text-slate-400 text-[11px]">API ENDPOINT</span>
                      <div className="p-3 bg-[#040609] border border-white/10 rounded-lg text-emerald-400">
                        {project.systemSpecs.apiEndpoint}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <span className="text-slate-400 text-[11px]">ARCHITECTURE PIPELINE</span>
                      <div className="p-3 bg-[#040609] border border-white/10 rounded-lg text-slate-300">
                        {project.systemSpecs.architecturePipeline}
                      </div>
                    </div>
                  </div>

                  {project.systemSpecs.metrics && project.systemSpecs.metrics.length > 0 && (
                    <div className="pt-2">
                      <span className="text-slate-400 text-[11px] block mb-2">SYSTEM BENCHMARKS</span>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {project.systemSpecs.metrics.map((m, idx) => (
                          <div key={idx} className="p-3 bg-[#121620] border border-white/10 rounded-lg">
                            <div className="text-[10px] text-slate-400">{m.label}</div>
                            <div className="text-sm font-bold text-white">{m.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Bar */}
        <div className="px-6 py-3 border-t border-white/10 bg-[#080b11] flex flex-col sm:flex-row justify-between items-center font-mono text-[11px] text-slate-500 gap-2">
          <span>PROJECT_ID: {project.id.toUpperCase()}</span>
          <div className="flex gap-4">
            <span>STATUS: ONLINE</span>
            <span>MODE: FULL_SCREEN_PAGE</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

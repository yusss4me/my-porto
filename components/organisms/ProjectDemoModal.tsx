'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
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
} from 'lucide-react';
import { ProductData, UiSandboxConfig, AiModelConfig } from '@/components/molecules/ProductCard';

interface ProjectDemoModalProps {
  project: ProductData | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDemoModal({ project, isOpen, onClose }: ProjectDemoModalProps) {
  const [activeTab, setActiveTab] = useState<'DEMO' | 'DOCS'>('DEMO');

  // UI Sandbox State
  const uiConfig: UiSandboxConfig | undefined = project?.demoConfig?.uiSandbox;
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
  const aiConfig: AiModelConfig | undefined = project?.demoConfig?.aiModel;
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

  // Sync state when project changes
  useEffect(() => {
    if (project) {
      setActiveTab('DEMO');
      if (project.demoConfig?.uiSandbox) {
        const cfg = project.demoConfig.uiSandbox;
        setUiProps({
          variant: cfg.defaultProps?.variant || 'glass-cyber',
          theme: cfg.defaultProps?.theme || 'dark-emerald',
          showGrid: cfg.defaultProps?.showGrid ?? true,
          glassOpacity: cfg.defaultProps?.glassOpacity ?? 80,
          accentColor: cfg.defaultProps?.accentColor || 'emerald',
        });
      }
      if (project.demoConfig?.aiModel) {
        const cfg = project.demoConfig.aiModel;
        setPromptText(cfg.defaultPrompt || '');
        setConfidenceThreshold(cfg.parameters?.confidenceThreshold || 0.85);
        setTemperature(cfg.parameters?.temperature || 0.5);
        setExecutionMode(cfg.parameters?.executionMode || 'FAST_INFERENCE');
        setOutputResult(cfg.sampleOutput || null);
        setInferenceLogs([]);
      }
    }
  }, [project]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

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
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#080b11]/80 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl bg-[#0c1017] border border-white/15 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden z-10 flex flex-col max-h-[90vh]"
        >
          {/* Cyber Terminal Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#121722]/90 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block shadow-sm" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block shadow-sm" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-sm" />
              </div>
              <div className="h-4 w-[1px] bg-white/10 mx-1" />
              <div className="flex items-center gap-2">
                {isAiModel ? (
                  <Cpu className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Layers className="w-4 h-4 text-blue-400" />
                )}
                <span className="font-geist text-base font-bold text-white tracking-tight">
                  {project.componentName}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 font-mono text-[10px] text-slate-400 uppercase">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Navigation Tabs & Close */}
            <div className="flex items-center gap-4">
              <div className="flex items-center p-1 rounded-xl bg-[#080b11] border border-white/10 font-mono text-xs">
                <button
                  type="button"
                  onClick={() => setActiveTab('DEMO')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
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
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                    activeTab === 'DOCS'
                      ? 'bg-emerald-600/30 border border-emerald-400/40 text-white font-semibold shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <FileCode className="w-3.5 h-3.5 text-emerald-400" />
                  <span>[ ARCHITECTURE_DOCS ]</span>
                </button>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-colors border border-white/10"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Modal Body Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {activeTab === 'DEMO' ? (
              isUiSandbox ? (
                /* ================= UI SANDBOX DEMO VIEW ================= */
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Controls Column (Left) */}
                  <div className="lg:col-span-5 space-y-4 p-5 rounded-xl bg-[#121620]/60 border border-white/10 backdrop-blur-sm">
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
                      <div className="space-y-1.5">
                        <label className="font-mono text-[11px] text-slate-300 block">Variant Preset</label>
                        <div className="grid grid-cols-3 gap-2">
                          {uiConfig.propOptions.variant.map((v) => (
                            <button
                              key={v}
                              type="button"
                              onClick={() => setUiProps((prev) => ({ ...prev, variant: v }))}
                              className={`px-2.5 py-1.5 rounded-lg font-mono text-[10px] border transition-all ${
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
                      <div className="space-y-1.5">
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
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center font-mono text-[11px] text-slate-300">
                        <span>Glass Transparency</span>
                        <span className="text-blue-400 font-bold">{uiProps.glassOpacity}%</span>
                      </div>
                      <input
                        type="range"
                        min="30"
                        max="100"
                        value={uiProps.glassOpacity}
                        onChange={(e) =>
                          setUiProps((prev) => ({ ...prev, glassOpacity: Number(e.target.value) }))
                        }
                        className="w-full accent-blue-500 bg-white/10 rounded-lg cursor-pointer"
                      />
                    </div>

                    {/* Show Grid Toggle */}
                    <div className="flex items-center justify-between pt-2 border-t border-white/5">
                      <span className="font-mono text-xs text-slate-300">Background Mesh Grid</span>
                      <button
                        type="button"
                        onClick={() => setUiProps((prev) => ({ ...prev, showGrid: !prev.showGrid }))}
                        className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
                          uiProps.showGrid ? 'bg-blue-600' : 'bg-slate-700'
                        }`}
                      >
                        <div
                          className={`w-3.5 h-3.5 bg-white rounded-full transition-transform ${
                            uiProps.showGrid ? 'translate-x-5' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Interactive Stage Preview (Right) */}
                  <div className="lg:col-span-7 flex flex-col rounded-xl bg-[#080b11] border border-white/10 p-6 relative overflow-hidden min-h-[360px] justify-center items-center">
                    {/* Dynamic Mesh Grid */}
                    {uiProps.showGrid && (
                      <div className="absolute inset-0 bg-[radial-[#3b82f6]/15_1px,transparent_1px] [background-size:20px_20px] pointer-events-none" />
                    )}

                    {/* Render Sandbox Component Frame */}
                    <div
                      style={{ opacity: uiProps.glassOpacity / 100 }}
                      className={`relative z-10 w-full max-w-md p-6 rounded-2xl border transition-all duration-300 shadow-2xl backdrop-blur-md ${
                        uiProps.theme === 'dark-emerald'
                          ? 'bg-[#0e1715]/90 border-emerald-500/30 text-emerald-100 shadow-[0_0_30px_rgba(16,185,129,0.15)]'
                          : uiProps.theme === 'neon-blue'
                          ? 'bg-[#0f172a]/90 border-blue-500/30 text-blue-100 shadow-[0_0_30px_rgba(59,130,246,0.15)]'
                          : 'bg-[#181024]/90 border-purple-500/30 text-purple-100 shadow-[0_0_30px_rgba(168,85,247,0.15)]'
                      }`}
                    >
                      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                        <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider">
                          <Activity className="w-4 h-4 animate-pulse" />
                          <span>SANDBOX_PREVIEW</span>
                        </div>
                        <span className="px-2 py-0.5 rounded font-mono text-[9px] bg-white/10 uppercase">
                          {uiProps.variant}
                        </span>
                      </div>

                      <div className="space-y-3">
                        <div className="h-4 bg-white/15 rounded-md w-3/4 animate-pulse" />
                        <div className="h-3 bg-white/10 rounded-md w-full" />
                        <div className="h-3 bg-white/10 rounded-md w-5/6" />

                        <div className="pt-4 flex gap-3">
                          <button
                            type="button"
                            className="px-4 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-xs font-mono font-medium transition-all border border-white/20"
                          >
                            INTERACT
                          </button>
                          <button
                            type="button"
                            className="px-4 py-2 rounded-xl bg-blue-600/40 hover:bg-blue-600/60 text-xs font-mono font-medium transition-all border border-blue-400/40"
                          >
                            RUN ACTION
                          </button>
                        </div>
                      </div>
                    </div>

                    <span className="absolute bottom-3 right-4 font-mono text-[10px] text-slate-500">
                      LIVE_PROP_FEEDBACK_ENGINE
                    </span>
                  </div>
                </div>
              ) : (
                /* ================= AI MODEL PLAYGROUND DEMO VIEW ================= */
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Controls & Input Panel (Left) */}
                  <div className="lg:col-span-5 space-y-4 p-5 rounded-xl bg-[#121620]/60 border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div className="flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-emerald-400" />
                        <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                          INFERENCE_INPUTS
                        </h4>
                      </div>
                      <span className="font-mono text-[10px] text-emerald-400">MODEL_ACTIVE</span>
                    </div>

                    {/* Sample Selector */}
                    {aiConfig?.sampleInputs && aiConfig.sampleInputs.length > 0 && (
                      <div className="space-y-1.5">
                        <label className="font-mono text-[11px] text-slate-300 block">Sample Dataset</label>
                        <select
                          onChange={(e) => setPromptText(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg bg-[#080b11] border border-white/15 text-slate-200 font-mono text-xs focus:outline-none focus:border-emerald-400"
                        >
                          <option value="">-- Choose Sample Payload --</option>
                          {aiConfig.sampleInputs.map((sample, idx) => (
                            <option key={idx} value={sample}>
                              Sample {idx + 1}: {sample.slice(0, 35)}...
                            </option>
                          ))}
                        </select>
                      </div>
                    )}

                    {/* Input Prompt Textarea */}
                    <div className="space-y-1.5">
                      <label className="font-mono text-[11px] text-slate-300 block">Text Signal / Prompt Input</label>
                      <textarea
                        rows={3}
                        value={promptText}
                        onChange={(e) => setPromptText(e.target.value)}
                        placeholder="Enter inference prompt..."
                        className="w-full p-3 rounded-lg bg-[#080b11] border border-white/15 text-slate-200 font-mono text-xs focus:outline-none focus:border-emerald-400 resize-none"
                      />
                    </div>

                    {/* Confidence Threshold Slider */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center font-mono text-[11px] text-slate-300">
                        <span>Confidence Cutoff Threshold</span>
                        <span className="text-emerald-400 font-bold">{confidenceThreshold}</span>
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
                  <div className="lg:col-span-7 flex flex-col rounded-xl bg-[#080b11] border border-white/15 p-5 font-mono text-xs min-h-[380px]">
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
              /* ================= ARCHITECTURE DOCS TAB ================= */
              <div className="space-y-6 p-6 rounded-xl bg-[#080b11] border border-white/10">
                <div className="flex items-center gap-2 text-emerald-400 border-b border-white/10 pb-3">
                  <FileCode className="w-5 h-5" />
                  <h3 className="font-geist text-lg font-bold text-white uppercase tracking-wide">
                    System Architecture & Engineering Specification
                  </h3>
                </div>

                <p className="font-inter text-slate-300 text-sm leading-relaxed">
                  {aiConfig?.architectureDocs ||
                    'Detailed system architecture documentation detailing data flow pipelines, UI state reactivity, component encapsulation, and optimized WebGL/WebGPU inference workers.'}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                  <div className="p-4 rounded-xl bg-[#121620] border border-white/10">
                    <h5 className="font-mono text-xs font-bold text-blue-400 mb-1">FRONTEND LAYER</h5>
                    <p className="font-inter text-xs text-slate-400">
                      Next.js App Router, Tailwind CSS, Framer Motion for high-fps UI transitions.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#121620] border border-white/10">
                    <h5 className="font-mono text-xs font-bold text-emerald-400 mb-1">EXECUTION ENGINE</h5>
                    <p className="font-inter text-xs text-slate-400">
                      WebAssembly (WASM) multi-threading with SIMD parallel tensor processing.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#121620] border border-white/10">
                    <h5 className="font-mono text-xs font-bold text-purple-400 mb-1">METRICS & LOGS</h5>
                    <p className="font-inter text-xs text-slate-400">
                      Real-time latency evaluation, entropy tracking, and SHAP feature matrix generation.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer Bar */}
          <div className="px-6 py-3 border-t border-white/10 bg-[#080b11] flex justify-between items-center font-mono text-[11px] text-slate-500">
            <span>TERMINAL_ID: {project.id.toUpperCase()}</span>
            <div className="flex gap-4">
              <span>STATUS: ONLINE</span>
              <span>THEME: CYBER_DARK</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

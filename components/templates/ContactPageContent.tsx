'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Inbox,
  ChevronDown,
  Mail,
  MapPin,
  Zap,
  Code2,
  Share2,
  Globe,
  Copy,
  Check,
  Send,
  Loader2,
  HelpCircle
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const FAQ_ITEMS = [
  {
    id: '01',
    question: '01 // What technologies do you specialize in?',
    answer:
      'I specialize in building high-performance modern web applications using Next.js, React, TypeScript, and Tailwind CSS. On the backend and data side, I work extensively with Python, Node.js, RESTful & GraphQL APIs, and integrations with modern AI/ML frameworks.'
  },
  {
    id: '02',
    question: '02 // Are you open to remote projects?',
    answer:
      'Yes, absolutely! I am available for global remote contracts, architectural consultations, and full-time or freelance engineering initiatives across different timezones.'
  }
];

export default function ContactPageContent() {
  // Form State
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: 'General Inquiry / Hello',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  // Accordion State
  const [openFaq, setOpenFaq] = useState<string | null>('01');

  // Copy Email Handler
  const emailAddress = 'ardi.yustiar@example.com';
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Form Submit Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: 'General Inquiry / Hello',
        message: ''
      });
      setTimeout(() => setFormSuccess(false), 5000);
    }, 1200);
  };

  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 pt-24 pb-20 text-white font-sans">
      
      {/* 1. Hero & Status Header Section */}
      <section className="mb-12">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121620] border border-emerald-500/30 text-emerald-400 font-mono text-xs tracking-wider mb-6 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span>AVAILABLE FOR FREELANCE & FULL-TIME</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-white">
          Let&apos;s Work{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Together.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
          Available for new engineering initiatives, architectural consultation, and high-impact collaborations.
        </p>
      </section>

      {/* 2. Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        
        {/* Left Column: Form Container */}
        <div className="lg:col-span-7 bg-[#121620] border border-white/10 rounded-2xl p-6 sm:p-8 relative flex flex-col justify-between shadow-xl">
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
              <h2 className="text-xl font-bold text-white tracking-wide">Direct Messaging</h2>
              <div className="p-2 rounded-lg bg-white/5 text-slate-400">
                <Inbox className="w-5 h-5" />
              </div>
            </div>

            {/* Success Notification */}
            <AnimatePresence>
              {formSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-center gap-3 font-mono"
                >
                  <Check className="w-5 h-5 shrink-0 text-emerald-400" />
                  <span>MESSAGE RECEIVED // Transmission sent successfully. I will get back to you shortly!</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    NAME_
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0a0d14] border border-white/10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/60 transition-all font-mono text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    EMAIL_
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0a0d14] border border-white/10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/60 transition-all font-mono text-sm"
                  />
                </div>
              </div>

              {/* Row 2: Subject Dropdown */}
              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  SUBJECT_
                </label>
                <div className="relative">
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0a0d14] border border-white/10 rounded-xl text-white appearance-none focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/60 transition-all font-mono text-sm pr-10 cursor-pointer"
                  >
                    <option value="General Inquiry / Hello">General Inquiry / Hello</option>
                    <option value="Freelance Project / Contract">Freelance Project / Contract</option>
                    <option value="Full-Time Opportunity">Full-Time Opportunity</option>
                    <option value="Architectural Consultation">Architectural Consultation</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Row 3: Message Payload Textarea */}
              <div>
                <label htmlFor="message" className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  MESSAGE_PAYLOAD_
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Share details about your initiative, timeline, or requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0a0d14] border border-white/10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/60 transition-all font-mono text-sm resize-none"
                />
              </div>

              {/* Submit CTA Button */}
              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#A5C4FF] hover:bg-[#b8d2ff] active:scale-[0.99] text-slate-950 font-mono font-bold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(165,196,255,0.2)] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>TRANSMITTING...</span>
                    </>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Column: Connection Matrix */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div>
            {/* Section Label */}
            <div className="font-mono text-xs tracking-widest text-slate-400 uppercase mb-4">
              CONNECTION MATRIX
            </div>

            {/* Info Cards Stack */}
            <div className="space-y-4 mb-6">
              {/* 1. Secure Comms Card */}
              <div className="bg-[#121620] border border-white/10 rounded-xl p-4 flex items-center justify-between group hover:border-white/20 transition-all">
                <div className="flex items-center gap-3.5 overflow-hidden">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <div className="font-mono text-[10px] uppercase text-slate-400 tracking-wider">
                      SECURE COMMS
                    </div>
                    <div className="font-mono text-sm text-white truncate font-medium">
                      {emailAddress}
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  type="button"
                  title="Copy email to clipboard"
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors shrink-0 ml-2 relative"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="absolute -top-9 right-0 bg-emerald-500 text-slate-950 font-mono text-[10px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap animate-in fade-in zoom-in duration-150">
                        Copied to Clipboard!
                      </span>
                    </>
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* 2. Location Card */}
              <div className="bg-[#121620] border border-white/10 rounded-xl p-4 flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase text-slate-400 tracking-wider">
                    BASE_LOCATION
                  </div>
                  <div className="font-mono text-sm text-white font-medium">
                    Tasikmalaya, ID / Remote
                  </div>
                </div>
              </div>

              {/* 3. Response Time Badge */}
              <div className="bg-[#A5C4FF]/10 border border-[#A5C4FF]/30 rounded-xl p-3.5 flex items-center gap-3 text-[#A5C4FF] font-mono text-xs tracking-wide">
                <Zap className="w-4 h-4 shrink-0" />
                <span>Expected response time: &lt; 24h</span>
              </div>
            </div>

            {/* Social Platforms Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Card 1: GitHub */}
              <a
                href="https://github.com/yusss4me"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#121620] border border-white/10 rounded-xl p-5 flex flex-col items-center justify-center gap-3 group hover:bg-white/[0.04] hover:border-white/20 transition-all text-center"
              >
                <div className="p-3 rounded-xl bg-white/5 text-slate-300 group-hover:text-white group-hover:scale-110 transition-all">
                  <Code2 className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs text-slate-300 group-hover:text-white">GitHub</span>
              </a>

              {/* Card 2: LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#121620] border border-white/10 rounded-xl p-5 flex flex-col items-center justify-center gap-3 group hover:bg-white/[0.04] hover:border-white/20 transition-all text-center"
              >
                <div className="p-3 rounded-xl bg-white/5 text-slate-300 group-hover:text-white group-hover:scale-110 transition-all">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 0 0 0-3.2z" />
                  </svg>
                </div>
                <span className="font-mono text-xs text-slate-300 group-hover:text-white">LinkedIn</span>
              </a>

              {/* Card 3: X / Twitter (Full Row) */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-2 bg-[#121620] border border-white/10 rounded-xl p-4 flex items-center justify-center gap-3 group hover:bg-white/[0.04] hover:border-white/20 transition-all"
              >
                <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="font-mono text-xs text-slate-300 group-hover:text-white">X / Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Protocol / FAQ Accordion Section */}
      <section className="bg-[#121620] border border-white/10 rounded-2xl p-6 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Side */}
          <div className="lg:col-span-4 space-y-2">
            <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-1">
              <HelpCircle className="w-4 h-4" />
              <span>Protocol Inquiries</span>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">FAQ</h3>
            <p className="text-slate-400 text-sm leading-relaxed font-sans">
              Common parameters and operational constraints.
            </p>
          </div>

          {/* Right Side Accordion Items */}
          <div className="lg:col-span-8 space-y-4">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openFaq === item.id;
              return (
                <div
                  key={item.id}
                  className="border border-white/10 rounded-xl bg-[#0a0d14]/60 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : item.id)}
                    type="button"
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left group hover:bg-white/[0.02] transition-colors"
                  >
                    <span className="font-mono text-sm sm:text-base text-slate-200 group-hover:text-white font-medium pr-4">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-cyan-400' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-4 sm:px-5 pb-5 text-slate-300 text-sm leading-relaxed border-t border-white/5 pt-4 font-sans">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}

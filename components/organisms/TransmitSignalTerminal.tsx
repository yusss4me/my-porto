'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Loader2, Check } from 'lucide-react';
import { CornerBrackets } from '@/components/atoms/CornerBrackets';
import { TerminalInput, TerminalTextArea } from '@/components/atoms/TerminalInput';
import { ScopeChip } from '@/components/molecules/ScopeChip';
import { FaqAccordionItem } from '@/components/molecules/FaqAccordionItem';

interface ProjectScope {
  id: string;
  label: string;
}

const PROJECT_SCOPES: ProjectScope[] = [
  { id: '01', label: '[01] WEB_APPLICATION' },
  { id: '02', label: '[02] AI / ML_SERVICES' },
  { id: '03', label: '[03] FRONTEND_ARCHITECTURE' },
  { id: '04', label: '[04] OTHER_INQUIRY' }
];

const FAQ_ITEMS = [
  {
    id: '01',
    question: '> ACCEPTING_NEW_CONTRACTS?',
    answer:
      'AFFIRMATIVE. Open for freelance contracts, full-time remote engineering roles, and architectural consultations worldwide.'
  },
  {
    id: '02',
    question: '> TYPICAL_RESPONSE_LATENCY?',
    answer:
      'All incoming signals on GitHub and LinkedIn are acknowledged within < 24 hours. X/Twitter queries experience standard latency.'
  },
  {
    id: '03',
    question: '> PRIMARY_ENGINEERING_STACK?',
    answer:
      'Next.js 14+, React, TypeScript, Tailwind CSS, Python/FastAPI, Node.js, and modern AI/ML API integration pipelines.'
  }
];

export const TransmitSignalTerminal: React.FC = () => {
  const [selectedScope, setSelectedScope] = useState<string>('01');
  const [senderName, setSenderName] = useState<string>('');
  const [returnAddress, setReturnAddress] = useState<string>('');
  const [transmissionPayload, setTransmissionPayload] = useState<string>('');

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setSenderName('');
      setReturnAddress('');
      setTransmissionPayload('');

      setTimeout(() => setFormSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <div className="space-y-6 font-mono">
      {/* Main Terminal Card */}
      <div className="relative p-6 sm:p-8 bg-[#0b0e14]/90 backdrop-blur border border-slate-800 rounded-xl shadow-2xl">
        <CornerBrackets color="border-sky-500" size="md" />

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide flex items-center gap-2">
            <span className="text-sky-400">[</span>
            <span>TRANSMIT_SIGNAL</span>
            <span className="text-sky-400">]</span>
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 tracking-wider">
            INITIALIZING SECURE CONNECTION VIA PROTOCOL v9.0.4...
          </p>
        </div>

        {/* Notification Banner */}
        <AnimatePresence>
          {formSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/40 rounded-lg text-emerald-400 text-xs flex items-center gap-3"
            >
              <Check className="w-4 h-4 shrink-0" />
              <span>TRANSMISSION_SUCCESSFUL // Signal received. Operational response will be dispatched shortly.</span>
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit} className="space-y-7">
          {/* Project Scope Chips */}
          <div>
            <label className="block text-xs text-emerald-400 font-bold tracking-wider mb-3">
              [ SELECT_PROJECT_SCOPE ]
            </label>
            <div className="flex flex-wrap gap-2.5">
              {PROJECT_SCOPES.map((scope) => (
                <ScopeChip
                  key={scope.id}
                  id={scope.id}
                  label={scope.label}
                  isActive={selectedScope === scope.id}
                  onSelect={setSelectedScope}
                />
              ))}
            </div>
          </div>

          {/* Form Input Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <TerminalInput
              id="sender-name"
              label="SENDER_NAME //"
              type="text"
              required
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              placeholder="Enter identification..."
            />

            <TerminalInput
              id="return-address"
              label="RETURN_ADDRESS //"
              type="email"
              required
              value={returnAddress}
              onChange={(e) => setReturnAddress(e.target.value)}
              placeholder="user@domain.tld"
            />
          </div>

          {/* Transmission Payload Textarea */}
          <TerminalTextArea
            id="transmission-payload"
            label="TRANSMISSION_PAYLOAD //"
            required
            rows={5}
            value={transmissionPayload}
            onChange={(e) => setTransmissionPayload(e.target.value)}
            placeholder="Detail your project parameters here..."
          />

          {/* Action Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/50 hover:border-sky-400 text-sky-400 font-bold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.15)] hover:shadow-[0_0_25px_rgba(56,189,248,0.3)] disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm tracking-widest uppercase"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>TRANSMITTING_SIGNAL...</span>
              </>
            ) : (
              <>
                <span>TRANSMIT_MESSAGE</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>

      {/* Footer FAQ Accordion: [ FREQUENT_INQUIRIES_LOG ] */}
      <div className="p-5 sm:p-6 bg-[#0b0e14]/90 backdrop-blur border border-slate-800 rounded-xl shadow-lg">
        <div className="text-xs text-slate-400 tracking-wider mb-4">
          [ FREQUENT_INQUIRIES_LOG ]
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item) => (
            <FaqAccordionItem
              key={item.id}
              id={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openFaq === item.id}
              onToggle={(id) => setOpenFaq(openFaq === id ? null : id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

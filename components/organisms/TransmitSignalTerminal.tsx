'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Loader2, Check } from 'lucide-react';
import { CornerBrackets } from '@/components/atoms/CornerBrackets';
import { TerminalInput, TerminalTextArea } from '@/components/atoms/TerminalInput';
import { ScopeChip } from '@/components/molecules/ScopeChip';
import { FaqAccordionItem } from '@/components/molecules/FaqAccordionItem';

import { PROJECT_SCOPES, FAQ_ITEMS, contactData } from '@/data/contactData';


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
      <div id="transmit-terminal" className="relative p-6 sm:p-8 bg-[#0b0e14]/90 backdrop-blur border border-slate-800 rounded-xl shadow-2xl scroll-mt-28">
        <CornerBrackets color="border-sky-500" size="md" />

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide flex items-center gap-2">
            <span className="text-sky-400">[</span>
            <span>{contactData.terminal.title}</span>
            <span className="text-sky-400">]</span>
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 tracking-wider">
            {contactData.terminal.subtitle}
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
              <span>{contactData.terminal.successNotification}</span>
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit} className="space-y-7">
          {/* Project Scope Chips */}
          <div>
            <label className="block text-xs text-emerald-400 font-bold tracking-wider mb-3">
              {contactData.terminal.scopeLabel}
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
              label={contactData.terminal.senderNameLabel}
              type="text"
              required
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              placeholder={contactData.terminal.senderNamePlaceholder}
            />

            <TerminalInput
              id="return-address"
              label={contactData.terminal.returnAddressLabel}
              type="email"
              required
              value={returnAddress}
              onChange={(e) => setReturnAddress(e.target.value)}
              placeholder={contactData.terminal.returnAddressPlaceholder}
            />
          </div>

          {/* Transmission Payload Textarea */}
          <TerminalTextArea
            id="transmission-payload"
            label={contactData.terminal.payloadLabel}
            required
            rows={5}
            value={transmissionPayload}
            onChange={(e) => setTransmissionPayload(e.target.value)}
            placeholder={contactData.terminal.payloadPlaceholder}
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
                <span>{contactData.terminal.submittingButton}</span>
              </>
            ) : (
              <>
                <span>{contactData.terminal.submitButton}</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>

      {/* Footer FAQ Accordion: [ FREQUENT_INQUIRIES_LOG ] */}
      <div id="faq" className="p-5 sm:p-6 bg-[#0b0e14]/90 backdrop-blur border border-slate-800 rounded-xl shadow-lg scroll-mt-28">
        <div className="text-xs text-slate-400 tracking-wider mb-4">
          {contactData.terminal.faqSectionTitle}
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

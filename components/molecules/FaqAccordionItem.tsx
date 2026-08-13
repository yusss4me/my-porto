'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FaqAccordionItemProps {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: (id: string) => void;
}

export const FaqAccordionItem: React.FC<FaqAccordionItemProps> = ({
  id,
  question,
  answer,
  isOpen,
  onToggle
}) => {
  return (
    <div className="border border-slate-800/80 rounded-lg bg-[#111622]/60 overflow-hidden font-mono">
      <button
        type="button"
        onClick={() => onToggle(id)}
        className="w-full p-4 flex items-center justify-between text-left text-xs sm:text-sm text-slate-200 hover:text-sky-400 transition-colors"
      >
        <span className="tracking-wide">{question}</span>
        <ChevronDown
          className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-sky-400' : ''
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
            <div className="px-4 pb-4 pt-1 text-xs text-slate-400 leading-relaxed border-t border-slate-800/40">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

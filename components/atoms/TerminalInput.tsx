import React from 'react';

interface TerminalInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export const TerminalInput: React.FC<TerminalInputProps> = ({ label, id, className = '', ...props }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-xs text-slate-400 font-mono tracking-wider mb-2">
        {label}
      </label>
      <input
        id={id}
        className={`w-full px-4 py-3 bg-[#111622] border border-slate-800 rounded-lg text-sm font-mono text-slate-100 placeholder-slate-600 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all ${className}`}
        {...props}
      />
    </div>
  );
};

interface TerminalTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
}

export const TerminalTextArea: React.FC<TerminalTextAreaProps> = ({ label, id, className = '', ...props }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-xs text-slate-400 font-mono tracking-wider mb-2">
        {label}
      </label>
      <textarea
        id={id}
        className={`w-full px-4 py-3 bg-[#111622] border border-slate-800 rounded-lg text-sm font-mono text-slate-100 placeholder-slate-600 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all resize-none ${className}`}
        {...props}
      />
    </div>
  );
};

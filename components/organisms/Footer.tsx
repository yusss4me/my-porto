'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { footerData } from '@/data/footerData';
import Button from '@/components/atoms/Button';


export default function Footer() {
  const pathname = usePathname();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(footerData.form.successAlert);
  };

  const isContactPage = pathname === '/contact';

  return (
    <footer className="py-24 lg:py-2 border-t border-white/5 text-center">
      {!isContactPage && (
        <div id="contact" className="mb-12">
          <h2 className="font-geist text-4xl md:text-6xl font-extrabold text-white mb-6">
            Let&apos;s build the <span className="italic text-[#3b82f6]">{footerData.headlineHighlight}</span> together.
          </h2>
          <p className="font-inter text-[#c2c6d6] max-w-xl mx-auto mb-10 text-sm md:text-base leading-relaxed">
            {footerData.subtext}
          </p>

          <form onSubmit={handleSubmit} className="max-w-lg mx-auto text-left space-y-6">
            <div>
              <label className="block font-mono text-[10px] text-[#c2c6d6] uppercase tracking-wider mb-2">
                {footerData.form.nameLabel}
              </label>
              <input type="text" required className="w-full glass-input p-2 text-white font-inter text-sm" placeholder={footerData.form.namePlaceholder} />
            </div>
            <div>
              <label className="block font-mono text-[10px] text-[#c2c6d6] uppercase tracking-wider mb-2">
                {footerData.form.emailLabel}
              </label>
              <input type="email" required className="w-full glass-input p-2 text-white font-inter text-sm" placeholder={footerData.form.emailPlaceholder} />
            </div>
            <div>
              <label className="block font-mono text-[10px] text-[#c2c6d6] uppercase tracking-wider mb-2">
                {footerData.form.messageLabel}
              </label>
              <textarea required rows={4} className="w-full glass-input p-2 text-white font-inter text-sm resize-none" placeholder={footerData.form.messagePlaceholder} />
            </div>
            <Button type="submit" variant="green" className="w-full py-3 justify-center">
              {footerData.form.submitButton}
            </Button>
          </form>
        </div>
      )}

      
    </footer>
  );
}


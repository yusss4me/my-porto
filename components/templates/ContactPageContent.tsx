'use client';

import React from 'react';
import { TransmissionControlPanel } from '@/components/organisms/TransmissionControlPanel';
import { TransmitSignalTerminal } from '@/components/organisms/TransmitSignalTerminal';

export default function ContactPageContent() {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 pt-24 pb-20 text-slate-100 font-mono">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Sidebar / Transmission Control Panel */}
        <div className="lg:col-span-4">
          <TransmissionControlPanel />
        </div>

        {/* Right Column: Main Transmit Terminal */}
        <div className="lg:col-span-8">
          <TransmitSignalTerminal />
        </div>
      </div>
    </div>
  );
}

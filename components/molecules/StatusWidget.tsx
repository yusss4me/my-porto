'use client';

import React, { useState, useEffect } from 'react';
import { StatusLed } from '@/components/atoms/StatusLed';
import { CornerBrackets } from '@/components/atoms/CornerBrackets';
import { footerData } from '@/data/footerData';

export const StatusWidget: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative p-5 sm:p-6 bg-[#0b0e14]/90 backdrop-blur border border-slate-800 rounded-xl shadow-lg font-mono">
      <CornerBrackets color="border-sky-500/80" size="sm" />

      <div className="flex items-center gap-2 text-xs text-emerald-400 font-bold mb-4 tracking-wider">
        <StatusLed color="emerald" pulse={true} size="sm" />
        <span>{footerData.statusWidget.systemStatusLabel}</span>
      </div>

      <div className="space-y-2.5 text-xs text-slate-300">
        <div className="flex justify-between items-center border-b border-slate-800/80 pb-2">
          <span className="text-slate-400">{footerData.statusWidget.statusLabel}</span>
          <span className="text-emerald-400 font-bold tracking-wide">{footerData.statusWidget.statusValue}</span>
        </div>
        <div className="flex justify-between items-center border-b border-slate-800/80 pb-2">
          <span className="text-slate-400">{footerData.statusWidget.locationLabel}</span>
          <span className="text-slate-200 font-medium">{footerData.statusWidget.locationValue}</span>
        </div>
        <div className="flex justify-between items-center pt-0.5">
          <span className="text-slate-400">{footerData.statusWidget.timeLabel}</span>
          <span className="text-sky-400 font-bold tracking-widest">{currentTime || footerData.statusWidget.defaultTime}</span>
        </div>
      </div>
    </div>
  );
};


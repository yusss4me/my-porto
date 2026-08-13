import React from 'react';

interface StatusLedProps {
  color?: 'emerald' | 'sky' | 'amber';
  pulse?: boolean;
  size?: 'sm' | 'md';
}

export const StatusLed: React.FC<StatusLedProps> = ({
  color = 'emerald',
  pulse = true,
  size = 'sm'
}) => {
  const colorMap = {
    emerald: 'bg-emerald-400',
    sky: 'bg-sky-400',
    amber: 'bg-amber-400'
  };

  const sizeMap = {
    sm: 'h-2.5 w-2.5',
    md: 'h-3 w-3'
  };

  return (
    <span className={`relative flex ${sizeMap[size]}`}>
      {pulse && (
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full ${colorMap[color]} opacity-75`}
        />
      )}
      <span className={`relative inline-flex rounded-full ${sizeMap[size]} ${colorMap[color]}`} />
    </span>
  );
};

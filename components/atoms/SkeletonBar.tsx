import React from 'react';

interface SkeletonBarProps {
  className?: string;
}

export default function SkeletonBar({ className = '' }: SkeletonBarProps) {
  return (
    <div
      className={`animate-pulse bg-white/5 border border-white/5 rounded ${className}`}
    />
  );
}

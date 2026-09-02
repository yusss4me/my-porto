'use client';

import React, { useState, useEffect } from 'react';

export interface TypewriterTextProps {
  strings?: string[];
  text?: string;
  showCursor?: boolean;
  className?: string;
}

export default function TypewriterText({
  strings,
  text,
  showCursor = true,
  className = '',
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [stringIndex, setStringIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Mode A: Looping array of strings
    if (strings && strings.length > 0) {
      const currentFullText = strings[stringIndex];
      let timeoutId: NodeJS.Timeout;

      if (!isDeleting) {
        // Typing forward (~60ms)
        if (displayedText.length < currentFullText.length) {
          timeoutId = setTimeout(() => {
            setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
          }, 60);
        } else {
          // Pause at full word (~1800ms) before backspacing
          timeoutId = setTimeout(() => {
            setIsDeleting(true);
          }, 1800);
        }
      } else {
        // Backspacing / deleting (~40ms)
        if (displayedText.length > 0) {
          timeoutId = setTimeout(() => {
            setDisplayedText(currentFullText.slice(0, displayedText.length - 1));
          }, 40);
        } else {
          // Finished deleting, move to next string in array
          setIsDeleting(false);
          setStringIndex((prev) => (prev + 1) % strings.length);
        }
      }

      return () => clearTimeout(timeoutId);
    }

    // Mode B: Type once for single string text
    if (text) {
      let timeoutId: NodeJS.Timeout;
      if (displayedText.length < text.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(text.slice(0, displayedText.length + 1));
        }, 60);
      }
      return () => clearTimeout(timeoutId);
    }
  }, [displayedText, isDeleting, stringIndex, strings, text]);

  return (
    <span className={className}>
      <span>{displayedText || '\u00A0'}</span>
      {showCursor && (
        <span className="animate-pulse ml-0.5 text-[#3b82f6] font-mono font-bold select-none inline-block">
          |
        </span>
      )}
    </span>
  );
}

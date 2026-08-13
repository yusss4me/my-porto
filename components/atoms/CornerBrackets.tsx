import React from 'react';

interface CornerBracketsProps {
  color?: string;
  size?: 'sm' | 'md';
}

export const CornerBrackets: React.FC<CornerBracketsProps> = ({
  color = 'border-sky-500',
  size = 'sm'
}) => {
  const sizeClasses = size === 'sm' ? 'w-2.5 h-2.5' : 'w-3 h-3';

  return (
    <>
      <span className={`absolute top-0 left-0 ${sizeClasses} border-t-2 border-l-2 ${color} -mt-0.5 -ml-0.5 pointer-events-none`} />
      <span className={`absolute top-0 right-0 ${sizeClasses} border-t-2 border-r-2 ${color} -mt-0.5 -mr-0.5 pointer-events-none`} />
      <span className={`absolute bottom-0 left-0 ${sizeClasses} border-b-2 border-l-2 ${color} -mb-0.5 -ml-0.5 pointer-events-none`} />
      <span className={`absolute bottom-0 right-0 ${sizeClasses} border-b-2 border-r-2 ${color} -mb-0.5 -mr-0.5 pointer-events-none`} />
    </>
  );
};

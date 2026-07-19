'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/atoms/Button';
import Badge from '@/components/atoms/Badge';

interface ProductData {
  id: string;
  componentName: string;
  category: string;
  subCategory: string;
  price: number;
  previewUrl: string;
  downloadKey: string;
  techStack: string[];
  description: string;
}

interface ProductCardProps {
  product: ProductData;
}

export default function ProductCard({ product }: ProductCardProps) {
  // Determine color accents and buttons based on 3 storefront pillars
  let accentBorderColor = '';
  let accentGlowColor = '';
  let badgeColorClasses = '';
  let primaryBtnText = '';
  let secondaryBtnText = '';
  let primaryBtnVariant: 'blue' | 'green' | 'outline' = 'blue';

  if (product.category === 'UI/UX & Frontend Assets') {
    accentBorderColor = 'hover:border-[#3b82f6]/30';
    accentGlowColor = 'rgba(59,130,246,0.2)';
    badgeColorClasses = 'border-[#3b82f6]/30 bg-[#3b82f6]/10 text-[#adc6ff]';
    secondaryBtnText = 'Live Preview';
    primaryBtnText = 'Buy Template';
    primaryBtnVariant = 'blue';
  } else if (product.category === 'AI & Data Science') {
    accentBorderColor = 'hover:border-[#10b981]/30';
    accentGlowColor = 'rgba(16,185,129,0.2)';
    badgeColorClasses = 'border-[#10b981]/30 bg-[#10b981]/10 text-[#4edea3]';
    secondaryBtnText = 'View Docs';
    primaryBtnText = 'Get Model';
    primaryBtnVariant = 'green';
  } else {
    // Fullstack & Dev Tools (Amber/Purple blend)
    accentBorderColor = 'hover:border-purple-500/30';
    accentGlowColor = 'rgba(168,85,247,0.2)';
    badgeColorClasses = 'border-purple-500/30 bg-purple-500/10 text-purple-300';
    secondaryBtnText = 'Architecture';
    primaryBtnText = 'Buy Source';
    primaryBtnVariant = 'blue'; // fallback or outline custom styling
  }

  // Format IDR Price
  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(product.price);

  const handleCheckout = () => {
    // Simulated Midtrans Trigger
    alert(`[Midtrans Secure Checkout] Initiating transaction for: ${product.componentName} (${product.downloadKey}) - Price: ${formattedPrice}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -4,
        boxShadow: `0 15px 30px -10px ${accentGlowColor}`,
        transition: { duration: 0.5, ease: 'easeOut' },
      }}
      className={`flex flex-col p-6 rounded-lg bg-[#0c1324]/60 backdrop-blur-md border border-white/10 transition-colors duration-500 ${accentBorderColor} h-full`}
    >
      {/* Category Badge & Price Header */}
      <div className="flex justify-between items-start gap-4 mb-4">
        <span
          className={`px-2.5 py-0.5 text-[9px] tracking-widest font-mono border rounded uppercase ${badgeColorClasses}`}
        >
          {product.category}
        </span>
        <span className="font-mono text-sm font-bold text-white whitespace-nowrap">
          {formattedPrice}
        </span>
      </div>

      {/* Subcategory */}
      <div className="font-mono text-[10px] text-[#c2c6d6]/60 uppercase tracking-wider mb-1">
        {product.subCategory}
      </div>

      {/* Title */}
      <h3 className="font-geist text-lg font-bold text-white mb-2 leading-snug">
        {product.componentName}
      </h3>

      {/* Description */}
      <p className="font-inter text-[#c2c6d6] text-xs leading-relaxed mb-6 flex-grow">
        {product.description}
      </p>

      {/* Tech Stack Badges */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {product.techStack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-[9px] font-mono rounded bg-white/5 border border-white/10 text-white/70"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2.5 mt-auto pt-4 border-t border-white/5">
        <Button
          href={product.previewUrl}
          variant="shop-outline"
          size="sm"
          className="flex-1 text-center font-mono text-[11px]"
        >
          {secondaryBtnText}
        </Button>
        <Button
          onClick={handleCheckout}
          variant={primaryBtnVariant}
          size="sm"
          className={`flex-1 font-mono text-[11px] ${
            product.category === 'Fullstack & Dev Tools'
              ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]'
              : ''
          }`}
        >
          {primaryBtnText}
        </Button>
      </div>
    </motion.div>
  );
}

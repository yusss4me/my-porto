'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import shopData from '@/data/shopData.json';
import ProductCard, { ProductData } from '@/components/molecules/ProductCard';
import ProjectDemoModal from '@/components/organisms/ProjectDemoModal';
import SystemSpecsModal from '@/components/organisms/SystemSpecsModal';
import Button from '@/components/atoms/Button';

export default function ProjectGrid() {
  const featuredProducts = (shopData as ProductData[]).slice(0, 3);

  // Selected Product for Interactive Demo & System Specs Modals
  const [selectedDemoProduct, setSelectedDemoProduct] = useState<ProductData | null>(null);
  const [selectedSpecsProduct, setSelectedSpecsProduct] = useState<ProductData | null>(null);

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-white/5">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="font-mono text-xs text-[#3b82f6] tracking-widest uppercase font-bold block mb-2">
            Selected Work
          </span>
          <h2 className="font-geist text-2xl md:text-3xl lg:text-5xl font-bold text-white mt-1">
            Engineering Intelligent Interfaces.
          </h2>
        </div>
        <div className="font-mono text-xs text-[#c2c6d6]">
          01 — 03 / {shopData.length.toString().padStart(2, '0')}
        </div>
      </div>

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {featuredProducts.map((product) => (
          <motion.div
            key={product.id}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            <ProductCard
              product={product}
              onOpenDemo={(p) => setSelectedDemoProduct(p)}
              onOpenSpecs={(p) => setSelectedSpecsProduct(p)}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* CTA link to full Projects page */}
      <div className="mt-12 text-center">
        <Button href="/projects" variant="outline" size="md" className="font-mono text-xs tracking-wider">
          Lihat Semua Project & Assets →
        </Button>
      </div>

      {/* Interactive Project Demo Modal */}
      <ProjectDemoModal
        project={selectedDemoProduct}
        isOpen={Boolean(selectedDemoProduct)}
        onClose={() => setSelectedDemoProduct(null)}
      />

      {/* System Engineering Specs Modal */}
      <SystemSpecsModal
        project={selectedSpecsProduct}
        isOpen={Boolean(selectedSpecsProduct)}
        onClose={() => setSelectedSpecsProduct(null)}
      />
    </section>
  );
}


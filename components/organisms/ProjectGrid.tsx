'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import ProductCard, { ProductData } from '@/components/molecules/ProductCard';
import SystemSpecsModal from '@/components/organisms/SystemSpecsModal';
import Button from '@/components/atoms/Button';
import TypewriterText from '@/components/atoms/TypewriterText';
import { getProjects } from '@/src/lib/api';
import { mapDjangoProjectToProductData } from '@/components/organisms/ClientStoreCatalog';

export default function ProjectGrid() {
  const router = useRouter();
  const [products, setProducts] = useState<ProductData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedSpecsProduct, setSelectedSpecsProduct] = useState<ProductData | null>(null);

  useEffect(() => {
    async function loadProjects() {
      try {
        const apiProjects = await getProjects();
        if (apiProjects && apiProjects.length > 0) {
          setProducts(apiProjects.map(mapDjangoProjectToProductData));
        }
      } catch (err) {
        console.warn('Failed to load projects from Django backend for ProjectGrid:', err);
      } finally {
        setIsLoading(false);
      }
    }
    loadProjects();
  }, []);

  const featuredProducts = products.slice(0, 3);

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-white/5">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="font-mono text-xs text-[#3b82f6] tracking-widest uppercase font-bold block mb-2">
            <TypewriterText text="FEATURED_PROJECTS //" />
          </span>
          <h2 className="font-geist text-2xl md:text-3xl lg:text-5xl font-bold text-white mt-1">
            Engineering Intelligent Interfaces.
          </h2>
        </div>
        <div className="font-mono text-xs text-[#c2c6d6]">
          {featuredProducts.length > 0
            ? `01 — ${featuredProducts.length.toString().padStart(2, '0')} / ${products.length.toString().padStart(2, '0')}`
            : '00 / 00'}
        </div>
      </div>

      {isLoading ? (
        <div className="text-center py-16 font-mono text-xs text-slate-400 animate-pulse">
          Fetching live projects from backend API...
        </div>
      ) : featuredProducts.length === 0 ? (
        <div className="text-center py-16 px-6 border border-white/10 rounded-2xl bg-[#121620]/40 space-y-3">
          <h3 className="font-geist text-base font-bold text-white">No Published Projects Yet</h3>
          <p className="font-inter text-xs text-slate-400 max-w-sm mx-auto">
            Projects added via the Django Admin panel will appear here automatically.
          </p>
        </div>
      ) : (
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
                  transition: { duration: 0.6, ease: 'easeOut' },
                },
              }}
            >
              <ProductCard
                product={product}
                onOpenDemo={(p) => router.push(`/projects/${p.id}/demo`)}
                onOpenSpecs={(p) => setSelectedSpecsProduct(p)}
              />
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* CTA link to full Projects page */}
      <div className="mt-12 text-center">
        <Button href="/projects" variant="outline" size="md" className="font-mono text-xs tracking-wider">
          Lihat Semua Project & Assets →
        </Button>
      </div>

      {/* System Engineering Specs Modal */}
      <SystemSpecsModal
        project={selectedSpecsProduct}
        isOpen={Boolean(selectedSpecsProduct)}
        onClose={() => setSelectedSpecsProduct(null)}
      />
    </section>
  );
}

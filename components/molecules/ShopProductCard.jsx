import React from 'react';

export default function ShopProductCard({ product }) {
  const isOrganism = product.category === 'Organisms';
  const isMolecule = product.category === 'Molecules';
  
  // Decide variant accent
  const variant = isOrganism ? 'green' : 'blue';
  const accentColor = isOrganism ? 'hover:border-[#10b981] hover:shadow-[#10b981]/20' : 'hover:border-[#3b82f6] hover:shadow-[#3b82f6]/20';
  const labelColor = isOrganism ? 'text-[#4edea3] bg-[#10b981]/10 border-[#10b981]/30' : 'text-[#adc6ff] bg-[#3b82f6]/10 border-[#3b82f6]/30';

  return (
    <div className={`flex flex-col p-6 rounded-lg bg-[#0c1324]/60 backdrop-blur-md border border-white/10 transition-all duration-500 hover:-translate-y-1 hover:border-opacity-30 shadow-lg ${accentColor}`}>
      <div className="flex justify-between items-start mb-4">
        <span className={`px-2 py-0.5 text-[10px] tracking-widest font-mono border rounded ${labelColor}`}>
          {product.category}
        </span>
        <span className="font-mono text-white font-bold">{product.price}</span>
      </div>
      <h3 className="font-geist text-xl font-semibold text-white mb-2">{product.componentName}</h3>
      <p className="font-inter text-[#c2c6d6] text-xs mb-6">
        High-fidelity fully responsive component built in strict compliance with the design tokens.
      </p>
      <div className="flex gap-3 mt-auto">
        <a
          href={product.previewUrl}
          className="flex-1 text-center py-2 px-3 rounded font-mono text-xs border border-white/10 hover:border-white/30 text-white transition-colors"
        >
          Live Preview
        </a>
        <button
          onClick={() => alert(`Buying token: ${product.downloadKey}`)}
          className="flex-1 py-2 px-3 rounded font-mono text-xs bg-[#3b82f6] text-white hover:bg-blue-600 transition-colors"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

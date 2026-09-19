import React, { useState } from 'react';
import { UMKM_PRODUCTS, UmkmProduct } from '../data';

interface UmkmProps {
  onSelectProduct: (product: UmkmProduct) => void;
}

export const Umkm: React.FC<UmkmProps> = ({ onSelectProduct }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');

  const categories = ['Semua', 'Kerajinan', 'Kuliner', 'Pertanian'];

  const filteredProducts = UMKM_PRODUCTS.filter((product) => {
    if (activeCategory === 'Semua') return true;
    return product.category === activeCategory;
  });

  return (
    <section id="umkm" className="py-16 md:py-20 px-4 md:px-6 bg-[#f3f4ec] w-full scroll-mt-20">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="bg-[#fec391]/40 text-[#794e26] px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider inline-block">
            Perekonomian Desa
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#012d1d] font-bold">
            Potensi Ekonomi & UMKM Lokal
          </h2>
          <p className="font-sans text-base md:text-lg text-[#414844] leading-relaxed">
            Menjelajahi keragaman produk unggulan dan usaha kecil menengah yang menjadi urat nadi perekonomian Dusun Gatak, mencerminkan kearifan lokal dan kualitas tinggi.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#012d1d] text-white shadow-md'
                    : 'bg-white text-[#414844] hover:bg-[#edefe7] border border-[#c1c8c2]/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_25px_-5px_rgba(128,85,44,0.12)] hover:shadow-[0_20px_30px_-5px_rgba(128,85,44,0.2)] hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer border border-[#edefe7]"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-[#80552c] flex items-center gap-1 shadow-sm">
                  <span className="material-symbols-outlined text-[14px] text-amber-500 fill-amber-500">
                    star
                  </span>
                  <span>{product.rating}</span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow space-y-3">
                <div className="flex justify-between items-center">
                  <span className="bg-[#fec391]/30 text-[#794e26] px-3 py-1 rounded-full text-xs font-semibold">
                    {product.category}
                  </span>
                  <span className="text-xs font-bold text-[#012d1d]">{product.price}</span>
                </div>

                <h3 className="font-serif text-xl text-[#012d1d] font-bold group-hover:text-[#80552c] transition-colors">
                  {product.title}
                </h3>

                <p className="font-sans text-sm text-[#414844] line-clamp-3 leading-relaxed flex-grow">
                  {product.description}
                </p>

                <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-[#80552c] font-semibold">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">store</span>
                    {product.seller}
                  </span>
                  <span className="text-[#012d1d] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Detail <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

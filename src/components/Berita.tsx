import React, { useState } from 'react';
import { NEWS_ARTICLES, NewsArticle } from '../data';

interface BeritaProps {
  onSelectArticle: (article: NewsArticle) => void;
}

export const Berita: React.FC<BeritaProps> = ({ onSelectArticle }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const categories = ['Semua', 'Kegiatan Desa', 'Ekonomi & UMKM', 'Pemerintahan'];

  const filteredArticles = NEWS_ARTICLES.filter((article) => {
    const matchesCategory =
      selectedCategory === 'Semua' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="berita" className="py-16 md:py-20 px-4 md:px-6 max-w-[1200px] mx-auto scroll-mt-20 w-full">
      {/* Section Header */}
      <div className="mb-12 text-center md:text-left md:flex md:items-end md:justify-between gap-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#80552c] mb-2 inline-block">
            Informasi Publik
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#012d1d] font-bold mb-3">
            Berita Terkini Dusun Gatak
          </h2>
          <p className="font-sans text-base text-[#414844] max-w-2xl">
            Kabar terbaru, pengumuman desa, dan cerita inspiratif dari komunitas Dusun Gatak.
          </p>
        </div>

        {/* Filter and Search controls */}
        <div className="mt-6 md:mt-0 flex flex-col sm:flex-row items-center gap-3">
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Cari berita..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white rounded-full border border-[#c1c8c2] text-sm focus:outline-none focus:ring-2 focus:ring-[#012d1d]"
            />
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-400 text-[18px]">
              search
            </span>
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-[#012d1d] text-white shadow-sm'
                : 'bg-white text-[#414844] hover:bg-[#edefe7] border border-[#c1c8c2]/40'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Article Grid */}
      {filteredArticles.length === 0 ? (
        <div className="bg-white rounded-2xl p-8 text-center border border-[#c1c8c2]/30 text-[#414844]">
          <span className="material-symbols-outlined text-4xl text-[#80552c] mb-2">find_in_page</span>
          <p className="font-semibold">Tidak ada berita yang cocok dengan pencarian Anda.</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('Semua');
            }}
            className="mt-3 text-xs text-[#012d1d] underline font-semibold"
          >
            Reset Filter
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 border border-[#c1c8c2]/30 flex flex-col h-full shadow-[0_4px_12px_rgba(128,85,44,0.05)] hover:shadow-[0_10px_25px_-5px_rgba(128,85,44,0.15)] group"
            >
              <div className="h-48 w-full relative overflow-hidden bg-[#edefe7]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#012d1d]/85 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full">
                  {article.category}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center space-x-2 mb-3 text-[#80552c] text-xs font-semibold">
                  <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                  <time className="uppercase tracking-wider">{article.date}</time>
                  <span>&bull;</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="font-serif text-lg md:text-xl text-[#012d1d] font-bold mb-3 line-clamp-2 group-hover:text-[#80552c] transition-colors">
                  {article.title}
                </h3>

                <p className="font-sans text-sm text-[#414844] mb-6 line-clamp-3 flex-grow leading-relaxed">
                  {article.summary}
                </p>

                <button
                  onClick={() => onSelectArticle(article)}
                  className="font-label-md text-xs text-[#012d1d] font-bold hover:text-[#80552c] transition-colors inline-flex items-center mt-auto cursor-pointer group/btn"
                >
                  <span>Baca Selengkapnya</span>
                  <span className="material-symbols-outlined ml-1 text-[18px] group-hover/btn:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

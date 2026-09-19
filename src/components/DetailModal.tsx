import React from 'react';
import { Official, NewsArticle, UmkmProduct, FoundationProgram } from '../data';

type ModalData =
  | { type: 'official'; item: Official }
  | { type: 'article'; item: NewsArticle }
  | { type: 'product'; item: UmkmProduct }
  | { type: 'program'; item: FoundationProgram };

interface DetailModalProps {
  data: ModalData | null;
  onClose: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#f9faf2] w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-[#c1c8c2]/50 relative max-h-[90vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-white bg-black/50 hover:bg-black/70 p-2 rounded-full backdrop-blur-sm transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Modal Render Logic based on type */}
        <div className="overflow-y-auto flex-grow">
          {/* 1. Official Detail */}
          {data.type === 'official' && (
            <div>
              <div className="bg-[#012d1d] text-white p-8 text-center relative overflow-hidden">
                <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white/20 shadow-lg relative z-10">
                  <img
                    src={data.item.image}
                    alt={data.item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold">{data.item.name}</h3>
                <p className="text-[#86af99] font-medium text-sm mt-1">{data.item.role}</p>
              </div>

              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-[#80552c] uppercase tracking-wider mb-2">
                    Profil & Peran
                  </h4>
                  <p className="text-sm md:text-base text-[#414844] leading-relaxed">
                    {data.item.bio}
                  </p>
                </div>


              </div>
            </div>
          )}

          {/* 2. Article Detail */}
          {data.type === 'article' && (
            <div>
              <div className="h-64 sm:h-80 relative overflow-hidden bg-[#edefe7]">
                <img
                  src={data.item.image}
                  alt={data.item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <span className="bg-[#012d1d] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {data.item.category}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                    {data.item.title}
                  </h3>
                  <p className="text-xs text-white/80 flex items-center gap-2">
                    <span>{data.item.date}</span> &bull; <span>Oleh {data.item.author}</span>
                  </p>
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-6">
                <div className="prose text-[#414844] text-sm md:text-base leading-relaxed space-y-4">
                  {data.item.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#c1c8c2]/40 flex items-center justify-between text-xs text-[#80552c]">
                  <span>Kategori: <strong>{data.item.category}</strong></span>
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: data.item.title,
                          text: data.item.summary,
                          url: window.location.href,
                        });
                      } else {
                        navigator.clipboard.writeText(window.location.href);
                        alert('Tautan berita berhasil disalin!');
                      }
                    }}
                    className="font-bold underline flex items-center gap-1 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">share</span>
                    Bagikan Berita
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 3. Product Detail */}
          {data.type === 'product' && (
            <div>
              <div className="h-64 sm:h-72 relative overflow-hidden bg-[#edefe7]">
                <img
                  src={data.item.image}
                  alt={data.item.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-[#fec391] text-[#794e26] text-xs font-bold px-3 py-1 rounded-full">
                  {data.item.category}
                </span>
              </div>

              <div className="p-6 md:p-8 space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-serif text-2xl font-bold text-[#012d1d]">
                      {data.item.title}
                    </h3>
                    <span className="text-base font-bold text-[#80552c] bg-[#fec391]/20 px-3 py-1 rounded-xl">
                      {data.item.price}
                    </span>
                  </div>
                  <p className="text-xs text-[#80552c] font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">store</span>
                    {data.item.seller}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[#012d1d] uppercase tracking-wider mb-2">
                    Deskripsi Produk
                  </h4>
                  <p className="text-sm text-[#414844] leading-relaxed">
                    {data.item.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[#012d1d] uppercase tracking-wider mb-2">
                    Keunggulan Produk
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#414844]">
                    {data.item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-[#c1c8c2]/30">
                        <span className="material-symbols-outlined text-emerald-600 text-[16px]">
                          check_circle
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>


              </div>
            </div>
          )}

          {/* 4. Program Detail */}
          {data.type === 'program' && (
            <div>
              <div className="h-64 sm:h-72 relative overflow-hidden bg-[#edefe7]">
                <img
                  src={data.item.image}
                  alt={data.item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="bg-[#ffdcbd] text-[#2c1600] text-xs font-bold px-3 py-1 rounded-full">
                    Yayasan Dusun Gatak
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold">{data.item.title}</h3>
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-[#012d1d] uppercase tracking-wider mb-2">
                    Tentang Program
                  </h4>
                  <p className="text-sm text-[#414844] leading-relaxed">
                    {data.item.fullDetails}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[#012d1d] uppercase tracking-wider mb-3">
                    Aktivitas & Kegiatannya
                  </h4>
                  <div className="space-y-2">
                    {data.item.activities.map((activity, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-[#c1c8c2]/30 text-xs text-[#012d1d] font-semibold">
                        <span className="w-6 h-6 rounded-full bg-[#ffdcbd] text-[#2c1600] flex items-center justify-center text-xs font-bold shrink-0">
                          {idx + 1}
                        </span>
                        <span>{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#edefe7] p-4 rounded-2xl text-xs text-[#414844] border border-[#c1c8c2]/30 flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#80552c] text-2xl">info</span>
                  <p>
                    Ingin mendaftar atau berkontribusi dalam kegiatan Yayasan Dusun Gatak? Silakan hubungi sekretariat dusun melalui tombol Hubungi Kami di bagian atas.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import React from 'react';



export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#e2e3db] text-[#1a1c18] border-t border-[#c1c8c2]/40 mt-auto pb-16 md:pb-0">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <div className="font-serif text-2xl font-bold text-[#012d1d]">
              Dusun Gatak
            </div>
            <p className="font-sans text-sm text-[#414844] leading-relaxed">
              Komunitas yang menjunjung tinggi nilai tradisional dan kemajuan bersama.
            </p>
            <div className="pt-2 text-xs text-[#80552c] font-medium space-y-1">
              <p>📍Dusun Gatak, Kalurahan Bokoharjo, Kapanewon Prambanan</p>
              <p>🏛️ Kabupaten Sleman, D.I. Yogyakarta</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex flex-col space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#012d1d] mb-1">Navigasi</span>
              <a href="#beranda" className="text-sm text-[#414844] hover:text-[#012d1d] hover:underline transition-all">Beranda</a>
              <a href="#profil" className="text-sm text-[#414844] hover:text-[#012d1d] hover:underline transition-all">Profil Dusun</a>
              <a href="#berita" className="text-sm text-[#414844] hover:text-[#012d1d] hover:underline transition-all">Berita Terkini</a>
            </div>

            <div className="flex flex-col space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#012d1d] mb-1">Ekonomi & Sosial</span>
              <a href="#umkm" className="text-sm text-[#414844] hover:text-[#012d1d] hover:underline transition-all">Potensi UMKM</a>
              <a href="#yayasan" className="text-sm text-[#414844] hover:text-[#012d1d] hover:underline transition-all">Yayasan Dusun</a>
              <a href="#lokasi" className="text-sm text-[#414844] hover:text-[#012d1d] hover:underline transition-all">Lokasi Dusun</a>
            </div>

            <div className="flex flex-col space-y-2.5 col-span-2 sm:col-span-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#012d1d] mb-1">Informasi</span>
              <a
                href="https://maps.google.com/?q=Dusun+Gatak,+Bokoharjo,+Prambanan,+Sleman,+Yogyakarta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#80552c] font-semibold hover:underline flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[16px]">location_on</span>
                Buka di Google Maps
              </a>
              <p className="text-xs text-[#414844]">Jam Pelayanan Sekretariat:</p>
              <p className="text-xs font-medium text-[#012d1d]">Senin - Jumat: 08:00 - 15:00 WIB</p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-[#c1c8c2]/50 text-center text-xs md:text-sm text-[#414844] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2024 Dusun Gatak. Professional Community Governance.</p>
          <div className="flex items-center gap-4 text-xs font-medium text-[#80552c]">
            <a href="#beranda" className="hover:underline">Kembali ke Atas ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

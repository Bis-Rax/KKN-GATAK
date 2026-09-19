import React from 'react';
import { VILLAGE_OFFICIALS, Official } from '../data';

interface ProfilProps {
  onSelectOfficial: (official: Official) => void;
}

export const Profil: React.FC<ProfilProps> = ({ onSelectOfficial }) => {
  const dukuh = VILLAGE_OFFICIALS.find((o) => o.id === 'dukuh') || VILLAGE_OFFICIALS[0];
  const otherOfficials = VILLAGE_OFFICIALS.filter((o) => o.id !== 'dukuh');

  return (
    <section
      id="profil"
      className="py-16 md:py-20 px-4 md:px-6 max-w-[1200px] mx-auto scroll-mt-20 space-y-20"
    >
      {/* History Sub-section */}
      <div>
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-[#012d1d] mb-4 font-bold">
            Sejarah Dusun
          </h2>
          <div className="w-16 h-1 bg-[#80552c] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative h-72 md:h-88 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#c1c8c2]/30 group">
            <img
              src="public/srandul-sejarah-dusun.JPG"
              alt="Kerajinan anyaman bambu Dusun Gatak"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs bg-black/40 backdrop-blur-sm p-2 rounded-lg">
              Kearifan Lokal Kesenian Srandul
            </div>
          </div>

          <div className="space-y-5 text-[#414844] leading-relaxed font-sans text-base md:text-lg">
            <p>
              <strong className="text-[#012d1d]">Dusun Gatak</strong> memiliki sejarah panjang yang mengakar kuat pada kekayaan tradisi dan kelestarian seni budaya. Sejak dahulu, dusun ini dikenal sebagai rumah bagi para seniman bertalenta yang mendedikasikan hidupnya untuk menjaga keharmonisan harmoni serta identitas lokal.
            </p>
            <p>
              Keunggulan kebudayaan Dusun Gatak terpancar jelas dari lahirnya para penari kawakan yang kerap membawakan tarian kolosal ikonik seperti Tari Ramayana dan Tari Roro Jonggrang. Tak hanya itu, denyut kebudayaan dusun ini makin terasa hidup dengan terus dilestarikannya kesenian tradisional Srandul yang menjadi pertunjukan khas kebanggaan warga.
            </p>
            <p>
              Seiring berjalannya waktu, Dusun Gatak terus mengarungi perkembangan zaman dengan menjadikan seni pertunjukan dan semangat kebersamaan sebagai pondasi utama kemajuan masyarakatnya.
            </p>
            <div className="pt-2 flex items-center gap-4 text-sm font-semibold text-[#80552c]">
              <span className="flex items-center gap-1.5 bg-[#f3f4ec] px-3 py-1.5 rounded-lg border border-[#c1c8c2]/30">
                <span className="material-symbols-outlined text-[18px]">park</span>
                Desa Kebudayaan
              </span>
              <span className="flex items-center gap-1.5 bg-[#f3f4ec] px-3 py-1.5 rounded-lg border border-[#c1c8c2]/30">
                <span className="material-symbols-outlined text-[18px]">groups</span>
                Kerukunan Warga
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Organization Structure Sub-section */}
      <div>
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-[#012d1d] mb-4 font-bold">
            Kepengurusan Dusun
          </h2>
          <div className="w-16 h-1 bg-[#80552c] mx-auto rounded-full" />
          <p className="mt-3 text-sm md:text-base text-[#414844] max-w-lg mx-auto">
            Struktur kepemimpinan Dusun Gatak yang berdedikasi melayani dan mengayomi seluruh warga.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Dukuh (Lead) Card */}
          <div
            onClick={() => onSelectOfficial(dukuh)}
            className="md:col-span-3 bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md border border-[#c1c8c2]/30 flex flex-col md:flex-row items-center text-center md:text-left gap-6 transition-all duration-300 group cursor-pointer hover:border-[#012d1d]/40"
          >
            <div className="w-28 h-28 rounded-full overflow-hidden shrink-0 border-2 border-[#012d1d]/20 group-hover:border-[#012d1d] transition-colors relative shadow-inner">
              <img
                src="public/dukuh.JPG"
                alt={dukuh.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex-grow space-y-2">
              <span className="bg-[#fec391]/30 text-[#794e26] px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase inline-block">
                Pimpinan Dusun
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-[#1a1c18] font-bold group-hover:text-[#012d1d] transition-colors">
                {dukuh.name}
              </h3>
              <p className="font-sans font-semibold text-[#80552c] text-base">{dukuh.role}</p>
              <p className="text-sm text-[#414844] max-w-2xl line-clamp-2">{dukuh.bio}</p>
            </div>
            <div className="shrink-0 flex items-center gap-2 text-xs font-semibold text-[#012d1d] bg-[#f3f4ec] px-4 py-2.5 rounded-full group-hover:bg-[#012d1d] group-hover:text-white transition-colors">
              <span>Detail Profil</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </div>
          </div>

          {/* Other Officials (RT, RW, Karang Taruna) */}
          {otherOfficials.map((official) => (
            <div
              key={official.id}
              onClick={() => onSelectOfficial(official)}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-[#c1c8c2]/30 flex flex-col items-center text-center hover:-translate-y-1 transition-all duration-300 group cursor-pointer hover:border-[#80552c]/40"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-[#012d1d]/20 group-hover:border-[#80552c] transition-colors shadow-sm">
                <img
                  src={official.image}
                  alt={official.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-serif text-lg md:text-xl text-[#1a1c18] font-bold mb-1 group-hover:text-[#80552c] transition-colors">
                {official.name}
              </h3>
              <p className="font-sans text-xs md:text-sm font-semibold text-[#80552c] mb-3">
                {official.role}
              </p>
              <p className="text-xs text-[#414844] line-clamp-2 mb-4">{official.bio}</p>
              <span className="text-xs text-[#012d1d] font-semibold flex items-center gap-1 group-hover:text-[#80552c] bg-[#f3f4ec] px-3 py-1.5 rounded-full border border-[#c1c8c2]/30">
                <span className="material-symbols-outlined text-[14px]">person</span>
                Lihat Profil
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

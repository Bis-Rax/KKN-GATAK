import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section
      id="beranda"
      className="relative min-h-[750px] md:h-[819px] flex items-center justify-center scroll-mt-20 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-10000"
        style={{
          backgroundImage: `url('/homepage1.jpeg')`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#012d1d]/60 via-[#012d1d]/45 to-[#012d1d]/70 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 text-center px-4 md:px-6 max-w-[900px] mx-auto flex flex-col items-center">
        {/* Village Tag */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white/90 text-xs md:text-sm font-medium shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Sleman, DI Yogyakarta &bull; Portal Resmi Dusun</span>
        </div>

        {/* Main Title */}
        <h1 className="text-white font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 drop-shadow-md">
          Dusun Gatak
        </h1>

        {/* Subtitle */}
        <p className="text-[#f9faf2] font-sans text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 font-normal leading-relaxed drop-shadow-sm opacity-95">
          Menjaga tradisi, merangkul kemajuan. Selamat datang di portal Dusun Gatak.
        </p>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#profil"
            className="inline-flex items-center gap-2 bg-[#012d1d] hover:bg-[#1b4332] text-white font-label-md text-sm sm:text-base py-3.5 px-8 rounded-full hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/20 transition-all duration-300 ease-in-out border border-white/20"
          >
            <span>Jelajahi Dusun Gatak</span>
            <span className="material-symbols-outlined text-[20px]">arrow_downward</span>
          </a>
        </div>

        {/* Key Highlights Quick Bar */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-6 w-full max-w-3xl">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 md:p-4 text-center border border-white/15">
            <p className="text-white font-serif text-xl md:text-2xl font-bold">120+</p>
            <p className="text-white/80 text-xs md:text-sm">Kepala Keluarga</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 md:p-4 text-center border border-white/15">
            <p className="text-white font-serif text-xl md:text-2xl font-bold">10+</p>
            <p className="text-white/80 text-xs md:text-sm">Sektor UMKM</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 md:p-4 text-center border border-white/15">
            <p className="text-white font-serif text-xl md:text-2xl font-bold">100%</p>
            <p className="text-white/80 text-xs md:text-sm">Nyeni</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 md:p-4 text-center border border-white/15">
            <p className="text-white font-serif text-xl md:text-2xl font-bold">2</p>
            <p className="text-white/80 text-xs md:text-sm">Program Yayasan</p>
          </div>
        </div>
      </div>
    </section>
  );
};

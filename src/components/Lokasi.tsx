import React, { useState } from 'react';

interface LokasiInfo {
  icon: string;
  label: string;
  value: string;
  color: string;
}

const lokasiInfoList: LokasiInfo[] = [
  {
    icon: 'location_on',
    label: 'Alamat Lengkap',
    value: 'Dusun Gatak, Kalurahan Bokoharjo, Kapanewon Prambanan, Kabupaten Sleman, D.I. Yogyakarta',
    color: '#80552c',
  },
  {
    icon: 'map',
    label: 'Kecamatan / Kapanewon',
    value: 'Prambanan, Kabupaten Sleman',
    color: '#012d1d',
  },
  {
    icon: 'schedule',
    label: 'Jam Pelayanan Balai Dusun',
    value: 'Senin – Jumat: 08:00 – 15:00 WIB',
    color: '#012d1d',
  },
  {
    icon: 'directions_car',
    label: 'Akses Transportasi',
    value: 'Dapat dijangkau kendaraan roda dua & roda empat. Akses jalan aspal tersedia.',
    color: '#80552c',
  },
];

const GOOGLE_MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.2258017246476!2d110.4857!3d-7.7524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5f8e8e8e8e8e%3A0x0!2sDusun+Gatak%2C+Bokoharjo%2C+Prambanan%2C+Sleman!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid';

const GOOGLE_MAPS_LINK =
  'https://maps.google.com/?q=Dusun+Gatak,+Bokoharjo,+Prambanan,+Sleman,+Yogyakarta';

export const Lokasi: React.FC = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section
      id="lokasi"
      className="py-16 md:py-20 px-4 md:px-6 max-w-[1200px] mx-auto scroll-mt-20 w-full"
    >
      {/* Section Header */}
      <div className="text-center mb-14">
        <span className="bg-[#ffdcbd] text-[#2c1600] px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider inline-block mb-3">
          Temukan Kami
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-[#012d1d] font-bold mb-4">
          Lokasi Dusun Gatak
        </h2>
        <p className="font-sans text-base md:text-lg text-[#414844] max-w-2xl mx-auto leading-relaxed">
          Dusun Gatak terletak di kawasan strategis Kapanewon Prambanan, Kabupaten Sleman, D.I.
          Yogyakarta — mudah dijangkau dari berbagai penjuru.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        {/* Google Maps Embed — 3/5 width on desktop */}
        <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(1,45,29,0.12)] border border-[#c1c8c2]/40 relative bg-[#edefe7] group">
          {/* Overlay shimmer while loading */}
          {!mapLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10 bg-[#edefe7]">
              <span className="material-symbols-outlined text-5xl text-[#80552c] animate-pulse">
                location_on
              </span>
              <p className="text-sm text-[#414844] font-medium">Memuat peta…</p>
            </div>
          )}
          <iframe
            src={GOOGLE_MAPS_EMBED_URL}
            title="Peta Lokasi Dusun Gatak"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setMapLoaded(true)}
            className={`w-full transition-opacity duration-500 ${mapLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
          {/* Open in Maps badge */}
          <a
            href={GOOGLE_MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-[#012d1d] text-xs font-bold px-4 py-2 rounded-full shadow-md flex items-center gap-1.5 hover:bg-[#012d1d] hover:text-white transition-all duration-300 group-hover:shadow-lg"
          >
            <span className="material-symbols-outlined text-[16px]">open_in_new</span>
            Buka di Google Maps
          </a>
        </div>

        {/* Info Cards — 2/5 width on desktop */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {lokasiInfoList.map((info, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#c1c8c2]/30 p-5 flex items-start gap-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${info.color}15` }}
              >
                <span
                  className="material-symbols-outlined text-[22px]"
                  style={{ color: info.color }}
                >
                  {info.icon}
                </span>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#80552c] mb-1">
                  {info.label}
                </p>
                <p className="text-sm text-[#414844] leading-relaxed">{info.value}</p>
              </div>
            </div>
          ))}

          {/* CTA Buttons */}
          <div className="grid grid-cols-2 gap-3 mt-2">
            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#012d1d] text-white text-xs font-bold py-3 px-4 rounded-xl hover:bg-[#1b4332] transition-colors shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]">directions</span>
              Petunjuk Arah
            </a>
            <a
              href={`https://maps.google.com/?q=Dusun+Gatak,+Bokoharjo,+Prambanan,+Sleman&layer=c`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#fec391] text-[#794e26] text-xs font-bold py-3 px-4 rounded-xl hover:bg-[#f0b070] transition-colors shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]">streetview</span>
              Street View
            </a>
          </div>

          {/* Coordinates Info */}
          <div className="bg-[#edefe7] rounded-xl px-4 py-3 flex items-center gap-3 border border-[#c1c8c2]/30">
            <span className="material-symbols-outlined text-[#012d1d] text-xl">my_location</span>
            <div>
              <p className="text-xs font-bold text-[#012d1d]">Koordinat GPS</p>
              <p className="text-xs text-[#414844] font-mono tracking-tight">-7.7524°S, 110.4857°E</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

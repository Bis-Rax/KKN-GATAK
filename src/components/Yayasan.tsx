import React from 'react';
import { FOUNDATION_PROGRAMS, FoundationProgram } from '../data';

interface YayasanProps {
  onSelectProgram: (program: FoundationProgram) => void;
}

export const Yayasan: React.FC<YayasanProps> = ({ onSelectProgram }) => {
  return (
    <section id="yayasan" className="py-16 md:py-20 px-4 md:px-6 max-w-[1200px] mx-auto scroll-mt-20 w-full">
      <div className="text-center mb-16">
        <span className="bg-[#ffdcbd] text-[#2c1600] px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider inline-block mb-3">
          Sosial & Kemasyarakatan
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-[#012d1d] font-bold mb-4">
          Yayasan Margomulyo Dusun Gatak
        </h2>
        <p className="font-sans text-base md:text-lg text-[#414844] max-w-2xl mx-auto leading-relaxed">
          Inisiatif utama Yayasan dalam mendukung perkembangan holistik masyarakat Dusun Gatak melalui pendidikan dan pelestarian budaya.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {FOUNDATION_PROGRAMS.map((program) => (
          <div
            key={program.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(128,85,44,0.08)] hover:shadow-[0_8px_32px_rgba(128,85,44,0.15)] transition-all duration-300 border border-[#e2e3db] flex flex-col"
          >
            <div className="h-64 relative overflow-hidden bg-[#edefe7]">
              <img
                src={program.image}
                alt={program.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#ffdcbd] text-[#2c1600] px-3.5 py-1 rounded-full text-xs font-bold shadow-sm">
                {program.category}
              </div>
            </div>

            <div className="p-8 flex-grow flex flex-col space-y-4">
              <div className="flex items-center gap-3 text-[#012d1d]">
                <span className="material-symbols-outlined text-2xl text-[#80552c]">
                  {program.icon}
                </span>
                <h3 className="font-serif text-2xl font-bold">{program.title}</h3>
              </div>

              <p className="font-sans text-sm md:text-base text-[#414844] flex-grow leading-relaxed">
                {program.description}
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onSelectProgram(program)}
                  className="px-6 py-2.5 border-2 border-[#80552c] text-[#80552c] rounded-xl text-xs font-bold hover:bg-[#80552c] hover:text-white transition-all cursor-pointer inline-flex items-center gap-2"
                >
                  <span>
                    {program.category === 'Pendidikan'
                      ? 'Pelajari Lebih Lanjut'
                      : 'Lihat Galeri & Jadwal'}
                  </span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

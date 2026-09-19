import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Profil } from './components/Profil';
import { Berita } from './components/Berita';
import { Umkm } from './components/Umkm';
import { Yayasan } from './components/Yayasan';
import { Lokasi } from './components/Lokasi';
import { Footer } from './components/Footer';
import { DetailModal } from './components/DetailModal';
import { Official, NewsArticle, UmkmProduct, FoundationProgram } from './data';

export default function App() {
  const [modalData, setModalData] = useState<
    | { type: 'official'; item: Official }
    | { type: 'article'; item: NewsArticle }
    | { type: 'product'; item: UmkmProduct }
    | { type: 'program'; item: FoundationProgram }
    | null
  >(null);

  const [activeSection, setActiveSection] = useState('beranda');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['beranda', 'profil', 'berita', 'umkm', 'yayasan', 'lokasi'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#f9faf2] text-[#1a1c18] font-sans antialiased selection:bg-[#1b4332] selection:text-white">
      {/* Header Navigation */}
      <Header
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Profil Section (Sejarah & Kepengurusan) */}
        <Profil
          onSelectOfficial={(official) =>
            setModalData({ type: 'official', item: official })
          }
        />

        {/* Berita Terkini Section */}
        <Berita
          onSelectArticle={(article) =>
            setModalData({ type: 'article', item: article })
          }
        />

        {/* UMKM & Potensi Ekonomi Section */}
        <Umkm
          onSelectProduct={(product) =>
            setModalData({ type: 'product', item: product })
          }
        />

        {/* Yayasan Dusun Gatak Section */}
        <Yayasan
          onSelectProgram={(program) =>
            setModalData({ type: 'program', item: program })
          }
        />

        {/* Lokasi Dusun Gatak Section */}
        <Lokasi />
      </main>

      {/* Footer */}
      <Footer />

      {/* Detail Modal */}
      <DetailModal
        data={modalData}
        onClose={() => setModalData(null)}
      />
    </div>
  );
}

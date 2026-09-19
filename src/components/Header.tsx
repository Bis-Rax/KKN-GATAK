import React, { useState, useEffect } from 'react';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#beranda', id: 'beranda' },
    { name: 'Profil', href: '#profil', id: 'profil' },
    { name: 'Berita', href: '#berita', id: 'berita' },
    { name: 'UMKM', href: '#umkm', id: 'umkm' },
    { name: 'Yayasan', href: '#yayasan', id: 'yayasan' },
    { name: 'Lokasi', href: '#lokasi', id: 'lokasi' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? 'bg-[#f9faf2]/95 backdrop-blur-md border-[#c1c8c2]/40 shadow-sm py-3'
            : 'bg-[#f9faf2]/90 backdrop-blur-md border-[#c1c8c2]/30 py-4'
        }`}
      >
        <div className="flex justify-between items-center w-full px-4 md:px-6 max-w-[1200px] mx-auto h-12">
          {/* Logo */}
          <a
            href="#beranda"
            className="font-serif text-2xl font-bold text-[#012d1d] hover:text-[#80552c] transition-colors flex items-center gap-2"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#80552c] inline-block"></span>
            Dusun Gatak
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`font-label-md text-[14px] transition-all duration-300 relative py-1 ${
                    isActive
                      ? 'text-[#012d1d] font-semibold'
                      : 'text-[#414844] hover:text-[#80552c]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#012d1d] rounded-full"></span>
                  )}
                </a>
              );
            })}
          </nav>



          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#012d1d] p-2 rounded-lg hover:bg-[#edefe7] transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#f9faf2] border-b border-[#c1c8c2]/30 px-6 py-4 space-y-3 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-base font-medium py-2 border-b border-gray-200/50 ${
                  activeSection === link.id ? 'text-[#012d1d] font-bold' : 'text-[#414844]'
                }`}
              >
                {link.name}
              </a>
            ))}

          </div>
        )}
      </header>

      {/* Mobile Bottom Fixed Nav Bar (Matching exact prototype) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 w-full bg-[#e2e3db] border-t border-[#c1c8c2]/40 z-50 flex justify-around py-2 px-1 shadow-lg">
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;
          let icon = 'home';
          if (link.id === 'profil') icon = 'person';
          if (link.id === 'berita') icon = 'newspaper';
          if (link.id === 'umkm') icon = 'storefront';
          if (link.id === 'yayasan') icon = 'school';
          if (link.id === 'lokasi') icon = 'location_on';

          return (
            <a
              key={link.id}
              href={link.href}
              className={`flex flex-col items-center px-2 py-1 transition-colors ${
                isActive ? 'text-[#012d1d]' : 'text-[#414844]'
              }`}
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>
                {icon}
              </span>
              <span className="text-[10px] font-semibold mt-0.5">{link.name}</span>
            </a>
          );
        })}
      </nav>
    </>
  );
};

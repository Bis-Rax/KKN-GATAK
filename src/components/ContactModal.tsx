import React, { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: 'Pertanyaan Umum',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#f9faf2] w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-[#c1c8c2]/50 relative max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#012d1d] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-white/80 hover:text-white p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
          <span className="text-xs uppercase font-semibold text-[#86af99] tracking-wider block mb-1">
            Layanan Komunikasi Warga
          </span>
          <h3 className="font-serif text-2xl font-bold">Hubungi Dusun Gatak</h3>
          <p className="text-xs text-[#86af99] mt-1">
            Kirimkan pertanyaan, pengaduan, atau aspirasi langsung ke sekretariat dusun.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-grow space-y-6">
          {submitted ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-3xl">check_circle</span>
              </div>
              <h4 className="font-serif text-xl font-bold text-[#012d1d]">Pesan Terkirim!</h4>
              <p className="text-sm text-[#414844] max-w-xs mx-auto">
                Terima kasih, pesan Anda telah diteruskan ke sekretariat Dusun Gatak. Kami akan menghubungi Anda kembali.
              </p>
            </div>
          ) : (
            <>
              {/* Quick WhatsApp Contacts */}
              <div className="bg-[#edefe7] p-4 rounded-2xl space-y-2 border border-[#c1c8c2]/30">
                <p className="text-xs font-bold text-[#012d1d] uppercase tracking-wider">
                  Hotline WhatsApp Cepat
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <a
                    href="https://wa.me/6281234567890?text=Halo%20Bapak%20Dukuh%20Dusun%20Gatak"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white rounded-xl text-[#012d1d] font-semibold flex items-center gap-2 hover:bg-[#1b4332] hover:text-white transition-colors"
                  >
                    <span className="material-symbols-outlined text-emerald-600 text-[18px]">chat</span>
                    Bapak Dukuh
                  </a>
                  <a
                    href="https://wa.me/6281398765432?text=Halo%20Ketua%20RT%20Dusun%20Gatak"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white rounded-xl text-[#012d1d] font-semibold flex items-center gap-2 hover:bg-[#1b4332] hover:text-white transition-colors"
                  >
                    <span className="material-symbols-outlined text-emerald-600 text-[18px]">chat</span>
                    Ketua RT / RW
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                <div>
                  <label className="block text-xs font-bold text-[#012d1d] mb-1">Nama Lengkap</label>
                  <input
                    type="text"
                    required
                    placeholder="Masukkan nama Anda"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white rounded-xl border border-[#c1c8c2] focus:ring-2 focus:ring-[#012d1d] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#012d1d] mb-1">Nomor WhatsApp / HP</label>
                  <input
                    type="tel"
                    required
                    placeholder="Contoh: 08123456789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white rounded-xl border border-[#c1c8c2] focus:ring-2 focus:ring-[#012d1d] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#012d1d] mb-1">Kategori Pesan</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white rounded-xl border border-[#c1c8c2] focus:ring-2 focus:ring-[#012d1d] focus:outline-none"
                  >
                    <option value="Pertanyaan Umum">Pertanyaan Umum</option>
                    <option value="Pengaduan Lingkungan">Pengaduan Lingkungan</option>
                    <option value="Informasi UMKM">Informasi UMKM & Produk</option>
                    <option value="Yayasan & Pendidikan">Yayasan & Pendidikan</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#012d1d] mb-1">Pesan / Aspirasi</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Tuliskan pesan Anda..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white rounded-xl border border-[#c1c8c2] focus:ring-2 focus:ring-[#012d1d] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#012d1d] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#1b4332] transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">send</span>
                  Kirim Pesan
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

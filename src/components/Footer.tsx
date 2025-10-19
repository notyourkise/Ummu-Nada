"use client";

export default function Footer() {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#001f2e] via-[#003049] to-[#001f2e] text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#669BBC] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#C1121F] rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-screen-2xl px-3 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-2">UMMU NADA</h3>
              <p className="text-sm text-white/70 italic">Aneka Kue Murah</p>
            </div>
            <p className="text-sm text-white/80 leading-relaxed mb-4">
              Warung UMKM yang menyediakan berbagai macam produk makanan dan kue
              dari mitra lokal di Balikpapan.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/90">
              <svg
                className="w-5 h-5 text-[#25D366] flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z" />
              </svg>
              <span className="font-semibold">Buka: 05:00 - 12:00 WIB</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#FFE8C5]">
              Menu Cepat
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#tentang"
                  onClick={(e) => handleClick(e, "#tentang")}
                  className="text-sm text-white/80 hover:text-[#FFE8C5] transition-colors inline-flex items-center gap-2 group cursor-pointer"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                  Siapa Kami
                </a>
              </li>
              <li>
                <a
                  href="#produk"
                  onClick={(e) => handleClick(e, "#produk")}
                  className="text-sm text-white/80 hover:text-[#FFE8C5] transition-colors inline-flex items-center gap-2 group cursor-pointer"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                  Top Menu
                </a>
              </li>
              <li>
                <a
                  href="#mitra"
                  onClick={(e) => handleClick(e, "#mitra")}
                  className="text-sm text-white/80 hover:text-[#FFE8C5] transition-colors inline-flex items-center gap-2 group cursor-pointer"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                  Jadi Mitra
                </a>
              </li>
              <li>
                <a
                  href="#lokasi"
                  onClick={(e) => handleClick(e, "#lokasi")}
                  className="text-sm text-white/80 hover:text-[#FFE8C5] transition-colors inline-flex items-center gap-2 group cursor-pointer"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                  Lokasi & Jam
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#FFE8C5]">Hubungi</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/6281254711633"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/80 hover:text-[#25D366] transition-colors inline-flex items-center gap-2 group"
                >
                  <svg
                    className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span>0812-5471-1633</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/ummunada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/80 hover:text-pink-400 transition-colors inline-flex items-center gap-2 group"
                >
                  <svg
                    className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>@ummunada</span>
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com/@ummunada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/80 hover:text-black transition-colors inline-flex items-center gap-2 group"
                >
                  <svg
                    className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                  </svg>
                  <span>@ummunada</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#FFE8C5]">Lokasi</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm text-white/80">
                <svg
                  className="w-5 h-5 text-[#669BBC] flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <div>
                  <p className="font-semibold text-white">
                    Aneka Kue Murah Ummu Nada
                  </p>
                  <p className="leading-relaxed">
                    Jl. Projakal, Batu Ampar
                    <br />
                    Balikpapan Utara
                    <br />
                    Kalimantan Timur 76136
                  </p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/place/ANEKA+KUE+MURAH+UMMU+NADA/@-1.2035229,116.8557864,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#669BBC] hover:text-[#FFE8C5] transition-colors font-semibold group"
              >
                <span className="group-hover:translate-x-1 transition-transform">
                  📍
                </span>
                Lihat di Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/70">
              © {new Date().getFullYear()} Ummu Nada. Semua hak cipta
              dilindungi.
            </p>
            <div className="flex items-center gap-4 text-sm text-white/70">
              <span>Dibuat dengan ❤️ di Balikpapan</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

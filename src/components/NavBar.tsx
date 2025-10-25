"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "#hero", label: "Beranda" },
  { href: "#tentang", label: "Tentang" },
  { href: "#produk", label: "Menu" },
  { href: "#mitra", label: "Mitra" },
  { href: "#lokasi", label: "Lokasi" },
];

export default function NavBar() {
  const [hasBorder, setHasBorder] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Show border only after user scrolls down from the very top
    const onScroll = () => setHasBorder(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const navbarHeight = 120; // Increased to match new navbar height (h-24 = 96px + padding)
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false); // Close mobile menu after click
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          hasBorder
            ? "border-b border-white/10 bg-[#003049]/95 backdrop-blur shadow-sm"
            : "border-b border-transparent bg-[#003049]/90 backdrop-blur shadow-none"
        }`}
      >
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-6 lg:px-8 h-24 sm:h-20 flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-12 w-12 sm:h-12 sm:w-12 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/logo_ummu.jpg"
                alt="Logo Ummu Nada"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span
                className="font-semibold tracking-tight text-base sm:text-lg leading-tight whitespace-nowrap"
                style={{ color: "#C1121F" }}
              >
                UMMU NADA
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-white/70 whitespace-nowrap">
                Katering & Aneka Kue Murah
              </span>
            </div>
          </Link>
          <div className="flex items-center gap-4 sm:gap-6">
            <nav
              aria-label="Primary"
              className="hidden md:flex items-center gap-8 text-[15px]"
            >
              {links.map((l) => (
                <a
                  key={`${l.href}-${l.label}`}
                  href={l.href}
                  onClick={(e) => handleClick(e, l.href)}
                  className="relative pb-1 font-medium text-white/90 transition-all duration-300 hover:text-sky-400 hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(135,206,250,0.8)] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/40 rounded after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:origin-left after:bg-gradient-to-r after:from-sky-400 after:to-blue-400 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 after:shadow-[0_0_12px_rgba(135,206,250,0.7)]"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              type="button"
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop - Click outside to close */}
      {mobileMenuOpen && (
        <button
          type="button"
          className="md:hidden fixed inset-0 bg-black/50 z-30 transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        />
      )}

      {/* Mobile Menu Overlay - Compact dropdown style */}
      <div
        id="mobile-menu"
        aria-hidden={!mobileMenuOpen}
        className={`md:hidden fixed left-0 right-0 top-20 bg-gradient-to-b from-[#003049] to-[#004060] z-40 shadow-2xl transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="px-6 py-6 space-y-2">
          {links.map((l, index) => (
            <a
              key={`mobile-${l.href}-${l.label}`}
              href={l.href}
              onClick={(e) => handleClick(e, l.href)}
              tabIndex={mobileMenuOpen ? 0 : -1}
              className={`block py-3 px-4 text-white/90 font-medium hover:bg-white/10 hover:text-sky-400 rounded-lg transition-all duration-300 ${
                mobileMenuOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-full"
              }`}
              style={{
                transitionDelay: mobileMenuOpen ? `${index * 80}ms` : "0ms",
              }}
            >
              {l.label}
            </a>
          ))}

          {/* Mobile CTA with enhanced fade in animation */}
          <a
            href="https://wa.me/6281254711633"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={mobileMenuOpen ? 0 : -1}
            className={`block mt-4 py-3 px-4 bg-gradient-to-r from-[#C1121F] to-[#8B0000] text-white font-semibold text-center rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ${
              mobileMenuOpen
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 translate-x-full scale-95"
            }`}
            style={{
              transitionDelay: mobileMenuOpen ? "400ms" : "0ms",
            }}
          >
            Pesan via WhatsApp
          </a>
        </nav>
      </div>
    </>
  );
}
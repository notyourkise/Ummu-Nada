"use client";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/6281254711633"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 sm:bottom-24 left-4 sm:left-8 z-50 bg-[#25D366] text-white p-3 sm:p-4 rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300 group"
      aria-label="Hubungi Ummu Nada via WhatsApp, 0812-5471-1633"
    >
      <svg
        className="h-6 w-6 sm:h-7 sm:w-7 group-hover:rotate-12 transition-transform"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M17.472 14.382c-...z" />
      </svg>

      {/* Visual-only pulse effect - keep aria-hidden so screen readers ignore it */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" aria-hidden="true" />
      {/* Optional hidden text (redundant with aria-label, but safe) */}
      <span className="sr-only">Hubungi Ummu Nada via WhatsApp</span>
    </a>
  );
}
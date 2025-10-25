"use client";

import { useEffect, useRef, useState } from "react";

type LazyMapProps = {
  src: string;
  title?: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function LazyMap({ src, title = "Map", className, style }: LazyMapProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // If IntersectionObserver not available, load immediately
    if (typeof IntersectionObserver === "undefined") {
      setLoad(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLoad(true);
            obs.disconnect();
          }
        });
      },
      { rootMargin: "200px" }
    );

    obs.observe(containerRef.current);

    return () => obs.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={className} style={style}>
      {load ? (
        <iframe
          src={src}
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: "1rem", minHeight: "420px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
          className="rounded-xl"
        />
      ) : (
        <div className="w-full h-full min-h-[420px] rounded-xl bg-[#f3f4f6] flex items-center justify-center p-4">
          <div className="text-center">
            <p className="mb-3 text-sm text-[#374151]">Peta belum dimuat.</p>
            <button
              onClick={() => setLoad(true)}
              className="px-4 py-2 rounded bg-[#C1121F] text-white font-semibold shadow"
            >
              Muat Peta
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

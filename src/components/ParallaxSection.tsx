"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type ParallaxSectionProps = {
  children: React.ReactNode;
  backgroundImage: string;
  className?: string;
  id?: string;
};

export default function ParallaxSection({
  children,
  backgroundImage,
  className = "",
  id,
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!sectionRef.current || !bgRef.current) return;

      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(() => {
          const rect = sectionRef.current!.getBoundingClientRect();
          const scrollPosition = window.scrollY;
          const elementTop = rect.top + scrollPosition;
          const windowHeight = window.innerHeight;

          // Calculate parallax offset and write directly to DOM to avoid React re-renders
          if (rect.top < windowHeight && rect.bottom > 0) {
            const speed = 0.5; // Parallax speed (lower = slower)
            const offsetY = (scrollPosition - elementTop) * speed;
            bgRef.current!.style.transform = `translateY(${offsetY}px)`;
          } else {
            bgRef.current!.style.transform = `translateY(0px)`;
          }

          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial call: schedule via rAF to keep consistent
    window.requestAnimationFrame(handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Parallax Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateY(0px)`,
          willChange: "transform",
        }}
      >
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className="object-cover"
          quality={75}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}

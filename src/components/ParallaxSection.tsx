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
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollPosition = window.scrollY;
      const elementTop = rect.top + scrollPosition;
      const windowHeight = window.innerHeight;

      // Calculate parallax offset
      if (rect.top < windowHeight && rect.bottom > 0) {
        const speed = 0.5; // Parallax speed (lower = slower)
        setOffsetY((scrollPosition - elementTop) * speed);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

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
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateY(${offsetY}px)`,
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

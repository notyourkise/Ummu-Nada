"use client";
import Link from "next/link";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const base = [
    "relative isolate overflow-hidden group inline-flex items-center justify-center rounded-full",
    "px-5 py-2.5 text-sm font-semibold",
    "transition-all duration-300 ease-out",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "active:scale-[0.95]",
    "cursor-pointer",
  ].join(" ");
  const styles =
    variant === "primary"
      ? [
          // Gradient red button with modern look
          "bg-gradient-to-r from-[#C1121F] to-[#780000] text-white",
          "hover:from-[#780000] hover:to-[#C1121F]",
          "hover:scale-110 hover:-translate-y-1",
          // Subtle shine overlay
          "before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-300",
          "before:bg-[radial-gradient(120%_120%_at_0%_0%,rgba(255,255,255,0.4),transparent_60%)]",
          "hover:before:opacity-100",
          // Depth and focus with glow
          "shadow-lg hover:shadow-[0_15px_40px_rgba(193,18,31,0.6)]",
          "focus-visible:ring-[--brand-1]/40",
          "px-6 py-3 text-base font-bold",
          // Add shine animation
          "after:absolute after:inset-0 after:translate-x-[-100%] hover:after:translate-x-[100%]",
          "after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent",
          "after:transition-transform after:duration-700",
        ].join(" ")
      : [
          "border-2 border-white/40 text-white",
          "backdrop-blur-sm bg-white/10",
          "hover:bg-white/30 hover:border-white/80 hover:scale-110 hover:-translate-y-1",
          "hover:shadow-[0_15px_40px_rgba(255,255,255,0.3)]",
          "focus-visible:ring-[--brand-sky]/40",
          "px-6 py-3 text-base font-bold",
        ].join(" ");

  return (
    <Link href={href} className={`${base} ${styles} ${className}`.trim()}>
      {children}
    </Link>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SmoothScrolling from "@/components/SmoothScrolling";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ummu Nada — Katering & Aneka Kue Murah Balikpapan",
  description:
    "Warung UMKM di Balikpapan yang menyediakan aneka kue murah dan paket katering untuk acara keluarga, hajatan, dan momen spesial. Produk fresh setiap hari mulai jam 05:00 WIB.",
  keywords: [
    "ummu nada",
    "kue murah balikpapan",
    "katering balikpapan",
    "umkm balikpapan",
    "tahu bakso",
    "risol",
    "martabak mini",
    "aneka kue",
    "warung pagi balikpapan",
  ],
  authors: [{ name: "Ummu Nada" }],
  creator: "Ummu Nada",
  publisher: "Ummu Nada",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  openGraph: {
    title: "Ummu Nada — Katering & Aneka Kue Murah Balikpapan",
    description:
      "Warung UMKM di Balikpapan yang menyediakan aneka kue murah dan paket katering untuk acara keluarga, hajatan, dan momen spesial. Produk fresh setiap hari mulai jam 05:00 WIB.",
    url: "https://ummunada.local",
    siteName: "Ummu Nada",
    images: [
      {
        url: "/logo_ummu.jpg",
        width: 1200,
        height: 630,
        alt: "Ummu Nada - Aneka Kue Murah",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ummu Nada — Katering & Aneka Kue Murah Balikpapan",
    description:
      "Aneka kue murah dan paket katering untuk acara keluarga. Buka setiap hari 05:00-12:00 WIB.",
    images: ["/logo_ummu.jpg"],
  },
  icons: {
    icon: [
      { url: "/logo_ummu.jpg" },
      { url: "/logo_ummu.jpg", sizes: "32x32", type: "image/jpeg" },
      { url: "/logo_ummu.jpg", sizes: "16x16", type: "image/jpeg" },
    ],
    apple: [{ url: "/logo_ummu.jpg" }],
    shortcut: ["/logo_ummu.jpg"],
  },
  metadataBase: new URL("https://ummunada.local"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="lenis lenis-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScrolling />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

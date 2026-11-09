import type { Metadata, Viewport } from "next";
import { doctor } from "@/data";
import { newsreader, plusJakarta } from "@/lib/fonts";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBottomNav from "@/components/StickyBottomNav";
import FloatingButtons from "@/components/FloatingButtons";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: `${doctor.title} ${doctor.name} — ${doctor.specialistTitle} en ${doctor.city}`,
    template: `%s | ${doctor.title} ${doctor.name}`,
  },
  description: `${doctor.title} ${doctor.name}, ${doctor.specialistTitle} en ${doctor.city}, ${doctor.state}. Diagnóstico y tratamiento de enfermedades de la piel, cabello y uñas, con enfoque en la detección temprana del cáncer de piel.`,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${doctor.title} ${doctor.name} — ${doctor.specialistTitle} en ${doctor.city}`,
    description: doctor.bio,
    locale: "es_MX",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3b5343",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${newsreader.variable} ${plusJakarta.variable}`}>
      <body className="pb-16 md:pb-0">
        <GoogleAnalytics />
        <Header />
        {children}
        <Footer />
        <FloatingButtons />
        <StickyBottomNav />
        <CookieConsentBanner />
      </body>
    </html>
  );
}

import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";

// Tipografía elegida para "Clínica Dermatológica" (dirección generada con
// Stitch, 2026-10-30, al no haber guía de marca real): Newsreader (serif
// editorial cálida, encabezados/display — transmite autoridad clínica sin
// ser fría) + Plus Jakarta Sans (sans geométrica humanista, cuerpo/UI).
// Combinación no usada por ningún otro sitio del proyecto (ver
// .agents/rules/registro-disenos.md).
export const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

export const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

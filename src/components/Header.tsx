import Link from "next/link";
import type { Route } from "next";
import { doctor } from "@/data";
import { formatCredentials } from "@/lib/credentials";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

const navItems: { label: string; href: Route }[] = [
  { label: "Inicio", href: "/" },
  { label: "Enfermedades", href: "/enfermedades" },
  { label: "Servicios", href: "/servicios" },
  { label: "Síntomas", href: "/sintomas" },
  { label: "Contacto", href: "/contacto" },
];

/**
 * StickyHeader — composición propia de este sitio: nav inline a la
 * IZQUIERDA, monograma + nombre al CENTRO, CTA de WhatsApp a la DERECHA.
 * Verificada contra .agents/rules/registro-disenos.md (9 composiciones ya
 * registradas, ninguna usa exactamente esta distribución). Franja de
 * credenciales/COFEPRIS siempre visible arriba (AGENTS.md §4).
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="hidden bg-primary/5 px-4 py-1 text-center text-xs text-muted-foreground md:block">
        {formatCredentials(doctor)}
      </div>
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <nav aria-label="Principal" className="hidden items-center gap-6 md:flex">
          {navItems.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/"
          className="flex min-w-0 shrink-0 items-center gap-2.5 md:absolute md:left-1/2 md:-translate-x-1/2"
          aria-label={`${doctor.title} ${doctor.name}`}
        >
          <Logo size={40} />
          <span className="flex flex-col leading-none">
            <span className="whitespace-nowrap text-base font-semibold text-[color:var(--color-ink)]">
              {doctor.title} {doctor.name}
            </span>
            <span className="text-[10px] font-medium uppercase tracking-wide text-[color:var(--color-ink-soft)]">
              {doctor.specialty}
            </span>
          </span>
        </Link>

        <a
          href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`}
          target="_blank"
          rel="noreferrer"
          className="whitespace-nowrap rounded-full bg-[#25D366] px-4 py-2 text-xs font-medium text-white"
        >
          WhatsApp
        </a>
        <MobileMenu items={navItems} />
      </div>
    </header>
  );
}

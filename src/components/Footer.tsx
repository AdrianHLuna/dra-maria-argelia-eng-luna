import Link from "next/link";
import type { Route } from "next";
import { doctor, diseases, services, symptoms } from "@/data";
import Logo from "./Logo";

const MAX_LINKS = 6;

/**
 * Footer con "sitemap" de navegación — AGENTS.md §7 (no forma parte del
 * manual original en detalle, se añadió a pedido explícito del usuario):
 * una columna por categoría (Enfermedades/Servicios/Síntomas) con enlace a
 * la vista general y, debajo, una lista de las entidades más relevantes
 * (las primeras del array de datos) enlazando directo a su ficha. Refuerza
 * el internal linking del grafo de conocimiento (§2.3 del manual).
 */
export default function Footer() {
  const columns = [
    { title: "Enfermedades", href: "/enfermedades", items: diseases.map((d) => ({ label: d.name, href: `/enfermedades/${d.slug}` })) },
    { title: "Servicios", href: "/servicios", items: services.map((s) => ({ label: s.name, href: `/servicios/${s.slug}` })) },
    { title: "Síntomas", href: "/sintomas", items: symptoms.map((s) => ({ label: s.name, href: `/sintomas/${s.slug}` })) },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Monograma de respaldo centrado (sin logo real entregado, AGENTS.md
            §6) + nombre/especialidad como texto real debajo. */}
        <div className="mx-auto flex flex-col items-center text-center">
          <Logo size={72} />
          <p className="mt-4 text-lg font-semibold">
            {doctor.title} {doctor.name}
          </p>
          <p className="mt-1 text-sm opacity-80">{doctor.specialty}</p>
        </div>
        <address className="mx-auto mt-6 max-w-md text-center text-sm not-italic opacity-80">
          {doctor.address}
          <br />
          {doctor.schedule}
          <br />
          Tel: {doctor.phone} · Urgencias: {doctor.emergencyPhone}
        </address>

        {/* Sitemap de navegación por categoría. */}
        <nav aria-label="Mapa del sitio" className="mt-12 grid gap-8 border-t border-background/20 pt-8 sm:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title}>
              <Link href={col.href as Route} className="text-sm font-semibold uppercase tracking-wide opacity-90 hover:opacity-100">
                {col.title}
              </Link>
              <ul className="mt-3 space-y-2 text-sm opacity-70">
                {col.items.slice(0, MAX_LINKS).map((item) => (
                  <li key={item.href}>
                    <Link href={item.href as Route} className="hover:opacity-100 hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
                {col.items.length > MAX_LINKS && (
                  <li>
                    <Link href={col.href as Route} className="underline hover:opacity-100">
                      Ver todos
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </nav>

        <p className="mt-8 max-w-2xl text-xs opacity-60">
          El contenido de este sitio es informativo y educativo; no sustituye una consulta médica
          profesional.
        </p>
      </div>
    </footer>
  );
}

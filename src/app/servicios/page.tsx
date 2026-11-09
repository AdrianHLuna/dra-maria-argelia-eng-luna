import Link from "next/link";
import type { Metadata } from "next";
import { services } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import CardImageHeader from "@/components/CardImageHeader";

export const metadata: Metadata = {
  title: "Servicios y Procedimientos",
  description: "Catálogo de servicios y procedimientos médicos disponibles en consulta.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <main className="mx-auto max-w-6xl px-4">
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Servicios" }]} />
      <header className="mb-10 pt-4">
        <h1 className="font-heading text-3xl font-semibold text-[color:var(--color-ink)]">
          Servicios y procedimientos
        </h1>
        <p className="mt-2 text-[color:var(--color-ink-soft)]">
          Procedimientos dermatológicos diagnósticos y terapéuticos realizados en consultorio.
        </p>
      </header>
      <div className="grid gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article key={service.id} className="overflow-hidden rounded-2xl border border-border bg-white">
            <CardImageHeader src={service.image} alt={service.name} />
            <div className="p-5">
              <h2 className="font-semibold text-[color:var(--color-ink)]">{service.name}</h2>
              <p className="mt-2 text-sm text-[color:var(--color-ink-soft)]">{service.description}</p>
              <Link
                href={`/servicios/${service.slug}`}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Ver ficha del procedimiento
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

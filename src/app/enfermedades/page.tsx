import Link from "next/link";
import type { Metadata } from "next";
import { diseases } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import CardImageHeader from "@/components/CardImageHeader";

export const metadata: Metadata = {
  title: "Enfermedades que Atendemos",
  description: "Catálogo de enfermedades atendidas en consulta, con información clara para el paciente.",
  alternates: { canonical: "/enfermedades" },
};

export default function EnfermedadesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4">
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Enfermedades" }]} />
      <header className="mb-10 pt-4">
        <h1 className="font-heading text-3xl font-semibold text-[color:var(--color-ink)]">
          Enfermedades que atendemos
        </h1>
        <p className="mt-2 text-[color:var(--color-ink-soft)]">
          Guías médicas claras sobre las condiciones de piel, cabello y uñas más frecuentes.
        </p>
      </header>
      <div className="grid gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-3">
        {diseases.map((disease) => (
          <article key={disease.id} className="overflow-hidden rounded-2xl border border-border bg-white">
            <CardImageHeader src={disease.image} alt={disease.name} />
            <div className="p-5">
              <h2 className="font-semibold text-[color:var(--color-ink)]">{disease.name}</h2>
              <p className="mt-2 text-sm text-[color:var(--color-ink-soft)]">{disease.description.slice(0, 120)}...</p>
              <Link
                href={`/enfermedades/${disease.slug}`}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Ver guía médica
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

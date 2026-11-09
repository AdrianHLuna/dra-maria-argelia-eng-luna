import type { Metadata } from "next";
import type { Route } from "next";
import { notFound } from "next/navigation";
import { diseases, services, symptoms } from "@/data";
import { generateDiseaseSchemas } from "@/lib/schemas";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import MedicalReviewByline from "@/components/MedicalReviewByline";
import FloatingButtons from "@/components/FloatingButtons";
import CardImageHeader from "@/components/CardImageHeader";
import DetailSidebar from "@/components/DetailSidebar";
import IconCardList from "@/components/IconCardList";
import FaqAccordion from "@/components/FaqAccordion";

export const dynamicParams = false;

export function generateStaticParams() {
  return diseases.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata(props: PageProps<"/enfermedades/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const disease = diseases.find((d) => d.slug === slug);
  if (!disease) return {};

  return {
    title: disease.seo.title,
    description: disease.seo.description,
    keywords: disease.seo.keywords,
    alternates: { canonical: `/enfermedades/${disease.slug}` },
    openGraph: {
      title: disease.seo.title,
      description: disease.seo.description,
      url: `/enfermedades/${disease.slug}`,
      type: "article",
      locale: "es_MX",
    },
  };
}

export default async function DiseasePage(props: PageProps<"/enfermedades/[slug]">) {
  const { slug } = await props.params;
  const disease = diseases.find((d) => d.slug === slug);
  if (!disease) notFound();

  const relatedServices = services.filter((s) => disease.relatedServices?.includes(s.id));
  const relatedSymptoms = symptoms.filter((s) => disease.relatedSymptoms?.includes(s.id));
  const related = [
    ...relatedServices.map((s) => ({ name: s.name, href: `/servicios/${s.slug}` as Route })),
    ...relatedSymptoms.map((s) => ({ name: s.name, href: `/sintomas/${s.slug}` as Route })),
  ];

  return (
    <>
      <StructuredData data={generateDiseaseSchemas(disease)} />
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Enfermedades", href: "/enfermedades" },
          { label: disease.name },
        ]}
      />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-20 md:grid-cols-[1fr_320px]">
        <article>
          <header className="mb-6">
            <div className="arch-frame mb-6 overflow-hidden">
              <CardImageHeader src={disease.image} alt={disease.name} aspect="16/10" />
            </div>
            <h1 className="font-heading text-3xl font-semibold text-[color:var(--color-ink)]">{disease.name}</h1>
            <div className="mt-3">
              <MedicalReviewByline lastReviewed={disease.lastReviewed} />
            </div>
          </header>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[color:var(--color-ink)]">
              ¿Qué es {disease.name.toLowerCase()}?
            </h2>
            <p className="mt-3 text-[color:var(--color-ink-soft)]">{disease.description}</p>
          </section>

          <section className="mt-10">
            <h2 className="font-heading text-xl font-semibold text-[color:var(--color-ink)]">Síntomas</h2>
            <div className="mt-4">
              <IconCardList items={disease.symptoms} />
            </div>
          </section>

          <section className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <h2 className="font-heading text-xl font-semibold text-[color:var(--color-ink)]">Causas</h2>
              <ul className="mt-3 space-y-2 text-sm text-[color:var(--color-ink-soft)]">
                {disease.causes.map((c, i) => (
                  <li key={i} className="border-l-2 border-primary/30 pl-3">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-xl font-semibold text-[color:var(--color-ink)]">Factores de riesgo</h2>
              <ul className="mt-3 space-y-2 text-sm text-[color:var(--color-ink-soft)]">
                {disease.riskFactors.map((r, i) => (
                  <li key={i} className="border-l-2 border-[color:var(--color-secondary)]/40 pl-3">
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {disease.mexicoStats && (
            <section className="mt-10 arch-frame-sm border border-primary/15 bg-[color:var(--color-surface-blush)] p-6">
              <h2 className="font-heading text-lg font-semibold text-[color:var(--color-ink)]">Estadísticas en México</h2>
              <p className="mt-2 text-sm text-[color:var(--color-ink-soft)]">{disease.mexicoStats}</p>
            </section>
          )}

          <section className="mt-10">
            <h2 className="font-heading text-xl font-semibold text-[color:var(--color-ink)]">Complicaciones si no se trata</h2>
            <div className="mt-4">
              <IconCardList items={disease.complications} tone="alarm" />
            </div>
          </section>

          <section className="mt-10">
            <h2 className="font-heading text-xl font-semibold text-[color:var(--color-ink)]">Tratamientos</h2>
            <ul className="mt-4 space-y-2 text-sm text-[color:var(--color-ink-soft)]">
              {disease.treatments.map((t, i) => (
                <li key={i} className="border-l-2 border-primary/30 pl-3">
                  {t}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="font-heading text-xl font-semibold text-[color:var(--color-ink)]">Preguntas frecuentes</h2>
            <div className="mt-4">
              <FaqAccordion faqs={disease.faqs} />
            </div>
          </section>

          {disease.sources && disease.sources.length > 0 && (
            <section className="mt-10 text-sm text-[color:var(--color-ink-soft)]">
              <h2 className="font-semibold text-[color:var(--color-ink)]">Fuentes</h2>
              <ul className="mt-1 list-inside list-disc">
                {disease.sources.map((src, i) => (
                  <li key={i}>{src}</li>
                ))}
              </ul>
            </section>
          )}
        </article>

        <DetailSidebar related={related} />
      </div>

      <FloatingButtons context={disease.name.toLowerCase()} />
    </>
  );
}

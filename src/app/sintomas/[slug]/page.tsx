import type { Metadata } from "next";
import type { Route } from "next";
import { notFound } from "next/navigation";
import { diseases, symptoms } from "@/data";
import { generateSymptomSchemas } from "@/lib/schemas";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import MedicalReviewByline from "@/components/MedicalReviewByline";
import AlarmSignsSection from "@/components/AlarmSignsSection";
import FloatingButtons from "@/components/FloatingButtons";
import CardImageHeader from "@/components/CardImageHeader";
import DetailSidebar from "@/components/DetailSidebar";
import IconCardList from "@/components/IconCardList";
import FaqAccordion from "@/components/FaqAccordion";

export const dynamicParams = false;

export function generateStaticParams() {
  return symptoms.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/sintomas/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const symptom = symptoms.find((s) => s.slug === slug);
  if (!symptom) return {};

  return {
    title: symptom.seo.title,
    description: symptom.seo.description,
    keywords: symptom.seo.keywords,
    alternates: { canonical: `/sintomas/${symptom.slug}` },
    openGraph: {
      title: symptom.seo.title,
      description: symptom.seo.description,
      url: `/sintomas/${symptom.slug}`,
      type: "article",
      locale: "es_MX",
    },
  };
}

export default async function SymptomPage(props: PageProps<"/sintomas/[slug]">) {
  const { slug } = await props.params;
  const symptom = symptoms.find((s) => s.slug === slug);
  if (!symptom) notFound();

  const relatedConditions = diseases.filter((d) => symptom.relatedConditions.includes(d.id));
  const related = relatedConditions.map((d) => ({ name: d.name, href: `/enfermedades/${d.slug}` as Route }));

  return (
    <>
      <StructuredData data={generateSymptomSchemas(symptom)} />
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Síntomas", href: "/sintomas" },
          { label: symptom.name },
        ]}
      />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-20 md:grid-cols-[1fr_320px]">
        <article>
          <header className="mb-6">
            <div className="arch-frame mb-6 overflow-hidden">
              <CardImageHeader src={symptom.image} alt={symptom.name} aspect="16/10" />
            </div>
            <h1 className="font-heading text-3xl font-semibold text-[color:var(--color-ink)]">{symptom.name}</h1>
            <div className="mt-3">
              <MedicalReviewByline lastReviewed={symptom.lastReviewed} />
            </div>
          </header>

          <section>
            <h2 className="font-heading text-xl font-semibold text-[color:var(--color-ink)]">
              ¿Qué es {symptom.name.toLowerCase()}?
            </h2>
            <p className="mt-3 text-[color:var(--color-ink-soft)]">{symptom.description}</p>
          </section>

          <AlarmSignsSection signs={symptom.alarmSigns} />

          <section className="mt-10">
            <h2 className="font-heading text-xl font-semibold text-[color:var(--color-ink)]">Causas posibles</h2>
            <div className="mt-4">
              <IconCardList items={symptom.causes} />
            </div>
          </section>

          <section className="mt-10 arch-frame-sm border border-primary/15 bg-[color:var(--color-surface-blush)] p-6">
            <h2 className="font-heading text-lg font-semibold text-[color:var(--color-ink)]">¿Por qué consultar?</h2>
            <p className="mt-2 text-sm text-[color:var(--color-ink-soft)]">{symptom.whyConsult}</p>
          </section>

          {symptom.faqs && symptom.faqs.length > 0 && (
            <section className="mt-10">
              <h2 className="font-heading text-xl font-semibold text-[color:var(--color-ink)]">Preguntas frecuentes</h2>
              <div className="mt-4">
                <FaqAccordion faqs={symptom.faqs} />
              </div>
            </section>
          )}
        </article>

        <DetailSidebar related={related} />
      </div>

      <FloatingButtons context={symptom.name.toLowerCase()} />
    </>
  );
}

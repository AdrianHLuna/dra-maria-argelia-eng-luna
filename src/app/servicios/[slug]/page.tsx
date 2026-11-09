import type { Metadata } from "next";
import type { Route } from "next";
import { notFound } from "next/navigation";
import { Clock3, Syringe, HeartPulse, Timer } from "lucide-react";
import { diseases, services } from "@/data";
import { generateServiceSchemas } from "@/lib/schemas";
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
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/servicios/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    alternates: { canonical: `/servicios/${service.slug}` },
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      url: `/servicios/${service.slug}`,
      type: "article",
      locale: "es_MX",
    },
  };
}

export default async function ServicePage(props: PageProps<"/servicios/[slug]">) {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedConditions = diseases.filter((d) => service.relatedConditions?.includes(d.id));
  const related = relatedConditions.map((d) => ({ name: d.name, href: `/enfermedades/${d.slug}` as Route }));

  const quickFacts = [
    service.duration ? { icon: Clock3, label: "Duración", value: service.duration } : null,
    service.anesthesiaType ? { icon: Syringe, label: "Anestesia", value: service.anesthesiaType } : null,
    service.recoveryTime ? { icon: Timer, label: "Recuperación", value: service.recoveryTime } : null,
    { icon: HeartPulse, label: "¿Es doloroso?", value: service.isPainful ? "Puede causar molestia" : "Mínimamente molesto" },
  ].filter((f): f is { icon: typeof Clock3; label: string; value: string } => f !== null);

  return (
    <>
      <StructuredData data={generateServiceSchemas(service)} />
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Servicios", href: "/servicios" },
          { label: service.name },
        ]}
      />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-20 md:grid-cols-[1fr_320px]">
        <article>
          <header className="mb-6">
            <div className="arch-frame mb-6 overflow-hidden">
              <CardImageHeader src={service.image} alt={service.name} aspect="16/10" />
            </div>
            <h1 className="font-heading text-3xl font-semibold text-[color:var(--color-ink)]">{service.name}</h1>
            <div className="mt-3">
              <MedicalReviewByline lastReviewed={service.lastReviewed} />
            </div>
          </header>

          {quickFacts.length > 0 && (
            <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {quickFacts.map((fact, i) => (
                <div key={i} className="rounded-2xl border border-border bg-[color:var(--color-surface-blush)] p-4 text-center">
                  <fact.icon className="mx-auto h-5 w-5 text-primary" aria-hidden="true" />
                  <p className="mt-2 text-xs font-medium text-[color:var(--color-ink-soft)]">{fact.label}</p>
                  <p className="mt-0.5 text-sm font-semibold text-[color:var(--color-ink)]">{fact.value}</p>
                </div>
              ))}
            </section>
          )}

          <section className="mt-10">
            <h2 className="font-heading text-xl font-semibold text-[color:var(--color-ink)]">
              ¿En qué consiste {service.name.toLowerCase()}?
            </h2>
            <p className="mt-3 text-[color:var(--color-ink-soft)]">{service.longDescription}</p>
          </section>

          {service.technicalSpecs && (
            <section className="mt-10">
              <h2 className="font-heading text-xl font-semibold text-[color:var(--color-ink)]">Datos técnicos</h2>
              <dl className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {Object.entries(service.technicalSpecs).map(([key, value]) => (
                  <div key={key} className="rounded-2xl border border-border bg-white p-4">
                    <dt className="text-xs tracking-wide text-[color:var(--color-ink-soft)] uppercase">{key}</dt>
                    <dd className="mt-1 font-semibold text-[color:var(--color-ink)]">{value}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          <section className="mt-10">
            <h2 className="font-heading text-xl font-semibold text-[color:var(--color-ink)]">Beneficios</h2>
            <div className="mt-4">
              <IconCardList items={service.benefits} />
            </div>
          </section>

          {service.postOpRecommendations && service.postOpRecommendations.length > 0 && (
            <section className="mt-10">
              <h2 className="font-heading text-xl font-semibold text-[color:var(--color-ink)]">Cuidados posteriores</h2>
              <div className="mt-4">
                <IconCardList items={service.postOpRecommendations} tone="alarm" />
              </div>
            </section>
          )}

          {service.faqs && service.faqs.length > 0 && (
            <section className="mt-10">
              <h2 className="font-heading text-xl font-semibold text-[color:var(--color-ink)]">Preguntas frecuentes</h2>
              <div className="mt-4">
                <FaqAccordion faqs={service.faqs} />
              </div>
            </section>
          )}

          {service.priceRange && (
            <section className="mt-10 arch-frame-sm border border-primary/15 bg-[color:var(--color-surface-blush)] p-6">
              <h2 className="font-heading text-lg font-semibold text-[color:var(--color-ink)]">Precio</h2>
              <p className="mt-2 text-sm text-[color:var(--color-ink-soft)]">{service.priceRange}</p>
            </section>
          )}
        </article>

        <DetailSidebar related={related} />
      </div>

      <FloatingButtons context={service.name.toLowerCase()} />
    </>
  );
}

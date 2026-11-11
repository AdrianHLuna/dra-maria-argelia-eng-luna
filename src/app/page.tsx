import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Banknote,
  CreditCard,
  Landmark,
  ShieldCheck,
  Sun,
} from "lucide-react";
import { doctor, diseases, services, symptoms } from "@/data";
import { generateHomeSchemas } from "@/lib/schemas";
import { formatCredentials } from "@/lib/credentials";
import StructuredData from "@/components/StructuredData";
import CardImageHeader from "@/components/CardImageHeader";
import InstitutionBadge from "@/components/InstitutionBadge";
import AmbientAccents from "@/components/AmbientAccents";

function paymentIcon(method: string) {
  const m = method.toLowerCase();
  if (m.includes("efectivo")) return Banknote;
  if (m.includes("transferencia")) return Landmark;
  return CreditCard;
}

const featuredService = services[0];
const restServices = services.slice(1, 4);
const featuredDisease = diseases[0];
const restDiseases = diseases.slice(1, 7);

export default function Home() {
  return (
    <>
      <StructuredData data={generateHomeSchemas()} />

      {/* HERO — asimétrica, columna izquierda editorial + columna derecha con
          fotografía real de la doctora y tarjeta flotante de certificación. */}
      <section className="relative isolate overflow-hidden bg-[color:var(--color-surface-soft)]">
        <div className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-4 py-24 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-white px-4 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              Cédula profesional {doctor.cedula} · {doctor.cedulaInstitucion}
            </span>
            <h1 className="mt-6 max-w-xl text-4xl leading-[1.1] font-semibold text-[color:var(--color-ink)] md:text-6xl">
              Dermatología con diagnóstico{" "}
              <em className="font-heading font-medium text-primary not-italic md:italic">certero</em> y trato humano
            </h1>
            <p className="mt-6 max-w-md text-lg text-[color:var(--color-ink-soft)]">
              {doctor.title} {doctor.name} atiende en {doctor.city}, {doctor.state}, con más de 22 años dedicados al
              cuidado de la piel, el cabello y las uñas.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-white shadow-lg shadow-primary/20 transition-transform hover:scale-105"
              >
                Agendar cita por WhatsApp
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={`tel:${doctor.phone}`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-[color:var(--color-secondary)] px-7 py-3.5 font-semibold text-[color:var(--color-secondary)] transition-colors hover:bg-[color:var(--color-secondary)] hover:text-white"
              >
                Llamar al consultorio
              </a>
            </div>
            <p className="mt-6 text-xs text-[color:var(--color-ink-soft)]">{formatCredentials(doctor)}</p>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <AmbientAccents variant="about" />
            <div className="arch-frame relative z-10 aspect-[4/5] w-full overflow-hidden border border-primary/15 bg-[color:var(--color-surface-blush)]">
              <Image
                src="/images/hero.jpeg"
                alt={`${doctor.title} ${doctor.name}, ${doctor.specialistTitle}`}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
            <div className="arch-frame-sm absolute -bottom-6 -left-6 z-20 flex items-center gap-3 border border-border bg-white p-4 shadow-xl">
              <Award className="h-8 w-8 shrink-0 text-[color:var(--color-secondary)]" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-[color:var(--color-ink)]">Consejo Mexicano de Dermatología</p>
                <p className="text-xs text-[color:var(--color-ink-soft)]">Especialista certificada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE LA DOCTORA — ancho completo real, sin tarjeta ni grid; marco de
          retrato con esquina asimétrica + certificaciones con InstitutionBadge. */}
      <section aria-labelledby="about-heading" className="relative overflow-hidden px-4 py-20">
        <AmbientAccents variant="certifications" />
        <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div className="arch-frame relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden border border-border bg-[color:var(--color-surface-blush)] md:mx-0">
            <Image
              src="/images/aboutme.jpeg"
              alt={`${doctor.title} ${doctor.name} en consulta dermatológica`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 320px"
            />
          </div>
          <div>
            <h2 id="about-heading" className="font-heading text-3xl font-semibold text-[color:var(--color-ink)]">
              Sobre {doctor.title} {doctor.name}
            </h2>
            <p className="mt-5 text-[color:var(--color-ink-soft)]">{doctor.bio}</p>
            <p className="mt-4 text-[color:var(--color-ink-soft)]">{doctor.philosophy}</p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {doctor.education.map((ed, i) => (
                <div key={`ed-${i}`} className="flex items-center gap-4 rounded-2xl border border-border bg-white p-5">
                  <InstitutionBadge institution={ed.institution} />
                  <div>
                    <p className="font-semibold text-[color:var(--color-ink)]">{ed.degree}</p>
                    <p className="mt-1 text-sm text-[color:var(--color-ink-soft)]">{ed.institution}</p>
                  </div>
                </div>
              ))}
              {doctor.certifications.map((cert, i) => (
                <div key={`cert-${i}`} className="flex items-center gap-4 rounded-2xl border border-border bg-white p-5">
                  <InstitutionBadge institution={cert.institution} />
                  <div>
                    <p className="font-semibold text-[color:var(--color-ink)]">{cert.name}</p>
                    <p className="mt-1 text-sm text-[color:var(--color-ink-soft)]">{cert.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS — tratamiento de ancho completo: un procedimiento
          destacado a la izquierda, el resto en lista compacta a la derecha
          (nunca un grid uniforme de 3 columnas repetido en toda la página). */}
      <section aria-labelledby="services-heading" className="bg-[color:var(--color-surface-blush)] px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 id="services-heading" className="font-heading text-3xl font-semibold text-[color:var(--color-ink)]">
              Procedimientos dermatológicos
            </h2>
            <Link href="/servicios" className="text-sm font-semibold text-primary hover:underline">
              Ver todos los procedimientos
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-[1.3fr_1fr]">
            <article className="group overflow-hidden rounded-3xl border border-border bg-white md:grid md:grid-cols-2">
              <CardImageHeader src={featuredService.image} alt={featuredService.name} aspect="4/3" />
              <div className="flex flex-col justify-center p-8">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[color:var(--color-peach)]/35 px-3 py-1 text-xs font-semibold text-[color:var(--color-secondary)]">
                  Procedimiento destacado
                </span>
                <h3 className="mt-4 font-heading text-xl text-[color:var(--color-ink)]">{featuredService.name}</h3>
                <p className="mt-2 text-sm text-[color:var(--color-ink-soft)]">{featuredService.description}</p>
                <Link
                  href={`/servicios/${featuredService.slug}`}
                  className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white"
                >
                  Ver ficha del procedimiento
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>

            <div className="flex flex-col gap-4">
              {restServices.map((service) => (
                <Link
                  key={service.id}
                  href={`/servicios/${service.slug}`}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-white px-6 py-5 transition-colors hover:border-primary/40"
                >
                  <div>
                    <p className="font-semibold text-[color:var(--color-ink)]">{service.name}</p>
                    <p className="mt-1 text-sm text-[color:var(--color-ink-soft)]">{service.description.slice(0, 80)}...</p>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ENFERMEDADES — grid de tarjetas con imagen, encabezado destacado
          aparte (composición distinta a la de servicios). */}
      <section aria-labelledby="diseases-heading" className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="diseases-heading" className="font-heading text-3xl font-semibold text-[color:var(--color-ink)]">
              Enfermedades y condiciones que atendemos
            </h2>
            <p className="mt-3 text-[color:var(--color-ink-soft)]">
              Guías médicas claras sobre las condiciones de piel, cabello y uñas más frecuentes.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="sm:col-span-2 lg:col-span-1 lg:row-span-2 overflow-hidden rounded-3xl border border-border bg-[color:var(--color-surface-blush)]">
              <CardImageHeader src={featuredDisease.image} alt={featuredDisease.name} aspect="16/10" />
              <div className="p-6">
                <h3 className="font-heading text-lg text-[color:var(--color-ink)]">{featuredDisease.name}</h3>
                <p className="mt-2 text-sm text-[color:var(--color-ink-soft)]">
                  {featuredDisease.description.slice(0, 140)}...
                </p>
                <Link
                  href={`/enfermedades/${featuredDisease.slug}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  Ver guía médica
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
            {restDiseases.map((disease) => (
              <article key={disease.id} className="overflow-hidden rounded-3xl border border-border bg-white">
                <CardImageHeader src={disease.image} alt={disease.name} />
                <div className="p-5">
                  <h3 className="font-semibold text-[color:var(--color-ink)]">{disease.name}</h3>
                  <p className="mt-2 text-sm text-[color:var(--color-ink-soft)]">{disease.description.slice(0, 90)}...</p>
                  <Link
                    href={`/enfermedades/${disease.slug}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                  >
                    Ver guía médica
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/enfermedades" className="text-sm font-semibold text-primary hover:underline">
              Ver todas las enfermedades
            </Link>
          </div>
        </div>
      </section>

      {/* SÍNTOMAS — banda de ancho completo con fondo distinto, tarjetas en
          fila horizontal con scroll en móvil. */}
      <section aria-labelledby="symptoms-heading" className="bg-[color:var(--color-ink)] px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 id="symptoms-heading" className="font-heading text-3xl font-semibold text-white">
              ¿Qué síntoma te preocupa?
            </h2>
            <Link href="/sintomas" className="text-sm font-semibold text-[color:var(--color-peach)] hover:underline">
              Ver todos los síntomas
            </Link>
          </div>
          <div className="mt-10 flex gap-4 overflow-x-auto pb-4">
            {symptoms.slice(0, 8).map((symptom) => (
              <Link
                key={symptom.id}
                href={`/sintomas/${symptom.slug}`}
                className="group flex w-60 shrink-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-colors hover:bg-white/10"
              >
                <CardImageHeader src={symptom.image} alt={symptom.name} aspect="video" />
                <div className="p-4">
                  <p className="font-semibold text-white">{symptom.name}</p>
                  <p className="mt-2 text-sm text-white/70">{symptom.description.slice(0, 70)}...</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRECIO — con íconos de método de pago reales, no solo texto. */}
      <section aria-labelledby="price-heading" className="px-4 py-20">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-[color:var(--color-surface-blush)] p-10 text-center">
          <h2 id="price-heading" className="font-heading text-2xl font-semibold text-[color:var(--color-ink)]">
            Precio de consulta
          </h2>
          <p className="mt-4 text-5xl font-bold text-primary">${doctor.consultationPrice.toLocaleString("es-MX")} MXN</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {doctor.paymentMethods.map((method) => {
              const Icon = paymentIcon(method);
              return (
                <span
                  key={method}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm text-[color:var(--color-ink-soft)]"
                >
                  <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                  {method}
                </span>
              );
            })}
          </div>
          {doctor.insurances && doctor.insurances.length > 0 && (
            <p className="mt-6 text-sm text-[color:var(--color-ink-soft)]">{doctor.insurances.join(", ")}</p>
          )}
        </div>
      </section>

      {/* CTA FINAL — motivo gráfico propio de arcos concéntricos + fotografía
          de exploración dermatoscópica en marco editorial. */}
      <section aria-labelledby="cta-heading" className="relative overflow-hidden bg-primary px-4 py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          aria-hidden="true"
          style={{
            backgroundImage:
              "repeating-radial-gradient(circle at 20% 30%, transparent 0, transparent 40px, rgba(255,255,255,0.5) 42px)",
          }}
        />
        <AmbientAccents variant="cta" />
        <div className="relative mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div className="text-center md:text-left">
            <Sun className="mx-auto h-10 w-10 text-[color:var(--color-peach)] md:mx-0" aria-hidden="true" />
            <h2 id="cta-heading" className="mt-4 font-heading text-3xl font-semibold text-white">
              No dejes pasar tu salud de la piel
            </h2>
            <p className="mt-3 text-white/85">
              Agenda tu valoración con {doctor.title} {doctor.name} y recibe un diagnóstico claro desde la primera consulta.
            </p>
            <a
              href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-primary shadow-lg transition-transform hover:scale-105"
            >
              Agendar cita ahora
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <div className="arch-frame mx-auto w-full max-w-xs overflow-hidden border border-white/20 shadow-2xl">
            <Image
              src="/images/call_to_action.jpeg"
              alt={`${doctor.title} ${doctor.name} realizando revisión dermatoscópica`}
              width={1035}
              height={1600}
              className="h-auto w-full"
              sizes="(max-width: 768px) 100vw, 320px"
            />
          </div>
        </div>
      </section>

      {doctor.testimonials && doctor.testimonials.length > 0 && (
        <section aria-labelledby="testimonials-heading" className="bg-[color:var(--color-surface-blush)] px-4 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 id="testimonials-heading" className="font-heading text-2xl font-semibold text-[color:var(--color-ink)]">
              Testimonios
            </h2>
            <div className="mt-8 space-y-4">
              {doctor.testimonials.map((t) => (
                <blockquote key={t.id} className="rounded-2xl border border-border bg-white p-5">
                  <p className="text-sm text-[color:var(--color-ink-soft)]">&ldquo;{t.text}&rdquo;</p>
                  <footer className="mt-2 text-sm font-medium text-[color:var(--color-ink)]">
                    {t.patientName} —{" "}
                    <a href={t.sourceUrl} target="_blank" rel="noreferrer" className="underline">
                      fuente
                    </a>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

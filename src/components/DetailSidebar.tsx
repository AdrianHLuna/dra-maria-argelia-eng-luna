import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { Clock, MapPin, MessageCircle, Phone, ShieldAlert } from "lucide-react";
import { doctor } from "@/data";

interface RelatedItem {
  name: string;
  href: Route;
}

interface DetailSidebarProps {
  related?: RelatedItem[];
}

/**
 * Sidebar fijo (sticky en desktop) para páginas de detalle de enfermedad,
 * servicio y síntoma: tarjeta de CTA de la doctora + ubicación/horario +
 * urgencias + Relacionados. Mismo patrón probado en otros sitios del
 * proyecto, con el lenguaje visual propio de este sitio (arch-frame-sm,
 * salvia/terracota).
 */
export default function DetailSidebar({ related = [] }: DetailSidebarProps) {
  const whatsappLink = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  return (
    <aside className="space-y-5 md:sticky md:top-24">
      <div className="arch-frame-sm border border-primary/15 bg-[color:var(--color-surface-blush)] p-6 text-center">
        <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full border-2 border-primary/20">
          <Image
            src={doctor.photo}
            alt={`${doctor.title} ${doctor.name}`}
            fill
            className="object-cover object-top"
            sizes="80px"
          />
        </div>
        <p className="mt-3 font-semibold text-[color:var(--color-ink)]">
          {doctor.title} {doctor.name}
        </p>
        <p className="text-sm text-[color:var(--color-ink-soft)]">{doctor.specialistTitle}</p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="mt-5 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Agendar por WhatsApp
        </a>
        <a
          href={`tel:${doctor.phone}`}
          className="mt-3 flex items-center justify-center gap-2 rounded-full border border-primary/30 px-5 py-3 text-sm font-semibold text-primary"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Llamar al consultorio
        </a>
      </div>

      <div className="rounded-2xl border border-border bg-white p-6">
        <div className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          <p className="text-sm text-[color:var(--color-ink-soft)]">{doctor.address}</p>
        </div>
        <div className="mt-4 flex items-start gap-3">
          <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          <p className="text-sm text-[color:var(--color-ink-soft)]">{doctor.schedule}</p>
        </div>
        {doctor.googleMapsUrl && (
          <a
            href={doctor.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
          >
            Cómo llegar
          </a>
        )}
      </div>

      {doctor.emergencyPhone && (
        <div className="rounded-2xl border border-[color:var(--color-secondary)]/30 bg-[color:var(--color-peach)]/15 p-6">
          <div className="flex items-start gap-3">
            <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--color-secondary)]" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-[color:var(--color-ink)]">¿Es una urgencia?</p>
              <a href={`tel:${doctor.emergencyPhone}`} className="mt-1 block text-sm font-semibold text-[color:var(--color-secondary)]">
                Llamar ahora: {doctor.emergencyPhone}
              </a>
            </div>
          </div>
        </div>
      )}

      {related.length > 0 && (
        <div className="rounded-2xl border border-border bg-white p-6">
          <p className="text-sm font-semibold text-[color:var(--color-ink)]">Relacionados</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {related.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border border-border px-3 py-3 text-center text-xs font-medium text-[color:var(--color-ink-soft)] transition-colors hover:border-primary/40 hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}

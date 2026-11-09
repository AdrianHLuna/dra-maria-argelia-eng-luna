import type { Metadata } from "next";
import { Clock, MapPin, Phone, ShieldAlert } from "lucide-react";
import { doctor } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import MapFacade from "@/components/MapFacade";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Agenda tu cita con ${doctor.title} ${doctor.name} en ${doctor.city}. Dirección, horario y mapa.`,
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Contacto" }]} isDark={false} />

      <MapFacade address={doctor.address} whatsapp={doctor.whatsapp} />

      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-14 sm:grid-cols-3">
        <div className="rounded-2xl border border-border bg-white p-6">
          <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
          <h2 className="mt-3 font-semibold text-[color:var(--color-ink)]">Dirección</h2>
          <p className="mt-1 text-sm text-[color:var(--color-ink-soft)]">{doctor.address}</p>
        </div>
        <div className="rounded-2xl border border-border bg-white p-6">
          <Clock className="h-5 w-5 text-primary" aria-hidden="true" />
          <h2 className="mt-3 font-semibold text-[color:var(--color-ink)]">Horario</h2>
          <p className="mt-1 text-sm text-[color:var(--color-ink-soft)]">{doctor.schedule}</p>
        </div>
        <div className="rounded-2xl border border-border bg-white p-6">
          <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
          <h2 className="mt-3 font-semibold text-[color:var(--color-ink)]">Contacto directo</h2>
          <p className="mt-1 text-sm text-[color:var(--color-ink-soft)]">
            Tel: {doctor.phone}
            <br />
            WhatsApp: {doctor.whatsapp}
          </p>
        </div>
      </div>

      {doctor.emergencyPhone && (
        <div className="mx-auto mb-14 max-w-6xl px-4">
          <div className="flex items-center gap-3 rounded-2xl border border-[color:var(--color-secondary)]/30 bg-[color:var(--color-peach)]/15 p-6">
            <ShieldAlert className="h-5 w-5 shrink-0 text-[color:var(--color-secondary)]" aria-hidden="true" />
            <p className="text-sm text-[color:var(--color-ink)]">
              ¿Es una urgencia? Llama directamente al{" "}
              <a href={`tel:${doctor.emergencyPhone}`} className="font-semibold text-[color:var(--color-secondary)]">
                {doctor.emergencyPhone}
              </a>
              .
            </p>
          </div>
        </div>
      )}
    </main>
  );
}

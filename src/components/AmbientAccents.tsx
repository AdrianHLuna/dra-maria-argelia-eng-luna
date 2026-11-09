interface AmbientAccentsProps {
  variant?: "about" | "pricing" | "cta" | "certifications";
}

/**
 * Detalles decorativos de fondo — mezcla de anillos huecos y puntos (no solo
 * "bolitas" sólidas), con latido muy sutil y continuo. Reutilizable en
 * varias secciones del sitio, no exclusivo de una sola (lección reforzada
 * 2026-10-30 tras feedback real del usuario en otros sitios del proyecto).
 */
export default function AmbientAccents({ variant = "about" }: AmbientAccentsProps) {
  const layouts: Record<string, { cls: string }[]> = {
    about: [
      { cls: "motion-safe:animate-breathe-slow absolute left-[6%] top-10 h-8 w-8 rounded-full border-2 border-primary/20" },
      { cls: "motion-safe:animate-breathe absolute right-[10%] top-1/3 h-2.5 w-2.5 rounded-full bg-[color:var(--color-secondary)]/45" },
      { cls: "motion-safe:animate-breathe-slow absolute bottom-14 left-[18%] h-4 w-4 rounded-full border border-[color:var(--color-peach)]/60" },
      { cls: "motion-safe:animate-breathe absolute bottom-20 right-[22%] h-2 w-2 rounded-full bg-primary/30" },
    ],
    pricing: [
      { cls: "motion-safe:animate-breathe-slow absolute left-[4%] top-8 h-6 w-6 rounded-full border border-primary/20" },
      { cls: "motion-safe:animate-breathe absolute right-[6%] top-1/4 h-2 w-2 rounded-full bg-[color:var(--color-secondary)]/50" },
      { cls: "motion-safe:animate-breathe-slow absolute bottom-10 right-[14%] h-7 w-7 rounded-full border-2 border-[color:var(--color-peach)]/40" },
    ],
    cta: [
      { cls: "motion-safe:animate-breathe-slow absolute left-[10%] bottom-10 h-10 w-10 rounded-full border border-white/25" },
      { cls: "motion-safe:animate-breathe absolute right-[8%] top-10 h-2.5 w-2.5 rounded-full bg-white/40" },
    ],
    certifications: [
      { cls: "motion-safe:animate-breathe-slow absolute right-[5%] top-4 h-7 w-7 rounded-full border border-primary/15" },
      { cls: "motion-safe:animate-breathe absolute left-[8%] bottom-6 h-2 w-2 rounded-full bg-[color:var(--color-secondary)]/35" },
    ],
  };

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {layouts[variant].map((item, i) => (
        <span key={i} className={item.cls} />
      ))}
    </div>
  );
}

import { iconForText } from "@/lib/contentIcons";

interface IconCardListProps {
  items: string[];
  tone?: "default" | "alarm";
}

/**
 * Convierte una lista con viñetas en un grid de tarjetas con ícono contextual
 * — nunca una simple <ul> de texto plano en las páginas de detalle
 * (AGENTS.md §3, patrón ya probado en otros sitios del proyecto).
 */
export default function IconCardList({ items, tone = "default" }: IconCardListProps) {
  const toneClasses =
    tone === "alarm"
      ? "border-[color:var(--color-secondary)]/30 bg-[color:var(--color-peach)]/15"
      : "border-border bg-white";
  const iconColor = tone === "alarm" ? "text-[color:var(--color-secondary)]" : "text-primary";

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item, i) => {
        const Icon = iconForText(item);
        return (
          <div key={i} className={`flex items-start gap-3 rounded-2xl border p-4 ${toneClasses}`}>
            <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${iconColor}`} aria-hidden="true" />
            <p className="text-sm text-[color:var(--color-ink-soft)]">{item}</p>
          </div>
        );
      })}
    </div>
  );
}

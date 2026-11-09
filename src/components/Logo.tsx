interface LogoProps {
  size?: number;
  className?: string;
}

/**
 * Monograma de respaldo — no se entregó ningún isotipo real para este sitio
 * (primer caso del proyecto sin logo ni paleta de marca, AGENTS.md §6).
 * Iniciales de María Argelia Eng Luna en un círculo de borde salvia, con el
 * nombre completo como texto HTML real al lado (nunca texto incrustado en
 * una imagen que se vuelva ilegible a tamaño de header — mismo patrón ya
 * corregido en dra-martha-llamas tras feedback real del usuario).
 */
export default function Logo({ size = 40, className = "" }: LogoProps) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full border-2 font-heading font-semibold ${className}`}
      style={{
        width: size,
        height: size,
        borderColor: "var(--color-primary)",
        color: "var(--color-primary)",
        background: "var(--color-surface-soft)",
        fontSize: size * 0.34,
      }}
      aria-hidden="true"
    >
      MAE
    </span>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedStatProps {
  value: string;
  label: string;
}

/**
 * Cuenta de 0 al valor real cuando la tarjeta entra en el viewport — solo si
 * el valor contiene un número real. Valores "—" (dato pendiente, nunca
 * fabricado) se muestran estáticos, sin animar. Respeta
 * prefers-reduced-motion.
 */
export default function AnimatedStat({ value, label }: AnimatedStatProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const numericMatch = value.match(/\d[\d,]*/);
  const numericValue = numericMatch ? parseInt(numericMatch[0].replace(/,/g, ""), 10) : null;
  const prefix = numericMatch ? value.slice(0, numericMatch.index) : "";
  const suffix = numericMatch ? value.slice((numericMatch.index ?? 0) + numericMatch[0].length) : "";
  const [display, setDisplay] = useState(numericValue === null ? value : "0");

  useEffect(() => {
    if (numericValue === null) return;
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      const frame = requestAnimationFrame(() => setDisplay(numericValue.toLocaleString("es-MX")));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();
        const duration = 1200;
        const start = performance.now();
        const step = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const current = Math.round(numericValue * progress);
          setDisplay(current.toLocaleString("es-MX"));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [numericValue]);

  return (
    <p ref={ref} className="text-3xl font-bold text-[color:var(--color-ink)] md:text-4xl">
      {prefix}
      {display}
      {suffix}
      <span className="mt-1 block text-sm font-medium text-[color:var(--color-ink-soft)]">{label}</span>
    </p>
  );
}

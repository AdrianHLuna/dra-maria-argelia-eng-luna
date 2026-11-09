import {
  Activity,
  AlertCircle,
  Droplet,
  Flame,
  HeartPulse,
  Scissors,
  ShieldAlert,
  Sparkles,
  Sun,
  Thermometer,
  Users,
  type LucideIcon,
} from "lucide-react";

/**
 * Heurística simple de palabras clave → ícono contextual de lucide-react,
 * para convertir listas con viñetas en grids de tarjetas con ícono (nunca
 * un mismo ícono genérico repetido en toda la lista).
 */
export function iconForText(text: string): LucideIcon {
  const t = text.toLowerCase();
  if (t.includes("paciente")) return Users;
  if (t.includes("procedimiento") || t.includes("cirug")) return Scissors;
  if (t.includes("año") || t.includes("experiencia")) return Activity;
  if (t.includes("comezón") || t.includes("picazón") || t.includes("prurito")) return Sparkles;
  if (t.includes("ardor") || t.includes("quema")) return Flame;
  if (t.includes("sol") || t.includes("fotosensibilidad")) return Sun;
  if (t.includes("rocha") || t.includes("alerg")) return AlertCircle;
  if (t.includes("fiebre") || t.includes("temperatura")) return Thermometer;
  if (t.includes("mancha") || t.includes("lunar") || t.includes("piel")) return Droplet;
  if (t.includes("urgenc") || t.includes("alarma")) return ShieldAlert;
  return HeartPulse;
}

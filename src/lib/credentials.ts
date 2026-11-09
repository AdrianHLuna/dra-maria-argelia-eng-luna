import type { DoctorProfile } from "@/types/schema";

/**
 * Formato de credenciales aprendido de las páginas ya en producción (no del
 * manual): "Céd Prof: NNNNNNNN (SIGLAS)" por cada cédula que exista,
 * "cofepris:NNNN" sin espacio. Se usa en el Header y de nuevo en "Sobre mí"
 * (repetición intencional: es la estructura habitual, no un error).
 */
export function formatCredentials(doctor: DoctorProfile): string {
  const parts = [
    `Céd Prof: ${doctor.cedula}${doctor.cedulaInstitucion ? ` (${doctor.cedulaInstitucion})` : ""}`,
  ];
  if (doctor.cedulaEspecialidad) {
    parts.push(
      `Céd Esp: ${doctor.cedulaEspecialidad}${doctor.cedulaEspecialidadInstitucion ? ` (${doctor.cedulaEspecialidadInstitucion})` : ""}`
    );
  }
  if (doctor.cedulaSubespecialidad) {
    parts.push(
      `Céd Subesp: ${doctor.cedulaSubespecialidad}${doctor.cedulaSubespecialidadInstitucion ? ` (${doctor.cedulaSubespecialidadInstitucion})` : ""}`
    );
  }
  // COFEPRIS SIEMPRE se muestra, nunca se omite — "En trámite" si el doctor
  // aún no tiene folio confirmado (regla explícita del usuario, 2026-10-29).
  parts.push(`cofepris:${doctor.cofepris || "En trámite"}`);
  return parts.join(" · ");
}

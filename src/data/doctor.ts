import type { DoctorProfile } from "@/types/schema";

// Datos reales del intake de la Dra. María Argelia Eng Luna (2026-10-30).
// Sin fabricar nada no entregado: pacientes atendidos y procedimientos
// realizados quedan como "—" (pendiente real, nunca una cifra inventada).
// Cédulas corregidas directamente por el usuario tras detectar una
// duplicación en el intake original (ambas cédulas tenían el mismo número).
// Sin logo ni paleta de marca reales — primer sitio del proyecto sin
// NINGÚN material de marca entregado; ver globals.css y Header/Footer para
// el monograma de respaldo (AGENTS.md §6).
export const doctor: DoctorProfile = {
  name: "María Argelia Eng Luna",
  title: "Dra.",
  specialty: "Dermatología",
  specialistTitle: "Dermatóloga",
  cedula: "3396693",
  cedulaInstitucion: "UAT",
  cedulaEspecialidad: "5607219",
  cedulaEspecialidadInstitucion: "UNAM",
  // Sin folio COFEPRIS confirmado todavía — se muestra "En trámite" siempre
  // vía formatCredentials(), nunca se omite (regla universal del proyecto).
  cofepris: "",
  phone: "+528331279337",
  whatsapp: "+528332133857",
  emergencyPhone: "+528331279337",
  // Sin correo real proporcionado — valor técnico solo para satisfacer el
  // schema (Zod .email()), NUNCA mostrado en la UI (AGENTS.md §9, mismo
  // patrón ya usado en dr-franco-estrada).
  email: "contacto@dramariaargelia.com",
  address: "Hospital Médica Universidad, planta baja, consultorio 2. Privada Universidad 102, Colonia Universidad Sur, C.P. 89109, Tampico, Tamaulipas",
  city: "Tampico",
  state: "Tamaulipas",
  country: "México",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Privada+Universidad+102%2C+Colonia+Universidad+Sur%2C+Tampico%2C+Tamaulipas",
  consultationPrice: 1000,
  paymentMethods: ["Efectivo", "Transferencia", "Tarjeta de débito", "Tarjeta de crédito"],
  // La doctora NO acepta seguros médicos (dato real del intake, "no") —
  // se representa como una afirmación explícita, no se deja ambiguo.
  insurances: ["No acepta seguros médicos"],
  schedule: "Lunes a viernes, 11:00 a.m. a 2:00 p.m. y 6:00 p.m. a 8:00 p.m.",
  openingHours: ["Mo-Fr 11:00-14:00", "Mo-Fr 18:00-20:00"],
  acceptingNewPatients: true,
  photo: "/doctor-placeholder.jpg",
  bio: "La Dra. María Argelia Eng Luna es dermatóloga con más de 22 años de experiencia en Tampico, Tamaulipas. Egresada como Médico Cirujano de la Universidad Autónoma de Tamaulipas y especialista en Dermatología por la Universidad Nacional Autónoma de México (UNAM), atiende enfermedades de la piel, el cabello y las uñas, con especial atención al diagnóstico y tratamiento del cáncer de piel.",
  philosophy: "Cada paciente merece un diagnóstico dermatológico preciso y un trato humano, con la ciencia y la experiencia como base de cada decisión clínica.",
  experience: [],
  // Pacientes atendidos y procedimientos realizados: no se proporcionaron —
  // "—" explícito, nunca sustituido por otra métrica ni omitido (lección
  // reafirmada 2026-10-30 tras corregirse en dr-franco-estrada).
  stats: [
    { label: "Pacientes Atendidos", value: "—" },
    { label: "Años de Experiencia", value: "22" },
    { label: "Procedimientos Realizados", value: "—" },
  ],
  certifications: [
    { name: "Certificación", institution: "Consejo Mexicano de Dermatología" },
    { name: "Formación complementaria", institution: "Centro Médico Teknón, España" },
  ],
  education: [
    { degree: "Médico Cirujano", institution: "Universidad Autónoma de Tamaulipas" },
    { degree: "Especialidad en Dermatología", institution: "Universidad Nacional Autónoma de México" },
  ],
  sameAs: [],
  ga4Id: undefined,
};

import type { Symptom } from "@/types/schema";

// 10 síntomas: 4 dados por la doctora (comezón, ardor, enrojecimiento,
// ronchas) + 6 completados con síntomas dermatológicos reales para llegar
// al mínimo de 10 (AGENTS.md §3).
export const symptoms: Symptom[] = [
  {
    id: "sy-comezon",
    slug: "comezon",
    name: "Comezón",
    colloquialNames: ["picazón", "prurito"],
    description:
      "La comezón en la piel, también llamada prurito, es la sensación que provoca el deseo de rascarse. Puede ser leve y pasajera o intensa y persistente, y acompañar a muchas condiciones dermatológicas distintas, desde piel seca hasta infecciones por hongos o enfermedades inflamatorias crónicas.",
    causes: ["Piel seca", "Dermatitis atópica o de contacto", "Infecciones por hongos (tiña)", "Picaduras de insecto", "Reacciones alérgicas"],
    alarmSigns: ["Comezón intensa que no mejora con medidas básicas de cuidado de la piel", "Comezón generalizada en todo el cuerpo sin lesión visible", "Comezón acompañada de ictericia (piel u ojos amarillos)"],
    whyConsult: "Una comezón persistente o intensa puede indicar una condición dermatológica que requiere tratamiento específico, y en algunos casos ser señal de una condición de fondo que necesita evaluación médica.",
    faqs: [
      { question: "¿La comezón siempre indica alergia?", answer: "No. La comezón puede originarse por piel seca, infecciones por hongos, dermatitis, picaduras de insecto o enfermedades inflamatorias crónicas, no solo por alergias." },
      { question: "¿Rascarse empeora la comezón?", answer: "Sí. Rascarse puede dañar la barrera de la piel, aumentar la inflamación y favorecer infecciones secundarias, generando un ciclo de más comezón." },
    ],
    relatedConditions: ["d-dermatitis-atopica", "d-dermatitis-seborreica", "d-tina", "d-psoriasis"],
    lastReviewed: "2026-10-30",
    image: "/images/symptoms/comezon.jpg",
    seo: {
      title: "Comezón en la Piel | Dermatóloga en Tampico",
      description: "¿Comezón persistente en la piel? Valoración dermatológica con la Dra. María Argelia Eng Luna en Tampico, Tamaulipas.",
      keywords: ["comezón en la piel Tampico", "picazón en la piel", "dermatólogo en Tampico"],
    },
  },
  {
    id: "sy-ardor",
    slug: "ardor",
    name: "Ardor en la Piel",
    description:
      "El ardor en la piel es una sensación de calor o quemazón que puede presentarse sola o junto con enrojecimiento, y acompañar condiciones como rosácea, dermatitis o reacciones a productos tópicos. Identificar la causa específica permite un tratamiento dermatológico dirigido.",
    causes: ["Rosácea", "Dermatitis de contacto", "Uso de productos irritantes para la piel", "Exposición solar excesiva"],
    alarmSigns: ["Ardor intenso con ampollas extensas", "Ardor con fiebre o malestar general", "Ardor tras aplicar un producto nuevo con hinchazón del rostro"],
    whyConsult: "El ardor cutáneo persistente puede ser señal de una reacción o condición dermatológica activa que necesita tratamiento específico para evitar que empeore.",
    faqs: [
      { question: "¿El ardor en la piel es lo mismo que una quemadura solar?", answer: "No siempre. El ardor puede deberse a exposición solar, pero también a rosácea, dermatitis de contacto o reacción a un producto cosmético, por lo que conviene valorarlo si persiste." },
      { question: "¿Qué debo hacer si siento ardor después de usar un producto nuevo?", answer: "Suspender el producto de inmediato y, si el ardor persiste o se acompaña de enrojecimiento importante, buscar valoración dermatológica." },
    ],
    relatedConditions: ["d-rosacea"],
    lastReviewed: "2026-10-30",
    image: "/images/symptoms/ardor.jpg",
    seo: {
      title: "Ardor en la Piel | Dermatóloga en Tampico",
      description: "¿Ardor o sensación de quemazón en la piel? Consulta dermatológica con la Dra. María Argelia Eng Luna en Tampico.",
      keywords: ["ardor en la piel Tampico", "piel que arde", "dermatólogo en Tampico"],
    },
  },
  {
    id: "sy-enrojecimiento",
    slug: "enrojecimiento",
    name: "Enrojecimiento de la Piel",
    colloquialNames: ["piel roja"],
    description:
      "El enrojecimiento de la piel puede ser localizado o generalizado, transitorio o persistente, y es un signo común a múltiples condiciones dermatológicas, desde la rosácea hasta reacciones alérgicas o infecciones. El patrón y la zona afectada ayudan al dermatólogo a identificar la causa.",
    causes: ["Rosácea", "Dermatitis (atópica, de contacto o seborreica)", "Reacciones alérgicas", "Exposición solar"],
    alarmSigns: ["Enrojecimiento que se extiende rápidamente por el cuerpo", "Enrojecimiento con fiebre", "Enrojecimiento con dificultad para respirar (urgencia, no dermatológica)"],
    whyConsult: "El enrojecimiento persistente o recurrente amerita valoración dermatológica para identificar su causa y evitar que progrese sin tratamiento.",
    faqs: [
      { question: "¿El enrojecimiento facial persistente es normal?", answer: "El enrojecimiento facial que persiste por semanas o se repite con frecuencia no es algo a ignorar; puede ser un signo temprano de rosácea u otra condición dermatológica tratable." },
      { question: "¿El sol puede causar enrojecimiento sin ser quemadura?", answer: "Sí, algunas condiciones de la piel aumentan la sensibilidad solar y provocan enrojecimiento incluso con exposición breve, distinto de una quemadura solar clásica." },
    ],
    relatedConditions: ["d-rosacea", "d-dermatitis-atopica", "d-acne"],
    lastReviewed: "2026-10-30",
    image: "/images/symptoms/enrojecimiento.jpg",
    seo: {
      title: "Enrojecimiento de la Piel | Dermatóloga en Tampico",
      description: "¿Enrojecimiento persistente en la piel o el rostro? Valoración con la Dra. María Argelia Eng Luna en Tampico, Tamaulipas.",
      keywords: ["enrojecimiento de la piel Tampico", "piel roja Tampico", "dermatólogo en Tampico"],
    },
  },
  {
    id: "sy-ronchas",
    slug: "ronchas",
    name: "Ronchas",
    colloquialNames: ["urticaria"],
    description:
      "Las ronchas son lesiones elevadas, rojizas y que suelen causar comezón intensa, que aparecen y desaparecen en cuestión de horas, cambiando de lugar en la piel. Son el signo característico de la urticaria, una reacción cutánea que puede desencadenarse por alimentos, medicamentos, infecciones o causas físicas.",
    causes: ["Reacción alérgica a alimentos o medicamentos", "Infecciones recientes", "Contacto con alérgenos (látex, picaduras)", "Causas físicas (frío, calor, presión en la piel)"],
    alarmSigns: ["Ronchas con hinchazón de labios, párpados o garganta", "Dificultad para respirar o tragar (urgencia, llamar a emergencias)", "Ronchas que no mejoran después de varios días"],
    whyConsult: "Las ronchas recurrentes o que persisten por más de unas horas requieren valoración dermatológica para identificar el desencadenante y dar tratamiento dirigido.",
    faqs: [
      { question: "¿Las ronchas siempre son por alergia a un alimento?", answer: "No siempre. Las ronchas pueden desencadenarse por medicamentos, infecciones, contacto físico con frío o calor, o causas que nunca llegan a identificarse por completo, no solo alimentos." },
      { question: "¿Cuándo las ronchas son una urgencia?", answer: "Si las ronchas se acompañan de hinchazón en labios, párpados o garganta, o dificultad para respirar, es una urgencia médica real y debe acudirse de inmediato a un servicio de urgencias, no a consulta programada." },
    ],
    relatedConditions: [],
    lastReviewed: "2026-10-30",
    image: "/images/symptoms/ronchas.jpg",
    seo: {
      title: "Ronchas en la Piel (Urticaria) | Dermatóloga en Tampico",
      description: "¿Ronchas que aparecen y desaparecen en la piel? Valoración dermatológica con la Dra. María Argelia Eng Luna en Tampico.",
      keywords: ["ronchas en la piel Tampico", "urticaria Tampico", "dermatólogo en Tampico"],
    },
  },
  {
    id: "sy-descamacion",
    slug: "descamacion-piel-seca",
    name: "Descamación o Piel Seca",
    description:
      "La descamación es el desprendimiento visible de capas superficiales de la piel, generalmente asociado a resequedad. Puede ser leve y estacional, o ser un signo de condiciones como dermatitis, psoriasis o dermatitis seborreica, que requieren tratamiento dermatológico específico.",
    causes: ["Resequedad de la piel por clima o baños prolongados", "Dermatitis atópica", "Psoriasis", "Dermatitis seborreica"],
    alarmSigns: ["Descamación extensa en gran parte del cuerpo", "Descamación con grietas profundas que sangran", "Descamación acompañada de fiebre"],
    whyConsult: "La descamación persistente, aunque parezca solo resequedad, puede ser el signo visible de una condición dermatológica de fondo que mejora notablemente con tratamiento dirigido.",
    faqs: [
      { question: "¿La piel descamada siempre es solo piel seca?", answer: "No necesariamente. La descamación persistente o en placas puede ser signo de psoriasis, dermatitis seborreica u otra condición que requiere diagnóstico dermatológico, no solo hidratación." },
      { question: "¿Usar más crema hidratante resuelve la descamación?", answer: "Ayuda en casos de resequedad simple, pero si la descamación persiste a pesar de hidratación constante, es necesario valorar una causa dermatológica de fondo." },
    ],
    relatedConditions: ["d-psoriasis", "d-dermatitis-atopica", "d-dermatitis-seborreica", "d-tina"],
    lastReviewed: "2026-10-30",
    image: "/images/symptoms/descamacion-piel-seca.jpg",
    seo: {
      title: "Descamación y Piel Seca | Dermatóloga en Tampico",
      description: "¿Piel descamada o reseca de forma persistente? Consulta con la Dra. María Argelia Eng Luna en Tampico, Tamaulipas.",
      keywords: ["piel descamada Tampico", "piel seca Tampico", "dermatólogo en Tampico"],
    },
  },
  {
    id: "sy-manchas",
    slug: "manchas-en-la-piel",
    name: "Manchas en la Piel",
    description:
      "Las manchas en la piel son cambios de color que pueden ser más claros o más oscuros que el tono natural, localizados o extensos. Pueden deberse a melasma, hiperpigmentación postinflamatoria (secuela de acné o heridas), o, con menor frecuencia, ser un signo de alerta de cáncer de piel si se trata de un lunar que cambia.",
    causes: ["Melasma", "Hiperpigmentación postinflamatoria (secuela de acné)", "Exposición solar acumulada", "Cambios en un lunar existente"],
    alarmSigns: ["Mancha o lunar que cambia de forma, color o tamaño rápidamente", "Mancha que sangra o no cicatriza", "Nueva mancha asimétrica con bordes irregulares en un adulto"],
    whyConsult: "Aunque la mayoría de las manchas son benignas (melasma o secuelas de acné), cualquier cambio en un lunar existente debe valorarse sin demora para descartar cáncer de piel.",
    faqs: [
      { question: "¿Toda mancha nueva en la piel es preocupante?", answer: "La mayoría de las manchas (melasma, secuelas de acné) son benignas, pero cualquier lunar o mancha que cambie de forma, color o tamaño debe valorarse con un dermatólogo sin demora." },
      { question: "¿Las manchas por el sol se quitan solas?", answer: "No suelen desaparecer solas; requieren tratamiento dermatológico dirigido (tópico, peeling o láser según el caso) y fotoprotección constante." },
    ],
    relatedConditions: ["d-melasma", "d-cancer-piel", "d-acne"],
    lastReviewed: "2026-10-30",
    image: "/images/symptoms/manchas-en-la-piel.jpg",
    seo: {
      title: "Manchas en la Piel | Dermatóloga en Tampico",
      description: "¿Manchas nuevas o persistentes en la piel? Valoración dermatológica con la Dra. María Argelia Eng Luna en Tampico.",
      keywords: ["manchas en la piel Tampico", "manchas en la cara Tampico", "dermatólogo en Tampico"],
    },
  },
  {
    id: "sy-caida-cabello",
    slug: "caida-de-cabello",
    name: "Caída de Cabello",
    description:
      "La caída de cabello notoriamente mayor a lo habitual, o en zonas localizadas, es motivo frecuente de consulta dermatológica. Puede relacionarse con alopecia androgenética, efluvio telógeno por estrés o enfermedad reciente, alteraciones hormonales o deficiencias nutricionales.",
    causes: ["Alopecia androgenética", "Efluvio telógeno (estrés, posparto, enfermedad reciente)", "Alteraciones de tiroides", "Deficiencias nutricionales"],
    alarmSigns: ["Caída de cabello súbita y muy notoria en pocas semanas", "Zonas de calvicie bien definidas con enrojecimiento o descamación", "Caída de cabello acompañada de otros síntomas generales (fatiga, cambios de peso)"],
    whyConsult: "Identificar el tipo específico de caída de cabello permite iniciar tratamiento dermatológico oportuno, antes de que la pérdida sea extensa o difícil de revertir.",
    faqs: [
      { question: "¿Cuánta caída de cabello es normal al día?", answer: "Perder entre 50 y 100 cabellos al día se considera normal. Una caída claramente mayor o en zonas localizadas debe valorarse con un dermatólogo." },
      { question: "¿El estrés puede causar caída de cabello?", answer: "Sí, el estrés físico o emocional intenso puede desencadenar un efluvio telógeno, una caída de cabello generalizada y temporal que suele mejorar al resolverse la causa." },
    ],
    relatedConditions: ["d-alopecia"],
    lastReviewed: "2026-10-30",
    image: "/images/symptoms/caida-de-cabello.jpg",
    seo: {
      title: "Caída de Cabello | Dermatóloga en Tampico",
      description: "¿Caída de cabello mayor a lo normal? Valoración dermatológica con la Dra. María Argelia Eng Luna en Tampico, Tamaulipas.",
      keywords: ["caída de cabello Tampico", "pérdida de cabello Tampico", "dermatólogo capilar"],
    },
  },
  {
    id: "sy-cambios-lunares",
    slug: "cambios-en-lunares-existentes",
    name: "Cambios en Lunares Existentes",
    description:
      "Un cambio en un lunar ya existente —en su forma, color, tamaño, borde o si empieza a sangrar o causar comezón— es uno de los signos más importantes a vigilar en dermatología, ya que puede ser una señal temprana de melanoma, el tipo más agresivo de cáncer de piel.",
    causes: ["Transformación maligna de un lunar preexistente", "Irritación mecánica repetida de un lunar", "Crecimiento benigno natural (menos preocupante si es uniforme y lento)"],
    alarmSigns: ["Asimetría nueva en un lunar antes simétrico", "Bordes irregulares o mal definidos", "Cambio de color o varios colores dentro del mismo lunar", "Diámetro mayor a 6 mm en crecimiento", "Lunar que sangra, pica o no cicatriza"],
    whyConsult: "Cualquier cambio en un lunar existente debe valorarse cuanto antes con un dermatólogo; la detección temprana del melanoma es determinante para el pronóstico.",
    faqs: [
      { question: "¿Qué cambios en un lunar debo vigilar?", answer: "La regla ABCDE: Asimetría, Bordes irregulares, Color no uniforme, Diámetro mayor a 6 mm, y Evolución o cambio reciente. Cualquiera de estos signos amerita valoración dermatológica sin demora." },
      { question: "¿Es necesario revisarse los lunares aunque no haya cambios notorios?", answer: "Sí, especialmente en personas con muchos lunares, piel clara o antecedentes familiares de cáncer de piel, se recomienda una revisión dermatológica periódica con dermatoscopia." },
    ],
    relatedConditions: ["d-cancer-piel"],
    lastReviewed: "2026-10-30",
    image: "/images/symptoms/cambios-en-lunares-existentes.jpg",
    seo: {
      title: "Cambios en Lunares | Dermatóloga en Tampico",
      description: "¿Un lunar cambió de forma, color o tamaño? Valoración urgente con la Dra. María Argelia Eng Luna en Tampico, Tamaulipas.",
      keywords: ["lunar sospechoso Tampico", "cambio en lunar Tampico", "dermatólogo oncológico Tampico"],
    },
  },
  {
    id: "sy-ampollas",
    slug: "ampollas",
    name: "Ampollas",
    description:
      "Las ampollas son lesiones elevadas llenas de líquido que pueden formarse por fricción, quemaduras, infecciones virales (como el herpes) o enfermedades dermatológicas ampollosas. El tamaño, la ubicación y la causa determinan el tratamiento dermatológico adecuado.",
    causes: ["Fricción o roce repetido en la piel", "Infección viral (herpes simple o zóster)", "Reacción a contacto con una sustancia irritante", "Enfermedades ampollosas de la piel"],
    alarmSigns: ["Ampollas extensas en una gran parte del cuerpo", "Ampollas con fiebre o malestar general", "Ampollas dolorosas junto a la boca o los ojos"],
    whyConsult: "Las ampollas recurrentes, extensas o acompañadas de otros síntomas requieren valoración dermatológica para identificar la causa y evitar complicaciones como infección secundaria.",
    faqs: [
      { question: "¿Debo reventar una ampolla?", answer: "No se recomienda reventar las ampollas en casa, ya que aumenta el riesgo de infección; si es necesario drenarla, debe hacerse en consultorio con técnica estéril." },
      { question: "¿Las ampollas siempre son por quemadura?", answer: "No, también pueden originarse por fricción, infecciones virales como el herpes, o enfermedades dermatológicas específicas que requieren diagnóstico." },
    ],
    relatedConditions: [],
    lastReviewed: "2026-10-30",
    image: "/images/symptoms/ampollas.jpg",
    seo: {
      title: "Ampollas en la Piel | Dermatóloga en Tampico",
      description: "¿Ampollas recurrentes o sin causa clara? Valoración dermatológica con la Dra. María Argelia Eng Luna en Tampico.",
      keywords: ["ampollas en la piel Tampico", "dermatólogo en Tampico", "ampollas en la piel Tamaulipas"],
    },
  },
  {
    id: "sy-sensibilidad-sol",
    slug: "sensibilidad-al-sol",
    name: "Sensibilidad al Sol",
    colloquialNames: ["fotosensibilidad"],
    description:
      "La sensibilidad al sol o fotosensibilidad es una reacción exagerada de la piel a la exposición solar, que puede manifestarse como enrojecimiento, ardor, ronchas o empeoramiento de manchas existentes con exposiciones breves. Puede relacionarse con condiciones dermatológicas de base, medicamentos o productos tópicos.",
    causes: ["Melasma o hiperpigmentación de base", "Rosácea", "Uso de ciertos medicamentos o productos tópicos fotosensibilizantes", "Condiciones autoinmunes de la piel"],
    alarmSigns: ["Reacción cutánea intensa con exposición solar mínima", "Ampollas tras exposición solar breve", "Sensibilidad solar de aparición súbita sin causa clara"],
    whyConsult: "Identificar la causa de la fotosensibilidad permite ajustar el tratamiento dermatológico y la fotoprotección adecuada para esa piel en particular.",
    faqs: [
      { question: "¿Por qué mi piel reacciona más al sol que antes?", answer: "Puede deberse a una condición dermatológica de base (como melasma o rosácea), al uso de ciertos medicamentos o productos tópicos, por lo que conviene una valoración dermatológica para identificar la causa." },
      { question: "¿El protector solar es suficiente si tengo fotosensibilidad?", answer: "Es indispensable, pero en muchos casos se necesita además ajustar el tratamiento de la condición de base y, en ocasiones, evitar ciertos medicamentos o productos fotosensibilizantes." },
    ],
    relatedConditions: ["d-melasma", "d-cancer-piel"],
    lastReviewed: "2026-10-30",
    image: "/images/symptoms/sensibilidad-al-sol.jpg",
    seo: {
      title: "Sensibilidad al Sol | Dermatóloga en Tampico",
      description: "¿Tu piel reacciona de más al sol? Valoración dermatológica con la Dra. María Argelia Eng Luna en Tampico, Tamaulipas.",
      keywords: ["sensibilidad al sol Tampico", "fotosensibilidad Tampico", "dermatólogo en Tampico"],
    },
  },
];

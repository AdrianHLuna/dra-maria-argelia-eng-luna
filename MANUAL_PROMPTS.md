# Manual de Prompts de Imágenes e Ilustraciones Médicas (AISO v3.1)
## Dra. María Argelia Eng Luna — Dermatología
**Ciudad:** Tampico, Tamaulipas
**Especialidad:** Dermatóloga

**Nota de discreción clínica:** el catálogo incluye cáncer de piel, verrugas virales y procedimientos quirúrgicos menores. Todos los prompts están redactados para verse **clínicos y editoriales, nunca gráficos ni explícitos**: dermatoscopia, exploración con guantes, instrumental ordenado o encuadres discretos de piel — nunca lesiones abiertas, sangre, tejido expuesto ni rostros reconocibles con marcas visibles que puedan estigmatizar al paciente.

Cada prompt indica entre paréntesis la ruta de archivo a la que corresponde en el sitio (`public/...jpg`).

---

## 🤖 PROMPT INICIAL DE CONTEXTO MASTER PARA GEMINI / CHATGPT / MIDJOURNEY

```text
Rol: Experto en generación de imágenes e ilustraciones médicas fotorrealistas de nivel premium para marketing de salud y sitios web de Dermatología de alta gama.
Tono: Preciso, cálido y de autoridad clínica — editorial y confiable, nunca gráfico ni alarmante.
Estilo: Fotografía clínica editorial realista (dermatoscopia, exploración con lupa o dermatoscopio, instrumental quirúrgico menor ordenado, biopsias y procedimientos mostrados de forma discreta) para enfermedades y procedimientos; fotografía de escenas cotidianas de piel/cabello con iluminación natural suave para síntomas. Evitar estilo de stock genérico o ilustración caricaturesca.
Identidad visual OBLIGATORIA (paleta propia de este sitio, dirección "Clínica Dermatológica" generada con Google Stitch — salvia botánico y terracota cálida, ya que no se entregó logo ni paleta de marca real): salvia (#3b5343) y terracota (#c87d55) como acentos principales, con durazno suave (#e8b99b) como acento secundario — aplicados como acento ambiental sutil (bata, linen, objeto clínico, luz) — nunca como filtro de color forzado sobre la foto. Fondo dominante blanco o beige cálido muy claro.
Restricciones: Cero nombres de medicamentos visibles en empaques o recetas. Cero logotipos de marcas comerciales. Cero rostros de pacientes reales o reconocibles con lesiones visibles (usar encuadres macro de piel, manos, cuero cabelludo o espalda que eviten el rostro cuando el foco es una lesión). Cero texto superpuesto en la imagen. Cero sangre, tejido expuesto, heridas abiertas ni melanomas explícitos — usar dermatoscopio, guante clínico, instrumental o encuadre discreto en su lugar. Prohibidos hologramas, neones, HUDs interactivos o elementos de ciencia ficción.
Formato: JPG horizontal de aspecto 16:10 (--ar 16:10 --v 6.0).

Instrucciones generales de color y estilo:
- Lighting: Clean, bright, natural or soft clinical studio lighting — never dark/moody or dramatic.
- Color Palette: Sage green (#3b5343), warm terracotta (#c87d55), soft peach (#e8b99b) accents, white/warm-beige dominant background, natural skin tones.
- Composition: Clean editorial framing with generous negative space, moderate depth of field (background softly out of focus) — precise and professional, never cluttered.
- Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
- Negative Prompt: hologram, sci-fi, futuristic, neon, glowing digital UI, hud, text, words, letters, watermark, signature, open wound, exposed tissue, excessive blood, explicit melanoma, dark background, recognizable patient face with visible lesion.

Estas son instrucciones, no hagas imágenes todavía.
```

---

## 🩺 SECCIÓN 1: PROMPTS PARA ENFERMEDADES

### 1. Acné (`public/images/diseases/acne.jpg`)
```text
Primer plano discreto de la mejilla o mandíbula de una persona adulta joven con textura de piel irregular leve, iluminación clínica suave, sin mostrar inflamación severa.

Lighting: Soft clinical studio lighting, even and flattering.
Color Palette: Natural skin tones, sage (#3b5343) accent in background linen, warm white background.
Composition: Macro framing on jaw/cheek area, face cropped above the eyes, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, severe inflammation, blood, recognizable face.
```

### 2. Psoriasis (`public/images/diseases/psoriasis.jpg`)
```text
Primer plano de un codo o antebrazo con textura de piel seca leve, sostenido por manos enguantadas en examen clínico, fondo claro.

Lighting: Soft clinical studio lighting.
Color Palette: Natural skin tones, sage (#3b5343) accent on gloves, terracotta (#c87d55) accent nearby, white background.
Composition: Macro framing on elbow/forearm, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood, gore, severe lesion.
```

### 3. Melasma (`public/images/diseases/melasma.jpg`)
```text
Perfil de rostro femenino adulto con la mano levemente cubriendo la mejilla, luz natural suave, sin mostrar manchas explícitas ni rostro reconocible completo.

Lighting: Soft natural window light.
Color Palette: Natural skin tones, terracotta (#c87d55) accent on clothing, warm beige background.
Composition: Side profile cropped at nose, hand softly framing cheek, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, recognizable face, visible pigmentation patches.
```

### 4. Caída de Cabello (Alopecia) (`public/images/diseases/alopecia.jpg`)
```text
Primer plano del cuero cabelludo visto desde arriba con un peine clínico, encuadre discreto sin mostrar calvicie extensa.

Lighting: Soft natural indoor light.
Color Palette: Natural hair tones, sage (#3b5343) accent on comb, warm background.
Composition: Top-down macro framing on scalp/hair, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, extensive baldness, recognizable face.
```

### 5. Cáncer de Piel (`public/images/diseases/cancer-de-piel.jpg`)
```text
Dermatoscopio siendo utilizado sobre el antebrazo de un paciente por manos enguantadas, en un consultorio dermatológico claro, sin mostrar la lesión en detalle.

Lighting: Clean bright clinical lighting.
Color Palette: Sage (#3b5343) and terracotta (#c87d55) accents on gloves/linen, white/warm-beige room.
Composition: Macro framing on dermatoscope and forearm, device obscuring the lesion itself, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, explicit melanoma, blood, gore, recognizable face.
```

### 6. Tiña (`public/images/diseases/tina.jpg`)
```text
Primer plano de un brazo o pie con textura de piel levemente alterada, sostenido durante exploración clínica con guante, fondo claro.

Lighting: Soft clinical studio lighting.
Color Palette: Natural skin tones, sage (#3b5343) accent on glove, white background.
Composition: Macro framing on limb, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood, gore, severe lesion.
```

### 7. Dermatitis Atópica (`public/images/diseases/dermatitis-atopica.jpg`)
```text
Primer plano de la parte interna del codo o la muñeca de un niño o adulto joven, piel ligeramente seca, luz cálida y suave.

Lighting: Soft warm natural light.
Color Palette: Natural skin tones, peach (#e8b99b) accent in background linen, warm beige background.
Composition: Macro framing on inner elbow/wrist, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood, gore, severe lesion, recognizable face.
```

### 8. Dermatitis Seborreica (`public/images/diseases/dermatitis-seborreica.jpg`)
```text
Primer plano del cuero cabelludo y nacimiento del cabello siendo revisado con un peine clínico, fondo de consultorio claro.

Lighting: Soft clinical studio lighting.
Color Palette: Natural hair/skin tones, sage (#3b5343) accent on comb, white background.
Composition: Macro framing on scalp/hairline, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, recognizable face.
```

### 9. Rosácea (`public/images/diseases/rosacea.jpg`)
```text
Perfil de rostro adulto con la mano levemente tocando la mejilla, luz natural suave, enrojecimiento sugerido de forma sutil, sin rostro completo reconocible.

Lighting: Soft natural window light.
Color Palette: Natural skin tones, terracotta (#c87d55) accent on clothing, warm beige background.
Composition: Side profile cropped at nose, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, recognizable face, visible redness close-up.
```

### 10. Verrugas Virales (`public/images/diseases/verrugas-virales.jpg`)
```text
Primer plano de una mano siendo examinada con guante clínico, sin mostrar la lesión en detalle explícito, fondo de consultorio claro.

Lighting: Soft clinical studio lighting.
Color Palette: Natural skin tones, sage (#3b5343) accent on glove, white background.
Composition: Macro framing on hand, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood, gore.
```

---

## 🔧 SECCIÓN 2: PROMPTS PARA SERVICIOS Y PROCEDIMIENTOS

### 1. Biopsia de Piel (`public/images/services/biopsia-de-piel.jpg`)
```text
Bandeja de instrumental estéril para biopsia de piel (bisturí pequeño, gasa, frasco de muestra) ordenada sobre una mesa clínica clara.

Lighting: Clean bright clinical lighting.
Color Palette: Steel tray tones, sage (#3b5343) accent linen, white background.
Composition: Top-down shot of organized instruments, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood, gore, needle in skin.
```

### 2. Dermatoscopia y Mapeo de Lunares (`public/images/services/dermatoscopia-y-mapeo-de-lunares.jpg`)
```text
Dermatólogo sosteniendo un dermatoscopio sobre el brazo de un paciente, pantalla digital con imagen amplificada visible de forma discreta.

Lighting: Soft clinical studio lighting.
Color Palette: Sage (#3b5343) and terracotta (#c87d55) accents on coat/linen, white background.
Composition: Mid-shot on dermatoscope and forearm, patient face out of frame, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, explicit lesion detail, blood.
```

### 3. Crioterapia (`public/images/services/crioterapia.jpg`)
```text
Dispositivo de crioterapia (spray de nitrógeno líquido) sostenido por mano enguantada cerca de un antebrazo, en consultorio claro.

Lighting: Clean bright clinical lighting.
Color Palette: Steel/white device tones, sage (#3b5343) accent on glove, white background.
Composition: Macro framing on device and forearm, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood, gore.
```

### 4. Electrocirugía (`public/images/services/electrocirugia.jpg`)
```text
Equipo de electrocirugía dermatológica (unidad y electrodo) ordenado sobre una bandeja estéril, ambiente de consultorio.

Lighting: Clean bright clinical lighting.
Color Palette: Steel/white equipment tones, terracotta (#c87d55) accent linen, white background.
Composition: Top-down or angled shot of equipment, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood, gore.
```

### 5. Extirpación de Lesiones Cutáneas (`public/images/services/extirpacion-de-lesiones-cutaneas.jpg`)
```text
Manos enguantadas de un profesional preparando el área de un antebrazo con antiséptico sobre una camilla clínica, sin instrumental cortante visible.

Lighting: Clean clinical studio lighting.
Color Palette: Sage (#3b5343) gloves/linens, white/light beige room.
Composition: Macro framing on hands and forearm, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood, gore, scalpel in skin.
```

### 6. Peeling Químico (`public/images/services/peeling-quimico.jpg`)
```text
Esteticista o dermatólogo aplicando una solución con brocha fina sobre la mejilla de un paciente, ambiente de spa clínico.

Lighting: Soft warm clinic lighting.
Color Palette: Terracotta (#c87d55) and peach (#e8b99b) accents on towels, warm beige background.
Composition: Mid-shot, patient face softly out of frame or cropped at eyes, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, recognizable face.
```

### 7. Curetaje (`public/images/services/curetaje.jpg`)
```text
Instrumental de curetaje dermatológico (cureta pequeña, gasa) ordenado sobre una bandeja estéril clara.

Lighting: Clean bright clinical lighting.
Color Palette: Steel tray tones, sage (#3b5343) accent linen, white background.
Composition: Top-down shot of organized instruments, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood, gore.
```

### 8. Láser para Manchas y Vasos (`public/images/services/tratamiento-laser-para-manchas-y-vasos.jpg`)
```text
Equipo láser dermatológico con pieza de mano aplicada cerca de la mejilla de un paciente con gafas de protección, ambiente clínico moderno.

Lighting: Clean bright clinical/studio lighting with a soft device glow.
Color Palette: Sage (#3b5343) and terracotta (#c87d55) device accents, white background.
Composition: Mid-shot, patient wearing protective goggles, face partially out of frame, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, recognizable face, harsh laser beam effects.
```

### 9. Toxina Botulínica (`public/images/services/toxina-botulinica.jpg`)
```text
Bandeja estética con jeringas pequeñas y gasa ordenadas, ambiente de consultorio dermatológico claro, sin aguja en piel.

Lighting: Clean bright clinical lighting.
Color Palette: White/steel tray tones, terracotta (#c87d55) accent linen.
Composition: Top-down shot of organized tray, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, needle in skin, blood.
```

### 10. Rellenos Dérmicos (`public/images/services/rellenos-dermicos.jpg`)
```text
Jeringas de ácido hialurónico ordenadas sobre una bandeja estética, con flores o textura suave de fondo evocando bienestar.

Lighting: Soft warm clinical lighting.
Color Palette: Terracotta (#c87d55) and peach (#e8b99b) accents, warm beige background.
Composition: Top-down or angled shot of tray, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, needle in skin, blood.
```

### 11. Microdermoabrasión (`public/images/services/microdermoabrasion.jpg`)
```text
Dispositivo de microdermoabrasión aplicado sobre la mejilla de una paciente en un ambiente de spa clínico relajante.

Lighting: Soft warm clinic lighting.
Color Palette: Sage (#3b5343) and peach (#e8b99b) device/towel accents, warm beige background.
Composition: Mid-shot, patient face softly out of frame or cropped at eyes, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, recognizable face.
```

### 12. Tratamiento de Acné con Luz y Láser (`public/images/services/tratamiento-de-acne-con-luz-y-laser.jpg`)
```text
Dispositivo de luz pulsada aplicado cerca de la mejilla de un paciente joven con gafas de protección, ambiente clínico moderno.

Lighting: Clean bright clinical lighting with soft device glow.
Color Palette: Sage (#3b5343) device accents, white background.
Composition: Mid-shot, patient wearing protective goggles, face partially out of frame, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, recognizable face.
```

---

## ⚠️ SECCIÓN 3: PROMPTS PARA SÍNTOMAS

### 1. Comezón (`public/images/symptoms/comezon.jpg`)
```text
Primer plano de un antebrazo con la mano opuesta a punto de rascarlo, sin mostrar lesión, luz natural suave.

Lighting: Soft natural indoor light.
Color Palette: Natural skin tones, sage (#3b5343) accent in background, warm beige background.
Composition: Macro framing on forearm/hand, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, visible rash, recognizable face.
```

### 2. Ardor en la Piel (`public/images/symptoms/ardor.jpg`)
```text
Persona tocándose levemente el cuello o la mejilla con gesto de incomodidad, rostro cropeado, luz cálida suave.

Lighting: Soft warm natural light.
Color Palette: Natural skin tones, terracotta (#c87d55) accent in background, warm beige background.
Composition: Mid-shot cropped above the eyes, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, recognizable face, visible burn.
```

### 3. Enrojecimiento de la Piel (`public/images/symptoms/enrojecimiento.jpg`)
```text
Primer plano de una mejilla o cuello con la mano levemente tocándola, luz natural cálida, sin enrojecimiento explícito detallado.

Lighting: Soft natural window light.
Color Palette: Natural skin tones, terracotta (#c87d55) accent on clothing, warm beige background.
Composition: Side profile cropped at nose, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, recognizable face.
```

### 4. Ronchas (`public/images/symptoms/ronchas.jpg`)
```text
Primer plano de un antebrazo con piel ligeramente irregular, sostenido en examen clínico con guante, fondo claro.

Lighting: Soft clinical studio lighting.
Color Palette: Natural skin tones, sage (#3b5343) accent on glove, white background.
Composition: Macro framing on forearm, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood, gore.
```

### 5. Descamación o Piel Seca (`public/images/symptoms/descamacion-piel-seca.jpg`)
```text
Primer plano de manos adultas aplicando crema hidratante sobre el dorso de la mano opuesta, luz cálida suave.

Lighting: Soft warm natural light.
Color Palette: Natural skin tones, peach (#e8b99b) accent on cream jar, warm beige background.
Composition: Macro framing on hands, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, visible flaking close-up.
```

### 6. Manchas en la Piel (`public/images/symptoms/manchas-en-la-piel.jpg`)
```text
Perfil de rostro adulto con la mano levemente cubriendo la mejilla, luz natural suave, sin mostrar manchas explícitas.

Lighting: Soft natural window light.
Color Palette: Natural skin tones, terracotta (#c87d55) accent on clothing, warm beige background.
Composition: Side profile cropped at nose, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, recognizable face, visible pigmentation.
```

### 7. Caída de Cabello (`public/images/symptoms/caida-de-cabello.jpg`)
```text
Primer plano de un cepillo con cabello sobre una superficie clara, sin mostrar calvicie, luz natural suave.

Lighting: Soft natural indoor light.
Color Palette: Natural hair tones, sage (#3b5343) accent nearby, warm beige background.
Composition: Macro framing on brush/hair, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, recognizable face.
```

### 8. Cambios en Lunares Existentes (`public/images/symptoms/cambios-en-lunares-existentes.jpg`)
```text
Dermatoscopio siendo acercado a un lunar en el antebrazo de un paciente por manos enguantadas, encuadre discreto sin detalle explícito del lunar.

Lighting: Clean bright clinical lighting.
Color Palette: Sage (#3b5343) accent on gloves/linen, white background.
Composition: Macro framing on dermatoscope and forearm, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, explicit mole detail, blood.
```

### 9. Ampollas (`public/images/symptoms/ampollas.jpg`)
```text
Primer plano de un pie o mano con un apósito clínico aplicado, fondo de consultorio claro, sin mostrar ampolla abierta.

Lighting: Soft clinical studio lighting.
Color Palette: Natural skin tones, sage (#3b5343) accent on bandage, white background.
Composition: Macro framing on limb with bandage, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, open blister, blood, gore.
```

### 10. Sensibilidad al Sol (`public/images/symptoms/sensibilidad-al-sol.jpg`)
```text
Persona aplicándose protector solar en el rostro bajo luz natural brillante, rostro cropeado.

Lighting: Bright natural outdoor/window light.
Color Palette: Natural skin tones, peach (#e8b99b) accent on sunscreen bottle, warm beige background.
Composition: Mid-shot cropped above the eyes, generous negative space.
Suffixes: realistic clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, recognizable face, visible sunburn.
```

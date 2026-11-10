# Manual de Prompts de Imágenes e Ilustraciones Médicas (AISO v3.1)
## Dra. María Argelia Eng Luna — Dermatología
**Ciudad:** Tampico, Tamaulipas
**Especialidad:** Dermatóloga

**Criterio de autenticidad clínica y realismo visual:** Los prompts para enfermedades y síntomas están diseñados para mostrar con **fidelidad gráfica y rigor dermatológico** las lesiones, placas, escamas, eritema y alteraciones cutáneas reales (ej. placas seborreicas oleosas y amarillentas en cuero cabelludo, eccema y liquenificación en dermatitis atópica, placas nacaradas micáceas en psoriasis, bordes anulares sobreelevados en tiña, telangiectasias y pápulas en rosácea, comedones y pústulas en acné). El objetivo es que la patología sea **inmediatamente reconocible, gráfica y clínicamente verídica**, manteniendo encuadres macro y calidad editorial médica de alta gama (evitando únicamente gore innecesario o rostros completos de pacientes que comprometan la privacidad).

Cada prompt indica entre paréntesis la ruta de archivo a la que corresponde en el sitio (`public/...jpg`).

---

## 🤖 PROMPT INICIAL DE CONTEXTO MASTER PARA GEMINI / CHATGPT / MIDJOURNEY

```text
Rol: Experto en generación de imágenes e ilustraciones médicas fotorrealistas de nivel premium para marketing de salud y sitios web de Dermatología de alta gama.
Tono: Preciso, fotorrealista y de auténtica autoridad clínica — fotodocumental médico y editorial, gráficamente fidedigno a la patología dermatológica real sin censurar ni diluir los signos clínicos característicos (escamas grasientas, placas eritematosas, comedones, pústulas, telangiectasias, lesiones anulares, queratosis).
Estilo: Fotografía clínica macro y editorial realista. Para enfermedades y procedimientos: visualización auténtica de las alteraciones morfológicas y dermatológicas de la piel/cuero cabelludo, exploración clínica con guantes, dermatoscopio o instrumental médico; para síntomas: manifestaciones visibles reales (habones, descamación evidente, eritema). Evitar stock genérico con piel perfecta de porcelana, evitar filtros de belleza y evitar ilustraciones caricaturescas.
Identidad visual OBLIGATORIA (paleta propia de este sitio, dirección "Clínica Dermatológica" generada con Google Stitch — salvia botánico y terracota cálida, ya que no se entregó logo ni paleta de marca real): salvia (#3b5343) y terracota (#c87d55) como acentos principales, con durazno suave (#e8b99b) como acento secundario — aplicados como acento ambiental sutil (bata, guantes, linen, objeto clínico, luz ambiental) — nunca como filtro de color forzado sobre la foto. Fondo dominante blanco o beige cálido muy claro.
Restricciones: Cero nombres de medicamentos comerciales visibles en empaques. Cero logotipos de marcas. Cero rostros de pacientes completos o reconocibles con estigma (usar encuadres macro directos a la piel, mejilla recortada a media nariz, cuero cabelludo, manos o espalda). Cero texto superpuesto en la imagen. Prohibidos hologramas, neones, HUDs interactivos o elementos de ciencia ficción. No censurar la patología: debe verse gráficamente auténtica, sin caer en gore quirúrgico extremo ni heridas abiertas hemorrágicas no relacionadas.
Formato: JPG horizontal de aspecto 16:10 (--ar 16:10 --v 6.0).

Instrucciones generales de color y estilo:
- Lighting: Clean, bright, natural or crisp clinical studio lighting revealing skin topography, relief, and genuine pathological textures.
- Color Palette: Sage green (#3b5343), warm terracotta (#c87d55), soft peach (#e8b99b) accents, white/warm-beige dominant background, authentic pathological tones (erythema pink-reds, seborrheic greasy yellows, psoriatic silvery-white, melanin browns).
- Composition: High-resolution macro framing with sharp focus on the dermatological lesion, shallow to moderate depth of field with soft clean clinical background.
- Suffixes: realistic clinical dermatology photography, medical documentary grade, 8k, photorealistic textures, micro skin relief details, authentic pathology, editorial lighting --ar 16:10 --v 6.0
- Negative Prompt: hologram, sci-fi, futuristic, neon, glowing digital UI, text, words, watermark, signature, airbrushed smooth skin, photoshop beauty filter, porcelain skin without pores, artificial plastic look, recognizable patient full face.

Estas son instrucciones, no hagas imágenes todavía.
```

---

## 🩺 SECCIÓN 1: PROMPTS PARA ENFERMEDADES

### 1. Acné (`public/images/diseases/acne.jpg`)
```text
Primer plano macro de la mejilla y mandíbula de una persona adulta joven mostrando un cuadro auténtico de acné activo: comedones abiertos (puntos negros), comedones cerrados y múltiples pápulas y pústulas inflamatorias eritematosas, con textura cutánea real de poros foliculares dilatados y relieve epidérmico genuino, iluminación clínica nítida.

Lighting: Crisp clinical macro lighting revealing skin topography and follicular inflammation.
Color Palette: Natural skin tones, inflammatory erythematous reds and pinks, sage (#3b5343) accent on clinical linen, warm white background.
Composition: Macro framing on cheek and jawline, face cropped above the nasal bridge to protect identity, sharp focus on inflammatory acne lesions.
Suffixes: realistic clinical dermatology photography, 8k, authentic acne lesions, micro-relief skin texture, editorial grade --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, flawless airbrushed skin, porcelain smooth texture, beauty filter, recognizable full face.
```

### 2. Psoriasis (`public/images/diseases/psoriasis.jpg`)
```text
Primer plano macro del codo de un paciente exhibiendo una placa psoriásica clásica y bien delimitada: placa eritematosa inflamatoria de base rojiza cubierta por escamas gruesas plateadas y nacaradas (escamas micáceas estratificadas características), con bordes nítidos sobre la piel circundante, examinada con guante clínico médico.

Lighting: High-definition clinical studio lighting emphasizing the silvery reflective sheen and coarse texture of the micaceous scales.
Color Palette: Erythematous deep rose-red plaque base, silvery-white micaceous scales, natural skin tone surround, sage (#3b5343) accent on glove.
Composition: Macro dermatological framing on extensor surface of the elbow with prominent psoriatic plaque, generous clean negative space.
Suffixes: realistic clinical dermatology photography, authentic psoriasis plaque, 8k, photorealistic micaceous scale textures --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, mild dry skin, eczema, smooth unblemished skin, bleeding, open ulceration.
```

### 3. Melasma (`public/images/diseases/melasma.jpg`)
```text
Primer plano de la mejilla y pómulo de un paciente mostrando máculas hiperpigmentadas patognomónicas de melasma: manchas pardas a marrón oscuro con bordes geográficos irregulares y distribución reticulada sobre el área malar, piel bien iluminada con luz natural que evidencia el contraste pigmentario real sin rostro identificable.

Lighting: Soft natural daylight highlighting the brown epidermal melanin pigmentation contrast.
Color Palette: Natural facial skin tone with distinct warm brown and caramel hyperpigmented patches, terracotta (#c87d55) clothing accent.
Composition: Close-up on the malar cheekbone area, cropped at bridge of nose and mouth, sharp focus on the irregular pigment distribution.
Suffixes: realistic clinical photography, medical documentary grade, 8k, authentic melasma pigmentation, natural skin relief --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, uniform porcelain complexion, airbrushed skin, recognizable full face.
```

### 4. Caída de Cabello (Alopecia) (`public/images/diseases/alopecia.jpg`)
```text
Primer plano cenital del cuero cabelludo mostrando un área evidente de pérdida y afinamiento capilar (alopecia androgenética en coronilla o parche circunscrito de alopecia areata), donde se aprecia con claridad la disminución de densidad folicular y el cuero cabelludo expuesto, siendo examinado por manos con guantes clínicos que separan el cabello con un peine dermatológico.

Lighting: Bright clean clinical top-down lighting exposing scalp surface and hair follicle density.
Color Palette: Natural hair tones, pale natural scalp skin, sage (#3b5343) accent on medical comb and glove, clean clinic background.
Composition: Top-down macro shot centered on the thinning/alopecia area, hands parting hair to highlight reduced hair density.
Suffixes: realistic clinical dermatology photography, trichology examination, 8k, authentic hair thinning --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, full thick head of hair, artificial wig look, recognizable face.
```

### 5. Cáncer de Piel (`public/images/diseases/cancer-de-piel.jpg`)
```text
Dermatoscopio óptico de alta precisión en contacto directo con una lesión cutánea pigmentada atípica en el antebrazo de un paciente (lunar asimétrico con bordes irregulares y variación de tonalidades marrones y negruzcas), sostenido por manos médicas enguantadas en consultorio dermatológico profesional.

Lighting: Dual lighting setup: polarized clinical dermatoscope light ring illuminating the pigmented lesion plus clean ambient clinical studio light.
Color Palette: Brown-black-tan atypical lesion tones, natural skin tones, sage (#3b5343) and terracotta (#c87d55) accents on gloves and clinic background.
Composition: Macro dermatological close-up centered on the dermatoscope lens examining the pigmented lesion, clean negative space.
Suffixes: realistic clinical photography, dermatoscopy exam, 8k, high dermatological precision, authentic pigmented lesion --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, open surgical incision, excessive blood, gory wound, recognizable face.
```

### 6. Tiña (`public/images/diseases/tina.jpg`)
```text
Primer plano macro de la piel de un brazo o pierna mostrando una placa anular clásica de tiña corporal (tinea corporis): lesión eritematosa circular con borde activo sobreelevado, escamoso y papular bien definido, con centro más claro en resolución, demostrando la morfología diagnóstica en anillo durante una exploración clínica con guante.

Lighting: Directional soft clinical lighting casting subtle micro-shadows on the raised scaly border.
Color Palette: Natural skin tones, vivid red-pink annular active border, paler resolving center, sage (#3b5343) accent on medical glove.
Composition: Macro framing centered on the annular fungal plaque, clean clinic setting with generous negative space.
Suffixes: realistic clinical dermatology photography, medical documentary, 8k, authentic tinea corporis ring lesion --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, diffuse indistinct redness, normal smooth skin, blood.
```

### 7. Dermatitis Atópica (`public/images/diseases/dermatitis-atopica.jpg`)
```text
Primer plano macro de la flexura del codo (pliegue antecubital) de un paciente mostrando un brote activo de eccema atópico: placas eritematosas con inflamación visible, xerosis marcada con descamación epidérmica, finas fisuras superficiales y liquenificación evidente (engrosamiento y marcado cuadriculado de las líneas de la piel por rascado crónico), examinado por una mano médica enguantada.

Lighting: Crisp clinical macro lighting accentuating the skin relief, lichenification ridges, and erythematous patches.
Color Palette: Natural skin tones, inflamed reddish-pink eczema patches, chalky dry epidermal flakes, peach (#e8b99b) background linen accent, sage (#3b5343) on glove.
Composition: Macro dermatological framing on inner elbow crease, sharp focus on the textured eczema plaque and skin lichenification.
Suffixes: realistic clinical dermatology photography, authentic atopic dermatitis eczema, lichenification details, 8k, high medical accuracy --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, flawless smooth skin, mild simple dryness without redness, open bleeding wound, recognizable face.
```

### 8. Dermatitis Seborreica (`public/images/diseases/dermatitis-seborreica.jpg`)
```text
Primer plano macro del cuero cabelludo y la línea de implantación frontal del cabello siendo explorado con guantes clínicos que separan el pelo, mostrando claramente placas eritematosas cubiertas de escamas grasosas amarillentas y blanquecinas características (costras seborreicas oleosas foliculares sobre base cutánea enrojecida), brillo de sebo visible y caspa grasa adherente típica de la afección.

Lighting: High-clarity clinical macro lighting highlighting the oily yellowish texture of the seborrheic scales and the erythema of the scalp.
Color Palette: Natural hair and skin tones, characteristic greasy yellowish-white scale tones, erythematous pink-red scalp base, sage (#3b5343) accent on medical gloves.
Composition: Macro close-up on parted hair and scalp margin, fingers in nitrile gloves parting hair locks to display the authentic seborrheic dermatitis plaque.
Suffixes: realistic clinical dermatology photography, authentic seborrheic dermatitis, greasy yellowish flakes on red scalp, 8k, trichology documentary --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, completely clean healthy scalp, dry white chalky dandruff only, flawless skin, recognizable full face.
```

### 9. Rosácea (`public/images/diseases/rosacea.jpg`)
```text
Primer plano detallado de la mejilla y ala nasal de un paciente adulto con rosácea activa (forma eritematotelangiectásica y papulopustulosa): eritema centrofacial intenso y persistente, telangiectasias evidentes (finas ramificaciones de vasos sanguíneos dilatados superficiales) y pápulas inflamatorias eritematosas visibles, encuadre recortado que excluye ojos y boca para anonimato clínico.

Lighting: Natural soft clinical lighting revealing the microvascular pattern of telangiectasias and facial flush.
Color Palette: Vivid facial erythema, delicate red vascular telangiectasia branches, natural skin tone baseline, terracotta (#c87d55) clothing accent.
Composition: Close-up on the malar cheek area, sharp focus on the vascular redness and papular inflammatory texture, clean soft background.
Suffixes: realistic clinical dermatology photography, authentic rosacea, visible telangiectasia spider veins, 8k, medical documentary --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, flawless porcelain skin, pale unblemished cheeks, beauty retouching, recognizable full face.
```

### 10. Verrugas Virales (`public/images/diseases/verrugas-virales.jpg`)
```text
Primer plano macro de un dedo o dorso de la mano mostrando una verruga vulgar auténtica: pápula hiperqueratósica sobreelevada y delimitada con superficie áspera y vegetante (textura verrugosa en coliflor característica) y pequeños puntos negros milimétricos en su superficie (capilares trombosados patognomónicos), evaluada por un dermatólogo con guantes clínicos.

Lighting: Sharp directional clinical macro lighting detailing the rough, fissured hyperkeratotic surface relief.
Color Palette: Natural flesh and grayish-tan lesion tones with dark capillary stippling, sage (#3b5343) accent on medical glove, clean clinic background.
Composition: Macro framing on the affected finger, sharp focus on the verrucous papule and its rugged texture.
Suffixes: realistic clinical dermatology photography, authentic viral verruca vulgaris, hyperkeratotic texture, 8k --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, smooth flat skin, mole, bleeding ulcer, gory wound.
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
Primer plano macro de la piel de la mejilla y cuello mostrando un área evidente de eritema cutáneo activo: piel enrojecida e inflamada con microvascularización dilatada visible, evaluada durante consulta médica, sin rostro completo identificable.

Lighting: Soft natural clinical lighting emphasizing the flushed red epidermal tone.
Color Palette: Inflamed erythematous rose-red tones, natural skin baseline, terracotta (#c87d55) clothing accent, warm beige background.
Composition: Side profile cropped at the nasal bridge, sharp focus on the erythematous cutaneous patch.
Suffixes: realistic clinical photography, authentic skin erythema, photorealistic skin textures, 8k --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, pale unblemished skin, beauty filter, recognizable full face.
```

### 4. Ronchas (`public/images/symptoms/ronchas.jpg`)
```text
Primer plano macro de un antebrazo exhibiendo ronchas de urticaria clásicas: múltiples habones eritematosos y edematosos sobreelevados sobre el plano de la piel, con bordes policíclicos bien delimitados y centros ligeramente pálidos, examinados por una mano médica con guante clínico.

Lighting: Crisp clinical studio lighting casting micro-shadows that emphasize the raised edema and elevation of the wheals.
Color Palette: Erythematous rose-red borders, pale pink edema centers, natural skin tones, sage (#3b5343) accent on medical glove.
Composition: Macro framing on forearm centered on the raised urticarial wheals, generous negative space.
Suffixes: realistic clinical dermatology photography, authentic urticaria wheals, 8k, photorealistic raised relief --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, flat smooth skin, blood, open ulceration, necrosis.
```

### 5. Descamación o Piel Seca (`public/images/symptoms/descamacion-piel-seca.jpg`)
```text
Primer plano macro de la superficie cutánea de una extremidad mostrando xerosis intensa y descamación activa: escamas epidérmicas blanquecinas y secas desprendiéndose visiblemente sobre un patrón de microfisuras cutáneas agrietadas, evaluadas con precisión bajo iluminación clínica.

Lighting: Direct clinical macro lighting capturing the dry chalky texture of peeling skin flakes and epidermal cracks.
Color Palette: Dry chalky white scale flakes, natural skin tones, sage (#3b5343) or peach (#e8b99b) background accents.
Composition: Extreme macro shot on the desquamating skin area, demonstrating authentic cutaneous peeling and xerosis.
Suffixes: realistic clinical photography, authentic skin peeling and flaking, xerosis relief, 8k, photorealistic textures --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, smooth oiled skin, airbrushed texture, wet gloss.
```

### 6. Manchas en la Piel (`public/images/symptoms/manchas-en-la-piel.jpg`)
```text
Primer plano de piel dorsal o facial mostrando máculas hiperpigmentadas bien definidas (léntigos solares e hiperpigmentación focal): manchas circunscritas de color marrón claro a pardo con bordes nítidos sobre la piel clara, examinadas bajo lupa dermatológica.

Lighting: Soft diffused clinical lighting displaying clear pigmentary contrast without glare.
Color Palette: Tan and brown melanin pigmentation macules, natural skin tones, terracotta (#c87d55) background accent.
Composition: Macro framing focused on the hyperpigmented macules, clean clinical composition with generous negative space.
Suffixes: realistic clinical dermatology photography, authentic solar lentigo macules, 8k, photorealistic melanin patches --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, porcelain uniform skin, airbrushed filter, recognizable face.
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
Primer plano macro de la piel del pie o mano mostrando una ampolla epidérmica serosa intacta y tensa: vesícula circunscrita llena de líquido transparente claro sobre una base eritematosa leve, evaluada con precisión clínica por una mano con guante médico.

Lighting: Clean clinical macro lighting revealing the translucency of the intact fluid-filled blister.
Color Palette: Translucent serous blister dome, mild erythematous base, natural skin tones, sage (#3b5343) accent on glove.
Composition: Macro framing on limb centered on the intact blister, generous clean negative space.
Suffixes: realistic clinical dermatology photography, authentic intact bulla blister, 8k, photorealistic fluid translucency --ar 16:10 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, popped ruptured blister, infected pus, excessive blood, gory open flesh.
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

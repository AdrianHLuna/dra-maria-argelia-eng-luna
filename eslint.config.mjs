import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

// Import directo de los configs flat nativos de eslint-config-next, sin pasar
// por FlatCompat (el patrón anterior, `compat.extends("next/core-web-vitals",
// "next/typescript")`). FlatCompat reusa el validador de esquema legado de
// @eslint/eslintrc, que intenta serializar con JSON.stringify() el objeto de
// configuración para construir su mensaje de error — y los plugins modernos
// (eslint-plugin-react 7.x, @typescript-eslint 8.x) se autorreferencian
// dentro de su propio export flat (`configs.flat.recommended.plugins.react
// === module.exports`), lo cual es válido en flat config nativo pero hace
// que esa serialización reviente con "Converting circular structure to
// JSON". eslint-config-next ya expone estos mismos presets como arrays de
// flat config listos para usar directamente.
const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;

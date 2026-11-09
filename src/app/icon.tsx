import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Monograma de respaldo — no se entregó ningún isotipo real (primer sitio
// del proyecto sin material de marca, ver AGENTS.md §6). Iniciales de María
// Argelia Eng Luna en salvia botánico sobre fondo mineral cálido.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#3b5343",
          color: "#faf6f0",
          fontSize: 15,
          fontWeight: 600,
          letterSpacing: "0.02em",
        }}
      >
        MAE
      </div>
    ),
    size
  );
}

import { ImageResponse } from "next/og";

export const runtime = "edge";

/** Tarayıcı sekmesi ve arama sonuçları için; navbar’daki MONART (koyu zemin + beyaz, kalın) */
export const size = { width: 96, height: 96 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#171717",
          color: "#ffffff",
          fontSize: 26,
          fontWeight: 800,
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          letterSpacing: "-0.05em",
        }}
      >
        MONART
      </div>
    ),
    { ...size }
  );
}

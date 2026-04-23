import { ImageResponse } from "next/og";

export const runtime = "edge";

/** Ana ekran / Apple cihazlar için daha büyük aynı marka işareti */
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          fontSize: 48,
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

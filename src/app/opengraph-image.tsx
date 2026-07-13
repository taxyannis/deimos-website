import { ImageResponse } from "next/og";

// Restrained navy institutional share card — no imagery, no credentials, no
// logos or awards, just the firm name and the governing line. Uses
// next/og's built-in default font (no external font fetch), matching the
// site's deep-navy / off-white / muted-steel palette.
export const alt =
  "Deimos Group | Global Independent Strategic Advisory Firm";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0E1E33",
          padding: "80px",
          color: "#F2F4F7",
        }}
      >
        <div
          style={{
            fontSize: 34,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#9FB3C8",
          }}
        >
          Deimos Group
        </div>
        <div style={{ display: "flex", fontSize: 66, lineHeight: 1.15, maxWidth: 960 }}>
          Global Independent Strategic Advisory Firm
        </div>
        <div style={{ fontSize: 26, color: "#9FB3C8" }}>
          Reducing capital risk through structure, process and execution
        </div>
      </div>
    ),
    { ...size },
  );
}

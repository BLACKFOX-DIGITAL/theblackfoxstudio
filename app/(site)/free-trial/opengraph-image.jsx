import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Free Image Editing Trial — BLACKFOX DIGITAL";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#010101",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Red glow */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 500,
            height: 500,
            background: "radial-gradient(circle, rgba(238,58,57,0.2) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "rgba(238,58,57,0.15)",
            border: "1px solid rgba(238,58,57,0.3)",
            borderRadius: 999,
            padding: "8px 20px",
            marginBottom: 32,
          }}
        >
          <span style={{ color: "#EE3A39", fontSize: 13, fontWeight: 900, letterSpacing: 6, textTransform: "uppercase" }}>
            Free Trial
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            color: "white",
            fontSize: 62,
            fontWeight: 900,
            lineHeight: 1.05,
            textTransform: "uppercase",
            marginBottom: 16,
            maxWidth: 860,
          }}
        >
          Free Image Editing Trial
        </div>

        {/* Sub headline */}
        <div
          style={{
            color: "#EE3A39",
            fontSize: 30,
            fontWeight: 700,
            marginBottom: 52,
          }}
        >
          10 Images · No Credit Card · 24-Hour Delivery
        </div>

        {/* Features row */}
        <div style={{ display: "flex", gap: 32 }}>
          {["Background Removal", "Ghost Mannequin", "Retouching", "Color Correction"].map((s) => (
            <div
              key={s}
              style={{
                color: "#555",
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: 1,
              }}
            >
              {s}
            </div>
          ))}
        </div>

        {/* Brand */}
        <div
          style={{
            position: "absolute",
            bottom: 56,
            right: 80,
            color: "#333",
            fontSize: 18,
            fontWeight: 900,
            letterSpacing: 5,
            textTransform: "uppercase",
          }}
        >
          BLACKFOX DIGITAL
        </div>
      </div>
    ),
    { ...size }
  );
}

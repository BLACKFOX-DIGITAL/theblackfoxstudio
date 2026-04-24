import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Before & After Image Editing Portfolio | BLACKFOX DIGITAL";
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
        {/* Split visual hint — before/after */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "38%",
            height: "100%",
            background: "linear-gradient(135deg, rgba(238,58,57,0.12) 0%, rgba(238,58,57,0.04) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            right: "38%",
            width: 2,
            height: "100%",
            background: "rgba(238,58,57,0.4)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 24,
            right: "40%",
            color: "#555",
            fontSize: 11,
            fontWeight: 900,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          Before
        </div>
        <div
          style={{
            position: "absolute",
            top: 24,
            right: 80,
            color: "#EE3A39",
            fontSize: 11,
            fontWeight: 900,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          After
        </div>

        {/* Badge */}
        <div
          style={{
            color: "#EE3A39",
            fontSize: 13,
            fontWeight: 900,
            letterSpacing: 7,
            textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          500,000+ Images Edited
        </div>

        {/* Headline */}
        <div
          style={{
            color: "white",
            fontSize: 64,
            fontWeight: 900,
            lineHeight: 1.05,
            textTransform: "uppercase",
            marginBottom: 20,
            maxWidth: 680,
          }}
        >
          Image Editing
          <br />
          Portfolio
        </div>

        {/* Sub */}
        <div
          style={{
            color: "#EE3A39",
            fontSize: 26,
            fontWeight: 700,
            marginBottom: 52,
          }}
        >
          Before & After — 20+ Service Categories
        </div>

        {/* Services */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, maxWidth: 680 }}>
          {["Background Removal", "Ghost Mannequin", "Beauty Retouching", "Clipping Path", "Color Correction"].map((s) => (
            <span key={s} style={{ color: "#444", fontSize: 14, fontWeight: 700 }}>{s}</span>
          ))}
        </div>

        {/* Brand */}
        <div
          style={{
            position: "absolute",
            bottom: 56,
            left: 80,
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

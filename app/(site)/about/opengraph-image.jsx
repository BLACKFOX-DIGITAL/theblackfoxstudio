import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "About BLACKFOX DIGITAL — Professional Photo Editing Studio, Dhaka";
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
            bottom: -100,
            right: -100,
            width: 600,
            height: 600,
            background: "radial-gradient(circle, rgba(238,58,57,0.2) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

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
          Since 2016 · Dhaka, Bangladesh
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
            maxWidth: 860,
          }}
        >
          Professional Photo
          <br />
          Editing Studio
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
          80+ Specialists · 5,000+ Images/Day · 500+ Global Clients
        </div>

        {/* Services row */}
        <div style={{ display: "flex", gap: 28, color: "#444" }}>
          {["Background Removal", "Ghost Mannequin", "Retouching", "Clipping Path", "Color Correction"].map((s) => (
            <span key={s} style={{ fontSize: 14, fontWeight: 700 }}>{s}</span>
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

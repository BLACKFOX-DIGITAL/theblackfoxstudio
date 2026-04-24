import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Outsource Photo Editing & Retouching Services | BLACKFOX DIGITAL";
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
        {/* Red glow top-right */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 600,
            height: 600,
            background: "radial-gradient(circle, rgba(238,58,57,0.25) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 28,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#22c55e",
              display: "inline-block",
            }}
          />
          <span style={{ color: "#EE3A39", fontSize: 13, fontWeight: 900, letterSpacing: 7, textTransform: "uppercase" }}>
            80+ Specialists · 24/7/365
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            color: "white",
            fontSize: 60,
            fontWeight: 900,
            lineHeight: 1.05,
            textTransform: "uppercase",
            marginBottom: 20,
            maxWidth: 900,
          }}
        >
          Outsource Photo Editing
          <br />& Retouching Services
        </div>

        {/* Sub */}
        <div
          style={{
            color: "#EE3A39",
            fontSize: 26,
            fontWeight: 700,
            marginBottom: 48,
          }}
        >
          From $0.29/image · 24-Hour Delivery · Free 10-Image Trial
        </div>

        {/* Services row */}
        <div style={{ display: "flex", gap: 28, flexWrap: "wrap", maxWidth: 900 }}>
          {["Background Removal", "Ghost Mannequin", "Clipping Path", "Beauty Retouching", "Color Correction", "Jewelry Retouch"].map((s) => (
            <span key={s} style={{ color: "#444", fontSize: 15, fontWeight: 700 }}>{s}</span>
          ))}
        </div>

        {/* Stats bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 56,
            left: 80,
            display: "flex",
            gap: 48,
          }}
        >
          {[
            { val: "500,000+", label: "Images Edited" },
            { val: "500+", label: "Global Clients" },
            { val: "10+", label: "Years" },
          ].map((s) => (
            <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <span style={{ color: "white", fontSize: 22, fontWeight: 900 }}>{s.val}</span>
              <span style={{ color: "#555", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2 }}>{s.label}</span>
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

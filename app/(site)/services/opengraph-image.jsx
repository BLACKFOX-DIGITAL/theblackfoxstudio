import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Photo Editing & Retouching Services — BLACKFOX DIGITAL";
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
        <div
          style={{
            position: "absolute",
            top: -60,
            left: -60,
            width: 500,
            height: 500,
            background: "radial-gradient(circle, rgba(238,58,57,0.2) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        <div style={{ color: "#EE3A39", fontSize: 13, fontWeight: 900, letterSpacing: 7, textTransform: "uppercase", marginBottom: 28 }}>
          20+ Specialized Services · From $0.29/Image
        </div>

        <div style={{ color: "white", fontSize: 62, fontWeight: 900, lineHeight: 1.05, textTransform: "uppercase", marginBottom: 20, maxWidth: 860 }}>
          Photo Editing &
          <br />Retouching Services
        </div>

        <div style={{ color: "#EE3A39", fontSize: 24, fontWeight: 700, marginBottom: 48 }}>
          80+ Specialists · 24-Hour Delivery · White Label Available
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px 28px", maxWidth: 900 }}>
          {["Background Removal", "Clipping Path", "Ghost Mannequin", "Beauty Retouching", "Jewelry Retouch", "Color Correction", "Image Masking", "Real Estate Editing"].map((s) => (
            <span key={s} style={{ color: "#444", fontSize: 14, fontWeight: 700 }}>{s}</span>
          ))}
        </div>

        <div style={{ position: "absolute", bottom: 56, right: 80, color: "#333", fontSize: 18, fontWeight: 900, letterSpacing: 5, textTransform: "uppercase" }}>
          BLACKFOX DIGITAL
        </div>
      </div>
    ),
    { ...size }
  );
}

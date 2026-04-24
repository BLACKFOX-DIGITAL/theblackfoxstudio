import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Photo Editing Pricing & Volume Discounts | BLACKFOX DIGITAL";
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
            top: -60,
            right: -60,
            width: 500,
            height: 500,
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
          Transparent Per-Image Pricing
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
          Photo Editing Pricing
          <br />& Volume Discounts
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
          Background Removal from $0.29 · Up to 20% Volume Off
        </div>

        {/* Tiers row */}
        <div style={{ display: "flex", gap: 40 }}>
          {[
            { label: "1–100 imgs", val: "Standard" },
            { label: "101–500 imgs", val: "10% Off" },
            { label: "501–1000 imgs", val: "15% Off" },
            { label: "1000+ imgs", val: "20% Off" },
          ].map((t) => (
            <div key={t.label} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ color: "#555", fontSize: 13, fontWeight: 700 }}>{t.label}</span>
              <span style={{ color: "white", fontSize: 18, fontWeight: 900 }}>{t.val}</span>
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

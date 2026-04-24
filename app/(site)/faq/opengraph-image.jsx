import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "FAQ — Frequently Asked Questions | BLACKFOX DIGITAL";
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
        <div style={{ position: "absolute", bottom: -60, right: -60, width: 440, height: 440, background: "radial-gradient(circle, rgba(238,58,57,0.18) 0%, transparent 70%)", borderRadius: "50%" }} />

        <div style={{ color: "#EE3A39", fontSize: 13, fontWeight: 900, letterSpacing: 7, textTransform: "uppercase", marginBottom: 28 }}>
          BLACKFOX DIGITAL · Knowledge Base
        </div>

        <div style={{ color: "white", fontSize: 68, fontWeight: 900, lineHeight: 1.05, textTransform: "uppercase", marginBottom: 24, maxWidth: 860 }}>
          Frequently<br />Asked Questions
        </div>

        <div style={{ color: "#626262", fontSize: 20, fontWeight: 700, marginBottom: 48, maxWidth: 700 }}>
          Pricing, turnaround, file formats, revisions & data security — answered.
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px 28px", maxWidth: 900 }}>
          {["Turnaround Times", "Volume Discounts", "Rush Delivery", "File Security", "Revision Policy", "RAW Files"].map((s) => (
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

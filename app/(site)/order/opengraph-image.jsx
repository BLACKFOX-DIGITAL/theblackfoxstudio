import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Place a Photo Editing Order — BLACKFOX DIGITAL";
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
        <div style={{ position: "absolute", top: -40, left: -40, width: 400, height: 400, background: "radial-gradient(circle, rgba(238,58,57,0.18) 0%, transparent 70%)", borderRadius: "50%" }} />

        <div style={{ color: "#EE3A39", fontSize: 13, fontWeight: 900, letterSpacing: 7, textTransform: "uppercase", marginBottom: 28 }}>
          BLACKFOX DIGITAL · Secure Checkout
        </div>

        <div style={{ color: "white", fontSize: 66, fontWeight: 900, lineHeight: 1.05, textTransform: "uppercase", marginBottom: 24, maxWidth: 860 }}>
          Place a Photo<br />Editing Order
        </div>

        <div style={{ display: "flex", gap: 40, marginBottom: 48 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ color: "#EE3A39", fontSize: 26, fontWeight: 900 }}>24-Hour</span>
            <span style={{ color: "#555", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2 }}>Delivery</span>
          </div>
          <div style={{ width: 1, background: "#222", alignSelf: "stretch" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ color: "white", fontSize: 26, fontWeight: 900 }}>Free Trial</span>
            <span style={{ color: "#555", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2 }}>10 Images</span>
          </div>
          <div style={{ width: 1, background: "#222", alignSelf: "stretch" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ color: "white", fontSize: 26, fontWeight: 900 }}>From $0.29</span>
            <span style={{ color: "#555", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2 }}>Per Image</span>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 56, right: 80, color: "#333", fontSize: 18, fontWeight: 900, letterSpacing: 5, textTransform: "uppercase" }}>
          BLACKFOX DIGITAL
        </div>
      </div>
    ),
    { ...size }
  );
}

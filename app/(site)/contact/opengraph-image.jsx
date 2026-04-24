import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Contact BLACKFOX DIGITAL — Image Post-Production Services";
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
            top: -100,
            left: -100,
            width: 600,
            height: 600,
            background: "radial-gradient(circle, rgba(238,58,57,0.25) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Badge */}
        <div
          style={{
            color: "#EE3A39",
            fontSize: 14,
            fontWeight: 900,
            letterSpacing: 8,
            textTransform: "uppercase",
            marginBottom: 28,
            display: "flex",
            alignItems: "center",
            gap: 10,
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
          Available 24/7/365
        </div>

        {/* Headline */}
        <div
          style={{
            color: "white",
            fontSize: 68,
            fontWeight: 900,
            lineHeight: 1.05,
            textTransform: "uppercase",
            marginBottom: 20,
            maxWidth: 900,
          }}
        >
          Contact Our Image
          <br />
          Editing Team
        </div>

        {/* Sub */}
        <div
          style={{
            color: "#EE3A39",
            fontSize: 28,
            fontWeight: 700,
            marginBottom: 56,
          }}
        >
          Replies within 2 hours · Free 10-image trial
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: 40, color: "#555" }}>
          <span style={{ fontSize: 17 }}>500+ Global Clients</span>
          <span style={{ fontSize: 17 }}>·</span>
          <span style={{ fontSize: 17 }}>80+ Specialists</span>
          <span style={{ fontSize: 17 }}>·</span>
          <span style={{ fontSize: 17 }}>5,000+ Images/Day</span>
        </div>

        {/* Brand */}
        <div
          style={{
            position: "absolute",
            bottom: 56,
            right: 80,
            color: "#333",
            fontSize: 20,
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

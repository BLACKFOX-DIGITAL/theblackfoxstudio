import { ImageResponse } from "next/og";
import { services } from "@/lib/mock-data";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateImageMetadata({ params }) {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);
  return [{ alt: service ? `${service.title} | BLACKFOX DIGITAL` : "Photo Editing Service | BLACKFOX DIGITAL" }];
}

export default async function Image({ params }) {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);
  const title = service?.title || slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  const price = service?.priceStarting ? `From $${service.priceStarting.toFixed(2)}/image` : "From $0.35/image";
  const turnaround = service?.turnaround || "24-Hour Delivery";

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
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 480,
            height: 480,
            background: "radial-gradient(circle, rgba(238,58,57,0.22) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Breadcrumb */}
        <div style={{ color: "#444", fontSize: 13, fontWeight: 700, letterSpacing: 4, textTransform: "uppercase", marginBottom: 28 }}>
          BLACKFOX DIGITAL · Services
        </div>

        {/* Service name */}
        <div
          style={{
            color: "white",
            fontSize: title.length > 30 ? 54 : 64,
            fontWeight: 900,
            lineHeight: 1.05,
            textTransform: "uppercase",
            marginBottom: 24,
            maxWidth: 860,
          }}
        >
          {title}
        </div>

        {/* Price + Turnaround */}
        <div style={{ display: "flex", gap: 40, marginBottom: 48 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ color: "#EE3A39", fontSize: 28, fontWeight: 900 }}>{price}</span>
            <span style={{ color: "#555", fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2 }}>Per Image</span>
          </div>
          <div style={{ width: 1, background: "#222", alignSelf: "stretch" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ color: "white", fontSize: 28, fontWeight: 900 }}>{turnaround}</span>
            <span style={{ color: "#555", fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2 }}>Standard</span>
          </div>
          <div style={{ width: 1, background: "#222", alignSelf: "stretch" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ color: "white", fontSize: 28, fontWeight: 900 }}>Free Trial</span>
            <span style={{ color: "#555", fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2 }}>10 Images</span>
          </div>
        </div>

        {/* Features */}
        {service?.features && (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {service.features.slice(0, 2).map((f) => (
              <div key={f} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#EE3A39", flexShrink: 0 }} />
                <span style={{ color: "#666", fontSize: 15, fontWeight: 700 }}>{f}</span>
              </div>
            ))}
          </div>
        )}

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

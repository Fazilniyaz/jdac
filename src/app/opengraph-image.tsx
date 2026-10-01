import { ImageResponse } from "next/og";
import { company } from "@/content/academy";

export const dynamic = "force-static";
export const alt = `${company.academyName} · ${company.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Generated at build time for static export.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0B1F33",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#4599D3",
            }}
          />
          <div style={{ color: "white", fontSize: 34, fontWeight: 700 }}>
            {company.academyName}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "white",
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            {company.tagline}
          </div>
          <div style={{ color: "#AED4EC", fontSize: 30, marginTop: 20 }}>
            {company.programType}
          </div>
        </div>

        <div style={{ display: "flex", height: 10, width: 320 }}>
          <div style={{ flex: 1, background: "#4599D3" }} />
          <div style={{ flex: 1, background: "#E01E26" }} />
          <div style={{ flex: 1, background: "#F05623" }} />
        </div>
      </div>
    ),
    { ...size }
  );
}

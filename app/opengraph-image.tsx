import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { COLORS, DISPLAY, MONO, OgBadge, SITE_HOST, loadFonts } from "@/lib/og";

export const alt = "Abhishek Jha, full stack engineer. I built Lonch, my own Vercel, on AWS. Open to full-time and contract roles.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [photo, fonts] = await Promise.all([
    readFile(path.join(process.cwd(), "assets", "images", "mee.jpeg")),
    loadFonts(),
  ]);
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: COLORS.cream,
          color: COLORS.ink,
          padding: 56,
          gap: 48,
          fontFamily: MONO,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20, letterSpacing: 3, color: COLORS.muted }}>
              <div style={{ display: "flex" }}>{SITE_HOST.toUpperCase()} — FULL STACK</div>
              <div style={{ display: "flex" }}>KOLKATA, IN</div>
            </div>
            <div style={{ display: "flex", marginTop: 16, height: 3, background: COLORS.lime }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", fontFamily: DISPLAY, fontWeight: 700, lineHeight: 0.86 }}>
            <div style={{ display: "flex", fontSize: 156 }}>ABHISHEK</div>
            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <div style={{ display: "flex", fontSize: 156 }}>JHA</div>
              <OgBadge size={120} />
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ display: "flex", fontFamily: DISPLAY, fontWeight: 700, fontSize: 38, lineHeight: 1.05 }}>
              I BUILT LONCH, MY OWN VERCEL, ON AWS.
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  display: "flex",
                  background: COLORS.lime,
                  border: `3px solid ${COLORS.ink}`,
                  borderRadius: 999,
                  padding: "10px 22px",
                  fontSize: 18,
                  fontWeight: 700,
                  letterSpacing: 2,
                }}
              >
                OPEN TO FULL-TIME & CONTRACT
              </div>
              <div style={{ display: "flex", fontSize: 18, letterSpacing: 2, color: COLORS.muted }}>
                AI AGENTS · NODE.JS · REACT · AWS
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            position: "relative",
            width: 380,
            borderRadius: 16,
            border: `3px solid ${COLORS.ink}`,
            overflow: "hidden",
            background: COLORS.ink,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photoSrc}
            alt=""
            width={380}
            height={518}
            style={{ objectFit: "cover", objectPosition: "50% 20%", width: "100%", height: "100%" }}
          />
          <div
            style={{
              display: "flex",
              position: "absolute",
              left: 16,
              right: 16,
              bottom: 16,
              background: COLORS.cream,
              border: `3px solid ${COLORS.ink}`,
              borderRadius: 999,
              padding: "8px 16px",
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            // SCHEMA TO DEPLOY. SOLO.
          </div>
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}

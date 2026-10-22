import { ImageResponse } from "next/og";
import { COLORS, DISPLAY, loadFonts } from "@/lib/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: COLORS.lime,
          color: COLORS.ink,
          fontFamily: DISPLAY,
          fontWeight: 700,
          fontSize: 104,
          letterSpacing: -2,
          lineHeight: 1,
        }}
      >
        AJ
      </div>
    ),
    { ...size, fonts: await loadFonts() }
  );
}

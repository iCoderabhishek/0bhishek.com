import { ImageResponse } from "next/og";
import { COLORS, DISPLAY, loadFonts } from "@/lib/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
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
          border: `5px solid ${COLORS.ink}`,
          borderRadius: 16,
          color: COLORS.ink,
          fontFamily: DISPLAY,
          fontWeight: 700,
          fontSize: 38,
          letterSpacing: -1,
          lineHeight: 1,
        }}
      >
        AJ
      </div>
    ),
    { ...size, fonts: await loadFonts() }
  );
}

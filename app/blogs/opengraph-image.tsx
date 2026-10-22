import { ImageResponse } from "next/og";
import { PageCard, loadFonts } from "@/lib/og";

export const alt = "Writing by Abhishek Jha: AI agents, Redis, PostgreSQL and building npm tools.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <PageCard
      index="05"
      title="Writing"
      line="AI agents, Redis, PostgreSQL, S3 uploads, and notes from real bugs."
    />,
    { ...size, fonts: await loadFonts() }
  );
}

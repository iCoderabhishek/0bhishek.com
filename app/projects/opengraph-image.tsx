import { ImageResponse } from "next/og";
import { PageCard, loadFonts } from "@/lib/og";
import { PROJECTS_DATA } from "@/data/projects";

export const alt = "Projects by Abhishek Jha: Lonch, Sutra AI, Dropdesk and more.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const names = PROJECTS_DATA.slice(0, 3).map((p) => p.title).join(", ");
  return new ImageResponse(
    <PageCard index="02" title="Projects" line={`${PROJECTS_DATA.length} shipped, with live demos. ${names} and more.`} />,
    { ...size, fonts: await loadFonts() }
  );
}

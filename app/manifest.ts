import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Abhishek Jha | Full Stack Engineer",
    short_name: "Abhishek Jha",
    description: "Full stack engineer. Built Lonch and Sutra AI. Open to full-time and contract roles.",
    start_url: "/",
    display: "browser",
    background_color: "#fdf4ee",
    theme_color: "#fdf4ee",
    icons: [{ src: "/apple-icon", sizes: "180x180", type: "image/png" }],
  };
}

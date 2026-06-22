import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://0bhishek.com/sitemap.xml",
    host: "https://0bhishek.com",
  };
}

import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "*",
        allow: "/",
        crawlDelay: 2,
      },
    ],
    sitemap: "https://0bhishek.com/sitemap.xml",
    host: "https://0bhishek.com",
  };
}

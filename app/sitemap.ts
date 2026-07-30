import { MetadataRoute } from "next";
import { BLOG_DATA } from "@/data/blogs";

const BASE_URL = "https://0bhishek.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blogs`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // Dynamic blog entries from BLOG_DATA
  const blogPages: MetadataRoute.Sitemap = BLOG_DATA.map((post) => ({
    url: post.url,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}

import { Metadata } from "next";
import React from "react";
import Header from "@/components/outer/Header";
import AllBlogCard from "@/components/profile/AllBlogs";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical articles by Abhishek Jha on full-stack development, React, Node.js, system design, AI, databases, and software engineering best practices.",
  keywords: [
    "Abhishek Jha blog",
    "software engineering blog",
    "React tutorials",
    "Node.js articles",
    "system design",
    "AI agents",
    "Redis",
    "full stack development",
  ],
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Blog | Abhishek Jha",
    description:
      "Technical articles on full-stack development, React, Node.js, system design, AI, and databases.",
    url: "https://0bhishek.com/blogs",
    type: "website",
  },
};

export default function BlogsPage() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-background text-foreground font-mono px-4 sm:px-6 py-10 selection:bg-neutral-300 dark:selection:bg-neutral-600 overflow-hidden">
        {/* Vertical guides — hidden on mobile */}
        <div className="hidden sm:block absolute inset-0 pointer-events-none">
          <div className="absolute left-[12%] top-0 bottom-0 w-px bg-foreground/15" />
          <div className="absolute right-[12%] top-0 bottom-0 w-px bg-foreground/15" />
        </div>

        <AllBlogCard />
      </main>
    </>
  );
}

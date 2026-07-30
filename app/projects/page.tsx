import { Metadata } from "next";
import React from "react";
import Header from "@/components/outer/Header";
import { AllProjectsCard } from "@/components/profile/AllProjects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore projects by Abhishek Jha — production-grade web apps, React Native mobile apps, SaaS products, NPM packages, and open-source tools built with modern technologies.",
  keywords: [
    "Abhishek Jha projects",
    "React projects",
    "Next.js projects",
    "React Native apps",
    "full stack projects",
    "open source",
    "SaaS",
    "NPM package",
    "portfolio projects",
  ],
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Abhishek Jha",
    description:
      "Production-grade web apps, React Native mobile apps, SaaS products, and open-source tools.",
    url: "https://0bhishek.com/projects",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-background text-foreground font-mono px-4 sm:px-6 py-10 selection:bg-neutral-300 dark:selection:bg-neutral-600 overflow-hidden">
        {/* Vertical guides — hidden on mobile */}
        <div className="hidden sm:block absolute inset-0 pointer-events-none">
          <div className="absolute left-[12%] top-0 bottom-0 w-px bg-foreground/15" />
          <div className="absolute right-[12%] top-0 bottom-0 w-px bg-foreground/15" />
        </div>

        <AllProjectsCard />
      </main>
    </>
  );
}

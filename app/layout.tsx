import type { Metadata, Viewport } from "next";
import { Oswald, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/outer/Footer";
import Header from "@/components/outer/Header";
import { Marquee } from "@/components/outer/Marquee";
import { ConsentBanner } from "@/components/outer/ConsentBanner";
import { EXPERIENCE_DATA } from "@/data/experience";
import { STACK } from "@/data/site";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const DESCRIPTION =
  "Abhishek Jha, full stack engineer in Kolkata. Built Lonch, a deploy platform on AWS, and Sutra AI, scheduled AI agents. Node.js, PostgreSQL, React, React Native. Open to full-time and contract roles.";

export const viewport: Viewport = {
  themeColor: "#fdf4ee",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://0bhishek.com"),
  title: {
    default: "Abhishek Jha | Full Stack Engineer",
    template: "%s | Abhishek Jha",
  },
  description: DESCRIPTION,
  keywords: [
    "Abhishek Jha",
    "0bhishek",
    "Full Stack Engineer",
    "Full Stack Developer",
    "AI Agents",
    "AI Engineer",
    "Software Engineer",
    "Backend Engineer",
    "Node.js Developer",
    "React Developer",
    "React Native Developer",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Redis",
    "Docker",
    "AWS",
    "Kolkata",
    "India",
  ],
  authors: [{ name: "Abhishek Jha", url: "https://0bhishek.com" }],
  creator: "Abhishek Jha",
  publisher: "Abhishek Jha",
  alternates: {
    canonical: "/",
    // Points AI tools at the plain-text summary.
    types: { "text/plain": "/llms.txt" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  category: "technology",
  verification: { google: "aQiaGefqTXcWOPOeBBIiq3cgOxwbaJfB0MAr1RnMzVg" },
  openGraph: {
    title: "Abhishek Jha | Full Stack Engineer",
    description: DESCRIPTION,
    url: "https://0bhishek.com",
    siteName: "Abhishek Jha",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Jha | Full Stack Engineer",
    description: DESCRIPTION,
    site: "@0bhishek",
    creator: "@0bhishek",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // One graph: the site, the profile page, and the person it's about.
  // Google uses ProfilePage + Person for name and knowledge panels; AI search
  // reads the same graph to answer "who is Abhishek Jha / what has he built".
  const person = {
    "@type": "Person",
    "@id": "https://0bhishek.com/#person",
    name: "Abhishek Jha",
    alternateName: "0bhishek",
    url: "https://0bhishek.com",
    image: "https://0bhishek.com/opengraph-image",
    jobTitle: "Full Stack Engineer",
    description: DESCRIPTION,
    email: "mailto:connect@0bhishek.com",
    address: { "@type": "PostalAddress", addressLocality: "Kolkata", addressCountry: "IN" },
    nationality: { "@type": "Country", name: "India" },
    alumniOf: EXPERIENCE_DATA.map((job) => ({
      "@type": "Organization",
      name: job.company,
    })),
    hasOccupation: {
      "@type": "Occupation",
      name: "Full Stack Engineer",
      occupationLocation: { "@type": "City", name: "Kolkata" },
      skills: STACK.flatMap((g) => g.tools).join(", "),
    },
    knowsAbout: [
      "AI agents",
      "Go",
      "LLM APIs",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Redis",
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "Go",
      "Docker",
      "AWS",
    ],
    sameAs: [
      "https://github.com/iCoderabhishek",
      "https://x.com/0bhishek",
      "https://www.linkedin.com/in/0bhishek",
      "https://dev.to/mrcssdev",
    ],
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://0bhishek.com/#website",
        url: "https://0bhishek.com",
        name: "Abhishek Jha",
        inLanguage: "en",
        publisher: { "@id": "https://0bhishek.com/#person" },
      },
      {
        "@type": "ProfilePage",
        "@id": "https://0bhishek.com/#profile",
        url: "https://0bhishek.com",
        name: "Abhishek Jha | Full Stack Engineer",
        isPartOf: { "@id": "https://0bhishek.com/#website" },
        mainEntity: { "@id": "https://0bhishek.com/#person" },
      },
      person,
    ],
  };

  return (
    <html lang="en" className={`${oswald.variable} ${jetbrains.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:border-2 focus:border-ink focus:bg-lime focus:px-4 focus:py-2 focus:text-label focus:font-bold focus:uppercase"
        >
          Skip to content
        </a>
        <Marquee />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ConsentBanner />
      </body>
    </html>
  );
}

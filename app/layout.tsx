import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/outer/Footer";
import { ThemeProvider } from "@/components/outer/ThemeProvider";
import ScrollProgress from "@/components/outer/ScrollProgress";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://0bhishek.com"),
  title: {
    default: "Abhishek Jha | Full Stack Software Engineer",
    template: "%s | Abhishek Jha",
  },
  description:
    "Abhishek Jha — Full Stack Software Engineer specializing in React, Next.js, Node.js, React Native, TypeScript, PostgreSQL, Docker, and cloud-native applications. Open to opportunities.",
  keywords: [
    "Abhishek Jha",
    "0bhishek",
    "Abhishek Jha portfolio",
    "Abhishek Jha developer",
    "Full Stack Developer",
    "Full Stack Engineer",
    "Software Engineer",
    "Software Developer",
    "React Developer",
    "Node.js Developer",
    "React Native Developer",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express",
    "FastAPI",
    "PostgreSQL",
    "Docker",
    "AWS",
    "REST APIs",
    "Microservices",
    "CI/CD",
    "GitHub Actions",
    "Prisma",
    "SQLAlchemy",
    "React Native CLI",
    "System Design",
    "SaaS",
    "Kolkata",
    "India",
    "hire developer",
    "freelance developer",
  ],
  authors: [{ name: "Abhishek Jha", url: "https://0bhishek.com" }],
  creator: "Abhishek Jha",
  publisher: "Abhishek Jha",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "aQiaGefqTXcWOPOeBBIiq3cgOxwbaJfB0MAr1RnMzVg",
  },
  openGraph: {
    title: "Abhishek Jha | Full Stack Software Engineer",
    description:
      "Full Stack Engineer building production-grade web apps, APIs, and cross-platform mobile applications with React, Node.js, TypeScript, and cloud infrastructure.",
    url: "https://0bhishek.com",
    siteName: "Abhishek Jha",
    images: [
      {
        url: "https://pbs.twimg.com/profile_images/1792263106363564032/84ENGWSS_400x400.jpg",
        width: 400,
        height: 400,
        alt: "Abhishek Jha — Full Stack Software Engineer Portfolio",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Jha | Full Stack Software Engineer",
    description:
      "Full Stack Engineer | React, Node.js, React Native, TypeScript, PostgreSQL, Docker | Open to opportunities",
    images: ["https://pbs.twimg.com/profile_images/1792263106363564032/84ENGWSS_400x400.jpg"],
    site: "@0bhishek",
    creator: "@0bhishek",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abhishek Jha",
    alternateName: "0bhishek",
    url: "https://0bhishek.com",
    image: "https://pbs.twimg.com/profile_images/1792263106363564032/84ENGWSS_400x400.jpg",
    jobTitle: "Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer specializing in React, Next.js, Node.js, React Native, TypeScript, PostgreSQL, Docker, and cloud-native applications.",
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express",
      "FastAPI",
      "React Native",
      "PostgreSQL",
      "Docker",
      "AWS",
      "REST APIs",
      "Microservices",
      "CI/CD",
      "System Design",
      "GitHub Actions",
      "SQLAlchemy",
      "Prisma",
    ],
    knowsLanguage: ["English", "Hindi"],
    nationality: "Indian",
    sameAs: [
      "https://github.com/iCoderabhishek",
      "https://x.com/0bhishek",
      "https://linkedin.com/in/icoderabhishek",
      "https://dev.to/mrcssdev",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Footer />
          <ScrollProgress />
        </ThemeProvider>
      </body>
    </html>
  );
}

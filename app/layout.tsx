import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/outer/Footer";
import { ThemeProvider } from "@/components/outer/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://0bhishek.com"),
  title: "Abhishek Jha | Developer Portfolio",
  description:
    "Abhishek Jha is a software developer with experience in building full-stack web apps, React Native apps, and SaaS products. He loves experimenting with new technologies, integrating APIs, and building tools that solve real-world problems.",
  keywords: [
    "Abhishek Jha",
    "0bhishek",
    "Abhishek Jha developer portfolio",
    "Full Stack Developer",
    "Software Engineer",
    "Next.js",
    "React Native",
    "SaaS",
  ],
  authors: [{ name: "Abhishek Jha", url: "https://0bhishek.com" }],
  creator: "Abhishek Jha",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Abhishek Jha | Developer Portfolio",
    description:
      "Abhishek Jha is a software developer with experience in building full-stack web apps, React Native apps, and SaaS products.",
    url: "https://0bhishek.com",
    siteName: "Abhishek Jha",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abhishek Jha Portfolio Preview",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Jha | Developer Portfolio",
    description:
      "Full Stack Developer | Building web, native, and real world projects.",
    images: ["/og-image.png"],
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
    image: "https://0bhishek.com/og-image.png",
    jobTitle: "Software Developer",
    description:
      "Abhishek Jha is a software developer building full-stack web apps, React Native apps, and SaaS products.",
    sameAs: [
      "https://github.com/iCoderabhishek",
      "https://x.com/0bhishek",
      "https://linkedin.com/in/icoderabhishek",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
        </ThemeProvider>
      </body>
    </html>
  );
}

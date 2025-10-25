import type React from "react";
import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const raleway = Raleway({ subsets: ["latin"], variable: "--font-serif" });

const baseUrl = new URL(
  process.env.NEXT_PUBLIC_BASE_URL || "https://walidadebayo.com"
);
export const metadata: Metadata = {
  metadataBase: baseUrl,
  title: "Walid Adebayo | Full-Stack Developer & Designer",
  description:
    "Full-Stack Developer with 3+ years of experience building modern, scalable web applications. Specializing in React, Next.js, Node.js, TypeScript, and cloud technologies. Available for freelance projects and full-time opportunities.",
  generator: "v0.app",
  keywords:
    "Full-Stack Developer, Web Developer, React Developer, Next.js Developer, Node.js, TypeScript, JavaScript, Frontend Developer, Backend Developer, Walid Adebayo, Portfolio, Freelance Developer, UK Developer, Sheffield Developer",
  authors: [{ name: "Walid Adebayo", url: baseUrl.toString() }],
  creator: "Walid Adebayo",
  publisher: "Walid Adebayo",
  robots: "index, follow",
  openGraph: {
    title: "Walid Adebayo | Full-Stack Developer & Designer",
    description:
      "Full-Stack Developer with 3+ years of experience building modern, scalable web applications. Specializing in React, Next.js, Node.js, and TypeScript.",
    url: baseUrl.toString(),
    siteName: "Walid Adebayo Portfolio",
    images: [
      {
        url: "/images/banner.png",
        width: 1200,
        height: 630,
        alt: "Walid Adebayo - Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Walid Adebayo | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in React, Next.js, Node.js, and TypeScript. Building modern web experiences.",
    images: ["/images/banner.png"],
    creator: "@walidadebayo",
  },
  alternates: {
    canonical: baseUrl.toString(),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${raleway.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

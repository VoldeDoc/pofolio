import type React from "react";
import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import SchemaMarkup from "@/components/schema-markup";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const raleway = Raleway({ subsets: ["latin"], variable: "--font-serif" });

const baseUrl = new URL(
  process.env.NEXT_PUBLIC_BASE_URL || ""
).toString();
export const metadata: Metadata = {
  metadataBase: baseUrl,
  title: "Edun Yusuf | Full-Stack Developer & Designer",
  description:
    "Full-Stack Developer with 3+ years of experience building modern, scalable web applications. Specialising in React, Next.js, Node.js, TypeScript, and cloud technologies. Available for freelance projects and full-time opportunities.",
  generator: "v0.app",
  keywords:
    "Full-Stack Developer, Web Developer, React Developer, Next.js Developer, Node.js, TypeScript, JavaScript, Frontend Developer, Backend Developer, Edun Yusuf, Portfolio, Freelance Developer, Nigeria Developer, Abuja Developer",
  authors: [{ name: "Edun Yusuf", url: baseUrl }],
  creator: "Edun Yusuf",
  publisher: "Edun Yusuf",
  robots: "index, follow",
  openGraph: {
    title: "Edun Yusuf | Full-Stack Developer & Designer",
    description:
      "Full-Stack Developer with 3+ years of experience building modern, scalable web applications. Specialising in React, Next.js, Node.js, and TypeScript.",
    url: baseUrl,
    siteName: "Edun Yusuf Portfolio",
    images: [
      {
        url: "/images/banner.png",
        width: 1200,
        height: 630,
        alt: "Edun Yusuf- Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edun Yusuf | Full-Stack Developer",
    description:
      "Full-Stack Developer specialising in React, Next.js, Node.js, and TypeScript. Building modern web experiences.",
    images: ["/images/banner.png"],
    creator: "@edunyusuf",
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <SchemaMarkup />
      </head>
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

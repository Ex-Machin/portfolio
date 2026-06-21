import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dmytro Mykhailiuk — Full-Stack Developer",
  description: "Full-stack developer specializing in React, .NET, Angular, data visualization, and production-ready web applications.",
  openGraph: {
    title: "Dmytro Mykhailiuk — Full-Stack Developer",
    description: "Full-stack developer specializing in React, .NET, Angular, data visualization, and production-ready web applications.",
    url: "https://your-domain.com",
    siteName: "Dmytro Mykhailiuk",
    images: [
      {
        url: "/coding.svg",
        width: 1200,
        height: 630,
        alt: "Dmytro portfolio hero image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dmytro Mykhailiuk — Full-Stack Developer",
    description: "Full-stack developer specializing in React, .NET, Angular, data visualization, and production-ready web applications.",
    images: [
      "/coding.svg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <Analytics />
    </html>
  );
}

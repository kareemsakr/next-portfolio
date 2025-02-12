import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kareem Sakr | Senior Full-Stack Developer",
  description:
    "Senior Full-Stack Developer specializing in React, Next.js, and cloud technologies. Building impactful digital solutions with a focus on performance and user experience.",
  openGraph: {
    title: "Kareem Sakr | Senior Full-Stack Developer",
    description:
      "Senior Full-Stack Developer specializing in React, Next.js, and cloud technologies. Building impactful digital solutions with a focus on performance and user experience.",
    url: "https://kareemsakr.com",
    images: [
      {
        url: "https://kareemsakr.com/portfolio_thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Portfolio Thumbnail",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cupcake" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased p-2 md:p-6 scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}

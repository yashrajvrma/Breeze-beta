import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import localFont from "next/font/local";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const garamondBookCond = localFont({
  src: "../public/assets/fonts/ITCGaramondStd-BkCond.ttf",
  variable: "--font-garamond-book",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Breeze - The AI Document Editor",
  description:
    "Turn your ideas into professional document in seconds with Breeze AI.",
  icons: {
    icon: "/assets/images/favicon.ico",
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
        className={`${geistSans.variable} ${geistMono.variable} ${garamondBookCond.variable} antialiased dark`}
      >
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}

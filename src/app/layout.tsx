import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Footer } from '@/components/Footer';

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
  title: "Matcha Guide - Discover Matcha Cafes in London",
  description: "Your ultimate guide to the best matcha cafes in London. Explore authentic Japanese tea culture.",
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
        <Footer />
        <Sonner />
      </body>
    </html>
  );
}

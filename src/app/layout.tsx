import type { Metadata } from "next";
import { Inter, Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Bark & Bond | Premium Grooming & Training",
  description: "Professional pet grooming, dog training, walking, and pet sales by experienced professionals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${cormorant.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <Analytics />
      </body>
    </html>
  );
}

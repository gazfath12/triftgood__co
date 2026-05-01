import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://triftgood-co.vercel.app"),
  title: "TRIFTGOOD_CO | Arsip Thrift & Kalcer Skena Terkurasi",
  description: "TRIFTGOOD_CO adalah toko thrift online terkurasi untuk lo yang paham kalcer. Temukan boxy fit tees, parachute pants, dan vintage workwear dengan kualitas terbaik. Sikat sekarang sebelum laku!",
  keywords: ["thrift solo", "thrift skena", "boxy fit", "vintage band tee", "y2k style", "workwear thrift", "triftgood co"],
  authors: [{ name: "TRIFTGOOD_CO" }],
  openGraph: {
    title: "TRIFTGOOD_CO | Arsip Thrift & Kalcer Skena",
    description: "Curated streetwear and vintage archives. Sikat sekarang!",
    url: "https://triftgood-co.vercel.app/",
    siteName: "TRIFTGOOD_CO",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

import Cart from "@/components/Cart";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} bg-skena-dark text-skena-light font-sans antialiased selection:bg-skena-accent selection:text-skena-dark`}
      >
        <Toaster position="top-center" richColors theme="dark" />
        {children}
        <Cart />
      </body>
    </html>
  );
}

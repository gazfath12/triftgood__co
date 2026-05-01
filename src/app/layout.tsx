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
  title: "TRIFTGOOD__CO | Kalcer & Thrift Skena",
  description: "Arsip thrifting terkurasi untuk lo yang paham kalcer. Mulai dari boxy fit, parachute pants, sampai vintage band tees.",
};

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
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Import all available fonts for AI usage
import "../lib/fonts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeVisionSulDeMinas - Transformamos Ideias em Experiências Digitais",
  description: "Vídeos profissionais, conteúdos automáticos, designs impactantes e aplicativos sob medida para sua marca.",
  openGraph: {
    title: "CodeVisionSulDeMinas - Transformamos Ideias em Experiências Digitais",
    description: "Vídeos profissionais, conteúdos automáticos, designs impactantes e aplicativos sob medida para sua marca.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeVisionSulDeMinas - Transformamos Ideias em Experiências Digitais",
    description: "Vídeos profissionais, conteúdos automáticos, designs impactantes e aplicativos sob medida para sua marca.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

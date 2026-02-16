import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { AIChatbot } from "@/components/AIChatbot";

export const metadata: Metadata = {
  title: "DigitalRise Marketing | Premium Service Architecture",
  description: "We synthesize cutting-edge AI, performance advertising, and bespoke web architecture to scale high-growth brands at velocity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className="antialiased">
        {children}
        <WhatsAppCTA />
        <AIChatbot />
      </body>
    </html>
  );
}

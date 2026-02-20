import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { AIChatbot } from "@/components/AIChatbot";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.digitalrisemarketing.in"),
  title: {
    default: "DigitalRise Marketing | Premium Service Architecture",
    template: "%s | DigitalRise",
  },
  description: "We synthesize cutting-edge AI, performance advertising, and bespoke web architecture to scale high-growth brands at velocity.",
  keywords: ["Digital Marketing", "AI Automation", "Web Design", "Paid Advertising", "SEO"],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "VR-prJIPW9eodXQ1cS0jzighBwD1bzdnx1RKcFTEBKU",
  },
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

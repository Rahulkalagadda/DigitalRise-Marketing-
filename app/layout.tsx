import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { AIChatbot } from "@/components/AIChatbot";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.digitalrisemarketing.in"),
  title: {
    default: "DigitalRise Marketing | Best Digital Marketing Agency in Mumbai & Badlapur",
    template: "%s | DigitalRise Marketing",
  },
  description: "DigitalRise Marketing is a premier Media House & Digital Solutions provider in Mumbai & Badlapur. We specialize in AI Automation, Paid Ads, and Web Architecture.",
  keywords: [
    "Marketing Agency in Mumbai",
    "Best Digital Marketing Agency in Badlapur",
    "Media House Mumbai",
    "Digital Solutions India",
    "AI Marketing Agency India",
    "Digital Marketing Services Mumbai",
    "Web Development Badlapur",
    "SEO Services Mumbai",
    "Performance Marketing India"
  ],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "description": "DigitalRise Marketing is a premier Media House and Digital Solutions agency in Mumbai & Badlapur specializing in AI, Ads, and Web Architecture.",
  "name": "DigitalRise Marketing",
  "image": "https://www.digitalrisemarketing.in/icon.png",
  "@id": "https://www.digitalrisemarketing.in",
  "url": "https://www.digitalrisemarketing.in",
  "telephone": "+91XXXXXXXXXX", // User should update this
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Badlapur East",
    "addressLocality": "Badlapur",
    "addressRegion": "Maharashtra",
    "postalCode": "421503",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 19.1678,
    "longitude": 73.2322
  },
  "areaServed": ["Badlapur", "Mumbai", "Maharashtra", "India"],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "20:00"
  },
  "sameAs": [
    "https://www.instagram.com/digitalrisemarketing"
  ]
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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

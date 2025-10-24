// src/app/layout.tsx
import type { Metadata } from "next";

import "./globals.css";
import { generalSans } from "@/fonts";
import { structuredData } from "@/lib/json-ld-schema";

export const metadata: Metadata = {
  title:
    "Herzi – Best German Language Academy & Recruitment Consultant in Kerala for Study and Work in Germany",
  description:
    "Herzi Academy facilitates exam preparation, online & offline classes, Ausbildung & Masters recruitment, Nursing careers, APS & Attestation support.",
  keywords: [
    "German Language Academy",
    "German Courses, Study in Germany",
    "Ausbildung Recruitment",
    "Masters in Germany",
    "Nursing Jobs Germany",
    "Goethe Exam Prep",
    "TELC, OSD, APS Support",
    "Certificate Attestation",
    "German CV",
    "Learn German Online",
    "German Offline Classes",
    "best german academy in kerala",
    "best german language academy in kerala",
  ],

  authors: [{ name: "Herzi German Academy" }],
  applicationName: "Herzi German Academy",
  metadataBase: new URL("https://herziacademy.com"),
  alternates: {
    canonical: "https://herziacademy.com",
  },
  openGraph: {
    title:
      "Herzi – Best German Language Academy & Recruitment Consultant in Kerala for Study and Work in Germany",
    description:
      "Herzi Academy facilitates exam preparation, online & offline classes, Ausbildung & Masters recruitment, Nursing careers, APS & Attestation support.",
    url: "https://herziacademy.com",
    siteName: "Herzi Academy",
    images: [
      {
        url: "https://herziacademy.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Herzi German Academy — Best German Language Academy & Recruitment Consultant in Kerala",
      },
    ],

    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Herzi – Best German Language Academy & Recruitment Consultant in Kerala for Study and Work in Germany",
    description:
      "Herzi Academy facilitates exam preparation, online & offline classes, Ausbildung & Masters recruitment, Nursing careers, APS & Attestation support.",
    images: ["https://herziacademy.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${generalSans.className} antialiased`}>{children}</body>
    </html>
  );
}

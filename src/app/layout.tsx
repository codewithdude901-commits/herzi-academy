// src/app/layout.tsx
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { generalSans } from "@/fonts";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Herzi – Best German Language Academy & Recruitment Consultant in Kerala for Study and Work in Germany",
  description:
    "Learn German with Herzi Academy. Exam prep, online & offline classes, Ausbildung & Masters recruitment, nursing careers, APS & attestation support.",
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
  ],
  authors: [{ name: "Herzi German Academy" }],
  applicationName: "Herzi German Academy",
  metadataBase: new URL("https://www.herziacademy.com"),
  alternates: {
    canonical: "https://www.herziacademy.com",
  },
  openGraph: {
    title:
      "Herzi – Best German Language Academy & Recruitment Consultant in Kerala for Study and Work in Germany",
    description:
      "Learn German with Herzi Academy. Exam prep, online & offline classes, Ausbildung & Masters recruitment, nursing careers, APS & attestation support.",
    url: "https://www.herziacademy.com",
    siteName: "Herzi German Academy",
    images: [
      {
        url: "https://www.herziacademy.com/og-image.jpg",
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
      "Learn German with Herzi Academy. Exam prep, online & offline classes, Ausbildung & Masters recruitment, nursing careers, APS & attestation support.",
    images: ["https://www.herziacademy.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${generalSans.className} antialiased`}>{children}</body>
    </html>
  );
}

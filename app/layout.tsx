import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import { SITE_URL, SITE_NAME, SITE_TITLE, SITE_DESCRIPTION } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "Florencia Quiroga",
    "técnica universitaria en química",
    "técnica química",
    "laboratorio analítico",
    "HPLC",
    "cromatografía gaseosa",
    "control de calidad",
    "industria alimentaria",
    "industria farmacéutica",
    "buenas prácticas de manufactura",
    "BPM",
    "POES",
    "Universidad Nacional de Quilmes",
    "Zona Sur",
    "Gran Buenos Aires",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "profile",
    firstName: "Florencia",
    lastName: "Quiroga",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className="scroll-smooth">
      <body className={`${jakarta.variable} font-jakarta antialiased`}>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}

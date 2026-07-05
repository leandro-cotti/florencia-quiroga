import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://florencia-quiroga.com"),
  title: "Florencia Quiroga · Técnica Universitaria en Química",
  description:
    "Portfolio profesional de Florencia Quiroga, Técnica Universitaria en Química. Laboratorio analítico y control de calidad en la industria alimentaria y farmacéutica.",
  keywords: [
    "técnica química",
    "laboratorio",
    "HPLC",
    "control de calidad",
    "industria alimentaria",
    "buenas prácticas de manufactura",
    "farmacéutico",
    "Florencia Quiroga",
  ],
  alternates: {
    canonical: "https://florencia-quiroga.com",
  },
  openGraph: {
    title: "Florencia Quiroga · Técnica Universitaria en Química",
    description:
      "Técnica Universitaria en Química. Laboratorio analítico y control de calidad en la industria alimentaria y farmacéutica.",
    url: "https://florencia-quiroga.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${jakarta.variable} font-jakarta antialiased`}>
        {children}
      </body>
    </html>
  );
}

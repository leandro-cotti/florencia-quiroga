import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Florencia Quiroga — Técnica Universitaria en Química",
  description:
    "Portfolio profesional de Florencia Quiroga, Técnica Universitaria en Química con perfil analítico y orientación al laboratorio farmacéutico.",
  keywords: [
    "técnica química",
    "laboratorio",
    "HPLC",
    "control de calidad",
    "farmacéutico",
    "Florencia Quiroga",
  ],
  openGraph: {
    title: "Florencia Quiroga — Técnica Universitaria en Química",
    description:
      "Técnica Química con perfil analítico y orientación al laboratorio farmacéutico.",
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

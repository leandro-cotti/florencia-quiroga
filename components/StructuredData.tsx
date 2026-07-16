import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  LINKEDIN_URL,
  EMAIL,
} from "@/lib/site";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: SITE_NAME,
      givenName: "Florencia",
      familyName: "Quiroga",
      url: SITE_URL,
      image: `${SITE_URL}/florencia-portrait.jpg`,
      jobTitle: "Técnica Universitaria en Química",
      description: SITE_DESCRIPTION,
      email: `mailto:${EMAIL}`,
      telephone: "+54 9 11 6687 5636",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Zona Sur, Gran Buenos Aires",
        addressRegion: "Provincia de Buenos Aires",
        addressCountry: "AR",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Universidad Nacional de Quilmes",
        sameAs: "https://www.unq.edu.ar/",
      },
      worksFor: {
        "@type": "Organization",
        name: "Programa Supersopa · Universidad Nacional de Quilmes",
      },
      knowsAbout: [
        "Química analítica",
        "HPLC (cromatografía líquida de alta presión)",
        "Cromatografía gaseosa",
        "Espectrofotometría UV-Vis",
        "Análisis fisicoquímicos",
        "Microbiología",
        "Control de calidad",
        "Buenas Prácticas de Manufactura (BPM)",
        "Buenas Prácticas de Laboratorio (BPL)",
        "POES",
        "HACCP",
        "Industria alimentaria",
        "Industria farmacéutica",
      ],
      sameAs: [LINKEDIN_URL],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "es-AR",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

// Person y WebSite son definiciones de entidad: valen en todo el sitio y otras
// páginas las referencian por @id. ProfilePage, en cambio, describe únicamente
// la home, así que se emite sólo ahí (ver HomeStructuredData).
export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

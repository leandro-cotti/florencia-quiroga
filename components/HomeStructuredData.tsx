import { SITE_URL } from "@/lib/site";
import { articles } from "@/lib/articles";

// ProfilePage describe específicamente la home, por eso no vive en el layout.
// Person y WebSite se definen globalmente en StructuredData y acá se
// referencian por @id.
const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profilepage`,
      url: SITE_URL,
      name: "Florencia Quiroga · Técnica Universitaria en Química",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: { "@id": `${SITE_URL}/#person` },
      inLanguage: "es-AR",
      hasPart: articles.map((a) => ({
        "@type": "BlogPosting",
        "@id": `${SITE_URL}/articulos/${a.slug}#article`,
        headline: a.title,
        url: `${SITE_URL}/articulos/${a.slug}`,
        datePublished: a.published,
        author: { "@id": `${SITE_URL}/#person` },
      })),
    },
  ],
};

export default function HomeStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
    />
  );
}

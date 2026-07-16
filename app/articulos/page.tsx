import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { articles } from "@/lib/articles";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import ArticleNav from "@/components/ArticleNav";
import Footer from "@/components/Footer";

const TITLE = "Artículos sobre química, laboratorio y control de calidad";
const DESCRIPTION =
  "Artículos sobre laboratorio analítico, HPLC, análisis fisicoquímicos y la normativa de control de calidad alimentaria en Argentina (BPM, POES y HACCP), escritos por Florencia Quiroga, Técnica Universitaria en Química.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/articulos` },
  openGraph: {
    title: `${TITLE} | Florencia Quiroga`,
    description: DESCRIPTION,
    url: `${SITE_URL}/articulos`,
    type: "website",
  },
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_URL}/articulos#collection`,
  url: `${SITE_URL}/articulos`,
  name: TITLE,
  description: DESCRIPTION,
  inLanguage: "es-AR",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#person` },
  hasPart: articles.map((a) => ({
    "@type": "BlogPosting",
    "@id": `${SITE_URL}/articulos/${a.slug}#article`,
    headline: a.title,
    url: `${SITE_URL}/articulos/${a.slug}`,
    datePublished: a.published,
    author: { "@id": `${SITE_URL}/#person` },
  })),
};

export default function ArticlesIndex() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <ArticleNav />
      <main className="bg-white">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-teal)] mb-4">
            Artículos
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--color-ink)] leading-tight tracking-tight mb-6">
            Química, laboratorio y{" "}
            <span className="text-[var(--color-teal)]">control de calidad</span>
          </h1>
          <p className="text-lg text-[var(--color-ink-muted)] leading-relaxed mb-16 max-w-2xl">
            Notas sobre las técnicas y la normativa con las que trabajo todos los
            días, escritas para quien está empezando en el área o quiere entender
            de dónde sale cada requisito. Todas las fuentes están citadas.
          </p>

          <div className="space-y-5">
            {articles.map((a) => (
              <Link
                key={a.slug}
                href={`/articulos/${a.slug}`}
                className="group block p-7 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-teal-mid)] hover:bg-[var(--color-teal-light)]/40 hover:shadow-lg hover:shadow-[var(--color-teal)]/5 transition-all duration-300"
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {a.tags.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-white border border-[var(--color-border)] text-[var(--color-ink-muted)]"
                    >
                      {t}
                    </span>
                  ))}
                  <span className="flex items-center gap-1.5 text-xs text-[var(--color-ink-muted)] ml-auto">
                    <Clock size={12} />
                    {a.readingMinutes} min
                  </span>
                </div>
                <h2 className="text-xl font-bold text-[var(--color-ink)] leading-snug mb-2 group-hover:text-[var(--color-teal)] transition-colors">
                  {a.title}
                </h2>
                <p className="text-sm text-[var(--color-ink-muted)] leading-relaxed mb-4">
                  {a.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-teal)]">
                  Leer
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-[var(--color-border)] text-center">
            <p className="text-[var(--color-ink-muted)] mb-6">
              Soy {SITE_NAME}, Técnica Universitaria en Química. Estoy disponible
              para nuevas oportunidades laborales.
            </p>
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-teal)] text-white font-semibold hover:bg-[#0C8B7C] transition-colors"
            >
              Contactame
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

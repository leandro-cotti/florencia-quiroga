import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, ExternalLink } from "lucide-react";
import { articles, getArticle } from "@/lib/articles";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import ArticleNav from "@/components/ArticleNav";
import ArticleBody from "@/components/ArticleBody";
import Footer from "@/components/Footer";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  const url = `${SITE_URL}/articulos/${article.slug}`;
  return {
    title: article.metaTitle,
    description: article.description,
    keywords: article.tags,
    alternates: { canonical: url },
    openGraph: {
      title: article.metaTitle,
      description: article.description,
      url,
      type: "article",
      publishedTime: article.published,
      modifiedTime: article.updated,
      authors: [SITE_URL],
      tags: article.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.description,
    },
  };
}

const fmtDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const url = `${SITE_URL}/articulos/${article.slug}`;
  const others = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: article.title,
        description: article.description,
        url,
        datePublished: article.published,
        dateModified: article.updated,
        inLanguage: "es-AR",
        keywords: article.tags.join(", "),
        author: { "@id": `${SITE_URL}/#person` },
        publisher: { "@id": `${SITE_URL}/#person` },
        isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        citation: article.sources.map((s) => ({
          "@type": "CreativeWork",
          name: s.label,
          url: s.url,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Artículos",
            item: `${SITE_URL}/articulos`,
          },
          { "@type": "ListItem", position: 3, name: article.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleNav />
      <main className="bg-white">
        <article className="max-w-3xl mx-auto px-6 py-16">
          {/* Breadcrumb */}
          <nav aria-label="Migas de pan" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-[var(--color-ink-muted)]">
              <li>
                <Link href="/" className="hover:text-[var(--color-teal)]">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/articulos"
                  className="hover:text-[var(--color-teal)]"
                >
                  Artículos
                </Link>
              </li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-2 mb-5">
              {article.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-full bg-[var(--color-teal-light)] border border-[var(--color-teal-mid)] text-[var(--color-teal)] font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[var(--color-ink)] leading-[1.15] tracking-tight mb-6">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[var(--color-ink-muted)] pb-8 border-b border-[var(--color-border)]">
              <span>
                Por{" "}
                <span className="font-semibold text-[var(--color-ink)]">
                  {SITE_NAME}
                </span>
                , Técnica Universitaria en Química
              </span>
              <span aria-hidden="true">·</span>
              <time dateTime={article.published}>
                {fmtDate(article.published)}
              </time>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} />
                {article.readingMinutes} min de lectura
              </span>
            </div>
          </header>

          <ArticleBody blocks={article.blocks} />

          {/* Sources */}
          <section className="mt-16 pt-8 border-t border-[var(--color-border)]">
            <h2 className="text-xs font-semibold tracking-widest uppercase text-[var(--color-ink-muted)] mb-5">
              Fuentes
            </h2>
            <ul className="space-y-2.5">
              {article.sources.map((s) => (
                <li key={s.url}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-start gap-2 text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-teal)] transition-colors"
                  >
                    <ExternalLink
                      size={13}
                      className="mt-1 flex-shrink-0 text-[var(--color-teal)]"
                    />
                    <span className="underline decoration-[var(--color-border)] underline-offset-4 group-hover:decoration-[var(--color-teal)]">
                      {s.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Author CTA */}
          <aside className="mt-12 p-7 rounded-2xl bg-[var(--color-ink)]">
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-teal)] mb-3">
              Sobre la autora
            </p>
            <p className="text-white/70 leading-relaxed text-sm mb-6">
              Soy {SITE_NAME}, Técnica Universitaria en Química recibida en la
              Universidad Nacional de Quilmes. Trabajo en la intersección entre
              el laboratorio analítico y el control de calidad en planta, en Zona
              Sur del Gran Buenos Aires. Estoy disponible para nuevas
              oportunidades laborales.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/#contacto"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--color-teal)] text-white text-sm font-semibold hover:bg-[#0C8B7C] transition-colors"
              >
                Contactame
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white/80 text-sm font-medium hover:bg-white/10 transition-colors"
              >
                Ver mi trayectoria
              </Link>
            </div>
          </aside>

          {/* Related */}
          {others.length > 0 && (
            <section className="mt-16">
              <h2 className="text-xs font-semibold tracking-widest uppercase text-[var(--color-ink-muted)] mb-5">
                Seguir leyendo
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {others.map((o) => (
                  <Link
                    key={o.slug}
                    href={`/articulos/${o.slug}`}
                    className="group p-5 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-teal-mid)] hover:bg-[var(--color-teal-light)]/40 transition-all duration-300"
                  >
                    <h3 className="text-sm font-bold text-[var(--color-ink)] leading-snug mb-2 group-hover:text-[var(--color-teal)] transition-colors">
                      {o.title}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-teal)]">
                      Leer
                      <ArrowRight
                        size={12}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="mt-12">
            <Link
              href="/articulos"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-ink-muted)] hover:text-[var(--color-teal)] transition-colors"
            >
              <ArrowLeft size={14} />
              Ver todos los artículos
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

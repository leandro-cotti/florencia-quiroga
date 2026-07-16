import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { articles } from "@/lib/articles";

export default function ArticlesTeaser() {
  return (
    <section id="articulos" className="py-24 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-teal)] mb-4">
            Publicaciones
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-ink)] mb-4">
            Artículos
          </h2>
          <p className="text-[var(--color-ink-muted)] leading-relaxed max-w-2xl">
            Escribo sobre las técnicas de laboratorio y la normativa de calidad
            con las que trabajo, con todas las fuentes citadas.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/articulos/${a.slug}`}
              className="group flex flex-col p-6 rounded-2xl bg-white border border-[var(--color-border)] hover:border-[var(--color-teal-mid)] hover:shadow-lg hover:shadow-[var(--color-teal)]/5 transition-all duration-300"
            >
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {a.tags.slice(0, 2).map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-[var(--color-teal-light)] border border-[var(--color-teal-mid)] text-[var(--color-teal)] font-medium"
                  >
                    {t}
                  </span>
                ))}
                <span className="flex items-center gap-1.5 text-xs text-[var(--color-ink-muted)] ml-auto">
                  <Clock size={12} />
                  {a.readingMinutes} min
                </span>
              </div>
              <h3 className="font-bold text-[var(--color-ink)] leading-snug mb-2 group-hover:text-[var(--color-teal)] transition-colors">
                {a.title}
              </h3>
              <p className="text-sm text-[var(--color-ink-muted)] leading-relaxed mb-4 flex-1">
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

        <Link
          href="/articulos"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[var(--color-teal)] text-[var(--color-teal)] font-semibold hover:bg-[var(--color-teal)] hover:text-white transition-all duration-200"
        >
          Ver todos los artículos
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}

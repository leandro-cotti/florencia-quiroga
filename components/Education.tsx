import { GraduationCap, BookOpen } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    degree: "Técnica Universitaria en Química",
    institution: "Universidad Nacional de Quilmes",
    period: "2023 - 2026",
    status: "Título obtenido · 2026",
    statusColor: "text-[var(--color-teal)] bg-[var(--color-teal-light)]",
    description:
      "Formación en análisis químico, técnicas instrumentales, control de calidad, microbiología y buenas prácticas.",
    highlights: [
      "Técnicas cromatográficas (HPLC, GC)",
      "Análisis fisicoquímicos",
      "Microbiología",
      "Control de calidad",
      "Buenas prácticas de laboratorio",
    ],
  },
  {
    icon: BookOpen,
    degree: "Ingeniería en Alimentos",
    institution: "Universidad Nacional de Quilmes",
    period: "2017 - 2022",
    status: "Formación previa",
    statusColor: "text-[var(--color-ink-muted)] bg-[var(--color-border)]",
    description:
      "Formación en ingeniería alimentaria que aportó bases sólidas en procesos industriales, fisicoquímica y tecnología de alimentos.",
    highlights: [
      "Fisicoquímica aplicada",
      "Procesos industriales",
      "Tecnología de alimentos",
      "Seguridad alimentaria",
    ],
  },
];

export default function Education() {
  return (
    <section id="educacion" className="py-24 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-teal)] mb-4">
            Formación
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-ink)]">
            Educación
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((ed, i) => (
            <div
              key={i}
              className={`relative rounded-2xl border p-8 transition-all duration-300 hover:shadow-lg ${
                i === 0
                  ? "bg-[var(--color-ink)] border-[var(--color-ink)] hover:shadow-[var(--color-teal)]/20"
                  : "bg-white border-[var(--color-border)] hover:border-[var(--color-teal-mid)] hover:shadow-[var(--color-teal)]/5"
              }`}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                  i === 0
                    ? "bg-[var(--color-teal)]/20"
                    : "bg-[var(--color-teal-light)]"
                }`}
              >
                <ed.icon
                  size={22}
                  className="text-[var(--color-teal)]"
                  strokeWidth={1.5}
                />
              </div>

              {/* Status badge */}
              <span
                className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-4 ${
                  i === 0
                    ? "text-[var(--color-teal)] bg-[var(--color-teal)]/20"
                    : "text-[var(--color-ink-muted)] bg-[var(--color-border)]"
                }`}
              >
                {ed.status}
              </span>

              <h3
                className={`text-xl font-bold mb-1 ${
                  i === 0 ? "text-white" : "text-[var(--color-ink)]"
                }`}
              >
                {ed.degree}
              </h3>
              <p
                className={`text-sm font-medium mb-1 ${
                  i === 0 ? "text-[var(--color-teal)]" : "text-[var(--color-teal)]"
                }`}
              >
                {ed.institution}
              </p>
              <p
                className={`text-xs mb-5 ${
                  i === 0 ? "text-white/40" : "text-[var(--color-ink-muted)]"
                }`}
              >
                {ed.period}
              </p>

              <p
                className={`text-sm leading-relaxed mb-6 ${
                  i === 0 ? "text-white/60" : "text-[var(--color-ink-muted)]"
                }`}
              >
                {ed.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2">
                {ed.highlights.map((h) => (
                  <span
                    key={h}
                    className={`text-xs px-2.5 py-1 rounded-full ${
                      i === 0
                        ? "bg-white/10 text-white/70"
                        : "bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-ink-muted)]"
                    }`}
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

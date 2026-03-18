import { Briefcase, FlaskConical, Building2 } from "lucide-react";

const experiences = [
  {
    icon: Building2,
    role: "Auxiliar Administrativa",
    company: "Municipio de Quilmes",
    period: "Febrero 2023 — Marzo 2026",
    current: false,
    tasks: [
      "Apertura y cierre de informes de asistencias",
      "Seguimiento individualizado de cada caso de asistencia",
      "Archivo y gestión de documentación asociada a cada expediente",
    ],
    tags: ["Gestión documental", "Administración", "Seguimiento de casos"],
  },
  {
    icon: Briefcase,
    role: "Atención al Cliente",
    company: "Universidad Nacional de Quilmes",
    period: "Marzo 2020 — Enero 2023",
    current: false,
    tasks: [
      "Atención al cliente y asesoramiento",
      "Apertura y cierre de caja",
      "Apertura y cierre de salón",
      "Control de stock",
    ],
    tags: ["Atención al cliente", "Gestión de caja", "Control de inventario"],
  },
  {
    icon: FlaskConical,
    role: "Elaboración de Bebidas Fermentables",
    company: "Emprendimiento familiar",
    period: "2020 — Actualidad",
    current: true,
    tasks: [
      "Seguimiento del proceso de fabricación de cerveza artesanal",
      "Compra, control y fraccionamiento de materias primas",
      "Control del proceso de fermentación",
      "Higienización, sanitización y control preventivo de equipos",
    ],
    tags: ["Fermentación", "Control de calidad", "Sanitización", "Materias primas"],
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-teal)] mb-4">
            Trayectoria
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-ink)]">
            Experiencia laboral
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-3 bottom-3 w-px bg-[var(--color-border)] hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative sm:pl-16 group">
                {/* Timeline dot */}
                <div className="hidden sm:flex absolute left-0 top-0 w-10 h-10 rounded-full bg-[var(--color-teal-light)] border-2 border-[var(--color-teal-mid)] group-hover:border-[var(--color-teal)] transition-colors items-center justify-center">
                  <exp.icon
                    size={16}
                    className="text-[var(--color-teal)]"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Card */}
                <div className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl p-6 hover:border-[var(--color-teal-mid)] hover:shadow-lg hover:shadow-[var(--color-teal)]/5 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-[var(--color-ink)]">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium text-[var(--color-teal)] mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[var(--color-ink-muted)] bg-white border border-[var(--color-border)] px-3 py-1 rounded-full whitespace-nowrap">
                        {exp.period}
                      </span>
                      {exp.current && (
                        <span className="text-xs text-[var(--color-teal)] bg-[var(--color-teal-light)] px-2.5 py-1 rounded-full font-semibold">
                          Actual
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-1.5 mb-5">
                    {exp.tasks.map((t, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5 text-sm text-[var(--color-ink-muted)] leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-teal)]/50 mt-1.5 flex-shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-white border border-[var(--color-border)] text-[var(--color-ink-muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

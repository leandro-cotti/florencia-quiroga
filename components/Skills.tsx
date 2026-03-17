const technicalSkills = [
  { name: "HPLC", desc: "Cromatografía líquida de alta presión" },
  { name: "Cromatografía gaseosa", desc: "Análisis de compuestos volátiles" },
  { name: "Análisis fisicoquímicos", desc: "Caracterización de muestras" },
  { name: "Microbiología básica", desc: "Control microbiológico" },
  { name: "BPL", desc: "Buenas Prácticas de Laboratorio" },
  { name: "Control de calidad", desc: "Gestión y documentación QC" },
  { name: "Fermentación", desc: "Control de procesos fermentativos" },
  { name: "Higienización", desc: "Sanitización de equipos y áreas" },
];

const tools = [
  { name: "SAP" },
  { name: "Microsoft Excel" },
  { name: "Microsoft Word" },
  { name: "PowerPoint" },
  { name: "Correo electrónico" },
  { name: "Redes sociales" },
];

const softSkills = [
  "Elaboración de reportes",
  "Comunicación asertiva",
  "Gestión de stock",
  "Resolución de problemas",
  "Trabajo en equipo",
  "Atención al detalle",
  "Capacidad de aprendizaje",
  "Adaptación a entornos dinámicos",
];

export default function Skills() {
  return (
    <section id="habilidades" className="py-24 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-teal)] mb-4">
            Competencias
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-ink)]">
            Habilidades
          </h2>
        </div>

        <div className="space-y-12">
          {/* Technical skills */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-[var(--color-ink-muted)] mb-6">
              Técnicas de laboratorio
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {technicalSkills.map((s) => (
                <div
                  key={s.name}
                  className="group relative p-4 rounded-xl bg-white border border-[var(--color-border)] hover:border-[var(--color-teal)] hover:shadow-md hover:shadow-[var(--color-teal)]/10 transition-all duration-200 cursor-default"
                >
                  <div className="w-2 h-2 rounded-full bg-[var(--color-teal)] mb-3 group-hover:scale-125 transition-transform" />
                  <p className="text-sm font-semibold text-[var(--color-ink)] mb-1">
                    {s.name}
                  </p>
                  <p className="text-xs text-[var(--color-ink-muted)]">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Two columns: tools + soft */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Tools */}
            <div>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-[var(--color-ink-muted)] mb-6">
                Herramientas digitales
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span
                    key={t.name}
                    className="px-3 py-1.5 rounded-full bg-white border border-[var(--color-border)] text-sm font-medium text-[var(--color-ink)] hover:border-[var(--color-teal)] hover:text-[var(--color-teal)] transition-colors cursor-default"
                  >
                    {t.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft skills */}
            <div>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-[var(--color-ink-muted)] mb-6">
                Habilidades blandas
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {softSkills.map((s) => (
                  <div
                    key={s}
                    className="flex items-center gap-2 text-sm text-[var(--color-ink-muted)]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-teal)] flex-shrink-0" />
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

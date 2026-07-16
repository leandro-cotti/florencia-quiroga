import { FlaskConical, Target, Star, Users } from "lucide-react";
import Image from "next/image";

const highlights = [
  {
    icon: FlaskConical,
    title: "Laboratorio analítico",
    desc: "Formación en técnicas cromatográficas y análisis fisicoquímicos con enfoque en precisión.",
  },
  {
    icon: Target,
    title: "Control de calidad",
    desc: "Controles en planta y laboratorio bajo Buenas Prácticas de Manufactura (BPM) y POES.",
  },
  {
    icon: Star,
    title: "Orientación al detalle",
    desc: "Perfil meticuloso, ordenado y comprometido con la exactitud en cada proceso.",
  },
  {
    icon: Users,
    title: "Trabajo en equipo",
    desc: "Comunicación asertiva y alta capacidad de adaptación a entornos dinámicos.",
  },
];

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top: Text + highlights grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Text */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-teal)] mb-4">
              Sobre mí
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-ink)] leading-tight mb-6">
              Una química que encontró su vocación en el{" "}
              <span className="text-[var(--color-teal)]">análisis</span>
            </h2>
            <div className="space-y-4 text-[var(--color-ink-muted)] leading-relaxed">
              <p>
                Soy Técnica Universitaria en Química, recibida en la Universidad
                Nacional de Quilmes (2026), con formación previa en Ingeniería en
                Alimentos.
              </p>
              <p>
                Combino el trabajo de laboratorio analítico con el control de
                calidad en producción de alimentos. Manejo técnicas
                instrumentales como{" "}
                <span className="text-[var(--color-ink)] font-medium">
                  HPLC y cromatografía gaseosa
                </span>
                , espectrofotometría UV-Vis, análisis fisicoquímicos y
                microbiología, y aplico{" "}
                <span className="text-[var(--color-ink)] font-medium">
                  controles de calidad en planta
                </span>{" "}
                bajo Buenas Prácticas de Manufactura (BPM) y POES.
              </p>
              <p>
                Actualmente trabajo como operaria de producción y control de
                calidad en el Programa Supersopa (UNQ), donde hago controles en
                proceso, muestreo y verificación de materias primas y producto
                terminado, trazabilidad de lotes y registro de variables. Antes,
                en el emprendimiento familiar de bebidas fermentables, apliqué
                procesos de higienización, sanitización y control de fermentación.
              </p>
              <p>
                Soy responsable, ordenada y orientada al detalle, con ganas de
                seguir creciendo tanto en la industria alimenticia como en el
                laboratorio químico y farmacéutico.
              </p>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="group p-6 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-teal-mid)] hover:bg-[var(--color-teal-light)] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--color-teal-light)] group-hover:bg-white flex items-center justify-center mb-4 transition-colors">
                  <h.icon
                    size={20}
                    className="text-[var(--color-teal)]"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-semibold text-[var(--color-ink)] mb-2 text-sm">
                  {h.title}
                </h3>
                <p className="text-xs text-[var(--color-ink-muted)] leading-relaxed">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Lab photo - full width banner */}
        <div className="relative w-full h-64 sm:h-80 rounded-3xl overflow-hidden">
          <Image
            src="/florencia-lab-banner.png"
            alt="Florencia Quiroga realizando análisis químicos en el laboratorio"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1280px) 100vw, 1152px"
          />
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-ink)]/70 via-[var(--color-ink)]/30 to-transparent" />

          {/* Caption overlay */}
          <div className="absolute inset-0 flex items-end p-8">
            <div>
              <p className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-1">
                En el laboratorio
              </p>
              <p className="text-white text-xl sm:text-2xl font-bold leading-tight max-w-sm">
                Donde la teoría se convierte en resultado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

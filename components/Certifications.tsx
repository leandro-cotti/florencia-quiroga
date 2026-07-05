import { ShieldCheck, BadgeCheck } from "lucide-react";

const certifications = [
  {
    icon: ShieldCheck,
    title: "Buenas Prácticas de Manufactura (BPM)",
    issuer: "ANMAT",
  },
  {
    icon: BadgeCheck,
    title: "Manipulación de Alimentos",
    issuer: "Certificado vigente",
  },
];

export default function Certifications() {
  return (
    <section id="certificaciones" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-teal)] mb-4">
            Acreditaciones
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-ink)]">
            Certificaciones
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((c) => (
            <div
              key={c.title}
              className="group flex items-start gap-4 p-6 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-teal-mid)] hover:shadow-lg hover:shadow-[var(--color-teal)]/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--color-teal-light)] group-hover:bg-white flex items-center justify-center flex-shrink-0 transition-colors">
                <c.icon
                  size={22}
                  className="text-[var(--color-teal)]"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-ink)] leading-snug">
                  {c.title}
                </h3>
                <p className="text-sm font-medium text-[var(--color-teal)] mt-1">
                  {c.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  const whatsappMessage = encodeURIComponent(
    "Hola Florencia, vi tu portfolio y me gustaría hablar sobre una oportunidad laboral."
  );

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-teal)] mb-4">
            Contacto
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-ink)] mb-5">
            ¿Hablamos?
          </h2>
          <p className="text-[var(--color-ink-muted)] leading-relaxed mb-12 max-w-lg mx-auto">
            Estoy disponible para nuevas oportunidades laborales en el área
            química y farmacéutica. No dudes en escribirme.
          </p>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            <a
              href="mailto:florencia.quiroga.quimica@gmail.com"
              className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-teal)] hover:bg-[var(--color-teal-light)] transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--color-teal-light)] group-hover:bg-white flex items-center justify-center transition-colors">
                <Mail
                  size={20}
                  className="text-[var(--color-teal)]"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <p className="text-xs font-semibold text-[var(--color-ink-muted)] mb-1 uppercase tracking-wider">
                  Email
                </p>
                <p className="text-sm font-medium text-[var(--color-ink)] break-all">
                  florencia.quiroga.quimica
                  <br />
                  @gmail.com
                </p>
              </div>
            </a>

            <a
              href={`https://wa.me/541166875636?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-teal)] hover:bg-[var(--color-teal-light)] transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--color-teal-light)] group-hover:bg-white flex items-center justify-center transition-colors">
                <MessageCircle
                  size={20}
                  className="text-[var(--color-teal)]"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <p className="text-xs font-semibold text-[var(--color-ink-muted)] mb-1 uppercase tracking-wider">
                  WhatsApp
                </p>
                <p className="text-sm font-medium text-[var(--color-ink)]">
                  +54 11 6687 5636
                </p>
              </div>
            </a>

            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)]">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-teal-light)] flex items-center justify-center">
                <MapPin
                  size={20}
                  className="text-[var(--color-teal)]"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <p className="text-xs font-semibold text-[var(--color-ink-muted)] mb-1 uppercase tracking-wider">
                  Ubicación
                </p>
                <p className="text-sm font-medium text-[var(--color-ink)]">
                  Florencio Varela
                  <br />
                  Buenos Aires, Argentina
                </p>
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:florencia.quiroga.quimica@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[var(--color-teal)] text-white font-semibold hover:bg-[#0C8B7C] transition-all duration-200 shadow-lg shadow-[var(--color-teal)]/25 hover:-translate-y-0.5"
            >
              <Mail size={16} />
              Enviar email
            </a>
            <a
              href={`https://wa.me/541166875636?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-[var(--color-teal)] text-[var(--color-teal)] font-semibold hover:bg-[var(--color-teal)] hover:text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              <Phone size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

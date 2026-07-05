"use client";

import { useState } from "react";
import { Mail, MapPin, Copy, Check } from "lucide-react";

const EMAIL = "fquiroga1396@gmail.com";

const LinkedInIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.615zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.372-.025-.521-.074-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <div className="relative">
              <a
                href="mailto:fquiroga1396@gmail.com"
                className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-teal)] hover:bg-[var(--color-teal-light)] transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-teal-light)] group-hover:bg-white flex items-center justify-center transition-colors">
                  <Mail
                    size={20}
                    className="text-[var(--color-teal)]"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="w-full">
                  <p className="text-xs font-semibold text-[var(--color-ink-muted)] mb-1 uppercase tracking-wider">
                    Email
                  </p>
                  <p className="text-[13px] lg:text-[11px] font-medium text-[var(--color-ink)] tracking-tight whitespace-nowrap">
                    fquiroga1396@gmail.com
                  </p>
                </div>
              </a>
              <button
                type="button"
                onClick={copyEmail}
                aria-label={copied ? "Email copiado" : "Copiar email"}
                title={copied ? "¡Copiado!" : "Copiar email"}
                className="absolute top-2.5 right-2.5 w-8 h-8 rounded-lg bg-white border border-[var(--color-border)] flex items-center justify-center text-[var(--color-ink-muted)] hover:text-[var(--color-teal)] hover:border-[var(--color-teal)] transition-colors"
              >
                {copied ? (
                  <Check size={15} className="text-[var(--color-teal)]" />
                ) : (
                  <Copy size={15} />
                )}
              </button>
            </div>

            <a
              href={`https://wa.me/5491166875636?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-teal)] hover:bg-[var(--color-teal-light)] transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--color-teal-light)] group-hover:bg-white flex items-center justify-center transition-colors text-[var(--color-teal)]">
                <WhatsAppIcon size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold text-[var(--color-ink-muted)] mb-1 uppercase tracking-wider">
                  WhatsApp
                </p>
                <p className="text-sm font-medium text-[var(--color-ink)] whitespace-nowrap">
                  +54 9 11 6687 5636
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
                  Zona Sur
                  <br />
                  Gran Buenos Aires
                </p>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/florencia-quiroga-quimica/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-teal)] hover:bg-[var(--color-teal-light)] transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--color-teal-light)] group-hover:bg-white flex items-center justify-center transition-colors text-[var(--color-teal)]">
                <LinkedInIcon />
              </div>
              <div>
                <p className="text-xs font-semibold text-[var(--color-ink-muted)] mb-1 uppercase tracking-wider">
                  LinkedIn
                </p>
                <p className="text-sm font-medium text-[var(--color-ink)]">
                  florencia-quiroga
                </p>
              </div>
            </a>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:fquiroga1396@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[var(--color-teal)] text-white font-semibold hover:bg-[#0C8B7C] transition-all duration-200 shadow-lg shadow-[var(--color-teal)]/25 hover:-translate-y-0.5"
            >
              <Mail size={16} />
              Enviar email
            </a>
            <a
              href={`https://wa.me/5491166875636?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-[var(--color-teal)] text-[var(--color-teal)] font-semibold hover:bg-[var(--color-teal)] hover:text-white transition-all duration-200 hover:-translate-y-0.5 [&_svg]:text-current"
            >
              <WhatsAppIcon size={16} />
              WhatsApp
            </a>
            <a
              href="https://www.linkedin.com/in/florencia-quiroga-quimica/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-[var(--color-teal)] text-[var(--color-teal)] font-semibold hover:bg-[var(--color-teal)] hover:text-white transition-all duration-200 hover:-translate-y-0.5 [&_svg]:text-current"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

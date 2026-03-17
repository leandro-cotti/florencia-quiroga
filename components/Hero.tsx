import { Mail, Phone, MapPin, ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[var(--color-ink)]">
      {/* Hex pattern overlay */}
      <div className="absolute inset-0 hex-bg opacity-100 pointer-events-none" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B2A] via-[#0D1B2A]/95 to-[#0E9F8E]/20 pointer-events-none" />

      {/* Floating teal blur orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[var(--color-teal)]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-[var(--color-teal)]/8 blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-teal)]/30 bg-[var(--color-teal)]/10 text-[var(--color-teal)] text-xs font-semibold tracking-widest uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-teal)] animate-pulse" />
              Disponible para trabajar
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-4">
              Florencia
              <br />
              <span className="text-[var(--color-teal)]">Quiroga</span>
            </h1>

            {/* Title */}
            <p className="text-lg sm:text-xl font-light text-white/60 tracking-wide mb-6">
              Técnica Universitaria en Química
            </p>

            {/* Divider */}
            <div className="w-16 h-px bg-[var(--color-teal)] mb-8" />

            {/* Description */}
            <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-xl mb-10 font-light">
              Perfil analítico y orientación al{" "}
              <span className="text-white/90 font-medium">
                laboratorio farmacéutico
              </span>
              . Formada en técnicas cromatográficas, análisis fisicoquímicos y{" "}
              <span className="text-white/90 font-medium">control de calidad</span>
              .
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-teal)] text-white font-semibold hover:bg-[#0C8B7C] transition-all duration-200 shadow-lg shadow-[var(--color-teal)]/30 hover:shadow-xl hover:shadow-[var(--color-teal)]/40 hover:-translate-y-0.5"
              >
                <Mail size={16} />
                Contactame
              </a>
              <a
                href="#experiencia"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white/80 font-medium hover:bg-white/10 hover:text-white transition-all duration-200"
              >
                Ver trayectoria
              </a>
            </div>

            {/* Contact quick info */}
            <div className="flex flex-wrap gap-5">
              <a
                href="mailto:florencia.quiroga.quimica@gmail.com"
                className="flex items-center gap-2 text-sm text-white/40 hover:text-[var(--color-teal)] transition-colors"
              >
                <Mail size={13} />
                florencia.quiroga.quimica@gmail.com
              </a>
              <a
                href="https://wa.me/541166875636"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/40 hover:text-[var(--color-teal)] transition-colors"
              >
                <Phone size={13} />
                +54 11 6687 5636
              </a>
              <span className="flex items-center gap-2 text-sm text-white/40">
                <MapPin size={13} />
                Florencio Varela
              </span>
            </div>
          </div>

          {/* Right: Photo */}
          <div className="hidden lg:flex justify-end">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-3xl border border-[var(--color-teal)]/20" />
              <div className="absolute -inset-6 rounded-3xl border border-[var(--color-teal)]/10" />

              {/* Photo container */}
              <div className="relative w-80 h-[480px] rounded-2xl overflow-hidden">
                <Image
                  unoptimized
                  src="/florencia-portrait.jpg"
                  alt="Florencia Quiroga"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="320px"
                />
                {/* Subtle bottom gradient to blend with bg */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/40 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-6 bg-white rounded-xl px-4 py-3 shadow-xl">
                <p className="text-xs text-[var(--color-ink-muted)] font-medium">Egresada</p>
                <p className="text-sm font-bold text-[var(--color-ink)]">UNQ · 2026</p>
              </div>

              {/* Teal accent dot */}
              <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[var(--color-teal)]" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#sobre-mi"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-[var(--color-teal)] transition-colors group"
      >
        <span className="text-xs font-medium tracking-widest uppercase">
          Scroll
        </span>
        <ArrowDown
          size={16}
          className="animate-bounce group-hover:animate-none"
        />
      </a>
    </section>
  );
}

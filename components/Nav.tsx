"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Educación", href: "#educacion" },
  { label: "Contacto", href: "#contacto" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="w-8 h-8 rounded-lg overflow-hidden ring-2 ring-[var(--color-teal)]/60 flex-shrink-0">
            <Image
              unoptimized
              src="/florencia-lab.png"
              alt="Florencia Quiroga"
              width={32}
              height={32}
              className="object-cover object-top w-full h-full"
            />
          </div>
          <span
            className={`text-sm font-semibold transition-colors ${
              scrolled ? "text-[var(--color-ink)]" : "text-white"
            }`}
          >
            Florencia Quiroga
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                scrolled
                  ? "text-[var(--color-ink-muted)] hover:text-[var(--color-teal)] hover:bg-[var(--color-teal-light)]"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="ml-3 px-4 py-1.5 rounded-full bg-[var(--color-teal)] text-white text-sm font-semibold hover:bg-[#0C8B7C] transition-colors"
          >
            Contactame
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden p-2 rounded-md transition-colors ${
            scrolled ? "text-[var(--color-ink)]" : "text-white"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[var(--color-border)] px-6 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 rounded-md text-sm font-medium text-[var(--color-ink-muted)] hover:text-[var(--color-teal)] hover:bg-[var(--color-teal-light)] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-2 px-4 py-2.5 rounded-full bg-[var(--color-teal)] text-white text-sm font-semibold text-center hover:bg-[#0C8B7C] transition-colors"
          >
            Contactame
          </a>
        </div>
      )}
    </nav>
  );
}

import Link from "next/link";
import Image from "next/image";

export default function ArticleNav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[var(--color-border)]">
      <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg overflow-hidden ring-2 ring-[var(--color-teal)]/60 flex-shrink-0">
            <Image
              src="/florencia-lab.png"
              alt=""
              width={32}
              height={32}
              className="object-cover object-top w-full h-full"
            />
          </div>
          <span className="text-sm font-semibold text-[var(--color-ink)]">
            Florencia Quiroga
          </span>
        </Link>

        <div className="flex items-center gap-1">
          <Link
            href="/articulos"
            className="px-3 py-1.5 rounded-md text-sm font-medium text-[var(--color-ink-muted)] hover:text-[var(--color-teal)] hover:bg-[var(--color-teal-light)] transition-colors"
          >
            Artículos
          </Link>
          <Link
            href="/#contacto"
            className="ml-2 px-4 py-1.5 rounded-full bg-[var(--color-teal)] text-white text-sm font-semibold hover:bg-[#0C8B7C] transition-colors"
          >
            Contactame
          </Link>
        </div>
      </div>
    </nav>
  );
}

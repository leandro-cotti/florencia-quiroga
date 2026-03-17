export default function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-[var(--color-teal)] flex items-center justify-center text-white text-xs font-bold">
            FQ
          </span>
          <span className="text-sm font-semibold text-white">
            Florencia Quiroga
          </span>
        </div>
        <p className="text-xs text-white/30 text-center">
          Técnica Universitaria en Química · Florencio Varela, Buenos Aires
        </p>
        <p className="text-xs text-white/30">
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

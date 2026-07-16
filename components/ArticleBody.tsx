import type { Block } from "@/lib/articles";

export default function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="text-2xl sm:text-3xl font-bold text-[var(--color-ink)] leading-tight pt-8"
              >
                {b.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                className="text-lg font-bold text-[var(--color-ink)] pt-4"
              >
                {b.text}
              </h3>
            );
          case "p":
            return (
              <p
                key={i}
                className="text-[var(--color-ink-muted)] leading-relaxed"
              >
                {b.text}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="space-y-2.5">
                {b.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-[var(--color-ink-muted)] leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-teal)] mt-2.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "callout":
            return (
              <aside
                key={i}
                className="my-8 rounded-2xl border border-[var(--color-teal-mid)] bg-[var(--color-teal-light)] p-6"
              >
                <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-teal)] mb-2">
                  {b.title}
                </p>
                <p className="text-[var(--color-ink)] leading-relaxed text-sm">
                  {b.text}
                </p>
              </aside>
            );
          case "table":
            return (
              <div
                key={i}
                className="my-8 overflow-x-auto rounded-2xl border border-[var(--color-border)]"
              >
                <table className="w-full text-left text-sm border-collapse min-w-[640px]">
                  <thead>
                    <tr className="bg-[var(--color-ink)]">
                      {b.head.map((h, j) => (
                        <th
                          key={j}
                          className="px-4 py-3 font-semibold text-white text-xs uppercase tracking-wider"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((row, j) => (
                      <tr
                        key={j}
                        className="border-t border-[var(--color-border)] bg-white"
                      >
                        {row.map((cell, k) => (
                          <td
                            key={k}
                            className={`px-4 py-3 align-top leading-relaxed ${
                              k === 0
                                ? "font-semibold text-[var(--color-ink)]"
                                : "text-[var(--color-ink-muted)]"
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
        }
      })}
    </div>
  );
}

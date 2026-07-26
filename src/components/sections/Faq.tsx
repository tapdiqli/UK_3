import type { FaqItem } from "@/types";

interface FaqProps {
  items: FaqItem[];
}

export function Faq({ items }: FaqProps) {
  return (
    <div className="divide-y divide-white/8 overflow-hidden rounded-2xl border border-white/8 bg-ink-800/40">
      {items.map((item) => (
        <details key={item.question} className="group px-5 py-4 sm:px-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-white marker:content-['']">
            {item.question}
            <span className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full border border-white/15 text-white/60 transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-white/65">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

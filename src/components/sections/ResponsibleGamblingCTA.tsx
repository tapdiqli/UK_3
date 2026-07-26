import Link from "next/link";
import { ShieldIcon } from "@/components/ui/Icons";

const resources = [
  { name: "BeGambleAware", detail: "Free advice & support", href: "https://www.begambleaware.org" },
  { name: "GamCare", detail: "0808 8020 133", href: "https://www.gamcare.org.uk" },
  { name: "GAMSTOP", detail: "Self-exclude for free", href: "https://www.gamstop.co.uk" },
  { name: "National Gambling Helpline", detail: "Open 24/7", href: "https://www.gamcare.org.uk" },
];

export function ResponsibleGamblingCTA() {
  return (
    <section className="container-page">
      <div className="relative overflow-hidden rounded-3xl border border-ruby/20 bg-gradient-to-br from-ink-800 to-ink-900 p-6 sm:p-10">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-ruby/20 blur-3xl" />
        <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-ruby/30 bg-ruby/10 px-3 py-1 text-xs font-semibold text-ruby-light">
              <ShieldIcon className="h-4 w-4" /> Stay in control
            </span>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
              Gambling should always be fun — never a problem
            </h2>
            <p className="mt-3 text-white/60">
              If gambling stops feeling like entertainment, free and confidential help is available
              right now. Set spend limits, take a break, or self-exclude at any time.
            </p>
            <Link href="/responsible-gambling" className="btn-primary mt-6">
              Responsible gambling tools
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {resources.map((r) => (
              <a
                key={r.name}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/8 bg-ink-900/60 p-4 transition-colors hover:border-ruby/40"
              >
                <p className="text-sm font-semibold text-white">{r.name}</p>
                <p className="mt-1 text-xs text-white/50">{r.detail}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

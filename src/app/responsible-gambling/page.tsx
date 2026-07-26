import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ShieldIcon, ClockIcon, LockIcon, CheckIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Responsible Gambling — Tools & Free Support",
  description:
    "Stay in control. Learn about spend limits, time-outs and GAMSTOP self-exclusion, and find free confidential support from GamCare and BeGambleAware. 18+ only.",
  alternates: { canonical: "/responsible-gambling" },
};

const tools = [
  {
    icon: LockIcon,
    title: "Spend limits",
    body: "Set daily, weekly or monthly limits on how much you can spend. Decreases apply immediately.",
  },
  {
    icon: ClockIcon,
    title: "Time-outs & reality checks",
    body: "Take a short break from 24 hours up to six weeks, and receive reminders of how long you've played.",
  },
  {
    icon: ShieldIcon,
    title: "Self-exclusion",
    body: "Exclude yourself from a single site, or from all UK-licensed sites at once with GAMSTOP.",
  },
];

const resources = [
  {
    name: "GAMSTOP",
    body: "Free service that lets you self-exclude from all UK-licensed online gambling for 6 months, 1 year or 5 years.",
    href: "https://www.gamstop.co.uk",
    cta: "Visit GAMSTOP",
  },
  {
    name: "GamCare",
    body: "Information, advice and free counselling. National Gambling Helpline: 0808 8020 133, open 24/7.",
    href: "https://www.gamcare.org.uk",
    cta: "Visit GamCare",
  },
  {
    name: "BeGambleAware",
    body: "Free, confidential advice and support for anyone affected by gambling, plus a live chat service.",
    href: "https://www.begambleaware.org",
    cta: "Visit BeGambleAware",
  },
  {
    name: "GamCare Forum & Gordon Moody",
    body: "Peer support forums and residential treatment for those experiencing serious gambling harm.",
    href: "https://www.gordonmoody.org.uk",
    cta: "Visit Gordon Moody",
  },
];

const signs = [
  "Spending more money or time gambling than you intended",
  "Chasing losses or gambling to escape stress or low mood",
  "Borrowing money or selling possessions to fund gambling",
  "Neglecting work, family or personal commitments",
  "Feeling anxious, guilty or irritable about your gambling",
];

export default function ResponsibleGamblingPage() {
  return (
    <>
      <PageHero
        eyebrow="Your safety comes first"
        title="Responsible gambling"
        description="Gambling should be fun and nothing more. If it ever stops feeling that way, the tools and free support below can help you stay in control."
        crumbs={[{ label: "Home", href: "/" }, { label: "Responsible Gambling" }]}
      />

      <section className="container-page py-12">
        <SectionHeading eyebrow="Stay in control" title="Tools every UK casino must offer" />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {tools.map((t) => (
            <div key={t.title} className="card p-6">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ruby/10 text-ruby-light">
                <t.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/8 bg-ink-950/60 py-12">
        <div className="container-page">
          <SectionHeading
            eyebrow="Know the signs"
            title="When gambling stops being fun"
            description="If several of these feel familiar, it may be time to take a break and seek support."
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {signs.map((s) => (
              <li key={s} className="flex items-start gap-3 rounded-xl border border-white/8 bg-ink-800/50 p-4 text-sm text-white/70">
                <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-ruby-light" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page py-12">
        <SectionHeading
          eyebrow="Free & confidential"
          title="Where to get help"
          description="These organisations are independent of any casino and offer support at no cost."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {resources.map((r) => (
            <div key={r.name} className="card flex flex-col p-6">
              <h3 className="text-lg font-semibold text-white">{r.name}</h3>
              <p className="mt-2 flex-1 text-sm text-white/60">{r.body}</p>
              <a
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline mt-4 self-start text-xs"
              >
                {r.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-ruby/20 bg-ruby/5 p-6 text-center">
          <p className="text-lg font-semibold text-white">
            You must be 18 or over to gamble in the UK.
          </p>
          <p className="mt-2 text-sm text-white/60">
            National Gambling Helpline · 0808 8020 133 · free and open 24/7
          </p>
        </div>
      </section>
    </>
  );
}

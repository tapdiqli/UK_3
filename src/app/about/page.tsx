import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ShieldIcon, ChartIcon, BoltIcon, CheckIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "About Us — Independent UK Casino Reviews",
  description:
    "BestBritCasinoList is an independent comparison service reviewing UK Gambling Commission licensed casinos. Learn about our editorial standards and how we make money.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: ShieldIcon,
    title: "Independence first",
    body: "Commercial relationships never influence our ratings. A casino cannot pay for a higher position.",
  },
  {
    icon: ChartIcon,
    title: "Evidence-based",
    body: "Every score comes from real, hands-on testing against a fixed, published set of criteria.",
  },
  {
    icon: BoltIcon,
    title: "Player safety",
    body: "We only list UKGC-licensed operators and prioritise sites with strong responsible-gambling tools.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Who we are"
        description="BestBritCasinoList is an independent comparison and review platform built for UK players. We are not a casino — we help you compare licensed operators with confidence."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="container-page space-y-5 py-12 text-white/70">
        <p className="leading-relaxed">
          We started BestBritCasinoList because comparing UK online casinos was needlessly
          confusing. Flashy bonus figures hid steep wagering requirements, and it was hard to know
          which operators were genuinely licensed and safe.
        </p>
        <p className="leading-relaxed">
          Our answer is simple: test every casino ourselves, score it against the same fixed
          criteria, and publish the results in plain English. We verify each operator&apos;s UK
          Gambling Commission licence before it ever appears on our list.
        </p>
        <p className="leading-relaxed">
          <strong className="text-white">How we make money:</strong> the site is free to use. When a
          reader signs up with a casino through one of our links, we may receive a commission. This
          never affects our editorial scores or rankings — they are based only on our testing.
        </p>
      </section>

      <section className="border-y border-white/8 bg-ink-950/60 py-12">
        <div className="container-page">
          <SectionHeading align="center" eyebrow="Our values" title="What we stand for" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="card p-6">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ruby/10 text-ruby-light">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-12">
        <SectionHeading eyebrow="Editorial standards" title="Our review promise" />
        <ul className="mt-6 space-y-3">
          {[
            "We only list operators licensed by the UK Gambling Commission.",
            "Every rating is based on real, hands-on testing.",
            "We disclose our advertising relationships clearly on every page.",
            "We highlight responsible-gambling tools and never encourage excessive play.",
            "We update reviews regularly to reflect changes to bonuses and terms.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-white/70">
              <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-ruby-light" />
              {item}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

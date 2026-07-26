import Link from "next/link";
import { getBrands, getGuides, faqs } from "@/lib/data";
import { Hero } from "@/components/sections/Hero";
import { DisclosureBanner } from "@/components/sections/DisclosureBanner";
import { ComparisonTable } from "@/components/casino/ComparisonTable";
import { BrandCard } from "@/components/casino/BrandCard";
import { Faq } from "@/components/sections/Faq";
import { ResponsibleGamblingCTA } from "@/components/sections/ResponsibleGamblingCTA";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ShieldIcon, ChartIcon, BoltIcon, ArrowRightIcon } from "@/components/ui/Icons";
import { formatDate } from "@/lib/utils";

const pillars = [
  {
    icon: ShieldIcon,
    title: "Licensed & verified",
    body: "Every casino holds a valid UK Gambling Commission licence, checked on the public register before we list it.",
  },
  {
    icon: ChartIcon,
    title: "Scored on real testing",
    body: "We open real accounts and rate games, bonuses, support and overall experience against the same fixed criteria.",
  },
  {
    icon: BoltIcon,
    title: "Safer play first",
    body: "We prioritise operators with clear responsible-gambling tools, fair terms and transparent promotions.",
  },
]

export default function HomePage() {
  const brands = getBrands();
  const guides = getGuides().slice(0, 3);

  return (
    <>
      <Hero />

      <div className="pt-3 lg:pt-4">
        <DisclosureBanner />
      </div>

      {/* Full ranking — BrandCards already shown in Hero on mobile */}
      <section className="container-page hidden py-7 lg:block">
        <SectionHeading
          eyebrow="The rankings"
          title="Compare the top UK online casinos"
          description="Independently rated and updated regularly. Compare the top UK-licensed casinos below."
        />
        <div className="mt-5 space-y-3">
          {brands.map((brand, index) => (
            <BrandCard key={brand.id} brand={brand} index={index} />
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href="/casinos" className="btn-outline">
            View full comparison <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Why trust us */}
      <section className="border-y border-white/8 bg-ink-950/60 py-14">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Why trust us"
            title="Reviews you can actually rely on"
            description="We are a comparison service, not a casino. Our only job is to help UK players choose safely."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="card p-6">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ruby/10 text-ruby-light">
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick comparison table */}
      <section className="container-page py-14">
        <SectionHeading
          eyebrow="At a glance"
          title="Side-by-side comparison"
          description="The essential numbers for our top-rated casinos in one scannable table."
        />
        <div className="mt-8">
          <ComparisonTable brands={brands.slice(0, 6)} />
        </div>
      </section>

      {/* Guides preview */}
      <section className="border-t border-white/8 bg-ink-950/60 py-14">
        <div className="container-page">
          <div className="flex items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Learn"
              title="Guides for smarter play"
              description="Understand bonuses, safer play tools and how to stay in control."
            />
            <Link href="/guides" className="hidden shrink-0 text-sm font-semibold text-ruby-light hover:underline sm:block">
              All guides →
            </Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="card group flex flex-col p-6 transition-transform hover:-translate-y-1"
              >
                <span className="eyebrow">{guide.category}</span>
                <h3 className="mt-2 text-lg font-semibold text-white group-hover:text-ruby-light">
                  {guide.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-white/60">{guide.excerpt}</p>
                <p className="mt-4 text-xs text-white/40">
                  {guide.readTime} · Updated {formatDate(guide.updated)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page py-14">
        <SectionHeading
          align="center"
          eyebrow="FAQ"
          title="Frequently asked questions"
        />
        <div className="mt-8">
          <Faq items={faqs} />
        </div>
      </section>

      <div className="pb-16">
        <ResponsibleGamblingCTA />
      </div>
    </>
  );
}

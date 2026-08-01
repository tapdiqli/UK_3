import type { Metadata } from "next";
import { getBrands } from "@/lib/data";
import { PageHero } from "@/components/layout/PageHero";
import { BrandLogo, decoPalette } from "@/components/casino/BrandLogo";
import { AffiliateLink } from "@/components/casino/AffiliateLink";
import { Rating } from "@/components/ui/Rating";
import { DisclosureBanner } from "@/components/sections/DisclosureBanner";
import { ResponsibleGamblingCTA } from "@/components/sections/ResponsibleGamblingCTA";
import { ArrowRightIcon, GiftIcon, ShieldIcon } from "@/components/ui/Icons";
import { getPositionMetrics } from "@/lib/ratings";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "UK Casino Bonuses & Welcome Offers",
  description:
    "Compare the latest UK casino welcome bonuses and free spins offers. Check wagering and full terms before you claim. 18+ | New customers only | begambleaware.org.",
  alternates: { canonical: "/bonuses" },
};

export default function BonusesPage() {
  const brands = getBrands();

  return (
    <>
      <PageHero
        eyebrow="Casino bonuses"
        title="Compare UK casino welcome bonuses"
        description="New customer offers from UK-licensed casinos, side by side. Always check the wagering requirement and terms — the headline figure isn't the whole story."
        crumbs={[{ label: "Home", href: "/" }, { label: "Bonuses" }]}
      />

      <section className="container-page py-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {brands.map((brand, index) => {
            const { order, rating, stars, badge } = getPositionMetrics(index);
            const palette = decoPalette(brand.rank);

            return (
              <AffiliateLink
                key={brand.id}
                href={brand.visitUrl}
                variant="card"
                ariaLabel={`Claim ${brand.name} bonus`}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-3xl border border-white/8 bg-ink-800/50 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-ruby/35 hover:shadow-ruby",
                  order === 1 && "ring-1 ring-ruby/40",
                )}
              >
                <div
                  className="h-1.5 w-full"
                  style={{
                    background: `linear-gradient(90deg, ${palette.jewel}, ${palette.gold})`,
                  }}
                />

                {badge && (
                  <span className="absolute right-4 top-5 rounded-full bg-ruby px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-ruby">
                    {badge}
                  </span>
                )}

                <div className="flex flex-col items-center gap-4 px-6 pb-2 pt-8">
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "grid h-9 w-9 place-items-center rounded-full font-display text-sm font-bold",
                        order === 1
                          ? "bg-ruby text-white"
                          : "bg-white/10 text-white/70",
                      )}
                    >
                      {order}
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                      Ranked offer
                    </p>
                  </div>

                  <BrandLogo name={brand.name} seed={brand.rank} size="card" />

                  <Rating
                    value={stars}
                    score={rating}
                    variant="split"
                    orientation="vertical"
                    size="md"
                  />
                </div>

                <div className="mx-6 mt-4 rounded-2xl border border-ruby/20 bg-gradient-to-b from-ruby/10 to-transparent px-5 py-5 text-center">
                  <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-ruby-light">
                    <GiftIcon className="h-3.5 w-3.5" />
                    {brand.bonus.headline}
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-white">
                    {brand.bonus.amount}
                  </h2>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 px-6">
                  <div className="rounded-xl border border-white/8 bg-ink-900/70 px-3 py-3 text-center">
                    <p className="text-[10px] uppercase tracking-widest text-white/40">Wagering</p>
                    <p className="mt-1 text-sm font-semibold text-white">{brand.bonus.wagering}</p>
                  </div>
                  <div className="rounded-xl border border-white/8 bg-ink-900/70 px-3 py-3 text-center">
                    <p className="text-[10px] uppercase tracking-widest text-white/40">Entry</p>
                    <p className="mt-1 text-sm font-semibold text-white">{brand.bonus.minDeposit}</p>
                  </div>
                </div>

                <p className="mt-4 line-clamp-3 px-6 text-center text-xs leading-relaxed text-white/45">
                  {brand.bonus.details}
                </p>

                <div className="mt-auto flex flex-col gap-3 px-6 pb-6 pt-5">
                  <span className="btn-primary pointer-events-none w-full">
                    Claim Bonus
                    <ArrowRightIcon className="h-4 w-4" />
                  </span>
                  <p className="flex items-center justify-center gap-1.5 text-[10px] text-white/35">
                    <ShieldIcon className="h-3 w-3 text-ruby-light" />
                    18+ | New customers only | T&amp;Cs apply | begambleaware.org
                  </p>
                </div>
              </AffiliateLink>
            );
          })}
        </div>
      </section>

      <div className="pb-8">
        <DisclosureBanner />
      </div>

      <div className="pb-14">
        <ResponsibleGamblingCTA />
      </div>
    </>
  );
}

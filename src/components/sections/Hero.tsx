import Link from "next/link";
import { getTopBrands } from "@/lib/data";
import { BrandLogo } from "@/components/casino/BrandLogo";
import { BrandCard } from "@/components/casino/BrandCard";
import { AffiliateLink } from "@/components/casino/AffiliateLink";
import { Rating } from "@/components/ui/Rating";
import { ArrowRightIcon, CheckIcon, ShieldIcon } from "@/components/ui/Icons";
import { getPositionMetrics } from "@/lib/ratings";

const trust = [
  "UKGC licensed only",
  "Independently tested",
  "Updated weekly",
];

export function Hero() {
  const top = getTopBrands(3);

  return (
    <section className="relative overflow-hidden bg-ruby-radial">
      <div className="absolute inset-0 bg-grid-faint bg-[size:56px_56px] opacity-40" aria-hidden />
      <div className="container-page relative flex flex-col gap-4 py-5 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8 lg:py-6">
        {/* Copy */}
        <div className="order-1 animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-white/70">
            <ShieldIcon className="h-3.5 w-3.5 text-ruby-light" />
            Independent UK casino comparison
          </span>
          <h1 className="mt-2.5 text-2xl font-bold leading-[1.1] sm:text-3xl lg:text-4xl">
            The UK&apos;s{" "}
            <span className="text-ruby-light">best online casinos</span>, honestly ranked
          </h1>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/60 lg:text-[15px]">
            We test every UK Gambling Commission licensed casino for bonus value, game selection and
            safety — so you can compare the top sites in seconds.
          </p>
          <div className="mt-3.5 flex flex-wrap gap-2.5">
            <Link href="/casinos" className="btn-primary !px-4 !py-2 text-xs">
              See all casinos <ArrowRightIcon className="h-3.5 w-3.5" />
            </Link>
            <Link href="/bonuses" className="btn-outline !px-4 !py-2 text-xs">
              Compare bonuses
            </Link>
          </div>
          <ul className="mt-3.5 hidden flex-wrap gap-x-5 gap-y-1.5 lg:flex">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-1.5 text-xs text-white/55">
                <CheckIcon className="h-3.5 w-3.5 text-ruby-light" /> {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile: BrandCards directly under hero copy (not the table) */}
        <div className="order-2 space-y-3 lg:hidden">
          {top.map((brand, index) => (
            <BrandCard key={brand.id} brand={brand} index={index} />
          ))}
        </div>

        {/* Desktop: compact top-rated table */}
        <div className="order-2 hidden animate-fade-up lg:block">
          <div className="card p-3">
            <div className="mb-2 flex items-center justify-between px-1">
              <p className="text-sm font-semibold text-white">Top rated this month</p>
              <span className="text-[10px] uppercase tracking-widest text-white/40">
                {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
              </span>
            </div>
            <ol className="space-y-1.5">
              {top.map((brand, i) => {
                const { order, rating, stars } = getPositionMetrics(i);
                return (
                  <li key={brand.id}>
                    <AffiliateLink
                      href={brand.visitUrl}
                      variant="card"
                      ariaLabel={`Visit ${brand.name}`}
                      className="flex items-center gap-2.5 rounded-xl border border-white/8 bg-ink-900/60 px-2.5 py-2 transition-colors hover:border-ruby/40"
                    >
                      <span
                        className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full text-[11px] font-bold text-white"
                        style={{ background: order === 1 ? "#C1121F" : "rgba(255,255,255,0.1)" }}
                      >
                        {order}
                      </span>
                      <BrandLogo name={brand.name} seed={brand.rank} size="sm" />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <p className="truncate text-sm font-semibold text-white">{brand.name}</p>
                          <Rating
                            value={stars}
                            score={rating}
                            variant="split"
                            size="sm"
                            showValue={false}
                          />
                        </div>
                        <p className="truncate text-[11px] text-white/55">{brand.bonus.amount}</p>
                      </div>
                      <span className="btn-primary pointer-events-none !px-2.5 !py-1 text-[11px]">
                        Get
                      </span>
                    </AffiliateLink>
                  </li>
                );
              })}
            </ol>
            <p className="mt-2 text-center text-[10px] text-white/40">
              18+ | New customers only | T&amp;Cs apply | begambleaware.org
            </p>
          </div>
        </div>

        <ul className="order-3 flex flex-wrap justify-center gap-x-5 gap-y-2 lg:hidden">
          {trust.map((t) => (
            <li key={t} className="flex items-center gap-2 text-xs text-white/60">
              <CheckIcon className="h-4 w-4 text-ruby-light" /> {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

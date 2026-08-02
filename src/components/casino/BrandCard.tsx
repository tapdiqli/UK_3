import type { Brand } from "@/types";
import { BrandLogo } from "@/components/casino/BrandLogo";
import { AffiliateLink } from "@/components/casino/AffiliateLink";
import { Rating } from "@/components/ui/Rating";
import { ArrowRightIcon, ShieldIcon } from "@/components/ui/Icons";
import { getPositionMetrics } from "@/lib/ratings";
import { cn } from "@/lib/utils";

interface BrandCardProps {
  brand: Brand;
  index: number;
  variant?: "row" | "compact";
}

/**
 * Vertically stacked brand card. The entire card is a real outbound `<a>`
 * (via AffiliateLink) so every click carries the partner URL + session gclid.
 * The CTA is a styled span — never a nested link or `#` placeholder.
 *
 * Mobile layout (required):
 *  1) top: logo (left) | rating + stars flex-col (right)
 *  2) bottom: bonus text → CTA button
 */
export function BrandCard({ brand, index, variant = "row" }: BrandCardProps) {
  const { order, rating, stars, badge } = getPositionMetrics(index);

  if (variant === "compact") {
    return (
      <AffiliateLink
        href={brand.visitUrl}
        variant="card"
        ariaLabel={`Visit ${brand.name}`}
        className="card group flex flex-col gap-3 p-4 transition-transform hover:-translate-y-1"
      >
        <div className="flex items-center justify-between gap-3">
          <BrandLogo name={brand.name} seed={brand.rank} size="sm" />
          <div className="flex flex-col items-end">
            <Rating value={stars} score={rating} variant="split" orientation="vertical" size="sm" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-center text-sm font-medium leading-snug text-white/80">
            {brand.review}
          </p>
          <span className="btn-primary pointer-events-none w-full !px-3 !py-2 text-xs">
            Visit Site
          </span>
        </div>
      </AffiliateLink>
    );
  }

  return (
    <AffiliateLink
      href={brand.visitUrl}
      variant="card"
      ariaLabel={`Visit ${brand.name}`}
      className={cn(
        "card group relative flex flex-col gap-3 overflow-hidden p-4 transition-colors hover:border-ruby/35 sm:gap-4 sm:p-5",
        order === 1 && "ring-1 ring-ruby/40",
        badge && "pt-8 md:pt-5",
      )}
    >
      {badge && (
        <span className="absolute left-0 top-0 z-10 rounded-br-2xl bg-ruby px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white md:left-auto md:right-0 md:rounded-bl-2xl md:rounded-br-none md:px-4 md:text-[11px]">
          {badge}
        </span>
      )}

      {/* ——— Mobile (always): 1) logo | rating  2) bonus + CTA ——— */}
      <div className="flex flex-col gap-3 md:hidden">
        <div className="flex items-center justify-between gap-3">
          <div>
            <BrandLogo name={brand.name} seed={brand.rank} size="card" />
          </div>
          <div className="flex flex-col items-end">
            <Rating
              value={stars}
              score={rating}
              variant="split"
              orientation="vertical"
              size="md"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <p className="text-center text-sm font-medium leading-relaxed text-white/80">
            {brand.review}
          </p>
          <span className="btn-primary pointer-events-none w-full">
            Visit Site
            <ArrowRightIcon className="h-4 w-4" />
          </span>
        </div>
      </div>

      {/* ——— Desktop: items side by side ——— */}
      <div className="hidden md:block">
        <div className="grid grid-cols-12 items-center gap-4 lg:gap-5">
          {/* Rank + logo */}
          <div className="col-span-4 flex items-center gap-4">
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
                Rank
              </span>
              <span
                className={cn(
                  "font-display text-2xl font-bold",
                  order === 1 ? "text-ruby-light" : "text-white/70",
                )}
              >
                {String(order).padStart(2, "0")}
              </span>
            </div>
            <BrandLogo name={brand.name} seed={brand.rank} size="card" />
            <h3 className="sr-only">{brand.name}</h3>
          </div>

          {/* Editorial verdict */}
          <div className="col-span-3">
            <div className="rounded-xl border border-white/8 bg-ink-900/60 p-3 text-center">
              <p className="text-[11px] uppercase tracking-widest text-ruby-light">Our verdict</p>
              <p className="mt-1.5 text-sm font-medium leading-relaxed text-white/85">
                {brand.review}
              </p>
            </div>
          </div>

          {/* Rating */}
          <div className="col-span-3 flex items-center justify-center">
            <Rating
              value={stars}
              score={rating}
              variant="split"
              orientation="vertical"
              size="lg"
            />
          </div>

          {/* CTA */}
          <div className="col-span-2">
            <span className="btn-primary pointer-events-none w-full !px-3">
              Visit Site
              <ArrowRightIcon className="h-4 w-4" />
            </span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-white/5 pt-3 text-[11px] text-white/40">
          <span className="flex items-center gap-1.5">
            <ShieldIcon className="h-3.5 w-3.5 text-ruby-light" /> {brand.licences[0]}
          </span>
          <span>18+ | T&amp;Cs apply | Please gamble responsibly | begambleaware.org</span>
        </div>
      </div>
    </AffiliateLink>
  );
}

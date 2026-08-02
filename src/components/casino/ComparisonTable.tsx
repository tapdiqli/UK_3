import type { Brand } from "@/types";
import { BrandLogo } from "@/components/casino/BrandLogo";
import { AffiliateLink } from "@/components/casino/AffiliateLink";
import { Rating } from "@/components/ui/Rating";
import { getPositionMetrics } from "@/lib/ratings";

interface ComparisonTableProps {
  brands: Brand[];
}

export function ComparisonTable({ brands }: ComparisonTableProps) {
  return (
    <div className="card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-ink-900/60 text-[11px] uppercase tracking-widest text-white/50">
              <th className="px-4 py-3 font-semibold">#</th>
              <th className="px-4 py-3 font-semibold">Casino</th>
              <th className="px-4 py-3 font-semibold">Our Verdict</th>
              <th className="px-4 py-3 font-semibold">Rating</th>
              <th className="px-4 py-3 font-semibold text-right">Play</th>
            </tr>
          </thead>
          <tbody>
            {brands.map((brand, index) => {
              const { order, rating, stars } = getPositionMetrics(index);
              return (
                <tr
                  key={brand.id}
                  className="border-b border-white/5 transition-colors last:border-0 hover:bg-white/5"
                >
                  <td className="px-4 py-4 font-display text-lg font-bold text-white/60">
                    {order}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <BrandLogo name={brand.name} seed={brand.rank} size="sm" />
                      <div>
                        <p className="font-semibold text-white">{brand.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm leading-snug text-white/80">{brand.review}</span>
                  </td>
                  <td className="px-4 py-4">
                    <Rating value={stars} score={rating} variant="split" size="sm" showValue />
                  </td>
                  <td className="px-4 py-4 text-right">
                    <AffiliateLink
                      href={brand.visitUrl}
                      className="!px-4 !py-2 text-xs"
                      ariaLabel={`Visit ${brand.name}`}
                    >
                      Visit Site
                    </AffiliateLink>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="border-t border-white/5 px-4 py-3 text-center text-[11px] text-white/40">
        18+ only. T&amp;Cs apply. Please gamble responsibly — begambleaware.org
      </p>
    </div>
  );
}

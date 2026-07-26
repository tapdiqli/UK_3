import type { Metadata } from "next";
import { getBrands } from "@/lib/data";
import { PageHero } from "@/components/layout/PageHero";
import { BrandCard } from "@/components/casino/BrandCard";
import { ComparisonTable } from "@/components/casino/ComparisonTable";
import { DisclosureBanner } from "@/components/sections/DisclosureBanner";
import { ResponsibleGamblingCTA } from "@/components/sections/ResponsibleGamblingCTA";

export const metadata: Metadata = {
  title: "Top UK Online Casinos — Ranked & Compared",
  description:
    "Compare the best UK Gambling Commission licensed online casinos. Independent ratings for bonuses, games and safety. 18+ | begambleaware.org.",
  alternates: { canonical: "/casinos" },
};

export default function CasinosPage() {
  const brands = getBrands();

  return (
    <>
      <PageHero
        eyebrow="Casino rankings"
        title="Top UK online casinos, compared"
        description="All licensed by the UK Gambling Commission and independently rated. Compare bonuses, games and safety before you decide."
        crumbs={[{ label: "Home", href: "/" }, { label: "Top Casinos" }]}
      />

      {/* Brands immediately visible */}
      <section className="container-page py-8">
        <div className="space-y-4">
          {brands.map((brand, index) => (
            <BrandCard key={brand.id} brand={brand} index={index} />
          ))}
        </div>
      </section>

      <div className="pb-8">
        <DisclosureBanner />
      </div>

      <section className="container-page py-8">
        <h2 className="mb-6 text-2xl font-bold">Full comparison table</h2>
        <ComparisonTable brands={brands} />
      </section>

      <div className="py-10">
        <ResponsibleGamblingCTA />
      </div>
    </>
  );
}

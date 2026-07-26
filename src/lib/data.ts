import raw from "@/data/data.json";
import type { Brand, Guide, SiteData } from "@/types";

const data = raw as unknown as SiteData;

export const site = data.site;
export const nav = data.nav;
export const faqs = data.faqs;

export function getBrands(): Brand[] {
  return [...data.brands].sort((a, b) => a.rank - b.rank);
}

export function getFeaturedBrands(): Brand[] {
  return getBrands().filter((brand) => brand.featured);
}

export function getTopBrands(count: number): Brand[] {
  return getBrands().slice(0, count);
}

export function getBrandBySlug(slug: string): Brand | undefined {
  return data.brands.find((brand) => brand.slug === slug);
}

export function getGuides(): Guide[] {
  return [...data.guides];
}

export function getGuideBySlug(slug: string): Guide | undefined {
  return data.guides.find((guide) => guide.slug === slug);
}

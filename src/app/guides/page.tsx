import type { Metadata } from "next";
import Link from "next/link";
import { getGuides } from "@/lib/data";
import { PageHero } from "@/components/layout/PageHero";
import { BookIcon, ArrowRightIcon } from "@/components/ui/Icons";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Casino Guides — Bonuses, Safety & Smart Play",
  description:
    "Clear, jargon-free guides to UK online casinos: how bonuses and wagering work, how to choose a safe site, and how to gamble responsibly.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  const guides = getGuides();

  return (
    <>
      <PageHero
        eyebrow="Guides"
        title="Casino guides & resources"
        description="Everything you need to play smarter and safer at UK online casinos — written in plain English."
        crumbs={[{ label: "Home", href: "/" }, { label: "Guides" }]}
      />

      <section className="container-page py-10">
        <div className="grid gap-5 md:grid-cols-2">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="card group flex flex-col p-6 transition-transform hover:-translate-y-1"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-ruby/10 text-ruby-light">
                <BookIcon className="h-5 w-5" />
              </span>
              <span className="mt-4 eyebrow">{guide.category}</span>
              <h2 className="mt-1 text-xl font-semibold text-white group-hover:text-ruby-light">
                {guide.title}
              </h2>
              <p className="mt-2 flex-1 text-sm text-white/60">{guide.excerpt}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-white/40">
                <span>
                  {guide.readTime} · Updated {formatDate(guide.updated)}
                </span>
                <span className="flex items-center gap-1 font-semibold text-ruby-light">
                  Read <ArrowRightIcon className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

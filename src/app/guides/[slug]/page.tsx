import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getGuideBySlug, getGuides } from "@/lib/data";
import { PageHero } from "@/components/layout/PageHero";
import { ResponsibleGamblingCTA } from "@/components/sections/ResponsibleGamblingCTA";
import { formatDate } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getGuides().map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return { title: "Guide not found" };
  return {
    title: guide.title,
    description: guide.excerpt,
    alternates: { canonical: `/guides/${guide.slug}` },
  };
}

export default async function GuideDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const related = getGuides().filter((g) => g.slug !== guide.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={guide.category}
        title={guide.title}
        description={guide.excerpt}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/guides" },
          { label: guide.title },
        ]}
      >
        <p className="text-xs text-white/45">
          {guide.readTime} · Last updated {formatDate(guide.updated)}
        </p>
      </PageHero>

      <article className="container-page py-10">
        <div className="space-y-5 text-lg leading-relaxed text-white/70">
          {guide.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-ruby/20 bg-ruby/5 p-5 text-sm text-white/70">
          <strong className="text-white">Remember:</strong> gambling is entertainment, not a way to
          make money. You must be 18+. If you need support, visit{" "}
          <a
            href="https://www.begambleaware.org"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-ruby-light underline"
          >
            BeGambleAware.org
          </a>{" "}
          or call the National Gambling Helpline on 0808 8020 133.
        </div>
      </article>

      <section className="border-t border-white/8 bg-ink-950/60 py-12">
        <div className="container-page">
          <h2 className="mb-6 text-xl font-bold">More guides</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {related.map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="card p-5 transition-transform hover:-translate-y-1"
              >
                <span className="eyebrow">{g.category}</span>
                <p className="mt-1 font-semibold text-white">{g.title}</p>
                <p className="mt-2 text-sm text-white/55">{g.readTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="py-10">
        <ResponsibleGamblingCTA />
      </div>
    </>
  );
}

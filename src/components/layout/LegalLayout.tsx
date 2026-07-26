import type { ReactNode } from "react";
import { PageHero } from "@/components/layout/PageHero";

export interface LegalSection {
  heading: string;
  body: ReactNode[];
}

interface LegalLayoutProps {
  title: string;
  intro: string;
  updated: string;
  label: string;
  sections: LegalSection[];
}

export function LegalLayout({ title, intro, updated, label, sections }: LegalLayoutProps) {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={title}
        description={intro}
        crumbs={[{ label: "Home", href: "/" }, { label }]}
      >
        <p className="text-xs text-white/45">Last updated: {updated}</p>
      </PageHero>

      <article className="container-page space-y-8 py-10">
        {sections.map((section, i) => (
          <section key={section.heading}>
            <h2 className="text-xl font-semibold text-white">
              {i + 1}. {section.heading}
            </h2>
            <div className="mt-3 space-y-3 text-white/65">
              {section.body.map((paragraph, j) => (
                <p key={j} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </article>
    </>
  );
}

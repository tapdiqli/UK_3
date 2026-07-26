import Link from "next/link";
import type { ReactNode } from "react";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  crumbs?: Crumb[];
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, description, crumbs, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/8 bg-ruby-radial">
      <div className="absolute inset-0 bg-grid-faint bg-[size:56px_56px] opacity-30" aria-hidden />
      <div className="container-page relative py-10 sm:py-12">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/45">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-1.5">
                  {c.href ? (
                    <Link href={c.href} className="hover:text-ruby-light">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-white/70">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && <span className="text-white/25">/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{title}</h1>
        {description && <p className="mt-3 text-white/60">{description}</p>}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}

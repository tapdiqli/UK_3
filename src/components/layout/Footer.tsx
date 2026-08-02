import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/data";
import { SiteLogo } from "@/components/layout/SiteLogo";

const footerNav = [
  {
    title: "Casinos",
    links: [
      { label: "Top UK Casinos", href: "/casinos" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Guides", href: "/guides" },
      { label: "How We Review", href: "/guides/how-we-review-uk-casinos" },
      { label: "Responsible Gambling", href: "/responsible-gambling" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Use", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Cookie Policy", href: "/cookie-policy" },
    ],
  },
];

/** Regulatory / safer-gambling signs sourced into /public/reg-signs */
const regSigns = [
  {
    name: "GAMSTOP",
    src: "/reg-signs/gamstop.webp",
    href: "https://www.gamstop.co.uk/",
  },
  {
    name: "GBGA",
    src: "/reg-signs/gbga.webp",
    href: "https://gbga.gi/",
  },
  {
    name: "GamCare",
    src: "/reg-signs/gamcare.webp",
    href: "https://www.gamcare.org.uk/",
  },
  {
    name: "GambleAware",
    src: "/reg-signs/gambleaware.webp",
    href: "https://www.gambleaware.org/",
  },
  {
    name: "18+",
    src: "/reg-signs/18plus.webp",
    href: "/responsible-gambling",
    external: false,
  },
  {
    name: "Gambling Therapy",
    src: "/reg-signs/gambling-therapy.webp",
    href: "https://www.gamblingtherapy.org/",
  },
  {
    name: "Gov.gi",
    src: "/reg-signs/gov-gi.webp",
    href: "https://www.gibraltar.gov.gi/new/remote-gambling",
  },
  {
    name: "IBAS",
    src: "/reg-signs/ibas.webp",
    href: "https://www.ibas-uk.com/",
  },
  {
    name: "UK Gambling Commission",
    src: "/reg-signs/gambling-commission.webp",
    href: "https://www.gamblingcommission.gov.uk/",
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950">
      {/* Play safely & responsibly — regulatory signs */}
      <div className="relative overflow-hidden border-b border-white/10">
        <div
          className="pointer-events-none absolute inset-0 bg-ruby-radial opacity-80"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-grid-faint bg-[length:40px_40px] opacity-30"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-20 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-ruby/20 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-16 top-0 h-36 w-36 rounded-full bg-ruby/15 blur-3xl"
          aria-hidden
        />

        <div className="container-page relative py-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Safer play</p>
            <h2 className="mt-2 font-display text-xl font-bold text-white sm:text-2xl">
              Play Safely &amp; Responsibly
            </h2>
            <p className="mt-2 text-sm text-white/50">
              Free support and UK regulation — always one click away.
            </p>
          </div>

          <ul className="mt-7 grid grid-cols-3 gap-2.5 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9">
            {regSigns.map((sign) => {
              const img = (
                <Image
                  src={sign.src}
                  alt={sign.name}
                  width={120}
                  height={48}
                  className="h-8 w-auto max-w-[5.5rem] object-contain sm:h-9"
                />
              );
              const external = "external" in sign ? sign.external !== false : true;
              const tileClass =
                "group flex h-16 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] px-2 shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-ruby/45 hover:shadow-ruby sm:h-[4.5rem]";

              return (
                <li key={sign.name}>
                  {external ? (
                    <a
                      href={sign.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={tileClass}
                      aria-label={sign.name}
                      title={sign.name}
                    >
                      <span className="grid h-12 w-full place-items-center rounded-xl bg-white px-1.5 py-1 shadow-inner transition-transform duration-300 group-hover:scale-[1.03]">
                        {img}
                      </span>
                    </a>
                  ) : (
                    <Link
                      href={sign.href}
                      className={tileClass}
                      aria-label={sign.name}
                      title={sign.name}
                    >
                      <span className="grid h-12 w-full place-items-center rounded-xl bg-white px-1.5 py-1 shadow-inner transition-transform duration-300 group-hover:scale-[1.03]">
                        {img}
                      </span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="container-page grid grid-cols-2 gap-8 py-12 md:grid-cols-6">
        <div className="col-span-2">
          <Link href="/" className="inline-flex items-center" aria-label={`${site.name} home`}>
            <SiteLogo size="md" />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
            An independent UK casino comparison service. We review UK Gambling Commission licensed
            operators so you can compare with confidence.
          </p>
          <p className="mt-4 text-sm text-white/45">{site.email}</p>
        </div>

        {footerNav.map((column) => (
          <div key={column.title}>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">
              {column.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/65 hover:text-ruby-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/5">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved. {site.domain}
          </p>
          <p className="max-w-2xl md:text-right">
            Advertising disclosure: we may receive compensation when you click links to operators.
            This never influences our independent ratings. 18+ only. begambleaware.org.
          </p>
        </div>
      </div>
    </footer>
  );
}

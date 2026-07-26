import type { Metadata } from "next";
import { site } from "@/lib/data";
import { PageHero } from "@/components/layout/PageHero";
import { ChatIcon, ShieldIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the BestBritCasinoList team. We welcome feedback, corrections and press enquiries.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        description="We welcome feedback, corrections and press enquiries. We are a comparison service and cannot help with individual casino account issues — please contact the operator directly."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="container-page py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="card p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-white">Send us a message</h2>
            <p className="mt-2 text-sm text-white/55">
              Prefer email? Reach us directly at{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-ruby-light">
                {site.email}
              </a>
              .
            </p>
            <form className="mt-6 space-y-4" aria-label="Contact form">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm text-white/70">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="w-full rounded-xl border border-white/10 bg-ink-900/70 px-4 py-2.5 text-sm text-white outline-none focus:border-ruby/60"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm text-white/70">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="w-full rounded-xl border border-white/10 bg-ink-900/70 px-4 py-2.5 text-sm text-white outline-none focus:border-ruby/60"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm text-white/70">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full rounded-xl border border-white/10 bg-ink-900/70 px-4 py-2.5 text-sm text-white outline-none focus:border-ruby/60"
                />
              </div>
              <button type="submit" className="btn-primary w-full sm:w-auto">
                Send message
              </button>
              <p className="text-xs text-white/40">
                By submitting, you confirm you are 18 or over. We handle your data in line with our
                Privacy Policy.
              </p>
            </form>
          </div>

          <div className="space-y-5">
            <div className="card p-6">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-ruby/10 text-ruby-light">
                <ChatIcon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">General enquiries</h3>
              <p className="mt-2 text-sm text-white/60">
                Questions, feedback or a correction to one of our reviews? Email{" "}
                <a href={`mailto:${site.email}`} className="text-ruby-light">
                  {site.email}
                </a>
                . We aim to reply within two working days.
              </p>
            </div>
            <div className="card p-6">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-ruby/10 text-ruby-light">
                <ShieldIcon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">Need gambling support?</h3>
              <p className="mt-2 text-sm text-white/60">
                We cannot provide account help, but free, confidential support is always available.
                Call the National Gambling Helpline on 0808 8020 133 or visit{" "}
                <a
                  href="https://www.begambleaware.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ruby-light"
                >
                  BeGambleAware.org
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CheckIcon, ShieldIcon, LockIcon } from "@/components/ui/Icons";
import { SiteLogo } from "@/components/layout/SiteLogo";

const STORAGE_KEY = "bbcl-age-verified";
const VERIFIED_ATTR = "data-age-verified";

const assurances = [
  "UK Gambling Commission licensed operators only",
  "Independent ratings — never paid placements",
  "Free support signposted on every page",
];

/**
 * 18+ age verification gate.
 *
 * Rendered on the server so the overlay is present before hydration. A small
 * inline script in the root layout sets `data-age-verified` on <html>, which
 * hides this and unlocks scrolling for returning visitors with no flash.
 */
export function AgeGate() {
  const [state, setState] = useState<"open" | "declined" | "closed">("open");
  const confirmRef = useRef<HTMLButtonElement>(null);

  // Returning visitors: unmount once we confirm the stored flag.
  useEffect(() => {
    try {
      if (window.localStorage.getItem(STORAGE_KEY) === "1") {
        setState("closed");
      }
    } catch {
      /* storage blocked — keep the gate visible */
    }
  }, []);

  useEffect(() => {
    if (state === "open") confirmRef.current?.focus();
  }, [state]);

  // Keep focus inside the dialog while it is open.
  const onKeyDown = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab") return;
    const focusables = event.currentTarget.querySelectorAll<HTMLElement>(
      'button, a[href], [tabindex]:not([tabindex="-1"])',
    );
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    } else if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    }
  }, []);

  function confirm() {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* storage blocked — still allow this session */
    }
    document.documentElement.setAttribute(VERIFIED_ATTR, "1");
    window.dispatchEvent(new Event("bbcl:age-verified"));
    setState("closed");
  }

  if (state === "closed") return null;

  return (
    <div
      id="age-gate"
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
      aria-describedby="age-gate-copy"
      onKeyDown={onKeyDown}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-ink-950/95 p-4 backdrop-blur-xl"
    >
      <div className="relative w-full max-w-3xl animate-fade-up overflow-hidden rounded-3xl border border-white/10 bg-ink-900 shadow-glow">
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-ruby/20 blur-3xl" />

        <div className="relative grid md:grid-cols-5">
          {/* Ruby age panel */}
          <div className="relative flex flex-col items-center justify-center gap-3 overflow-hidden bg-gradient-to-br from-ruby to-ruby-dark px-6 py-8 md:col-span-2 md:py-10">
            <div
              className="absolute inset-0 bg-grid-faint bg-[length:34px_34px] opacity-70"
              aria-hidden
            />
            <span className="relative font-display text-6xl font-bold leading-none text-white md:text-7xl">
              18
              <span className="align-super text-2xl md:text-3xl">+</span>
            </span>
            <p className="relative text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-white/80">
              Adults only
            </p>
            <span className="relative mt-1 h-px w-12 bg-white/30" aria-hidden />
            <p className="relative text-center text-xs leading-relaxed text-white/70">
              Gambling can be addictive. Please play responsibly.
            </p>
          </div>

          {/* Content */}
          <div className="px-6 py-8 md:col-span-3 md:px-8 md:py-10">
            {state === "open" ? (
              <>
                <SiteLogo size="sm" />

                <h2 id="age-gate-title" className="mt-5 text-2xl font-bold sm:text-3xl">
                  Please confirm your age
                </h2>
                <p id="age-gate-copy" className="mt-3 text-sm leading-relaxed text-white/60">
                  This website compares UK-licensed online casinos and is intended for adults aged
                  18 and over. Please confirm you are 18 or older to continue.
                </p>

                <ul className="mt-5 space-y-2">
                  {assurances.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-white/55">
                      <CheckIcon className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-ruby-light" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
                  <button
                    ref={confirmRef}
                    type="button"
                    onClick={confirm}
                    className="btn-primary flex-1"
                  >
                    <ShieldIcon className="h-4 w-4" />
                    I am 18 or over
                  </button>
                  <button
                    type="button"
                    onClick={() => setState("declined")}
                    className="btn-outline flex-1"
                  >
                    I am under 18
                  </button>
                </div>

                <p className="mt-5 flex items-start gap-2 border-t border-white/8 pt-4 text-[11px] leading-relaxed text-white/35">
                  <LockIcon className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-ruby-light" />
                  <span>
                    We are an independent comparison service, not a gambling operator. By continuing
                    you agree to our{" "}
                    <Link href="/terms" className="text-white/60 underline hover:text-ruby-light">
                      Terms of Use
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy-policy"
                      className="text-white/60 underline hover:text-ruby-light"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </p>
              </>
            ) : (
              <>
                <h2 id="age-gate-title" className="text-2xl font-bold sm:text-3xl">
                  Sorry, you can&apos;t enter
                </h2>
                <p id="age-gate-copy" className="mt-3 text-sm leading-relaxed text-white/60">
                  You must be 18 or over to view gambling-related content in the UK. This site is
                  restricted to adults only.
                </p>

                <div className="mt-5 rounded-2xl border border-ruby/20 bg-ruby/5 p-4 text-xs leading-relaxed text-white/60">
                  <p className="font-semibold text-white">Free, confidential support</p>
                  <p className="mt-1.5">
                    GamCare — National Gambling Helpline:{" "}
                    <span className="font-semibold text-white">0808 8020 133</span>, open 24/7.
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                  <a
                    href="https://www.begambleaware.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1"
                  >
                    Visit BeGambleAware
                  </a>
                  <button
                    type="button"
                    onClick={() => setState("open")}
                    className="btn-outline flex-1"
                  >
                    Back
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

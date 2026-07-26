"use client";

import { useCallback, useEffect, useId, useState } from "react";
import Link from "next/link";
import { CrossIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "bbcl-cookie-consent-v2";
const AGE_KEY = "bbcl-age-verified";
const SOFT_DISMISS_KEY = "bbcl-cookie-soft-dismiss";

type Prefs = {
  essential: true;
  analytics: boolean;
  functional: boolean;
};

type Stored =
  | { choice: "accepted" }
  | { choice: "rejected" }
  | { choice: "custom"; prefs: Omit<Prefs, "essential"> };

const DEFAULT_PREFS: Prefs = {
  essential: true,
  analytics: false,
  functional: false,
};

function persist(value: Stored) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    window.sessionStorage.removeItem(SOFT_DISMISS_KEY);
  } catch {
    /* storage unavailable — dismiss anyway */
  }
}

function hasCookieChoice(): boolean {
  try {
    return Boolean(window.localStorage.getItem(STORAGE_KEY));
  } catch {
    return false;
  }
}

function wasSoftDismissed(): boolean {
  try {
    return window.sessionStorage.getItem(SOFT_DISMISS_KEY) === "1";
  } catch {
    return false;
  }
}

function isAgeVerified(): boolean {
  try {
    if (window.localStorage.getItem(AGE_KEY) === "1") return true;
  } catch {
    /* ignore */
  }
  return document.documentElement.getAttribute("data-age-verified") === "1";
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [view, setView] = useState<"main" | "prefs">("main");
  const [prefs, setPrefs] = useState<Prefs>(DEFAULT_PREFS);
  const titleId = useId();
  const descId = useId();

  const tryShow = useCallback(() => {
    if (!isAgeVerified()) return;
    if (hasCookieChoice()) return;
    if (wasSoftDismissed()) return;
    setVisible(true);
  }, []);

  useEffect(() => {
    tryShow();

    function onAgeVerified() {
      window.setTimeout(tryShow, 50);
    }

    window.addEventListener("bbcl:age-verified", onAgeVerified);
    return () => window.removeEventListener("bbcl:age-verified", onAgeVerified);
  }, [tryShow]);

  function acceptAll() {
    persist({ choice: "accepted" });
    setVisible(false);
  }

  function rejectAll() {
    persist({ choice: "rejected" });
    setVisible(false);
  }

  function savePrefs() {
    persist({
      choice: "custom",
      prefs: { analytics: prefs.analytics, functional: prefs.functional },
    });
    setVisible(false);
  }

  function softDismiss() {
    try {
      window.sessionStorage.setItem(SOFT_DISMISS_KEY, "1");
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <aside
      role="region"
      aria-labelledby={titleId}
      aria-describedby={descId}
      className="pointer-events-auto fixed bottom-4 right-4 z-[90] w-[min(100%-2rem,22rem)] animate-fade-up overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-glow"
    >
      <div
        className="h-1 w-full bg-gradient-to-r from-ruby-dark via-ruby to-ruby-light"
        aria-hidden
      />

      <div className="px-4 pb-4 pt-3.5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ruby-light">
              Privacy
            </p>
            <h2 id={titleId} className="mt-0.5 font-display text-lg font-bold text-white">
              Cookie Settings
            </h2>
          </div>
          <button
            type="button"
            onClick={softDismiss}
            aria-label="Close cookie settings"
            className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-colors hover:border-ruby/50 hover:bg-ruby/15 hover:text-white"
          >
            <CrossIcon className="h-3.5 w-3.5" />
          </button>
        </div>

        {view === "main" ? (
          <>
            <p id={descId} className="mt-2.5 text-xs leading-relaxed text-white/55">
              We use cookies to personalise content and ads, and to understand how visitors use the
              site. See our{" "}
              <Link
                href="/cookie-policy"
                className="font-semibold text-ruby-light underline underline-offset-2 hover:text-white"
              >
                Cookie Policy
              </Link>
              .
            </p>

            <div className="mt-3.5 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={acceptAll}
                className="btn-primary !rounded-xl !px-3 !py-2 text-xs"
              >
                Accept
              </button>
              <button
                type="button"
                onClick={() => setView("prefs")}
                className="btn-outline !rounded-xl !px-3 !py-2 text-xs"
              >
                Preferences
              </button>
            </div>
          </>
        ) : (
          <>
            <p id={descId} className="mt-2.5 text-xs leading-relaxed text-white/55">
              Essential cookies keep the site working. Choose optional cookies below.
            </p>

            <ul className="mt-3 space-y-2">
              <PrefRow
                title="Essential"
                description="Required — always on."
                checked
                locked
              />
              <PrefRow
                title="Analytics"
                description="Help us improve the site."
                checked={prefs.analytics}
                onChange={(v) => setPrefs((p) => ({ ...p, analytics: v }))}
              />
              <PrefRow
                title="Functional"
                description="Remember your settings."
                checked={prefs.functional}
                onChange={(v) => setPrefs((p) => ({ ...p, functional: v }))}
              />
            </ul>

            <div className="mt-3.5 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={savePrefs}
                className="btn-primary !rounded-xl !px-3 !py-2 text-xs"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setView("main")}
                className="btn-outline !rounded-xl !px-3 !py-2 text-xs"
              >
                Back
              </button>
            </div>

            <button
              type="button"
              onClick={rejectAll}
              className="mt-2 w-full text-center text-[11px] text-white/40 transition-colors hover:text-white/70"
            >
              Reject non-essential
            </button>
          </>
        )}
      </div>
    </aside>
  );
}

function PrefRow({
  title,
  description,
  checked,
  locked,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  locked?: boolean;
  onChange?: (value: boolean) => void;
}) {
  return (
    <li className="flex items-center justify-between gap-3 rounded-xl border border-white/8 bg-ink-800/70 px-3 py-2">
      <div className="min-w-0">
        <p className="text-xs font-semibold text-white">{title}</p>
        <p className="text-[10px] leading-snug text-white/40">{description}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={`${title} cookies`}
        disabled={locked}
        onClick={() => onChange?.(!checked)}
        className={cn(
          "relative h-6 w-10 flex-shrink-0 rounded-full transition-colors",
          checked ? "bg-ruby" : "bg-white/15",
          locked && "cursor-not-allowed opacity-70",
        )}
      >
        <span
          className={cn(
            "absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform",
            checked ? "translate-x-4" : "translate-x-0.5",
          )}
        />
      </button>
    </li>
  );
}

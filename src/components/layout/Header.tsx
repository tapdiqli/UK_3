"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/data";
import { MenuIcon, CrossIcon } from "@/components/ui/Icons";
import { SiteLogo } from "@/components/layout/SiteLogo";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the drawer on navigation / route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-900/90 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center"
          aria-label={`${site.name} home`}
          onClick={() => setOpen(false)}
        >
          <SiteLogo size="md" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/casinos" className="btn-primary hidden text-xs sm:inline-flex">
            Compare Casinos
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <CrossIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-white/10 bg-ink-900 px-4 py-4 md:hidden"
          aria-label="Mobile"
        >
          <div className="container-page flex flex-col gap-1 !px-0">
            {nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                    active ? "bg-white/10 text-white" : "text-white/80 hover:bg-white/5",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/casinos"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              Compare Casinos
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

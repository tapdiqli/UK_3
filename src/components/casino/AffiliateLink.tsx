"use client";

import type { ReactNode } from "react";
import { usePartnerUrl } from "@/hooks/usePartnerUrl";
import { cn } from "@/lib/utils";

interface AffiliateLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  /** Visual style. `button` = primary CTA; `card` = full-card wrapper (no button chrome). */
  variant?: "button" | "card";
}

/**
 * Outbound affiliate link. Always sponsored + nofollow and opens in a new tab.
 * Appends the session `gclid` to every partner URL so click IDs persist on CTAs
 * and brand-card redirects.
 */
export function AffiliateLink({
  href,
  children,
  className,
  ariaLabel,
  variant = "button",
}: AffiliateLinkProps) {
  const linkUrl = usePartnerUrl(href);

  return (
    <a
      href={linkUrl}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
      aria-label={ariaLabel}
      className={cn(variant === "button" && "btn-primary", className)}
      data-affiliate="true"
    >
      {children}
    </a>
  );
}

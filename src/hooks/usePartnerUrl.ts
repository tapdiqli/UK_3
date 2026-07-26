"use client";

import { useEffect, useState } from "react";
import { appendGclid, captureGclidFromUrl, getStoredGclid } from "@/lib/tracking";

/**
 * Builds a tracked partner URL and keeps the click id (`gclid`) appended
 * across every CTA / brand-card redirect for the session.
 *
 *   const [linkUrl, setLinkUrl] = useState(partnerUrl);
 *   setLinkUrl(`${partnerUrl}${gclid}`);
 */
export function usePartnerUrl(partnerUrl: string): string {
  const [linkUrl, setLinkUrl] = useState(partnerUrl);

  useEffect(() => {
    const gclid = captureGclidFromUrl() ?? getStoredGclid();
    setLinkUrl(appendGclid(partnerUrl, gclid));
  }, [partnerUrl]);

  return linkUrl;
}

const GCLID_STORAGE_KEY = "bbcl-gclid";

/** Read a persisted Google Click ID (if any). */
export function getStoredGclid(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.sessionStorage.getItem(GCLID_STORAGE_KEY);
  } catch {
    return null;
  }
}

/** Persist a Google Click ID for the rest of the session. */
export function storeGclid(gclid: string): void {
  if (typeof window === "undefined" || !gclid) return;
  try {
    window.sessionStorage.setItem(GCLID_STORAGE_KEY, gclid);
  } catch {
    /* storage blocked */
  }
}

/**
 * Capture `gclid` from the current URL (if present) and persist it.
 * Returns the active click id for this session.
 */
export function captureGclidFromUrl(): string | null {
  if (typeof window === "undefined") return null;
  try {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get("gclid");
    if (fromUrl) {
      storeGclid(fromUrl);
      return fromUrl;
    }
  } catch {
    /* ignore malformed URL */
  }
  return getStoredGclid();
}

/**
 * Append the click identifier (`gclid`) to an outgoing partner URL.
 * Safe with absolute and relative URLs; no-ops when no gclid is available.
 */
export function appendGclid(partnerUrl: string, gclid: string | null | undefined): string {
  if (!partnerUrl || !gclid) return partnerUrl;

    return `${partnerUrl}${encodeURIComponent(gclid)}`;

}

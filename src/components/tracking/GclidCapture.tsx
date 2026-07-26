"use client";

import { useEffect } from "react";
import { captureGclidFromUrl } from "@/lib/tracking";

/** Captures `gclid` from the landing URL as early as possible in the session. */
export function GclidCapture() {
  useEffect(() => {
    captureGclidFromUrl();
  }, []);

  return null;
}

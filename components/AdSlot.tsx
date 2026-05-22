"use client";

import { useEffect } from "react";
import { siteConfig } from "@/site.config";

/**
 * Display-ad slot. Renders nothing until you are approved by an ad
 * network and set `ads.enabled` + `ads.adsenseClient` in site.config.ts.
 * The AdSense loader script is added conditionally in app/layout.tsx.
 */
export default function AdSlot({ slot = "" }: { slot?: string }) {
  const { enabled, adsenseClient } = siteConfig.ads;

  useEffect(() => {
    if (!enabled || !adsenseClient) return;
    try {
      // @ts-expect-error - adsbygoogle is injected by the AdSense script
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      /* ad blocker or script not ready — ignore */
    }
  }, [enabled, adsenseClient]);

  if (!enabled || !adsenseClient) return null;

  return (
    <ins
      className="adsbygoogle block"
      style={{ display: "block" }}
      data-ad-client={adsenseClient}
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}

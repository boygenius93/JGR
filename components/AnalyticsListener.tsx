"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

/**
 * Lightweight conversion tracking via event delegation.
 * Any element with a `data-track="event_name"` attribute (buttons, links)
 * fires a Vercel Analytics custom event on click — no per-component wiring
 * or extra client-side JS needed beyond this single listener.
 */
export function AnalyticsListener() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = (event.target as HTMLElement)?.closest<HTMLElement>("[data-track]");
      const eventName = target?.dataset.track;
      if (eventName) {
        track(eventName);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}

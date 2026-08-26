"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fades a section up into place the first time it scrolls into view.
 * Reuses the "fade-up" keyframe already defined in tailwind.config.ts.
 * The motion-reduce: variant (not a JS check) keeps this instant and
 * fully visible for prefers-reduced-motion, with no timing dependency
 * on the effect running first.
 */
export function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Extremely unlikely in practice (universally supported since 2019),
    // but fail open rather than leaving content permanently at opacity-0.
    if (typeof IntersectionObserver === "undefined") {
      const timeout = setTimeout(() => setVisible(true), 0);
      return () => clearTimeout(timeout);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={
        visible
          ? "animate-fade-up motion-reduce:animate-none"
          : "opacity-0 motion-reduce:opacity-100"
      }
    >
      {children}
    </div>
  );
}

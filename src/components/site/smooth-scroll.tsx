"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import { MotionConfig } from "motion/react";

/**
 * Wraps the app in Lenis smooth scrolling and a MotionConfig that honours
 * the user's reduced-motion preference. Lenis is skipped entirely when the
 * user prefers reduced motion, and on touch devices native scrolling wins.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced) return;
    // Dev/QA escape hatch: /?nolenis disables smooth scroll for screenshotting.
    if (typeof window !== "undefined" && window.location.search.includes("nolenis")) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, [reduced]);

  return (
    <MotionConfig reducedMotion="user">{children}</MotionConfig>
  );
}

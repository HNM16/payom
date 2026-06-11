"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  useInView,
  useReducedMotion,
} from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  /** Decimal places to display (auto-detected from value when omitted). */
  decimals?: number;
  duration?: number;
}

/** Counts up from zero to `value` the first time it scrolls into view. */
export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  decimals,
  duration = 1.6,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const places = decimals ?? (Number.isInteger(value) ? 0 : value < 100 ? 2 : 0);
  const [display, setDisplay] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(latest),
    });
    return () => controls.stop();
  }, [inView, value, duration, reduceMotion]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString("en-US", {
        minimumFractionDigits: places,
        maximumFractionDigits: places,
      })}
      {suffix}
    </span>
  );
}

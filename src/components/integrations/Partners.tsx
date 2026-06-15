"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { PARTNERS } from "@/lib/site";

/**
 * Partner logos. Renders real images from /public/partners when a `logo`
 * path is set, otherwise a styled wordmark placeholder.
 */
export function Partners() {
  return (
    <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {PARTNERS.map((p, i) => (
        <Reveal key={p.name} delay={(i % 6) * 0.04}>
          <div className="flex h-24 items-center justify-center rounded-2xl border border-border bg-surface px-4 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
            {p.logo ? (
              <Image
                src={p.logo}
                alt={p.name}
                width={120}
                height={48}
                className="max-h-12 w-auto object-contain"
              />
            ) : (
              <span
                className="text-xl font-bold tracking-tight"
                style={{ color: p.color }}
              >
                {p.name}
              </span>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

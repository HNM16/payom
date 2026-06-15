"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import type { CodeSample } from "@/lib/codeSamples";
import { cn } from "@/lib/utils";

export function CodeTabs({ samples }: { samples: CodeSample[] }) {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(samples[active].code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-secondary text-slate-100 shadow-[var(--shadow-soft)]">
      <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-2">
        <div className="flex overflow-x-auto" role="tablist" aria-label="Code language">
          {samples.map((s, i) => (
            <button
              key={s.lang}
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={cn(
                "whitespace-nowrap px-4 py-3 text-sm font-medium transition-colors",
                active === i
                  ? "text-white"
                  : "text-slate-400 hover:text-slate-200",
              )}
            >
              {s.label}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={copy}
          className="mr-1 inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
        >
          {copied ? (
            <>
              <Check className="size-3.5" aria-hidden /> Copied
            </>
          ) : (
            <>
              <Copy className="size-3.5" aria-hidden /> Copy
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto p-5 text-[13px] leading-relaxed">
        <code>{samples[active].code}</code>
      </pre>
    </div>
  );
}

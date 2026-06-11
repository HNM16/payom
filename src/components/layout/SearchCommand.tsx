"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Search, CornerDownLeft, X } from "lucide-react";
import { SERVICES, NAV_ITEMS } from "@/lib/data";
import { cn } from "@/lib/utils";

type Result =
  | { type: "service"; label: string; sub: string; href: string }
  | { type: "page"; label: string; sub: string; href: string };

const PAGE_RESULTS: Result[] = NAV_ITEMS.map((n) => ({
  type: "page",
  label: n.label,
  sub: "Page",
  href: n.href,
}));

const SERVICE_RESULTS: Result[] = SERVICES.map((s) => ({
  type: "service",
  label: s.name,
  sub: s.category,
  href: `/services#${s.slug}`,
}));

const ALL_RESULTS = [...SERVICE_RESULTS, ...PAGE_RESULTS];

export function SearchCommand() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SERVICE_RESULTS.slice(0, 6);
    return ALL_RESULTS.filter(
      (r) =>
        r.label.toLowerCase().includes(q) || r.sub.toLowerCase().includes(q),
    ).slice(0, 8);
  }, [query]);

  // Open with Cmd/Ctrl+K, close with Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      const t = setTimeout(() => inputRef.current?.focus(), 60);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function go(href: string) {
    setOpen(false);
    router.push(href);
  }

  function onListKey(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter" && results[active]) {
      go(results[active].href);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Search services"
        className="inline-flex h-10 items-center gap-2 rounded-full border border-border bg-surface px-3.5 text-sm text-muted transition-colors hover:border-primary/60 hover:text-foreground"
      >
        <Search className="size-4" aria-hidden />
        <span className="hidden lg:inline">Search…</span>
        <kbd className="hidden items-center gap-0.5 rounded border border-border px-1.5 py-0.5 text-[10px] font-medium lg:inline-flex">
          ⌘K
        </kbd>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-[12vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-secondary/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Search"
              initial={{ opacity: 0, scale: 0.97, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: -8 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              onKeyDown={onListKey}
              className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl"
            >
              <div className="flex items-center gap-3 border-b border-border px-4">
                <Search className="size-5 shrink-0 text-muted" aria-hidden />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setActive(0);
                  }}
                  placeholder="Search services and pages…"
                  className="h-14 w-full bg-transparent text-base outline-none placeholder:text-muted"
                  aria-label="Search query"
                />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close search"
                  className="grid size-8 place-items-center rounded-lg text-muted hover:bg-foreground/5"
                >
                  <X className="size-4" aria-hidden />
                </button>
              </div>

              <ul className="max-h-80 overflow-y-auto p-2">
                {results.length === 0 ? (
                  <li className="px-4 py-10 text-center text-sm text-muted">
                    No results for “{query}”.
                  </li>
                ) : (
                  results.map((r, i) => (
                    <li key={`${r.type}-${r.label}`}>
                      <button
                        type="button"
                        onMouseEnter={() => setActive(i)}
                        onClick={() => go(r.href)}
                        className={cn(
                          "flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left transition-colors",
                          active === i ? "bg-primary/10" : "hover:bg-foreground/5",
                        )}
                      >
                        <span className="flex flex-col">
                          <span className="text-sm font-medium">{r.label}</span>
                          <span className="text-xs text-muted">{r.sub}</span>
                        </span>
                        {active === i ? (
                          <CornerDownLeft
                            className="size-4 text-primary"
                            aria-hidden
                          />
                        ) : null}
                      </button>
                    </li>
                  ))
                )}
              </ul>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

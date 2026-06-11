"use client";

import { useMemo, useState } from "react";
import { Search, SearchX } from "lucide-react";
import { motion } from "framer-motion";
import { SERVICES, SERVICE_CATEGORIES } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ServiceCard } from "./ServiceCard";

export function ServicesExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof SERVICE_CATEGORIES)[number]>(
    "All",
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SERVICES.filter((s) => {
      const matchesCategory = category === "All" || s.category === category;
      const matchesQuery =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div>
      {/* Search input */}
      <div className="mx-auto flex max-w-xl items-center gap-3 rounded-full border border-border bg-surface px-5 shadow-[var(--shadow-soft)] focus-within:border-primary/60">
        <Search className="size-5 shrink-0 text-muted" aria-hidden />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a service…"
          aria-label="Search services"
          className="h-13 w-full bg-transparent py-3.5 text-base outline-none placeholder:text-muted"
        />
      </div>

      {/* Category filters */}
      <div
        className="mt-8 flex flex-wrap justify-center gap-2"
        role="tablist"
        aria-label="Filter by category"
      >
        {SERVICE_CATEGORIES.map((cat) => {
          const active = category === cat;
          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setCategory(cat)}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                active
                  ? "text-primary-foreground"
                  : "border border-border bg-surface text-foreground/70 hover:text-foreground",
              )}
            >
              {active ? (
                <motion.span
                  layoutId="service-filter"
                  className="absolute inset-0 -z-10 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              ) : null}
              {cat}
            </button>
          );
        })}
      </div>

      {/* Results */}
      <p className="mt-8 text-center text-sm text-muted" aria-live="polite">
        {filtered.length} service{filtered.length === 1 ? "" : "s"}
        {category !== "All" ? ` in ${category}` : ""}
      </p>

      {filtered.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((service) => (
            <motion.div
              key={service.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center gap-3 text-center">
          <SearchX className="size-10 text-muted" aria-hidden />
          <p className="text-lg font-semibold">No services found</p>
          <p className="max-w-sm text-sm text-muted">
            Try a different search term or category. New billers are added every
            week.
          </p>
        </div>
      )}
    </div>
  );
}

import { cn } from "@/lib/utils";

export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-lg bg-foreground/10 dark:bg-white/10",
        className,
      )}
    />
  );
}

/** Card-shaped skeleton used by route-level loading states. */
export function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-soft)]">
      <Skeleton className="h-12 w-12 rounded-xl" />
      <Skeleton className="mt-5 h-5 w-3/4" />
      <Skeleton className="mt-3 h-4 w-full" />
      <Skeleton className="mt-2 h-4 w-2/3" />
    </div>
  );
}

import { Container } from "@/components/ui/Container";
import { Skeleton } from "@/components/ui/Skeleton";

export default function DashboardLoading() {
  return (
    <Container className="py-12 sm:py-16">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-8 w-48" />
        </div>
        <Skeleton className="h-9 w-32 rounded-full" />
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="rounded-2xl border border-border bg-surface p-6"
          >
            <Skeleton className="size-10 rounded-xl" />
            <Skeleton className="mt-4 h-7 w-24" />
            <Skeleton className="mt-2 h-4 w-20" />
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <Skeleton className="h-72 rounded-2xl lg:col-span-2" />
        <Skeleton className="h-72 rounded-2xl" />
      </div>

      <Skeleton className="mt-6 h-80 rounded-2xl" />
    </Container>
  );
}

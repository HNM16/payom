import { Container } from "@/components/ui/Container";
import { Skeleton, SkeletonCard } from "@/components/ui/Skeleton";

export default function ServicesLoading() {
  return (
    <Container className="py-16 sm:py-20">
      <div className="mx-auto max-w-xl">
        <Skeleton className="h-13 w-full rounded-full" />
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {Array.from({ length: 7 }).map((_, i) => (
          <Skeleton key={i} className="h-9 w-24 rounded-full" />
        ))}
      </div>
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </Container>
  );
}

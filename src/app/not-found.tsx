import Link from "next/link";
import { Home, LifeBuoy } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <div className="relative">
        <div
          className="absolute inset-0 -z-10 mx-auto size-64 rounded-full bg-gradient-to-tr from-primary/25 to-accent/25 blur-3xl"
          aria-hidden
        />
        <p className="text-gradient text-8xl font-bold tracking-tight sm:text-9xl">
          404
        </p>
      </div>
      <h1 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">
        This page took an unexpected detour
      </h1>
      <p className="mt-3 max-w-md text-pretty text-muted">
        The page you're looking for doesn't exist or may have moved. Let's get
        you back on track.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/">
          <Home className="size-4" /> Back home
        </Button>
        <Button href="/contact" variant="outline">
          <LifeBuoy className="size-4" /> Get help
        </Button>
      </div>
    </Container>
  );
}

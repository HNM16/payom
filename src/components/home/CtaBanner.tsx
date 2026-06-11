import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export function CtaBanner() {
  return (
    <section className="pb-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent px-6 py-16 text-center text-white sm:px-16">
            <div className="absolute inset-0 bg-grid opacity-10" aria-hidden />
            <div
              className="absolute -bottom-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-white/20 blur-3xl"
              aria-hidden
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to make payments effortless?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty text-white/85">
                Join millions who've ditched the bill-day stress. Set up your
                Veltra wallet in under a minute — it's free to start.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button
                  href="/dashboard"
                  size="lg"
                  className="bg-white text-primary shadow-none hover:bg-white/90"
                >
                  Create free account
                  <ArrowRight className="size-4" />
                </Button>
                <Button
                  href="/contact"
                  size="lg"
                  className="border border-white/40 bg-transparent text-white shadow-none hover:bg-white/10"
                >
                  Contact sales
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

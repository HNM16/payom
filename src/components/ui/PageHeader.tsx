import { Container } from "./Container";
import { Badge } from "./Badge";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 -z-10 bg-grid opacity-50" aria-hidden />
      <div
        className="absolute left-1/2 top-[-12rem] -z-10 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl"
        aria-hidden
      />
      <Container className="py-16 text-center sm:py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4">
          {eyebrow ? <Badge>{eyebrow}</Badge> : null}
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="text-pretty text-lg leading-relaxed text-muted">
              {description}
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

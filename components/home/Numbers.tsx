import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/primitives";
import { METRICS } from "@/data/site";

export function Numbers() {
  return (
    <section
      id="numbers"
      aria-labelledby="numbers-title"
      className="scroll-mt-20 border-y-2 border-ink bg-sand py-16 sm:py-24"
    >
      <Container>
        <h2
          id="numbers-title"
          className="flex flex-wrap items-center gap-x-[0.15em] font-display text-[clamp(3.5rem,13vw,10rem)] font-bold uppercase leading-[0.85]"
        >
          <span>Before</span>
          <span
            aria-label="and"
            className="flex h-[0.8em] w-[0.8em] items-center justify-center rounded-full border-[0.05em] border-ink bg-cream text-[0.8em]"
          >
            <span className="text-[0.5em] leading-none">&amp;</span>
          </span>
          <span>After</span>
        </h2>
        <p className="mt-6 text-label uppercase text-muted">
          // Real numbers from my own products. First version vs what runs today.
        </p>

        <div className="rule mt-10 sm:mt-12" aria-hidden />
        <ul>
          {METRICS.map((m) => (
            <li key={m.label}>
              <div className="grid gap-4 px-0 py-6 transition-colors duration-200 hover:bg-sun sm:gap-6 sm:px-4 sm:py-8 md:grid-cols-12 md:items-center">
                <div className="md:col-span-6">
                  <h3 className="text-body font-bold uppercase tracking-[0.08em]">{m.label}</h3>
                  <p className="mt-1 text-label uppercase text-muted">{m.source}</p>
                </div>
                <div className="flex items-center justify-between gap-4 md:col-span-6 md:justify-end">
                  <span className="flex items-center gap-3 sm:gap-4">
                    <span className="font-display text-display-md font-bold text-ink/40 line-through decoration-[0.06em]">
                      <span className="sr-only">Before: </span>
                      {m.before}
                    </span>
                    <ArrowRight aria-hidden strokeWidth={1.75} className="h-6 w-6 shrink-0 text-ink/60 sm:h-8 sm:w-8" />
                  </span>
                  <span className="flex min-w-36 items-end justify-end gap-2 border-2 border-ink bg-lime px-4 py-2 sm:min-w-52">
                    <span className="sr-only">After: </span>
                    <span className="font-display text-[clamp(2.75rem,7vw,5.5rem)] font-bold leading-none">
                      {m.after}
                    </span>
                    {m.unit && (
                      <span className="pb-2 font-display text-display-sm font-bold uppercase">{m.unit}</span>
                    )}
                  </span>
                </div>
              </div>
              <div className="rule" aria-hidden />
            </li>
          ))}
        </ul>

        <Link
          href="/blogs#notes"
          className="mt-8 inline-flex items-center gap-2 text-label font-bold uppercase underline decoration-2 underline-offset-4 hover:no-underline"
        >
          Why each one changed <ArrowRight aria-hidden size={14} strokeWidth={2.25} />
        </Link>
      </Container>
    </section>
  );
}

import { cn } from "@/lib/utils";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { PROCESS } from "@/data/site";

const CIRCLE_COLORS = ["bg-cream", "bg-sun", "bg-mint", "bg-lime"];

export function Process() {
  return (
    <section id="process" aria-label="Process" className="scroll-mt-20 py-16 sm:py-24">
      <Container>
        <SectionHeading index="04" title="How the work goes" note="Same 4 steps, every feature" />
        <ol className="relative mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:mt-16 sm:gap-x-8 lg:grid-cols-4">
          {PROCESS.map((step, i) => (
            <li key={step.title} className="relative flex flex-col items-center text-center">
              <div className="relative flex w-full justify-center">
              {i < PROCESS.length - 1 && (
                <span aria-hidden className="rule absolute left-1/2 top-1/2 hidden w-[calc(100%+2rem)] lg:block" />
              )}
              <span
                className={cn(
                  "relative flex aspect-square w-full max-w-60 flex-col items-center justify-center rounded-full border-2 border-ink sm:border-4",
                  CIRCLE_COLORS[i]
                )}
              >
                <span aria-hidden className="text-label font-bold">
                  0{i + 1}
                </span>
                <span className="mt-1 font-display text-[clamp(1.75rem,8vw,3.5rem)] font-bold uppercase leading-none lg:text-[clamp(2rem,3.6vw,3.5rem)]">
                  {step.title}
                </span>
              </span>
              </div>
              <p className="mt-4 max-w-56 text-body text-muted sm:mt-6">{step.note}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

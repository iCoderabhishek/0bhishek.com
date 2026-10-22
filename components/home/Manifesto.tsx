"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/primitives";

const LINES = [
  { lead: "I build", mark: "the back.", color: "bg-lime" },
  { lead: "I build", mark: "the front.", color: "bg-mint" },
  { lead: "I test", mark: "it first.", color: "bg-cream" },
  { lead: "I ship", mark: "it myself.", color: "bg-sun" },
];

const STAGGER = 280;
const EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]";

export function Manifesto() {
  const ref = useRef<HTMLHeadingElement>(null);
  const [shown, setShown] = useState(false);
  const [instant, setInstant] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      setInstant(true);
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const delay = (ms: number) => ({ transitionDelay: instant ? "0ms" : `${ms}ms` });

  return (
    <section aria-labelledby="manifesto-title" className="on-ink border-y-2 border-ink bg-ink text-cream">
      <Container className="py-16 sm:py-24 lg:py-32">
        <p className="text-label uppercase text-muted-dark">// Manifesto</p>
        <div className="@container">
        <h2
          ref={ref}
          id="manifesto-title"
          className="mt-6 flex flex-col gap-[0.08em] font-display text-[min(11cqi,8.5rem)] font-bold uppercase leading-[0.9] sm:mt-8"
        >
          {LINES.map((line, i) => (
            <span key={line.mark} className="flex flex-row items-center gap-[0.22em] whitespace-nowrap">
              <span className="block overflow-hidden pb-[0.04em]">
                <span
                  className={cn(
                    "block transition-[transform,opacity] duration-700",
                    EASE,
                    shown ? "translate-y-0 opacity-100" : "translate-y-[0.6em] opacity-0"
                  )}
                  style={delay(i * STAGGER)}
                >
                  {line.lead}
                </span>
              </span>

              <span className="relative inline-block px-[0.1em] pb-[0.02em] pt-[0.08em] text-ink">
                <span
                  aria-hidden
                  className={cn(
                    "absolute inset-0 origin-left transition-transform duration-700",
                    EASE,
                    line.color,
                    shown ? "scale-x-100" : "scale-x-0"
                  )}
                  style={delay(i * STAGGER + 160)}
                />
                <span
                  className={cn(
                    "relative block transition-[transform,opacity] duration-500",
                    EASE,
                    shown ? "translate-x-0 opacity-100" : "-translate-x-[0.15em] opacity-0"
                  )}
                  style={delay(i * STAGGER + 420)}
                >
                  {line.mark}
                </span>
              </span>
            </span>
          ))}
        </h2>
        </div>
        <p
          className={cn(
            "mt-10 max-w-xl text-body text-cream/80 transition-opacity duration-700 sm:mt-12",
            shown ? "opacity-100" : "opacity-0"
          )}
          style={delay(LINES.length * STAGGER + 400)}
        >
          One pair of hands from schema to deploy: database, API, web or mobile
          interface, pipeline and tests. At Code Samdevx that meant taking
          features to production in sprints. On my own products it also means
          owning the infrastructure and the bill.
        </p>
      </Container>
    </section>
  );
}

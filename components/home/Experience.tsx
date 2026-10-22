"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { EXPERIENCE_DATA } from "@/data/experience";
import type { ExperienceItem } from "@/types";

const CARD_COLORS = ["bg-lime", "bg-mint", "bg-sun"];
const EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]";

export function Experience() {
  return (
    <section
      id="experience"
      aria-label="Experience"
      className="scroll-mt-20 border-y-2 border-ink bg-sand py-16 sm:py-24"
    >
      <Container>
        <SectionHeading index="03" title="Where I've worked" note="1.5 years · web & mobile" />
        <ol className="mt-8 grid items-start gap-6 sm:mt-12 lg:grid-cols-2 lg:gap-8">
          {EXPERIENCE_DATA.map((job, i) => (
            <li key={job.company}>
              <JobCard job={job} color={CARD_COLORS[i % CARD_COLORS.length]} />
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function JobCard({ job, color }: { job: ExperienceItem; color: string }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <article className={cn("flex flex-col rounded-2xl border-2 border-ink p-6 sm:p-8", color)}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="inline-flex h-8 items-center rounded-full bg-ink px-3 text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-cream">
          {job.date}
        </span>
        <span className="text-label font-bold uppercase">{job.location}</span>
      </div>

      <h3 className="mt-8 font-display text-display-md font-bold uppercase sm:mt-12">{job.company}</h3>
      <p className="mt-2 text-label font-bold uppercase">{job.role}</p>
      <p className="mt-6 max-w-md text-body">{job.summary}</p>

      <ul className="mt-8" aria-label="Highlights">
        {job.highlights.map((h, j) => (
          <li key={h}>
            <div className="rule-ink text-ink" aria-hidden />
            <span className="flex items-baseline justify-between gap-4 py-4 font-display text-display-sm font-bold uppercase">
              {h}
              <span aria-hidden className="font-mono text-label">
                0{j + 1}
              </span>
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-4 border-t-2 border-ink pt-4">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={panelId}
          data-track={open ? "experience_collapse" : "experience_expand"}
          data-track-label={job.company}
          className="flex min-h-11 w-full items-center justify-between text-label font-bold uppercase"
        >
          {open ? "Hide the technical version" : "The technical version"}
          <ChevronDown
            aria-hidden
            size={18}
            strokeWidth={2.25}
            className={cn("transition-transform duration-300", EASE, open && "rotate-180")}
          />
        </button>

        <div
          id={panelId}
          inert={!open}
          className={cn(
            "grid transition-[grid-template-rows] duration-500",
            EASE,
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          )}
        >
          <div className="overflow-hidden">
            <div
              className={cn(
                "transition-[opacity,transform] duration-500",
                EASE,
                open ? "translate-y-0 opacity-100 delay-100" : "-translate-y-2 opacity-0"
              )}
            >
              <ul className="flex flex-col gap-3 pt-4">
                {job.bullets.map((b) => (
                  <li key={b} className="grid grid-cols-[1.5rem_1fr] text-body">
                    <span aria-hidden className="font-bold">
                      →
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              {job.tags && <p className="mt-4 text-label font-bold uppercase">{job.tags.join(" · ")}</p>}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

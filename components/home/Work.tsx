"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { PROJECTS_DATA } from "@/data/projects";

const FEATURED = PROJECTS_DATA.slice(0, 5);
const CARD_COLORS = ["bg-lime", "bg-mint", "bg-sun"];
const CARD_COUNT = FEATURED.length + 1;

export function Work() {
  const railRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const cardStep = useCallback(() => {
    const rail = railRef.current;
    const first = rail?.firstElementChild as HTMLElement | null;
    if (!rail || !first) return 0;
    const gap = parseFloat(getComputedStyle(rail).columnGap) || 0;
    return first.offsetWidth + gap;
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const onScroll = () => {
      const step = cardStep();
      if (!step) return;
      const end = rail.scrollLeft >= rail.scrollWidth - rail.clientWidth - 4;
      setAtStart(rail.scrollLeft <= 4);
      setAtEnd(end);
      setActive(end ? CARD_COUNT - 1 : Math.round(rail.scrollLeft / step));
    };
    onScroll();
    rail.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      rail.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [cardStep]);

  const goTo = (index: number) => {
    const rail = railRef.current;
    if (!rail) return;
    const clamped = Math.max(0, Math.min(CARD_COUNT - 1, index));
    rail.scrollTo({ left: clamped * cardStep(), behavior: "smooth" });
  };

  const step = (dir: -1 | 1) => {
    railRef.current?.scrollBy({ left: dir * cardStep(), behavior: "smooth" });
  };

  return (
    <section id="work" aria-label="Selected work" className="scroll-mt-20 py-16 sm:py-24">
      <Container>
        <SectionHeading index="02" title="Selected work" note="Swipe →" />

        <ul
          ref={railRef}
          tabIndex={0}
          aria-label="Projects, scrollable"
          className="no-scrollbar -mx-4 mt-8 flex sm:mt-12 snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-2 sm:-mx-8 sm:scroll-px-8 sm:gap-6 sm:px-8"
        >
          {FEATURED.map((project, i) => (
            <li
              key={project.id}
              className={cn(
                "flex w-[88%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border-2 border-ink sm:w-[30rem]",
                CARD_COLORS[i % CARD_COLORS.length]
              )}
            >
              <div className="relative aspect-video shrink-0 overflow-hidden border-b-2 border-ink bg-ink">
                {project.videoSrc ? (
                  <DemoVideo src={project.videoSrc} title={project.title} />
                ) : project.imageSrc ? (
                  <Image
                    src={project.imageSrc}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(min-width: 640px) 480px, 85vw"
                    placeholder="blur"
                    className="object-cover object-top"
                  />
                ) : null}
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-8">
              <p className="text-label font-bold uppercase">
                № {String(i + 1).padStart(2, "0")} — {project.date}
              </p>
              <h3 className="mt-3 font-display text-display-md font-bold uppercase sm:mt-4">
                {project.title}
              </h3>
              <p className="mt-3 line-clamp-3 text-body sm:mt-6 sm:line-clamp-none">
                {project.description}
              </p>

              <div className="mt-auto pt-5 sm:pt-8" aria-hidden>
                <div className="rule-ink text-ink" />
              </div>
              <p className="mt-3 truncate text-label font-bold uppercase sm:mt-4">
                {project.tags.slice(0, 3).join(" · ")}
              </p>

              <div className="mt-4 flex gap-2 sm:mt-6 sm:flex-wrap">
                {project.liveUrl && (
                  <CardLink href={project.liveUrl} label={`${project.title} live`} track="project_live" project={project.title}>
                    Live
                  </CardLink>
                )}
                {project.githubUrl && (
                  <CardLink href={project.githubUrl} label={`${project.title} source code`} track="project_code" project={project.title}>
                    Code
                  </CardLink>
                )}
              </div>
              </div>
            </li>
          ))}

          <li className="on-ink flex w-[88%] shrink-0 snap-start flex-col rounded-2xl border-2 border-ink bg-ink p-6 text-cream sm:w-[30rem] sm:p-8">
            <p className="text-label font-bold uppercase text-muted-dark">// The rest</p>
            <h3 className="mt-8 font-display text-display-md font-bold uppercase sm:mt-16">
              All {PROJECTS_DATA.length} projects
            </h3>
            <p className="mt-4 flex-1 text-body text-cream/80 sm:mt-6">
              Demos and screenshots for everything, including the React Native
              apps and the npm CLI.
            </p>
            <Link
              href="/projects"
              data-track="all_projects_click"
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-lime bg-lime px-6 text-label font-bold uppercase text-ink transition-colors duration-200 hover:bg-transparent hover:text-lime"
            >
              See all projects <ArrowRight aria-hidden size={16} strokeWidth={2.25} />
            </Link>
          </li>
        </ul>

        <div className="mt-6 flex items-center justify-between sm:mt-8">
          <p className="text-label font-bold uppercase sm:hidden" aria-live="polite">
            {String(active + 1).padStart(2, "0")} / {String(CARD_COUNT).padStart(2, "0")}
          </p>
          <div className="hidden items-center gap-2 sm:flex">
            {Array.from({ length: CARD_COUNT }, (_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to card ${i + 1}`}
                aria-current={active === i ? "true" : undefined}
                className="flex h-6 w-6 items-center justify-center"
              >
                <span
                  className={cn(
                    "h-3 w-3 rounded-full border-2 border-ink transition-colors duration-200",
                    active === i ? "bg-ink" : "bg-transparent"
                  )}
                />
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <RailButton label="Previous project" onClick={() => step(-1)} disabled={atStart}>
              <ArrowLeft aria-hidden size={20} strokeWidth={2.25} />
            </RailButton>
            <RailButton label="Next project" onClick={() => step(1)} disabled={atEnd}>
              <ArrowRight aria-hidden size={20} strokeWidth={2.25} />
            </RailButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CardLink({
  href,
  label,
  track,
  project,
  children,
}: {
  href: string;
  label: string;
  track: string;
  project: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      data-track={track}
      data-track-label={project}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full border-2 border-ink bg-cream px-4 text-[0.6875rem] font-bold uppercase tracking-[0.12em] transition-colors duration-200 hover:bg-ink hover:text-cream sm:h-9 sm:flex-none"
    >
      {children} <ArrowUpRight aria-hidden size={14} strokeWidth={2.25} />
    </a>
  );
}

function RailButton({
  label,
  onClick,
  disabled,
  children,
}: {
  label: string;
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink transition-colors duration-200 hover:bg-ink hover:text-cream disabled:pointer-events-none disabled:opacity-30"
    >
      {children}
    </button>
  );
}

function DemoVideo({ src, title }: { src: string; title: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const userPaused = useRef(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      userPaused.current = true;
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !userPaused.current) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.6 }
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  const toggle = () => {
    const video = ref.current;
    if (!video) return;
    if (video.paused) {
      userPaused.current = false;
      video.play().catch(() => {});
    } else {
      userPaused.current = true;
      video.pause();
    }
  };

  return (
    <>
      <video
        ref={ref}
        src={`${src}#t=0.1`}
        muted
        loop
        playsInline
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="absolute inset-0 h-full w-full object-cover object-top"
        aria-label={`${title} demo video`}
      />
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-3 sm:p-4">
        <span className="inline-flex h-7 items-center rounded-full border-2 border-ink bg-cream px-3 text-[0.625rem] font-bold uppercase tracking-[0.12em]">
          Demo
        </span>
        <button
          type="button"
          onClick={toggle}
          data-track={playing ? "demo_pause" : "demo_play"}
          data-track-label={title}
          aria-label={playing ? `Pause ${title} demo` : `Play ${title} demo`}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink bg-cream transition-colors duration-200 hover:bg-lime"
        >
          {playing ? (
            <Pause aria-hidden size={14} strokeWidth={2.5} />
          ) : (
            <Play aria-hidden size={14} strokeWidth={2.5} className="translate-x-px" />
          )}
        </button>
      </div>
    </>
  );
}

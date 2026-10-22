import Image from "next/image";
import portrait from "@/assets/images/mee.jpeg";
import { cn } from "@/lib/utils";
import { Pill, Tag } from "@/components/ui/primitives";
import { CONTACT_MAILTO, RESUME_URL } from "@/data/site";

const STATUS = ["Full-time & contract", "Remote or relocate", "Can start now"];
const HERO_STACK = ["AI agents", "Node.js", "PostgreSQL", "React", "React Native", "AWS"];

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="overflow-hidden">
      <h1 id="hero-title" className="sr-only">
        Abhishek Jha, full stack engineer
      </h1>
      <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-6 sm:px-8 sm:pt-12 lg:pb-24 lg:pt-12">
        <MobileHero />
        <DesktopHero />
      </div>
    </section>
  );
}

function MobileHero() {
  return (
    <div className="@container lg:hidden">
      <Meta />

      <div
        aria-hidden
        className="mt-6 select-none font-display text-[24cqi] font-bold uppercase leading-[0.84] tracking-[-0.01em]"
      >
        Abhishek
      </div>

      <div className="relative mt-4">
        <Portrait className="aspect-[4/5] sm:aspect-[16/11]" sizes="100vw" />
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-16 left-4 select-none font-display text-[30cqi] font-bold uppercase leading-[0.84] tracking-[-0.01em] text-cream sm:text-[22cqi]"
        >
          Jha
        </span>
        <Badge className="absolute -top-6 right-4 h-[0.74em] w-[0.74em] text-[30cqi] sm:text-[18cqi]" />
      </div>

      <p className="mt-8 font-display text-display-md font-bold uppercase">
        <Hook />
      </p>
      <div className="rule mt-6" aria-hidden />
      <p className="mt-6 text-body">
        <Detail />
      </p>

      <div className="on-ink mt-8 rounded-2xl border-2 border-ink bg-ink p-6 text-cream">
        <p className="flex items-center gap-2 text-label font-bold uppercase text-lime">
          <span aria-hidden className="h-2 w-2 rounded-full bg-mint" />
          // Open to
        </p>
        <ul className="mt-4" aria-label="Availability">
          {STATUS.map((s, i) => (
            <li key={s}>
              {i > 0 && <div className="rule-ink text-cream/20" aria-hidden />}
              <span className="flex items-center justify-between py-3 font-display text-display-sm font-bold uppercase">
                {s}
                <span aria-hidden className="font-mono text-label text-muted-dark">
                  0{i + 1}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 grid gap-3 sm:flex sm:gap-4">
        <Ctas />
      </div>
    </div>
  );
}

const PHOTO_LEFT = "68%";

function DesktopHero() {
  return (
    <div className="@container relative hidden lg:block">
      <div className="absolute inset-y-0 right-0 w-[32%]">
        <Portrait className="h-full" sizes="420px" />
      </div>

      <DesktopLayer />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-20 select-none"
        style={{ clipPath: `inset(0 0 0 ${PHOTO_LEFT} round 16px)` }}
      >
        <DesktopLayer ghost />
      </div>
    </div>
  );
}

function DesktopLayer({ ghost = false }: { ghost?: boolean }) {
  const hide = ghost ? "invisible" : undefined;
  return (
    <div className={cn("relative pb-8 pt-16", ghost ? "text-cream" : "z-10 text-ink")}>
      <div className={cn("w-[64%]", hide)}>
        <Meta />
      </div>

      <div
        aria-hidden
        className="relative mt-8 select-none font-display text-[19cqi] font-bold uppercase leading-[0.88] tracking-[-0.01em]"
      >
        <span className="block">Abhishek</span>
        <div className="flex items-center gap-[0.14em] pl-[6%]">
          <span>Jha</span>
          <ul
            aria-label="Main stack"
            className={cn(
              "w-[14ch] select-text font-mono text-label font-bold normal-case tracking-[0.12em]",
              hide
            )}
          >
            {HERO_STACK.map((tool, i) => (
              <li
                key={tool}
                className={cn(
                  "flex items-center justify-between gap-3 border-b border-ink/20 py-1 uppercase leading-tight",
                  i === 0 && "border-t"
                )}
              >
                {tool}
                <span aria-hidden className="text-ink/40">
                  0{i + 1}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {!ghost && (
          <Badge className="absolute left-[38%] top-[-0.22em] z-10 h-[0.62em] w-[0.62em]" />
        )}
      </div>

      <div className={cn("relative z-10 mt-8 w-[60%]", hide)}>
        <Pitch />
        <Status />
      </div>

      <div className={cn("relative z-10 mt-8 flex gap-4", hide)}>
        <Ctas />
      </div>
    </div>
  );
}

function Meta() {
  return (
    <>
      <div className="flex items-center justify-between gap-4 text-label uppercase text-muted">
        <span>0bhishek.com — Full stack</span>
        <span>
          Kolkata, IN<span className="hidden sm:inline"> · IST</span>
        </span>
      </div>
      <div className="rule mt-4" aria-hidden />
    </>
  );
}

function Badge({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full border-[0.04em] border-lime bg-ink text-lime",
        className
      )}
    >
      <span className="flex flex-col items-center text-[0.15em] leading-[1.05] tracking-[0.04em]">
        <span>Full</span>
        <span>Stack</span>
      </span>
    </span>
  );
}

function Portrait({ className, sizes }: { className?: string; sizes: string }) {
  return (
    <figure className={cn("relative overflow-hidden rounded-2xl border-2 border-ink bg-ink", className)}>
      <Image
        src={portrait}
        alt="Portrait of Abhishek Jha outdoors among trees"
        fill
        priority
        placeholder="blur"
        sizes={sizes}
        className="object-cover object-[50%_20%]"
      />
      <figcaption className="absolute inset-x-4 bottom-4 truncate rounded-full border-2 border-ink bg-cream px-4 py-2 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-ink">
        // Schema to deploy. Solo.
      </figcaption>
    </figure>
  );
}

function Hook() {
  return (
    <>
      I built{" "}
      <a
        href="https://lonch.cloud"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Lonch, opens lonch.cloud in a new tab"
        data-track="project_live"
        data-track-label="Lonch (hero)"
        className="underline decoration-[0.08em] underline-offset-[0.12em] transition-colors duration-200 hover:bg-lime hover:no-underline"
      >
        Lonch
      </a>
      , my own Vercel, on AWS.
    </>
  );
}

function Detail() {
  return (
    <>
      Full stack engineer, 1.5 years at Code Samdevx and DealzUp. Also built{" "}
      <strong>Sutra AI</strong>, scheduled AI agents.{" "}
      <strong>Looking for a full-time or contract full stack role.</strong>
    </>
  );
}

function Pitch() {
  return (
    <div className="max-w-xl">
      <p className="font-display text-display-sm font-bold uppercase">
        <Hook />
      </p>
      <p className="mt-3 text-body">
        <Detail />
      </p>
    </div>
  );
}

function Status() {
  return (
    <ul className="mt-6 flex flex-wrap gap-2" aria-label="Availability">
      {STATUS.map((s, i) => (
        <li key={s}>
          <Tag className={i === 0 ? "gap-2 bg-mint" : undefined}>
            {i === 0 && <span aria-hidden className="h-2 w-2 rounded-full bg-ink" />}
            {s}
          </Tag>
        </li>
      ))}
    </ul>
  );
}

function Ctas() {
  return (
    <>
      <Pill href={CONTACT_MAILTO} track="contact_click" trackLabel="hero">
        Discuss a role
      </Pill>
      {RESUME_URL && (
      <Pill
        href={RESUME_URL}
        external
        variant="outline"
        ariaLabel="Resume, PDF, opens in a new tab"
        track="resume_click"
        trackLabel="hero"
      >
        Resume (PDF)
      </Pill>
      )}
    </>
  );
}

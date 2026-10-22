import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type PillProps = {
  href: string;
  children: React.ReactNode;
  variant?: "lime" | "outline" | "ink";
  external?: boolean;
  size?: "md" | "sm";
  className?: string;
  ariaLabel?: string;
  track?: string;
  trackLabel?: string;
};

export function Pill({
  href,
  children,
  variant = "lime",
  external,
  size = "md",
  className,
  ariaLabel,
  track,
  trackLabel,
}: PillProps) {
  const trackProps = track ? { "data-track": track, "data-track-label": trackLabel } : {};
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink font-mono font-bold uppercase tracking-[0.12em] transition-colors duration-200",
    size === "md" ? "h-12 px-6 text-label" : "h-9 px-4 text-[0.6875rem]",
    variant === "lime" && "bg-lime text-ink hover:bg-ink hover:text-lime",
    variant === "outline" && "bg-transparent text-ink hover:bg-ink hover:text-cream",
    variant === "ink" && "bg-ink text-cream hover:bg-lime hover:text-ink",
    className
  );
  const Icon = external ? ArrowUpRight : ArrowRight;
  const content = (
    <>
      <span>{children}</span>
      <Icon aria-hidden size={size === "md" ? 16 : 14} strokeWidth={2.25} />
    </>
  );

  if (external || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...trackProps}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} aria-label={ariaLabel} {...trackProps}>
      {content}
    </Link>
  );
}

export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-8 items-center rounded-full border-2 border-ink px-3 text-[0.6875rem] font-bold uppercase tracking-[0.08em]",
        className
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  index,
  title,
  note,
  as: As = "h2",
}: {
  index?: string;
  title: string;
  note?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div>
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:gap-4">
          {(index || note) && (
            <div className="flex items-center justify-between gap-4 md:block">
              {index && (
                <span className="text-label font-bold md:pb-2" aria-hidden>
                  ({index})
                </span>
              )}
              {note && <p className="text-label uppercase text-muted md:hidden">// {note}</p>}
            </div>
          )}
          <As className="font-display text-display-lg font-bold uppercase">{title}</As>
        </div>
        {note && <p className="hidden pb-2 text-label uppercase text-muted md:block">// {note}</p>}
      </div>
      <div className="rule mt-4 md:mt-6" aria-hidden />
    </div>
  );
}

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-8", className)}>{children}</div>;
}

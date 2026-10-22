"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { CONTACT_MAILTO, NAV_ITEMS, RESUME_URL } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const sections = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const activeId = isHome ? active : pathname.startsWith("/projects") ? "work" : pathname.startsWith("/blogs") ? "writing" : null;

  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-cream">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-8">
        <Link
          href="/"
          className="font-display text-2xl font-bold uppercase leading-none tracking-tight"
          aria-label="Abhishek Jha, home"
        >
          Abhishek Jha
        </Link>

        <nav aria-label="Sections" className="hidden lg:block">
          <ul className="flex items-center gap-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/#${item.id}`}
                  aria-current={activeId === item.id ? "true" : undefined}
                  className={cn(
                    "inline-flex h-8 items-center rounded-full border-2 px-4 text-[0.6875rem] font-bold uppercase tracking-[0.12em] transition-colors duration-200",
                    activeId === item.id
                      ? "border-ink bg-lime text-ink"
                      : "border-transparent text-muted hover:text-ink"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {RESUME_URL && (
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume, PDF, opens in a new tab"
            data-track="resume_click"
            data-track-label="header"
            className="hidden h-11 items-center gap-2 rounded-full border-2 border-ink px-5 text-label font-bold uppercase transition-colors duration-200 hover:bg-ink hover:text-cream sm:inline-flex"
          >
            Resume
          </a>
          )}
          <a
            href={CONTACT_MAILTO}
            data-track="contact_click"
            data-track-label="header"
            className="hidden h-11 items-center gap-2 rounded-full border-2 border-ink bg-lime px-5 text-label font-bold uppercase transition-colors duration-200 hover:bg-ink hover:text-lime sm:inline-flex"
          >
            Say hello <ArrowRight aria-hidden size={16} strokeWidth={2.25} />
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <Menu aria-hidden size={20} strokeWidth={2.25} />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        hidden={!open}
        className="fixed inset-0 z-50 flex flex-col bg-cream"
      >
        <div className="flex h-16 items-center justify-between border-b-2 border-ink px-4 sm:h-20 sm:px-8">
          <span className="font-display text-2xl font-bold uppercase leading-none">Menu</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink"
            aria-label="Close menu"
            autoFocus
          >
            <X aria-hidden size={20} strokeWidth={2.25} />
          </button>
        </div>
        <nav aria-label="Sections" className="flex-1 overflow-y-auto px-4 sm:px-8">
          <ul>
            {NAV_ITEMS.map((item, i) => (
              <li key={item.id} className="border-b-2 border-ink">
                <Link
                  href={`/#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-4 font-display text-5xl font-bold uppercase leading-none"
                >
                  <span className="font-mono text-label text-muted">0{i + 1}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="grid gap-3 border-t-2 border-ink p-4 sm:px-8">
          {RESUME_URL && (
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-track="resume_click"
            data-track-label="mobile menu"
            className="flex h-14 w-full items-center justify-center gap-2 rounded-full border-2 border-ink text-label font-bold uppercase"
          >
            Resume (PDF)
          </a>
          )}
          <a
            href={CONTACT_MAILTO}
            data-track="contact_click"
            data-track-label="mobile menu"
            className="flex h-14 w-full items-center justify-center gap-2 rounded-full border-2 border-ink bg-lime text-label font-bold uppercase"
          >
            Say hello <ArrowRight aria-hidden size={16} strokeWidth={2.25} />
          </a>
        </div>
      </div>
    </header>
  );
}

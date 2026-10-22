"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getConsent, OPEN_CONSENT_EVENT, setConsent, type Consent } from "@/lib/consent";

export function ConsentBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) return;
    if (getConsent() === null) setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
  }, []);

  if (!open) return null;

  const choose = (consent: Consent) => {
    setConsent(consent);
    setOpen(false);
  };

  return (
    <section
      role="region"
      aria-label="Cookie preferences"
      className="fixed bottom-3 left-3 z-50 flex max-w-[calc(100%-1.5rem)] items-center gap-3 rounded-full border border-ink/20 bg-cream py-1 pl-4 pr-1 text-[0.6875rem] uppercase tracking-[0.08em] sm:bottom-4 sm:left-4"
    >
      <p className="truncate text-muted">
        Cookies for analytics?{" "}
        <Link href="/privacy" className="underline underline-offset-2 hover:text-ink">
          Info
        </Link>
      </p>
      <div className="flex shrink-0 items-center">
        <button
          type="button"
          onClick={() => choose("denied")}
          className="h-8 rounded-full px-3 font-bold text-muted transition-colors duration-200 hover:text-ink"
        >
          No
        </button>
        <button
          type="button"
          onClick={() => choose("granted")}
          className="h-8 rounded-full px-3 font-bold text-ink transition-colors duration-200 hover:bg-ink hover:text-cream"
        >
          OK
        </button>
      </div>
    </section>
  );
}

export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))}
      className={className}
    >
      Cookie settings
    </button>
  );
}

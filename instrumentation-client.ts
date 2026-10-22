import posthog from "posthog-js";
import { getConsent } from "@/lib/consent";

const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const isDev = process.env.NODE_ENV === "development";
// Dev is skipped unless NEXT_PUBLIC_POSTHOG_DEV=true. Not using opt_out_capturing(): its
// opt-out is saved in the browser and silently blocks later production runs on the same origin.
const shouldTrack = Boolean(key) && (!isDev || process.env.NEXT_PUBLIC_POSTHOG_DEV === "true");

if (key && shouldTrack) {
  const consented = getConsent() === "granted";

  posthog.init(key, {
    persistence: consented ? "localStorage+cookie" : "memory",
    disable_session_recording: !consented,
    api_host: "/ingest",
    ui_host: process.env.NEXT_PUBLIC_POSTHOG_REGION === "eu" ? "https://eu.posthog.com" : "https://us.posthog.com",
    defaults: "2025-05-24",
    capture_exceptions: true,
    debug: isDev,
  });
  // Undo an opt-out saved by the earlier setup, which would otherwise block all events.
  if (posthog.has_opted_out_capturing()) posthog.opt_in_capturing();

  const ref = new URLSearchParams(window.location.search).get("ref");
  if (ref) {
    posthog.register_once({ ref });
    posthog.setPersonProperties({ ref });
  }

  document.addEventListener(
    "click",
    (e) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>("[data-track]");
      if (!el?.dataset.track) return;
      posthog.capture(el.dataset.track, {
        label: el.dataset.trackLabel,
        href: el.getAttribute("href") ?? undefined,
        section: el.closest("section[id], footer, header")?.id || el.closest("header, footer")?.tagName.toLowerCase(),
      });
    },
    { capture: true }
  );
}

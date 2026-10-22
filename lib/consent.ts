import posthog from "posthog-js";

/*
  Analytics consent.
  - No choice yet / declined: PostHog keeps its ID in memory only (no cookie, no
    localStorage) and session replay is off. Each page load counts as a new,
    anonymous visitor.
  - Accepted: PostHog may store its cookie, so returning visits are linked, and
    session replay turns on.
  The choice itself is kept in localStorage under CONSENT_KEY. It is not sent anywhere.
*/
export type Consent = "granted" | "denied";

const CONSENT_KEY = "analytics-consent";
/** Fired by the footer "Cookie settings" button to reopen the banner. */
export const OPEN_CONSENT_EVENT = "consent:open";

const enabled = () => Boolean(process.env.NEXT_PUBLIC_POSTHOG_KEY);

export function getConsent(): Consent | null {
  try {
    const value = localStorage.getItem(CONSENT_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

export function setConsent(consent: Consent) {
  try {
    localStorage.setItem(CONSENT_KEY, consent);
  } catch {
    // Storage blocked: the choice applies to this page view only.
  }
  if (!enabled()) return;

  if (consent === "granted") {
    posthog.set_config({ persistence: "localStorage+cookie" });
    posthog.startSessionRecording();
  } else {
    posthog.stopSessionRecording();
    // reset() drops the stored ID and PostHog's cookie, then memory-only from here on.
    posthog.reset();
    posthog.set_config({ persistence: "memory" });
  }
}

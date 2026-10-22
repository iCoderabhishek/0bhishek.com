import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { CookieSettingsButton } from "@/components/outer/ConsentBanner";

export const metadata: Metadata = {
  title: "Privacy",
  description: "What this site collects, why, and how to have it deleted.",
  alternates: { canonical: "/privacy" },
};

const UPDATED = "October 22, 2026";

const SECTIONS: { title: string; body: React.ReactNode }[] = [
  {
    title: "Who runs this site",
    body: (
      <p>
        Abhishek Jha, Kolkata, India. For anything on this page, email{" "}
        <a href="mailto:connect@0bhishek.com" className="font-bold underline decoration-2 underline-offset-4">
          connect@0bhishek.com
        </a>
        .
      </p>
    ),
  },
  {
    title: "What is collected",
    body: (
      <>
        <p>
          The site uses PostHog analytics to understand which pages, projects and
          links people use. For every visit it records:
        </p>
        <ul className="mt-4 flex flex-col gap-2">
          {[
            "Pages viewed, time on page and how far you scroll.",
            "Clicks on links and buttons, such as Resume, project links and demo videos.",
            "The site that sent you here, and any ?ref= tag in the link you used.",
            "Approximate location (country and city, from your IP address), device, browser and screen size.",
          ].map((item) => (
            <li key={item} className="grid grid-cols-[1.5rem_1fr]">
              <span aria-hidden className="font-bold">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          There are no forms on this site, so nothing you type is collected. Your name
          and email are only known to me if you email me.
        </p>
      </>
    ),
  },
  {
    title: "Cookies and session recording",
    body: (
      <>
        <p>
          <strong>If you decline, or haven&apos;t chosen yet:</strong> no analytics
          cookie is set and nothing is stored on your device. Each visit is counted
          on its own, and sessions are not recorded.
        </p>
        <p className="mt-4">
          <strong>If you accept:</strong> PostHog sets a cookie (named{" "}
          <code>ph_…_posthog</code>) so repeat visits are linked, and sessions are
          recorded, meaning clicks, scrolling and page changes are replayed as a
          video-like timeline.
        </p>
        <p className="mt-4">
          Your choice is saved in your browser&apos;s local storage so the banner
          doesn&apos;t keep asking. You can change it any time:{" "}
          <CookieSettingsButton className="font-bold underline decoration-2 underline-offset-4 hover:no-underline" />
          .
        </p>
      </>
    ),
  },
  {
    title: "Where the data goes",
    body: (
      <p>
        Analytics data is processed and stored by PostHog, on the servers of the
        region the project is hosted in. It is used only to improve this site and
        see how my work is received. It is not sold, shared with advertisers, or
        used to build ad profiles.
      </p>
    ),
  },
  {
    title: "Your rights",
    body: (
      <p>
        You can ask what data exists about your visits, or have it deleted, by
        emailing me. Declining cookies, or using a browser setting or extension that
        blocks tracking, also stops the cookie and session recording.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading as="h1" title="Privacy" note={`Updated ${UPDATED}`} />
        <div className="mt-8 max-w-2xl sm:mt-12">
          {SECTIONS.map((s, i) => (
            <div key={s.title}>
              {i > 0 && <div className="rule" aria-hidden />}
              <div className="py-8">
                <h2 className="font-display text-display-sm font-bold uppercase">{s.title}</h2>
                <div className="mt-4 text-body">{s.body}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

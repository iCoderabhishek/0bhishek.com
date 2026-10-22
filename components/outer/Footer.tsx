import { USER } from "@/data/user";
import { CONTACT_MAILTO } from "@/data/site";
import Link from "next/link";
import { Container } from "@/components/ui/primitives";
import { CookieSettingsButton } from "@/components/outer/ConsentBanner";

const SOCIALS = [
  { label: "GitHub", handle: "@iCoderabhishek", href: "https://github.com/iCoderabhishek" },
  { label: "LinkedIn", handle: "/in/0bhishek", href: "https://www.linkedin.com/in/0bhishek" },
  { label: "X", handle: "@0bhishek", href: "https://x.com/0bhishek" },
  { label: "Dev.to", handle: "@mrcssdev", href: "https://dev.to/mrcssdev" },
];

export default function Footer() {
  return (
    <footer id="contact" className="on-ink scroll-mt-20 bg-ink text-cream">
      <Container className="pb-8 pt-16 sm:pt-24">
        <p className="text-label uppercase text-muted-dark">
          // Open to full-time and contract roles. Remote or relocate.
        </p>

        <a
          href={CONTACT_MAILTO}
          data-track="contact_click"
          data-track-label="footer write me"
          className="group mt-6 flex flex-wrap items-center gap-x-4 gap-y-4 sm:gap-x-8 font-display text-[clamp(4rem,16vw,12rem)] font-bold uppercase leading-[0.85] text-lime"
        >
          <span>Write me</span>
          <svg
            aria-hidden
            viewBox="0 0 120 48"
            className="h-[0.4em] w-auto transition-transform duration-200 group-hover:translate-x-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 24h108M88 4l24 20-24 20" />
          </svg>
        </a>

        <a
          href={`mailto:${USER.email}`}
          className="mt-8 inline-block text-body font-bold underline decoration-2 underline-offset-4 hover:text-lime"
        >
          {USER.email}
        </a>

        <div className="rule-ink mt-12 text-muted-dark/40 sm:mt-16" aria-hidden />

        <div className="mt-8 grid gap-8 text-label uppercase text-muted-dark sm:grid-cols-2 lg:grid-cols-4">
          <ul className="grid grid-cols-2 gap-x-4 sm:col-span-2 lg:col-span-2 lg:flex lg:flex-wrap lg:gap-x-8">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  data-track="social_click"
                  data-track-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-11 items-center transition-colors duration-200 hover:text-lime lg:min-h-0"
                >
                  {s.label}: {s.handle}
                </a>
              </li>
            ))}
          </ul>
          <p>Kolkata, India · IST</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 lg:justify-end">
            <span>© {new Date().getFullYear()} Abhishek Jha</span>
            <Link href="/privacy" className="flex min-h-11 items-center transition-colors duration-200 hover:text-lime lg:min-h-0">
              Privacy
            </Link>
            <CookieSettingsButton className="flex min-h-11 items-center uppercase transition-colors duration-200 hover:text-lime lg:min-h-0" />
          </div>
        </div>
      </Container>
    </footer>
  );
}

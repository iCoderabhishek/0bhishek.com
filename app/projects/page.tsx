import type { Metadata } from "next";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Container, Pill, SectionHeading, Tag } from "@/components/ui/primitives";
import { PROJECTS_DATA } from "@/data/projects";
import { CONTACT_MAILTO } from "@/data/site";

const DESCRIPTION =
  "Projects by Abhishek Jha: a deploy platform on AWS, a scheduled AI agent CLI, a team file-sharing app, React Native apps and an npm package.";

export const metadata: Metadata = {
  title: "Projects",
  description: DESCRIPTION,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | Abhishek Jha",
    description: DESCRIPTION,
    url: "https://0bhishek.com/projects",
    siteName: "Abhishek Jha",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Abhishek Jha",
    description: DESCRIPTION,
    creator: "@0bhishek",
  },
};

const MEDIA_COLORS = ["bg-lime", "bg-mint", "bg-sun"];

const projectsJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Projects by Abhishek Jha",
  url: "https://0bhishek.com/projects",
  description: DESCRIPTION,
  mainEntity: {
    "@type": "ItemList",
    itemListElement: PROJECTS_DATA.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "SoftwareSourceCode",
        name: p.title,
        description: p.description,
        keywords: p.tags.join(", "),
        ...(p.liveUrl ? { url: p.liveUrl } : {}),
        ...(p.githubUrl ? { codeRepository: p.githubUrl } : {}),
        author: { "@id": "https://0bhishek.com/#person" },
      },
    })),
  },
};

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
      />
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading as="h1" index="All" title="Projects" note={`${PROJECTS_DATA.length} shipped, newest first`} />
          <p className="mt-8 max-w-2xl text-body">
            Products I built and run myself, plus the apps and tools that came
            before them. Every card links to the live build or the source.
          </p>
        </Container>
      </section>

      <section aria-label="Project list" className="pb-20 sm:pb-24">
        <Container>
          <ul className="grid gap-8 lg:grid-cols-2">
            {PROJECTS_DATA.map((project, i) => (
              <li key={project.id}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border-2 border-ink bg-cream">
                  <div
                    className={cn(
                      "relative aspect-[16/10] border-b-2 border-ink",
                      MEDIA_COLORS[i % MEDIA_COLORS.length]
                    )}
                  >
                    {project.videoSrc ? (
                      <video
                        src={project.videoSrc}
                        controls
                        muted
                        playsInline
                        preload="metadata"
                        className="h-full w-full bg-ink object-cover"
                        aria-label={`${project.title} demo video`}
                      />
                    ) : project.imageSrc ? (
                      <Image
                        src={project.imageSrc}
                        alt={`${project.title} screenshot`}
                        fill
                        sizes="(min-width: 1024px) 600px, 100vw"
                        placeholder="blur"
                        className="object-cover object-top"
                      />
                    ) : null}
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <p className="text-label font-bold uppercase text-muted">
                      № {String(i + 1).padStart(2, "0")} — {project.date}
                    </p>
                    <h2 className="mt-4 font-display text-display-md font-bold uppercase">{project.title}</h2>
                    <p className="mt-4 flex-1 text-body">{project.description}</p>
                    <ul className="mt-6 flex flex-wrap gap-2" aria-label="Built with">
                      {project.tags.map((tag) => (
                        <li key={tag}>
                          <Tag>{tag}</Tag>
                        </li>
                      ))}
                    </ul>
                    <div className="rule mt-8" aria-hidden />
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.liveUrl && (
                        <Pill href={project.liveUrl} external size="sm" ariaLabel={`${project.title} live`}>
                          Live
                        </Pill>
                      )}
                      {project.githubUrl && (
                        <Pill
                          href={project.githubUrl}
                          external
                          size="sm"
                          variant="outline"
                          ariaLabel={`${project.title} source code`}
                        >
                          Code
                        </Pill>
                      )}
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>

          <div className="mt-16 flex flex-col items-start gap-6 rounded-2xl border-2 border-ink bg-lime p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <p className="font-display text-display-sm font-bold uppercase">
              Need someone who can own a feature end to end?
            </p>
            <Pill href={CONTACT_MAILTO} variant="ink">
              Discuss a role
            </Pill>
          </div>
        </Container>
      </section>
    </>
  );
}

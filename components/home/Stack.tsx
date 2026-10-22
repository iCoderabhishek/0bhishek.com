import { Container, SectionHeading, Tag } from "@/components/ui/primitives";
import { STACK } from "@/data/site";

export function Stack() {
  return (
    <section id="stack" aria-label="Stack" className="scroll-mt-20 py-16 sm:py-24">
      <Container>
        <SectionHeading index="01" title="What I work with" note="Languages & tools" />
        <ul>
          {STACK.map((group, i) => (
            <li key={group.title}>
              <div className="group grid gap-4 px-0 py-6 transition-colors duration-200 hover:bg-lime sm:px-4 sm:py-8 md:grid-cols-12 md:items-center md:gap-8">
                <span
                  aria-hidden
                  className="hidden font-display text-display-sm font-bold text-ink/30 transition-colors duration-200 group-hover:text-ink/50 md:col-span-1 md:block"
                >
                  0{i + 1}
                </span>
                <div className="md:col-span-6">
                  <h3 className="flex items-baseline gap-3 font-display text-display-md font-bold uppercase">
                    <span aria-hidden className="text-display-sm text-ink/30 md:hidden">
                      0{i + 1}
                    </span>
                    {group.title}
                  </h3>
                  <p className="mt-2 max-w-lg text-body text-muted group-hover:text-ink">{group.note}</p>
                </div>
                <ul className="flex flex-wrap gap-2 md:col-span-5 md:justify-end" aria-label={`${group.title} tools`}>
                  {group.tools.map((tool) => (
                    <li key={tool}>
                      <Tag>{tool}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rule" aria-hidden />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

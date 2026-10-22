import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Container, SectionHeading, Tag } from "@/components/ui/primitives";
import { PostList } from "@/components/home/Writing";
import { BLOG_DATA } from "@/data/blogs";
import { LEARNING_DATA } from "@/data/learn";

const DESCRIPTION =
  "Articles and engineering notes by Abhishek Jha on AI agents, Redis, PostgreSQL, S3 uploads and building npm tools.";

export const metadata: Metadata = {
  title: "Writing",
  description: DESCRIPTION,
  alternates: { canonical: "/blogs" },
  openGraph: {
    title: "Writing | Abhishek Jha",
    description: DESCRIPTION,
    url: "https://0bhishek.com/blogs",
    siteName: "Abhishek Jha",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Writing | Abhishek Jha",
    description: DESCRIPTION,
    creator: "@0bhishek",
  },
};

const blogsJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Writing by Abhishek Jha",
  url: "https://0bhishek.com/blogs",
  description: DESCRIPTION,
  mainEntity: {
    "@type": "ItemList",
    itemListElement: BLOG_DATA.map((post, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description.trim(),
        url: post.url,
        keywords: post.tags.join(", "),
        ...(post.image ? { image: post.image } : {}),
        author: { "@id": "https://0bhishek.com/#person" },
      },
    })),
  },
};

export default function BlogsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogsJsonLd) }}
      />
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading as="h1" index="01" title="Writing" note="Long form on dev.to" />
          <PostList posts={BLOG_DATA} />
        </Container>
      </section>

      <section
        id="notes"
        aria-label="Notes"
        className="scroll-mt-20 border-t-2 border-ink bg-sand py-20 sm:py-24"
      >
        <Container>
          <SectionHeading index="02" title="Learned the hard way" note="Short notes from real bugs" />
          <ol className="mt-12 grid gap-8 md:grid-cols-2">
            {LEARNING_DATA.map((item, i) => (
              <li key={item.title}>
                <article className="flex h-full flex-col rounded-2xl border-2 border-ink bg-cream p-6 sm:p-8">
                  <p className="text-label font-bold uppercase text-muted">
                    № {String(i + 1).padStart(2, "0")} — {item.date}
                  </p>
                  <h2 className="mt-4 font-display text-display-sm font-bold uppercase">{item.title}</h2>
                  <p className="mt-4 flex-1 text-body">{item.note}</p>
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label="Topics">
                    {item.tags.map((tag) => (
                      <li key={tag}>
                        <Tag>{tag}</Tag>
                      </li>
                    ))}
                  </ul>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 self-start text-label font-bold uppercase underline decoration-2 underline-offset-4 hover:no-underline"
                    >
                      {item.link.includes("github.com") ? "See the code" : "Read the long version"}
                      <ArrowUpRight aria-hidden size={14} strokeWidth={2.25} />
                    </a>
                  )}
                </article>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}

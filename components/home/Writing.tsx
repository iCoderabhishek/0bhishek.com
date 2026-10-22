import { ArrowUpRight } from "lucide-react";
import { Container, Pill, SectionHeading } from "@/components/ui/primitives";
import { BLOG_DATA } from "@/data/blogs";
import type { BlogPost } from "@/types";

export function Writing() {
  return (
    <section
      id="writing"
      aria-label="Writing"
      className="scroll-mt-20 border-t-2 border-ink py-16 sm:py-24"
    >
      <Container>
        <SectionHeading index="05" title="Writing" note="Long form on dev.to" />
        <PostList posts={BLOG_DATA} />
        <div className="mt-8 sm:mt-12">
          <Pill href="/blogs" variant="outline" className="w-full sm:w-auto">
            All writing & notes
          </Pill>
        </div>
      </Container>
    </section>
  );
}

export function PostList({ posts }: { posts: BlogPost[] }) {
  return (
    <ul>
      {posts.map((post, i) => (
        <li key={post.id}>
          <a
            href={post.url}
            data-track="article_click"
            data-track-label={post.title}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid grid-cols-[1fr_auto] items-center gap-4 px-0 py-6 transition-colors duration-200 hover:bg-lime sm:px-4 sm:py-8 md:grid-cols-12 md:gap-8"
          >
            <span aria-hidden className="hidden font-display text-display-sm font-bold text-ink/30 md:col-span-1 md:block">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="md:col-span-8">
              <span className="block font-display text-display-sm font-bold uppercase">{post.title}</span>
              <span className="mt-2 block text-label uppercase text-muted group-hover:text-ink">
                {post.date} · {post.readTime} · {post.tags.slice(0, 2).join(", ")}
              </span>
            </span>
            <span className="flex justify-end md:col-span-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink transition-colors duration-200 group-hover:bg-ink group-hover:text-lime sm:h-12 sm:w-12">
                <ArrowUpRight aria-hidden size={20} strokeWidth={2.25} />
                <span className="sr-only">(opens dev.to)</span>
              </span>
            </span>
          </a>
          <div className="rule" aria-hidden />
        </li>
      ))}
    </ul>
  );
}

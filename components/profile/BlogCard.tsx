import React from "react";
import { ArrowUpRight, Calendar } from "lucide-react";
import { BLOG_DATA } from "@/data/blogs";

const BlogCard = () => {
  return (
    <div className="relative max-w-full md:max-w-4xl lg:max-w-4xl mx-auto rounded-sm px-5 sm:px-15 lg:p-4 overflow-hidden">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 cursor-pointer">
        {BLOG_DATA.slice(0, 2).map((post) => (
          <a
            href={post.url}
            key={post.id}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-md border border-foreground/15 bg-background transition-all duration-300 hover:border-foreground/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/5 flex flex-col"
          >
            {/* Image Header */}
            {post.image && (
              <div className="relative w-full aspect-[1200/627] overflow-hidden bg-foreground/5 border-b border-foreground/10">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                {/* Floating Action Arrow */}
                <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border border-foreground/10 shadow-sm">
                  <ArrowUpRight size={18} className="text-foreground" />
                </div>
              </div>
            )}
            
            <div className="p-5 flex flex-col grow">
              {/* Description */}
              <p className="text-sm text-foreground/80 leading-relaxed mb-5 line-clamp-3 font-mono">
                {post.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] uppercase tracking-widest px-2.5 py-1 border border-foreground/20 rounded-md text-foreground/60 font-semibold group-hover:border-violet-500/30 group-hover:text-violet-600 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Violet hairline that scales in on hover */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-violet-500 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
            />
          </a>
        ))}
      </div>

      {/* Shadow below BlogCard */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-32 lg:h-24 w-full bg-linear-to-t from-background via-background/90 to-transparent" />

      {/* Show More button */}
      <a
        href="/blogs"
        className="group absolute bottom-5 left-1/2 z-11 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-foreground/15 bg-background/80 backdrop-blur-sm px-4 py-1.5 text-sm text-foreground/70 hover:text-foreground hover:border-foreground/35 transition-colors"
      >
        Show More
        <ArrowUpRight
          size={14}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </a>
    </div>
  );
};

export default BlogCard;

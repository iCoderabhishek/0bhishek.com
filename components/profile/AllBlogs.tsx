import React from "react";
import { ArrowUpRight, Calendar } from "lucide-react";
import { BLOG_DATA } from "@/data/blogs";

const AllBlogCard = () => {
  return (
    <div className="relative max-w-full md:max-w-4xl lg:max-w-4xl mx-auto rounded-sm px-5 sm:px-15 lg:p-6 overflow-hidden">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {BLOG_DATA.map((post) => (
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
    </div>
  );
};

export default AllBlogCard;

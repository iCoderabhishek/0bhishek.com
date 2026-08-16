"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { LEARNING_DATA } from "@/data/learn";

const LearnTimeline = () => {
  return (
    <div className="relative max-w-full md:max-w-4xl lg:max-w-5xl mx-auto px-5 sm:px-10 lg:p-4">
      <div className="flex flex-col gap-12 sm:gap-16">
        {LEARNING_DATA.map((item, idx) => (
          <div 
            key={idx} 
            className="group grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-12 items-start border-t border-foreground/10 pt-8 sm:pt-10 transition-colors duration-500 hover:border-violet-500/40"
          >
            {/* Meta Column (Date) */}
            <div className="flex flex-col font-mono text-sm tracking-tight pt-1">
              <span className="text-foreground/80 font-semibold mb-1 group-hover:text-violet-500 transition-colors">
                {item.date}
              </span>
            </div>

            {/* Content Column (Title, Note, Tags) */}
            <div className="flex flex-col">
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="w-fit">
                  <h3 className="font-sans font-bold text-2xl sm:text-3xl tracking-tight text-foreground mb-4 flex items-center gap-2 group-hover:text-violet-500 transition-colors">
                    {item.title}
                    <ArrowUpRight size={24} className="opacity-100 sm:opacity-0 -translate-x-0 sm:-translate-x-2 translate-y-0 sm:translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                  </h3>
                </a>
              ) : (
                <h3 className="font-sans font-bold text-2xl sm:text-3xl tracking-tight text-foreground mb-4 group-hover:text-violet-500 transition-colors">
                  {item.title}
                </h3>
              )}
              
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed font-sans mb-8">
                {item.note}
              </p>

              {/* Tags */}
              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] uppercase tracking-widest px-2.5 py-1 border border-foreground/20 rounded-md text-foreground/60 font-semibold group-hover:border-violet-500/30 group-hover:text-violet-600 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnTimeline;

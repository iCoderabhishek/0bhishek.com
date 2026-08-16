"use client";

import React from "react";
import { EXPERIENCE_DATA } from "@/data/experience";

const ExperienceCard = () => {
  return (
    <div className="relative max-w-full md:max-w-4xl lg:max-w-5xl mx-auto px-5 sm:px-10 lg:p-4">
      <div className="flex flex-col gap-12 sm:gap-16">
        {EXPERIENCE_DATA.map((item, idx) => (
          <div 
            key={idx} 
            className="group grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-12 items-start border-t border-foreground/10 pt-8 sm:pt-10 transition-colors duration-500 hover:border-violet-500/40"
          >
            {/* Meta Column (Date & Location) */}
            <div className="flex flex-col font-mono text-sm tracking-tight pt-1">
              <span className="text-foreground/80 font-semibold mb-1 group-hover:text-violet-500 transition-colors">
                {item.date}
              </span>
              <span className="text-foreground/50 uppercase tracking-widest text-[10px]">
                {item.location}
              </span>
            </div>

            {/* Content Column (Role, Company, Details) */}
            <div className="flex flex-col">
              <h3 className="font-sans font-bold text-2xl sm:text-3xl tracking-tight text-foreground mb-1 group-hover:text-violet-500 transition-colors">
                {item.role}
              </h3>
              <span className="font-mono text-base text-foreground/60 mb-6 font-medium">
                {item.company}
              </span>

              <ul className="space-y-4 mb-8">
                {item.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="text-base sm:text-[1.05rem] text-foreground/80 leading-relaxed flex gap-4 font-sans"
                  >
                    <span className="text-violet-500/60 select-none shrink-0 font-bold">▹</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

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

export default ExperienceCard;

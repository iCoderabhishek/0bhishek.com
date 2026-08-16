"use client";

import React from "react";

const TECH_STACK = [
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  // { name: "Go", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" },
  { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "AWS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Kubernetes", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Kafka", src: "https://cdn.simpleicons.org/apachekafka", invertInDark: true },
  { name: "GraphQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" },
  { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", invertInDark: true },
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Redis", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
  { name: "Prisma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg", invertInDark: true },
  { name: "Tailwind", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Express", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", invertInDark: true },
];

export function TechStack() {
  // Duplicate multiple times for ultra-smooth continuous scrolling on large monitors
  const duplicatedStack = [...TECH_STACK, ...TECH_STACK, ...TECH_STACK, ...TECH_STACK];

  return (
    <div className="w-full relative overflow-hidden py-10 mt-16 border-y border-foreground/5 bg-foreground/[0.015]">

      {/* Left/Right fading gradients */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-48 bg-linear-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-48 bg-linear-to-l from-background to-transparent z-10" />

      {/* Scrolling Track */}
      <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused]">
        {duplicatedStack.map((tech, index) => (
          <div
            key={index}
            className="w-32 sm:w-40 flex flex-col items-center justify-center gap-4 group cursor-pointer"
          >
            <div className={`w-12 h-12 relative flex items-center justify-center filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110 ${tech.invertInDark ? 'dark:invert dark:group-hover:invert-0' : ''}`}>
              <img
                src={tech.src}
                alt={tech.name}
                className="max-w-full max-h-full object-contain"
                loading="lazy"
              />
            </div>
            <span className="text-[10px] uppercase tracking-widest font-mono text-foreground/40 group-hover:text-foreground/80 transition-colors opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

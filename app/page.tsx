"use client";

import React from "react";
import Image from "next/image";
import ContactCard from "@/components/profile/AboutCard";
import { ProjectsCard } from "@/components/profile/ProjectsCard";
import BlogCard from "@/components/profile/BlogCard";
import Header from "@/components/outer/Header";
import LearnTimeline from "@/components/profile/LearnCard";
import ExperienceCard from "@/components/profile/ExperienceCard";
import AnimatedStatement from "@/components/ui/AnimatedText";
import abhishek from "@/assets/images/abhishek.png";
import { USER } from "@/data/user";
import { Logo } from "@/components/ui/Logo";
import { GradientOrbs } from "@/components/ui/GradientOrbs";
import { TechStack } from "@/components/profile/TechStack";

function App() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-white text-black dark:bg-[#1a1a1a] dark:text-white font-mono px-4 sm:px-6 py-10 selection:bg-neutral-300 dark:selection:bg-neutral-600 overflow-hidden">
        {/* Drifting gradient orbs (cursor-reactive) */}
        <GradientOrbs />

        {/* Vertical guides — hidden on mobile, decorative chrome only */}
        <div className="hidden sm:block absolute inset-0 pointer-events-none">
          <div className="absolute left-[12%] top-0 bottom-0 w-px bg-foreground/15" />
          <div className="absolute right-[12%] top-0 bottom-0 w-px bg-foreground/15" />
        </div>

        {/* 🔥 Logo centered between guides */}
        <div className="absolute top-6 sm:top-4 left-1/2 -translate-x-1/2 z-20 flex justify-center">
          <Logo className="w-14 h-14 sm:w-24 sm:h-24 lg:w-35 lg:h-35 text-black dark:text-white" />
        </div>

        {/* Intro Section */}
        <section className="relative mt-24 sm:mt-32 lg:mt-40 px-5 sm:px-8 lg:px-[14%] z-10">
          <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-center md:items-start">
            {/* Avatar */}
            <div className="shrink-0 group">
              <div className="relative rounded-full transition-transform duration-500 group-hover:-translate-y-2">
                <Image
                  src={abhishek}
                  alt="profile"
                  width={180}
                  height={180}
                  priority
                  draggable={false}
                  className="object-cover rounded-full w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 border border-foreground/20 p-1 bg-foreground/5 shadow-xl transition-all duration-500 filter grayscale group-hover:grayscale-0 select-none"
                />
              </div>
            </div>

            {/* Labels + contact, full width on mobile */}
            <div className="w-full flex-1 flex flex-col text-center md:text-left mt-2 md:mt-4">
              <div className="mb-3">
                <h1 className="font-sans font-bold text-5xl sm:text-6xl md:text-7xl tracking-tighter text-foreground drop-shadow-sm">
                  Abhishek Jha
                </h1>
              </div>

              <div className="mb-6 flex items-center justify-center md:justify-start gap-2 text-xl sm:text-2xl font-mono text-foreground/70">
                <span className="text-violet-500 font-medium">~/</span>
                <AnimatedStatement />
              </div>

              <div className="mb-10">
                <p className="text-base sm:text-lg text-foreground/60 max-w-2xl leading-relaxed mx-auto md:mx-0 font-sans">
                  {USER.flipSentences[2]}
                </p>
              </div>

              <div className="flex justify-center md:justify-start">
                <ContactCard />
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Marquee */}
        <div className="w-full max-w-[100vw] overflow-hidden -mx-4 sm:-mx-6 relative z-10">
          <TechStack />
        </div>

        {/* Experience Section */}
        <section className="relative experience-section">
          <LineLabel
            text="Where I've Worked"
            className="text-lg xs:text-xl text-foreground/55 tracking-tight"
          />
          <div className="mt-4 xs:mt-6">
            <ExperienceCard />
          </div>
        </section>

        {/* Projects Section */}
        <section className="relative projects-section">
          <LineLabel
            text="Things I Make"
            className="text-lg xs:text-xl text-foreground/55 tracking-tight"
          />
          <div className="relative mt-4 xs:mt-6 flex flex-col justify-center">
            <ProjectsCard />
          </div>
        </section>

        {/* Blog Section */}
        <section className="relative blog-section">
          <LineLabel
            text="Things I Write"
            className="text-lg xs:text-xl text-foreground/55 tracking-tight"
          />
          <div className="mt-4 xs:mt-6">
            <BlogCard />
          </div>
        </section>

        {/* Education Section */}
        <section className="relative education-section">
          <LineLabel
            text="Things I Learn"
            className="text-lg xs:text-xl text-foreground/55 tracking-tight"
          />
          <div className="mt-4 xs:mt-6">
            <LearnTimeline />
          </div>
        </section>
      </main>

      <style jsx>{`
        .experience-section,
        .projects-section,
        .blog-section,
        .education-section {
          margin-top: 80px;
        }

        @media (min-width: 640px) {
          .experience-section,
          .projects-section,
          .blog-section,
          .education-section {
            margin-top: 96px;
          }
        }
      `}</style>
    </>
  );
}

function LineLabel({ text, className }: { text: string; className?: string }) {
  return (
    <div className="h-px bg-foreground/15 w-full relative">
      <span
        className={`absolute left-[14%] lg:left-[18%] -translate-y-1/2 bg-background px-3 ${className}`}
      >
        {text}
      </span>
    </div>
  );
}

export default App;

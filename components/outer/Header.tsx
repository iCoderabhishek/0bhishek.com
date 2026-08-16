"use client";
import React, { useState, useEffect } from "react";
import { MoonStar, Github, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Logo } from "../ui/Logo";

const RESUME_URL =
  "https://drive.google.com/file/d/1DUDWPIi0XtPCQ3fKKJQuanAJtVSxUs6j/view?usp=sharing";

export default function Header() {
  const [isAffixed, setIsAffixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsAffixed(scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass =
    "font-mono text-sm sm:text-base font-medium text-foreground/65 hover:text-foreground transition-colors duration-200";

  return (
    <header
      data-affix={isAffixed}
      className="sticky inset-0 top-0 z-50 border-b border-foreground/10 bg-background max-w-screen overflow-x-hidden px-2 pt-2 data-[affix=true]:shadow-[0_0_16px_0_black]/8 dark:data-[affix=true]:shadow-[0_0_16px_0_black]/80 transition-shadow duration-300 selection:bg-neutral-500"
    >
      <div
        className="mx-auto flex h-12 items-center justify-between gap-2 border-x border-foreground/10 px-2 sm:gap-4 md:max-w-3xl"
        data-header-container="true"
      >
        <a href="/" aria-label="Home" className="[&_svg]:h-8">
          <Logo
            style={{
              opacity: isAffixed ? 1 : 0,
              transform: isAffixed ? "translateY(0px)" : "translateY(-10px)",
              transition:
                "opacity 300ms ease-in-out, transform 300ms ease-in-out",
            }}
          />
        </a>

        <div className="h-full flex-1 border-x border-foreground/10 sm:-ml-2"></div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-4 sm:flex">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={navLinkClass}
          >
            Resume
          </a>
          <a href="/projects" className={navLinkClass}>
            Projects
          </a>
          <a href="/blogs" className={navLinkClass}>
            Blogs
          </a>
          <a href="/contact" className={navLinkClass}>
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-foreground/70 transition-colors hover:text-foreground hover:bg-foreground/5 active:scale-[0.98]"
          >
            {mounted ? (
              theme === "dark" ? (
                <Sun className="size-4" />
              ) : (
                <MoonStar className="size-4" />
              )
            ) : (
              <span className="size-4" />
            )}
          </button>

          <a
            href="https://github.com/iCoderabhishek"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-foreground/15 bg-background text-sm font-medium outline-none transition-colors hover:bg-foreground/5 hover:border-foreground/30 active:scale-[0.98]"
          >
            <Github className="size-5" />
            <span className="sr-only">GitHub</span>
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            data-state={isMenuOpen ? "open" : "closed"}
            className="group/toggle flex size-8 cursor-pointer flex-col items-center justify-center gap-1 sm:hidden"
          >
            <span className="flex h-0.5 w-4 transform rounded-[1px] bg-foreground transition-transform group-data-[state=open]/toggle:translate-y-[3px] group-data-[state=open]/toggle:rotate-45"></span>
            <span className="flex h-0.5 w-4 transform rounded-[1px] bg-foreground transition-transform group-data-[state=open]/toggle:-translate-y-[3px] group-data-[state=open]/toggle:-rotate-45"></span>
            <span className="sr-only">Toggle Menu</span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden overflow-hidden border-t border-foreground/10 px-4 py-3 transition-all duration-300 ease-in-out">
          <nav className="flex flex-col">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="font-mono text-base font-medium text-foreground/70 hover:text-foreground py-2 transition-colors"
            >
              Resume
            </a>
            <a
              href="/projects"
              onClick={() => setIsMenuOpen(false)}
              className="font-mono text-base font-medium text-foreground/70 hover:text-foreground py-2 transition-colors"
            >
              Projects
            </a>
            <a
              href="/blogs"
              onClick={() => setIsMenuOpen(false)}
              className="font-mono text-base font-medium text-foreground/70 hover:text-foreground py-2 transition-colors"
            >
              Blogs
            </a>
            <a
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="font-mono text-base font-medium text-foreground/70 hover:text-foreground py-2 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

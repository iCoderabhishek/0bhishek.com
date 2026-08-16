"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-foreground/10 bg-background pt-16 pb-8 px-5 sm:px-8 lg:px-[14%] font-sans">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8 mb-16">

        {/* Brand / Intro */}
        <div className="flex flex-col max-w-sm">
          <div className="flex items-center gap-4 mb-4">
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocImlmk5GVrSNbjNxQiM8O6xPoD_R220wpJd24-xNb8GvEINHw=s64-c"
              alt="Abhishek Jha"
              className="w-10 h-10 rounded-full grayscale hover:grayscale-0 transition-all duration-500 border border-foreground/10"
            />
            <span className="font-bold text-2xl sm:text-3xl tracking-tighter text-foreground">
              Abhishek Jha
            </span>
          </div>
          <p className="text-foreground/60 leading-relaxed text-sm font-mono">
            Engineering robust backend architectures and scalable full-stack applications.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-16 lg:gap-24">
          {/* Portfolio */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-foreground mb-2">
              Portfolio
            </h3>
            <Link href="/" className="text-foreground/60 hover:text-violet-500 transition-colors text-sm font-medium">Home</Link>
            <Link href="/projects" className="text-foreground/60 hover:text-violet-500 transition-colors text-sm font-medium">Projects</Link>
            <Link href="/blogs" className="text-foreground/60 hover:text-violet-500 transition-colors text-sm font-medium">Blogs</Link>
            <Link href="/contact" className="text-foreground/60 hover:text-violet-500 transition-colors text-sm font-medium">Contact</Link>
          </div>

          {/* Products */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-foreground mb-2">
              Products
            </h3>
            <a href="https://dropdesk.0bhishek.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1 text-foreground/60 hover:text-violet-500 transition-colors text-sm font-medium">
              Dropdesk <ArrowUpRight size={14} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
            </a>
            <a href="https://lonch.cloud" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1 text-foreground/60 hover:text-violet-500 transition-colors text-sm font-medium">
              Lonch <ArrowUpRight size={14} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
            </a>
          </div>

          {/* Socials / Others */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-foreground mb-2">
              Socials
            </h3>
            <a href="https://github.com/iCoderabhishek" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1 text-foreground/60 hover:text-violet-500 transition-colors text-sm font-medium">
              GitHub <ArrowUpRight size={14} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/0bhishek" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1 text-foreground/60 hover:text-violet-500 transition-colors text-sm font-medium">
              LinkedIn <ArrowUpRight size={14} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
            </a>
            <a href="https://x.com/0bhishek" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1 text-foreground/60 hover:text-violet-500 transition-colors text-sm font-medium">
              Twitter <ArrowUpRight size={14} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
            </a>
          </div>
        </div>

      </div>

      <div className="border-t border-foreground/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-xs text-foreground/40">
        <p>© {new Date().getFullYear()} Abhishek Jha. All rights reserved.</p>
        <p>
          <a
            href="https://github.com/iCoderabhishek/0bhishek.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Source Code
          </a>
        </p>
      </div>
    </footer>
  );
}

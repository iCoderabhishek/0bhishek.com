"use client";
import React, { useState, useEffect } from "react";
import { Code, MapPin, Mail, Globe, Github, Twitter, BookOpen, ArrowUpRight, Linkedin } from "lucide-react";
import { USER } from "@/data/user";

const ContactCard = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="flex flex-wrap justify-center md:justify-start gap-3 font-sans text-sm font-medium">
      <div className="flex items-center gap-2 px-4 py-2 rounded-md bg-foreground/5 border border-foreground/10 text-foreground/80 shadow-sm transition-colors">
        <MapPin size={16} className="text-foreground/50" />
        <span>Jalpaiguri, WB, India</span>
      </div>

      <a
        href="mailto:connect@0bhishek.com"
        className="group flex items-center gap-2 px-4 py-2 rounded-md bg-foreground/5 border border-foreground/10 text-foreground/80 hover:bg-foreground/10 hover:text-foreground transition-all duration-300 shadow-sm"
      >
        <Mail size={16} className="text-foreground/50 group-hover:text-foreground transition-colors" />
        <span>connect@0bhishek.com</span>
        <ArrowUpRight size={14} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
      </a>

      <a
        href="https://github.com/iCoderabhishek"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 px-4 py-2 rounded-md bg-foreground/5 border border-foreground/10 text-foreground/80 hover:bg-foreground/10 hover:text-foreground transition-all duration-300 shadow-sm"
      >
        <Github size={16} className="text-foreground/50 group-hover:text-foreground transition-colors" />
        <span>GitHub</span>
        <ArrowUpRight size={14} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
      </a>

      <a
        href="https://x.com/0bhishek"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 px-4 py-2 rounded-md bg-foreground/5 border border-foreground/10 text-foreground/80 hover:bg-foreground/10 hover:text-foreground transition-all duration-300 shadow-sm"
      >
        <Twitter size={16} className="text-foreground/50 group-hover:text-foreground transition-colors" />
        <span>Twitter</span>
        <ArrowUpRight size={14} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
      </a>
      
      <a
        href="https://www.linkedin.com/in/0bhishek"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 px-4 py-2 rounded-md bg-foreground/5 border border-foreground/10 text-foreground/80 hover:bg-foreground/10 hover:text-foreground transition-all duration-300 shadow-sm"
      >
        <Linkedin size={16} className="text-foreground/50 group-hover:text-foreground transition-colors" />
        <span>LinkedIn</span>
        <ArrowUpRight size={14} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
      </a>
    </div>
  );
};

export default ContactCard;

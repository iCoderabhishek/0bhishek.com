"use client";
import React, { useState, useEffect } from "react";
import { Code, MapPin, Mail, Globe, Github, Twitter } from "lucide-react";
import { USER } from "@/data/user";

const ContactCard = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className="font-mono lg:text-base text-base lg:whitespace-nowrap sm:max-w-sm text-foreground/80">
      {mounted && (
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Code size={16} className="text-foreground/40 shrink-0" />
            <span>{USER.jobTitle}</span>
          </div>

          <div className="flex items-center space-x-3">
            <MapPin size={16} className="text-foreground/40 shrink-0" />
            <span>Jalpaiguri, West Bengal, India</span>
          </div>

          <div className="flex items-center space-x-3">
            <Mail size={16} className="text-foreground/40 shrink-0" />
            <a
              href="mailto:iamabhishe1310@gmail.com"
              className="hover:text-foreground transition-colors"
            >
              iamabhishe1310@gmail.com
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <Globe size={16} className="text-foreground/40 shrink-0" />
            <a
              href="https://0bhishek.com"
              className="hover:text-foreground transition-colors"
            >
              0bhishek.com
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <Github size={16} className="text-foreground/40 shrink-0" />
            <a
              href="https://github.com/iCoderabhishek"
              className="hover:text-foreground transition-colors"
            >
              iCoderabhishek
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <Twitter size={16} className="text-foreground/40 shrink-0" />
            <a
              href="https://x.com/0bhishek"
              className="hover:text-foreground transition-colors"
            >
              0bhishek
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactCard;

"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (scrollHeight > 0) {
        setProgress(Math.min(100, Math.max(0, (scrollY / scrollHeight) * 100)));
      } else {
        setProgress(0);
      }
      
      setIsVisible(scrollY > 100);
    };

    window.addEventListener("scroll", updateScroll, { passive: true });
    // Initial check
    updateScroll();
    
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-background/80 backdrop-blur-md shadow-lg border border-foreground/10 transition-all duration-500 hover:scale-105 hover:border-violet-500/50 group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      {/* SVG Ring */}
      <svg width="56" height="56" className="absolute inset-0 rotate-[-90deg]">
        <circle
          cx="28"
          cy="28"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-foreground/5"
        />
        <circle
          cx="28"
          cy="28"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="text-violet-500 transition-all duration-150 ease-out"
        />
      </svg>
      
      {/* Content Inside */}
      <div className="absolute inset-0 flex items-center justify-center transition-colors">
        <span className="text-[10px] font-bold font-mono tracking-tighter text-foreground group-hover:opacity-0 transition-opacity duration-300 mt-[1px]">
          {Math.round(progress)}%
        </span>
        <ArrowUp 
          size={18} 
          strokeWidth={2.5} 
          className="absolute text-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
        />
      </div>
    </button>
  );
}

import React from "react";
import Header from "@/components/outer/Header";
import ContactCard from "@/components/profile/AboutCard";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Abhishek Jha.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-140px)] bg-background text-foreground px-5 sm:px-8 py-20 flex flex-col items-center justify-center relative overflow-hidden font-mono">
        <div className="max-w-2xl w-full mx-auto space-y-16 z-10">
          
          <div className="space-y-4 text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-6">
              <img 
                src="https://lh3.googleusercontent.com/a/ACg8ocImlmk5GVrSNbjNxQiM8O6xPoD_R220wpJd24-xNb8GvEINHw=s64-c" 
                alt="Abhishek Jha" 
                className="w-16 h-16 rounded-full grayscale hover:grayscale-0 transition-all duration-500 border-2 border-foreground/10"
              />
            </div>
            <h1 className="font-sans font-bold text-5xl sm:text-6xl md:text-7xl tracking-tighter text-foreground">
              Say Hello
            </h1>
            <p className="text-lg text-foreground/60 leading-relaxed max-w-xl mx-auto md:mx-0">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
          </div>

          <div className="w-full">
            <a
              href="mailto:connect@0bhishek.com"
              className="group flex flex-col sm:flex-row sm:items-end justify-between border-b border-foreground/20 pb-8 hover:border-foreground/60 transition-colors duration-500"
            >
              <div className="flex flex-col text-left">
                <span className="text-sm font-medium text-foreground/50 uppercase tracking-widest mb-4">
                  Send a message
                </span>
                <span className="font-sans text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-medium text-foreground tracking-tight group-hover:text-violet-500 transition-colors duration-500">
                  connect@0bhishek.com
                </span>
              </div>
              <ArrowUpRight 
                className="text-foreground/30 group-hover:text-violet-500 transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500 mt-6 sm:mt-0 hidden sm:block" 
                size={48} strokeWidth={1}
              />
            </a>
          </div>

          <div className="pt-4">
            <h2 className="text-sm font-medium text-foreground/50 uppercase tracking-widest mb-6 text-center md:text-left">
              Socials
            </h2>
            <div className="flex justify-center md:justify-start">
              <ContactCard />
            </div>
          </div>
          
        </div>
      </main>
    </>
  );
}

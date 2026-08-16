"use client";
import { useState, useRef, MouseEvent } from "react";
import Image from "next/image";
import { Project } from "@/types";
import { ArrowUpRight, Play, Pause, Volume2, VolumeX } from "lucide-react";

export const ProjectItem = ({ project }: { project: Project }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="group relative rounded-2xl cursor-pointer overflow-hidden bg-gradient-to-br from-foreground/[0.04] to-transparent hover:from-foreground/[0.08] hover:to-foreground/[0.02] hover:-translate-y-1.5 transition-all duration-500 border border-foreground/10 hover:border-violet-500/30 shadow-lg hover:shadow-[0_8px_30px_rgba(139,92,246,0.15)] flex flex-col h-full">
      {/* Video / Image well — locked dark in both modes */}
      <div 
        className="relative w-full aspect-[16/9] bg-zinc-950 group/video overflow-hidden"
        onClick={(e) => project.videoSrc && togglePlay(e)}
      >
        {!isVideoLoaded && project.imageSrc && (
          <Image
            src={project.imageSrc}
            alt={project.title}
            fill
            className="object-contain sm:object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        )}
        {project.videoSrc && (
          <video
            ref={videoRef}
            src={project.videoSrc}
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={() => setIsVideoLoaded(true)}
            className={`absolute inset-0 w-full h-full object-contain sm:object-cover transition-all duration-700 group-hover:scale-105 ${
              isVideoLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        )}

        {/* Custom Video Controls */}
        {project.videoSrc && (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 pointer-events-none transition-opacity duration-300 group-hover/video:opacity-80" />
            
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-none transition-all duration-300 backdrop-blur-[2px]">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] scale-in-center">
                  <Play className="w-6 h-6 text-white ml-1 drop-shadow-md" />
                </div>
              </div>
            )}

            <button 
              onClick={toggleMute}
              className="absolute bottom-4 right-4 z-20 w-9 h-9 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 hover:bg-white/20 hover:border-white/30 hover:scale-110 transition-all duration-300 opacity-0 group-hover/video:opacity-100 focus:opacity-100 shadow-xl"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-white/90" />
              ) : (
                <Volume2 className="w-4 h-4 text-white/90" />
              )}
            </button>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7 flex flex-col gap-3 grow relative">
        {/* Subtle glow effect behind text */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-violet-500/10 blur-[50px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Date caption above title */}
        <span className="text-xs font-medium tracking-wider uppercase text-foreground/40 group-hover:text-violet-500/70 transition-colors duration-300">{project.date}</span>

        {/* Title with animated arrow */}
        <h3 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2 group-hover:text-violet-400 transition-colors duration-300">
          {project.title}
          <ArrowUpRight
            size={22}
            className="text-foreground/30 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-violet-400 opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0"
          />
        </h3>

        {/* Description */}
        <p className="text-[15px] text-foreground/70 leading-relaxed grow line-clamp-3 group-hover:text-foreground/90 transition-colors duration-300">
          {project.description}
        </p>

        {/* Tags — bordered pills, matching Experience */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3.5 py-1.5 bg-foreground/[0.03] border border-foreground/10 rounded-full text-foreground/70 font-medium group-hover:border-violet-500/30 group-hover:bg-violet-500/5 group-hover:text-violet-300 transition-all duration-300 shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Violet hairline that scales in on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-violet-500/0 via-violet-500/70 dark:via-violet-400/65 to-violet-500/0 origin-center scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
      />
    </div>
  );
};

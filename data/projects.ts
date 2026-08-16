import uptime24 from "@/assets/images/uptime24.png";
import clandr from "@/assets/images/clandr.png";
import todlerrui from "@/assets/images/todlerrui.png";
import findash from "@/assets/images/findash.png";
import { Project } from "@/types";
import jurn from "@/assets/images/jurn.png";
import reactstarterplus from "@/assets/images/react-starter-plus.png";


export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "Lonch",
    date: "August 2026",
    description: "Deploy full-stack apps seamlessly in under 60 seconds. A developer-focused cloud platform with top-tier SEO and analytics.",
    tags: ["React", "Cloud", "Deployment", "SEO"],
    videoSrc: "/assets/videos/lonch-walkthrough.mp4",
    liveUrl: "https://lonch.cloud",
    githubUrl: "https://github.com/iCoderabhishek/Lonch/",
  },
  {
    id: 2,
    title: "Dropdesk",
    date: "June 2026",
    description: "An innovative workspace solution focused on modern collaboration. Optimized for super SEO performance and blazing fast load times.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "SEO"],
    videoSrc: "/assets/videos/Dropdesk_demo.mp4",
    liveUrl: "https://dropdesk.0bhishek.com/",
    githubUrl: "https://github.com/iCoderabhishek/Dropdesk/",
  },
  {
    id: 3,
    title: "Todlerr UI",
    date: "Oct 2024 - Nov 2024",
    description:
      "A component library and UI framework to help developers quickly add polished components, themes, and responsive layouts to their apps at scale.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    imageSrc: todlerrui,
    liveUrl: "https://toddler-ui.vercel.app/",
    githubUrl: "https://github.com/0bhishek/todlerrui",
  },
  {
    id: 4,
    title: "Uptime24",
    date: "July 2025 - Sept 2025",
    description:
      "A decentralized uptime monitoring platform where users validate website status. Combines Web3 incentives with transparent reliability tracking.",
    tags: ["Next.js", "TypeScript", "Web3", "TailwindCSS"],
    imageSrc: uptime24,
    liveUrl: "https://app.uptime24.online/",
    githubUrl: "https://github.com/iCoderabhishek/uptime-24.git",
  },
  {
    id: 5,
    title: "React Starter Plus",
    date: "August 2025",
    description: "A npm starter template that lets you scaffold React apps with JS/TS, TailwindCSS V4, CICD and more.",
    tags: ["NPM", "React19", "CLI", "CI/CD", "Zustand", "Vercel"],
    imageSrc: reactstarterplus,
    liveUrl: "https://npmjs.com/package/react-starter-plus",
    githubUrl: "https://github.com/iCoderabhishek/npm-package.git",
  },
  {
    id: 6,
    title: "Findash",
    date: "March 2026",
    description:
      "A financial dashboard where users can track their expenses and income. Combines Web3 incentives with transparent reliability tracking.",
    tags: ["React.js", "Zustand", "LocalDB", "Aceternity UI"],
    imageSrc: findash,
    liveUrl: "https://findash.0bhishek.tech",
    githubUrl: "https://github.com/iCoderabhishek/Findash.git",
  },
  {
    id: 7,
    title: "Clandr",
    date: "July 2025",
    description:
      "Cross-platform scheduling app with Google Calendar integration. Built to support both web and native platforms seamlessly.",
    tags: ["React Native", "Expo", "Next.js", "PostgreSQL"],
    imageSrc: clandr,
    liveUrl: "https://github.com/iCoderabhishek/clandr-mobile-app.git",
    githubUrl: "https://github.com/iCoderabhishek/clandr-mobile-app.git",
  },
  {
    id: 8,
    title: 'Jurn - Minimalist Journal Native App ',
    date: "July 2025",
    description:
      "A minimalist journal app built with React Native. It allows users to create, edit, and delete journal entries, as well as view and search through them.",
    tags: ["React Native", "Expo", "NativeWind", "AsyncStorage"],
    imageSrc: jurn,
    liveUrl: "https://github.com/iCoderabhishek/Jurn-minimalistic-journal-app.git",
    githubUrl: "https://github.com/iCoderabhishek/Jurn-minimalistic-journal-app.git",
  }
];

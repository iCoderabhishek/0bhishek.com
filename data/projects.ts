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
    description:
      "My own deploy platform. Connect a GitHub repo, Lonch builds it in an isolated Docker container and streams the logs live. Static sites go to S3 + CloudFront, backends to ECS Fargate with rolling deploys.",
    tags: ["Node.js", "Docker", "AWS ECS", "S3 + CloudFront", "WebSockets"],
    videoSrc: "/assets/videos/lonch-walkthrough.mp4",
    liveUrl: "https://lonch.cloud",
    githubUrl: "https://github.com/iCoderabhishek/Lonch/",
  },
  {
    id: 2,
    title: "Sutra AI",
    date: "October 2026",
    description:
      "Scheduled AI agents you run from the terminal. A hand-written ReAct loop (no agent framework), BullMQ for cron jobs, Redis Streams to stream each step live, and hard caps of 10 steps and $0.25 per run.",
    tags: ["Go", "TypeScript", "Python", "BullMQ", "Redis Streams"],
    videoSrc: "/assets/videos/SutraAI-Demonstration.mp4",
    liveUrl: "https://sutraai.0bhishek.com/",
    githubUrl: "https://github.com/iCoderabhishek/Sutra-AI",
  },
  {
    id: 3,
    title: "Dropdesk",
    date: "June 2026",
    description:
      "File sharing for teams, like a small Google Drive. Uploads go straight to S3 through presigned URLs, workspaces have role-based permissions, and sign-in is Google OAuth.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "AWS S3", "Redis"],
    videoSrc: "/assets/videos/Dropdesk_demo.mp4",
    liveUrl: "https://dropdesk.0bhishek.com/",
    githubUrl: "https://github.com/iCoderabhishek/Dropdesk/",
  },
  {
    id: 4,
    title: "Uptime24",
    date: "July 2025 - Sept 2025",
    description:
      "Uptime monitoring where independent validators check your site and report back over WebSockets. A hub collects their results into status pages, alerts, and incident history.",
    tags: ["Next.js", "TypeScript", "WebSockets", "Web3"],
    imageSrc: uptime24,
    liveUrl: "https://app.uptime24.online/",
    githubUrl: "https://github.com/iCoderabhishek/uptime-24.git",
  },
  {
    id: 5,
    title: "React Starter Plus",
    date: "August 2025",
    description:
      "An npm CLI that scaffolds a React app with JS or TS, Tailwind v4, Zustand, and a CI/CD workflow already wired up.",
    tags: ["NPM", "React 19", "CLI", "CI/CD", "Zustand"],
    imageSrc: reactstarterplus,
    liveUrl: "https://npmjs.com/package/react-starter-plus",
    githubUrl: "https://github.com/iCoderabhishek/npm-package.git",
  },
  {
    id: 6,
    title: "Findash",
    date: "March 2026",
    description:
      "A personal finance dashboard for tracking income and expenses. Data stays in the browser in a local store.",
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
      "A scheduling app for web and Android that syncs both ways with Google Calendar. One Express + Prisma backend serves both clients.",
    tags: ["React Native", "Expo", "Next.js", "PostgreSQL"],
    imageSrc: clandr,
    liveUrl: "https://expo.dev/artifacts/eas/vUy39yCWfoj4YYhEjFUc75.apk",
    githubUrl: "https://github.com/iCoderabhishek/clandr-mobile-app.git",
  },
  {
    id: 8,
    title: "Jurn",
    date: "July 2025",
    description:
      "A small offline journal app: write, edit, and search entries. Everything stays on the phone in AsyncStorage.",
    tags: ["React Native", "Expo", "NativeWind", "AsyncStorage"],
    imageSrc: jurn,
    githubUrl: "https://github.com/iCoderabhishek/Jurn-minimalistic-journal-app.git",
  },
  {
    id: 9,
    title: "Todlerr UI",
    date: "Oct 2024 - Nov 2024",
    description:
      "A component library for Next.js: drop-in components, themes, and responsive layouts built with Tailwind and Framer Motion.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    imageSrc: todlerrui,
    liveUrl: "https://toddler-ui.vercel.app/",
  },
];

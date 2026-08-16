import { LearningItem } from "@/types";

export const LEARNING_DATA: LearningItem[] = [
  {
    title: "Real-Time Architectures with WebSockets",
    date: "Feb 2026",
    note: "Built a distributed uptime monitoring system using WebSockets for validator aggregation. Learned to manage persistent connections, handle failover gracefully, and drastically reduce latency compared to traditional HTTP polling.",
    tags: ["WebSockets", "Node.js", "Distributed Systems", "Performance"],
  },
  {
    title: "Caching & Rate Limiting at Scale",
    date: "Dec 2025",
    note: "Optimized API performance for a cloud file sharing platform by integrating Redis caching and robust rate-limiting. Managed to reduce PostgreSQL database load by 40% while securing endpoints against abuse.",
    tags: ["Redis", "API Security", "PostgreSQL", "System Design"],
  },
  {
    title: "Cloud Native Storage Workflows",
    date: "Oct 2025",
    note: "Implemented secure cloud file storage architecture using AWS S3. Mastered the generation of presigned URLs to handle direct client-to-cloud uploads, bypassing the Node backend entirely to save bandwidth.",
    tags: ["AWS S3", "Cloud Architecture", "Next.js", "Node.js"],
  },
  {
    title: "Advanced Identity & Session Management",
    date: "Aug 2025",
    note: "Engineered secure session management workflows leveraging Google OAuth 2.0 and JWTs. Built out a comprehensive Role-Based Access Control (RBAC) system to govern multi-tenant workspace permissions.",
    tags: ["OAuth 2.0", "JWT", "RBAC", "Authentication"],
  },
  {
    title: "Shared Backends for Web & Mobile",
    date: "June 2025",
    note: "Designed a unified REST API layer serving both a Next.js web client and a React Native Expo app simultaneously. Handled shared data models and complex timezone-aware scheduling logic using Prisma ORM.",
    tags: ["React Native", "Prisma ORM", "Monorepo", "Express.js"],
  },
  {
    title: "Mobile Performance Profiling",
    date: "May 2025",
    note: "Improved React Native app responsiveness by 25%. Dove deep into performance profiling, lazy rendering techniques, and optimizing local caching strategies for a seamless cross-platform UX.",
    tags: ["React Native CLI", "Performance", "Caching", "State Management"],
  },
];
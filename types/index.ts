export interface Project {
  id: number;
  title: string;
  date: string;
  description: string;
  tags: string[];
  videoSrc?: string;
  imageSrc?: string | any;
  liveUrl: string;
  githubUrl?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  description: string;
  tags: string[];
  readTime: string;
  url: string;
}
export interface User {
  firstName: string;
  lastName: string;
  displayName: string;
  username: string;
  gender: string;
  pronouns: string;
  bio: string;
    flipSentences: string[];
    aniamtedText: string[];
  address: string;
  phoneNumber: string;
  email: string;
  website: string;
  otherWebsites: string[];
  jobTitle: string;
  jobs: Job[];
  about: string;
  avatar: string;
  ogImage: string;
  namePronunciationUrl: string;
  keywords: string;
  dateCreated: string;
}

export interface Job {
  title: string;
  company: string;
  website: string;
}

export interface LearningItem {
  title: string;
  date: string;
  note: string;
  tags: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  date: string;
  bullets: string[];
  tags?: string[];
  url?: string;
}

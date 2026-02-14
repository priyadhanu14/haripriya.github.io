export type WorkCategory =
  | "project"
  | "research"
  | "publication"
  | "hackathon"
  | "competition"
  | "teaching";

export interface WorkItem {
  slug: string;
  title: string;
  category: WorkCategory;
  start: string; // YYYY-MM
  end?: string; // YYYY-MM | present
  summary: string;
  role: string;
  stack: string[];
  outcomes: string[];
  proofLinks: { label: string; url: string }[];
  confidential: boolean;
}

export interface Profile {
  fullName: string;
  headline: string;
  bioShort: string;
  email: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
}

export interface ExperienceItem {
  title: string;
  organization: string;
  organizationUrl?: string;
  start: string; // YYYY-MM
  end?: string; // YYYY-MM | present
  summary: string;
}

export interface Paper {
  title: string;
  authors: string;
  publishedAt: string;
  venue?: string;
  publisher?: string;
  pages?: string;
  description: string;
  url: string;
  status?: string;
  image?: string;
}

export interface SiteContent {
  profile: Profile;
  work: WorkItem[];
  experience: ExperienceItem[];
  papers: Paper[];
  skills: string[];
}

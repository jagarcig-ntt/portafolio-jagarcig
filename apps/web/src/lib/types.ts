export interface Profile {
  id: string;
  name: string;
  role: string;
  location: string;
  summary: string;
  availability: 'open' | 'closed';
  photoUrl?: string;
  metrics: { label: string; value: string }[];
  links: SocialLink[];
}

export type SocialPlatform =
  | 'github'
  | 'linkedin'
  | 'x'
  | 'email'
  | 'dribbble'
  | 'youtube'
  | 'phone'
  | 'website';

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
}

export type SkillStack =
  | 'frontend'
  | 'backend'
  | 'devops'
  | 'data'
  | 'product'
  | 'leadership'
  | 'ai'
  | 'consulting';

export interface Skill {
  id: string;
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
  stack: SkillStack;
  years: number;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  location?: string;
  highlights: string[];
  tech: string[];
}

export interface Project {
  id: string;
  name: string;
  summary: string;
  highlights: string[];
  repoUrl?: string;
  demoUrl?: string;
  tags: string[];
  featured: boolean;
  coverImage?: string;
}

export interface Article {
  id: string;
  title: string;
  publishedAt: string;
  summary: string;
  canonicalUrl: string;
  tags: string[];
}

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface SkillGroup {
  title: string;
  tags: string[];
}

export interface ExperienceItem {
  period: string;
  tag: string;
  role: string;
  orgName: string;
  orgUrl: string;
  bullets: string[];
}

export type ProjectAccent = 'k1' | 'k2' | 'k3' | 'k4' | 'k5' | 'k6';

export interface ProjectLink {
  label: string;
  url: string;
  isDemo?: boolean;
}

export interface ProjectItem {
  accent: ProjectAccent;
  kind: string;
  title: string;
  description: string;
  stack: string[];
  links: ProjectLink[];
}

export interface EducationItem {
  period: string;
  scoreTag: string;
  title: string;
  orgName: string;
  orgUrl: string;
}

export interface CertificationItem {
  title: string;
  description: string;
}

export type ThemeMode = 'light' | 'dark';

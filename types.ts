
export type Language = 'fr' | 'en';

export type Theme = 'light' | 'dark';

export interface Translations {
  [key: string]: {
    fr: string;
    en: string;
  };
}

export interface NavLink {
  key: string;
  href: string;
}

export interface Screenshot {
  url: string;
  labelKey: string; // e.g., "Landing Page"
  techBadge: string; // e.g., "React Components"
}

export interface Project {
  id: number;
  titleKey: string;
  descKey: string;
  tags: string[];
  screenshots: Screenshot[]; // Array of images for the slider
  qualityGrade: string; // e.g., "A+"
  color: string;
  details: {
    goalKey: string;
    challengesKey: string;
    fullStack: string[];
  }
}

export interface Service {
  id: number;
  titleKey: string;
  descKey: string;
  iconName: string;
  tags: string[];
}

export interface EducationItem {
  id: number;
  year: string;
  titleKey: string;
  institutionKey: string;
  descKey?: string;
  iconType: 'school' | 'certificate';
}

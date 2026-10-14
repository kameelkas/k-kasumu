import SeequentLogo from '@/images/seequent.png';
import PAOFashionzImage from '@/images/paofashionz.png';
import LifeLensWebPortalImage from '@/images/lifelens-portal.png';
import LifeLensLogoBg from '@/images/LifeLens-bg.png';
import { StaticImageData } from 'next/image';

export type ExperienceCategory = 'career' | 'projectsAndActivities';

export interface ExperienceItem {
  position: string;
  company: string;
  logo?: StaticImageData;
  duration: string;
  description: string;
  category: ExperienceCategory;
}

export const experienceData: ExperienceItem[] = [
  {
    position: 'Software Developer, Intern',
    company: 'Seequent',
    logo: SeequentLogo,
    duration: 'May 2024 - August 2025',
    category: 'career',
    description:
      'I completed a 16-month internship at Seequent, where I owned UI redesigns and new-feature work for GeoStudio (C++, MFC), including the “Project Settings” interface for its market leading slope stability module. I also built and maintained automated UI tests (C#, WinAppDriver), triaged CI/CD failures in Azure DevOps, served as Scrum Master for 13 weeks, and onboarded a new intern.',
  },
  {
    position: 'Khateebs Director',
    company: "Muslim Students' Association",
    duration: 'Oct 2025 – Aug 2026',
    category: 'projectsAndActivities',
    description:
      'Coordinated weekly Jummah prayers; recruited and trained future Khateebs.',
  },
  {
    position: 'Vice President Internal',
    company: 'Tech Start UCalgary',
    duration: 'Jul 2025 – May 2026',
    category: 'projectsAndActivities',
    description:
      'Oversaw operations for a 70+ member student software organization; led recruitment, onboarding and executive transition planning.',
  },
];

export interface SkillsData {
  languages: string[];
  frameworks: string[];
  tools: string[];
  alsoWorkedWith: string[];
}

export const skillsData: SkillsData = {
  languages: [
    'C++',
    'C',
    'Python',
    'TypeScript',
    'JavaScript',
    'Java',
    'C#',
    'HTML/CSS',
  ],
  frameworks: [
    'React',
    'Next.js',
    'Tailwind CSS',
    'MFC',
    'PyTorch',
    'spaCy',
  ],
  tools: [
    'Git',
    'GitHub',
    'Azure DevOps',
    'WinAppDriver',
    'Vercel',
    'Sanity CMS',
    'Shopify Storefront API',
  ],
  alsoWorkedWith: ['SQL', 'AWS', 'Shell'],
};

export enum LinkType {
  VISIT = 'Visit Site',
  SOURCE = 'Source',
  WATCH = 'Watch Demo',
  READ = 'Read Brief',
}

export interface LinkObject {
  type: LinkType;
  url: string;
}

export type ProjectTagCategory = 'tech' | 'other';

export interface ProjectTag {
  label: string;
  category: ProjectTagCategory;
}

export interface ProjectItem {
  title: string;
  description: string;
  image: StaticImageData;
  links: LinkObject[];
  tags: ProjectTag[];
}

export const projectData: ProjectItem[] = [
  {
    title: 'LifeLens',
    description:
      'Co-developed LifeLens, an AI-powered, body-worn emergency response system that captures and structures critical trauma care information in real time using audio, video, and NLP/computer vision models. The platform helps paramedics reduce manual documentation while providing hospitals with live updates on injuries, medications, and interventions to improve preparation and patient outcomes.',
    image: LifeLensLogoBg,
    links: [
      {
        type: LinkType.WATCH,
        url: 'https://youtu.be/Mz_NLebq0Gs',
      },
      {
        type: LinkType.READ,
        url: '/LifeLensPoster.pdf',
      },
      {
        type: LinkType.SOURCE,
        url: 'https://github.com/uofc-ai2lab/LifeLens',
      },
    ],
    tags: [
      { label: 'Python', category: 'tech' },
      { label: 'MQTT', category: 'tech' },
      { label: 'NoSQL', category: 'tech' },
      { label: 'NLP', category: 'tech' },
      { label: 'Computer Vision', category: 'tech' },
      { label: 'Entrepeneurship/Startup', category: 'other' },
    ],
  },
  {
    title: 'LifeLens Web Portal',
    description:
      'Developed a simple web application to showcase how patient data may be visualized and interacted with using the data collected from the LifeLens paramedic device. Inlcudes interactive body map and timeline to showcase identified injuries and timestamped medications and interventions collected. There is also a secure AHS portal to view patient images.',
    image: LifeLensWebPortalImage,
    links: [
      {
        type: LinkType.WATCH,
        url: 'https://youtu.be/wVYDB7JFGXY',
      },
    ],
    tags: [
      { label: 'React', category: 'tech' },
      { label: 'JavaScript', category: 'tech' },
      { label: 'Tailwind CSS', category: 'tech' },
      { label: 'Vercel', category: 'tech' },
      { label: 'AI-Augmented Workflow', category: 'other' },
    ],
  },
  {
    title: 'PAO Fashionz',
    description:
      'Collaborated in a team to create a branded and dynamic online storefront featuring storytelling, a gallery, and seamless shopping experiences.',
    image: PAOFashionzImage,
    links: [
      {
        type: LinkType.VISIT,
        url: 'https://paofashionz.ca',
      },
    ],
    tags: [
      { label: 'Next.js', category: 'tech' },
      { label: 'Typescript', category: 'tech' },
      { label: 'Tailwind CSS', category: 'tech' },
      { label: 'Shopify Storefront API', category: 'tech' },
      { label: 'Vercel', category: 'tech' },
      { label: 'Sanity CMS', category: 'tech' },
      { label: 'GraphQL', category: 'tech' },
      { label: 'GROQ', category: 'tech' },
    ],
  },
];

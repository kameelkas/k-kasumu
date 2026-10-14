import SeequentLogo from '@/images/seequent.png';
import PAOFashionzImage from '@/images/paofashionz.png';
import LifeLensWebPortalImage from '@/images/lifelens-portal.png';
import LifeLensLogoBg from '@/images/LifeLens-bg.png';
import UnityImage from '@/images/unity.png';
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
      'I completed a 16-month internship at Seequent, where I implemented and refactored key UI features for GeoStudio, including the “Project Settings” interface for its market leading slope stability module. I also served as Scrum Master, led agile improvements, maintained build pipeline health, and mentored a new intern, all while strengthening team collaboration and product reliability.',
  },
  // Placeholder entries for the Projects/Activities tab. Replace these.
  {
    position: 'Capstone Team Member',
    company: 'University of Calgary',
    duration: 'Sep 2024 - Apr 2025',
    category: 'projectsAndActivities',
    description:
      'Worked with a small team to take a software capstone from the problem statement to a working demo, covering design, implementation, and the final presentation.',
  },
  {
    position: 'Programming Lead',
    company: 'Engineering Club',
    duration: 'Sep 2023 - Apr 2024',
    category: 'projectsAndActivities',
    description:
      'Led the club’s programming group, ran weekly build sessions, and shipped small tools used at club events.',
  },
];

export interface SkillsData {
  languages: string[];
  frameworks: string[];
  toolsAndPlatforms: string[];
}

export const skillsData: SkillsData = {
  languages: [
    'C++',
    'C',
    'Java',
    'Python',
    'HTML',
    'CSS',
    'TypeScript',
    'JavaScript',
    'C#',
    'SQL',
  ],
  frameworks: ['Next.js', 'React', 'Tailwind CSS', 'MFCShell', 'WinAppDriver'],
  toolsAndPlatforms: [
    'Git',
    'Github',
    'Microsoft ADO',
    'AWS',
    'Vercel',
    'Sanity CMS',
    'Shopify Storefront API',
  ],
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

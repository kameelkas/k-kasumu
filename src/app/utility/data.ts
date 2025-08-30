import SeequentLogo from '@/assets/images/seequent.png';
import PAOFashionzImage from '@/assets/images/paofashionz.png';
import UnityImage from '@/assets/images/unity.png';
import { StaticImageData } from 'next/image';

export interface ExperienceItem {
  position: string;
  company: string;
  logo: StaticImageData;
  duration: string;
  description: string;
}

export const experienceData: ExperienceItem[] = [
  {
    position: 'Software Developer, Intern',
    company: 'Seequent',
    logo: SeequentLogo,
    duration: 'May 2024 - August 2025',
    description:
      'I completed a 16-month internship at Seequent, where I implemented and refactored key UI features for GeoStudio, including the “Project Settings” interface for its market leading slope stability module. I also served as Scrum Master, led agile improvements, maintained build pipeline health, and mentored a new intern—all while strengthening team collaboration and product reliability.',
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
    'GraphQL',
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

export interface ProjectItem {
  title: string;
  description: string;
  image: StaticImageData;
  link?: string;
  github?: string;
  demo?: string;
  techStack: string[];
}

export const projectData: ProjectItem[] = [
  {
    title: 'PAO Fashionz',
    description:
      'Collaborated in a team to create a branded and dynamic online storefront featuring storytelling, a gallery, and seamless shopping experiences.',
    image: PAOFashionzImage,
    link: 'https://paofashionz.ca',
    github: '#',
    demo: '#',
    techStack: [
      'Next.js',
      'Typescript',
      'Tailwind CSS',
      'Shopify Storefront API',
      'Vercel',
      'Sanity CMS',
    ],
  },
  {
    title: 'Uni-ty',
    description:
      'Collaborated in a team to develop a full-stack web application that fosters a student community by enabling easy buying, selling, and exchanging of digital and physical items for UCalgary students.',
    image: UnityImage,
    link: 'https://uni-ty-fawn.vercel.app',
    techStack: [
      'Next.js',
      'Typescript',
      'Tailwind CSS',
      'Firebase',
      'Firestore',
      'Selenium',
      'Vercel',
    ],
  },
];

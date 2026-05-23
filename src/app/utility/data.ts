import SeequentLogo from '@/images/seequent.png';
import PAOFashionzImage from '@/images/paofashionz.png';
import LifeLensWebPortalImage from '@/images/lifelens-portal.png';
import LifeLensLogoBg from '@/images/LifeLens-bg.png';
import UnityImage from '@/images/unity.png';
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
      'I completed a 16-month internship at Seequent, where I implemented and refactored key UI features for GeoStudio, including the “Project Settings” interface for its market leading slope stability module. I also served as Scrum Master, led agile improvements, maintained build pipeline health, and mentored a new intern, all while strengthening team collaboration and product reliability.',
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
  VISIT = 'Visit',
  GITHUB = 'Code',
  DEMO = 'Demo',
  EXPLANATIVE = 'Explanative',
}

export interface LinkObject {
  type: LinkType;
  url: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  image: StaticImageData;
  links: LinkObject[];
  techStack: string[];
  otherInfo: string[];
}

export const projectData: ProjectItem[] = [
  {
    title: 'LifeLens',
    description:
      'Co-developed LifeLens, an AI-powered, body-worn emergency response system that captures and structures critical trauma care information in real time using audio, video, and NLP/computer vision models. The platform helps paramedics reduce manual documentation while providing hospitals with live updates on injuries, medications, and interventions to improve preparation and patient outcomes.',
    image: LifeLensLogoBg,
    links: [
      {
        type: LinkType.DEMO,
        url: 'https://youtu.be/Mz_NLebq0Gs',
      },
      {
        type: LinkType.EXPLANATIVE,
        url: '/LifeLensPoster.pdf',
      },
      {
        type: LinkType.GITHUB,
        url: 'https://github.com/uofc-ai2lab/LifeLens',
      },
    ],
    techStack: ['Python', 'MQTT', 'NoSQL', 'NLP', 'Computer Vision'],
    otherInfo: ['Entrepeneurship/Startup'],
  },
  {
    title: 'LifeLens Web Portal',
    description:
      'Developed a simple web application to showcase how patient data may be visualized and interacted with using the data collected from the LifeLens paramedic device. Inlcudes interactive body map and timeline to showcase identified injuries and timestamped medications and interventions collected. There is also a secure AHS portal to view patient images.',
    image: LifeLensWebPortalImage,
    links: [
      {
        type: LinkType.DEMO,
        url: 'https://youtu.be/wVYDB7JFGXY',
      },
    ],
    techStack: ['React', 'JavaScript', 'Tailwind CSS', 'Vercel'],
    otherInfo: ['AI-Augmented Workflow'],
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
    techStack: [
      'Next.js',
      'Typescript',
      'Tailwind CSS',
      'Shopify Storefront API',
      'Vercel',
      'Sanity CMS',
      'GraphQL',
      'GROQ',
    ],
    otherInfo: [],
  },
  {
    title: 'Uni-ty',
    description:
      'Collaborated in a team to develop a full-stack web application that fosters a student community by enabling easy buying, selling, and exchanging of digital and physical items for UCalgary students.',
    image: UnityImage,
    links: [
      {
        type: LinkType.VISIT,
        url: 'https://uni-ty-fawn.vercel.app',
      },
    ],
    techStack: [
      'Next.js',
      'Typescript',
      'Tailwind CSS',
      'Firebase',
      'Firestore',
      'Selenium',
      'Vercel',
    ],
    otherInfo: [],
  },
];

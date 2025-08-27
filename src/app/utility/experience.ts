import SeequentLogo from '@/images/seequent.png'
import { StaticImageData } from 'next/image';

export interface ExperienceItem {
  position: string;
  company: string;
  logo: StaticImageData;
  duration: string;
  description: string;
}

export const experienceItems: ExperienceItem[] = [
  {
    position: 'Software Developer, Intern',
    company: 'Seequent',
    logo: SeequentLogo,
    duration: 'May 2024 - August 2025',
    description: 'I completed a 16-month internship at Seequent, where I implemented and refactored key UI features for GeoStudio, including the “Project Settings” interface for its market leading slope stability module. I also served as Scrum Master, led agile improvements, maintained build pipeline health, and mentored a new intern—all while strengthening team collaboration and product reliability.'
  },
];

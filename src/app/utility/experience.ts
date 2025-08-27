export interface ExperienceItem {
  position: string;
  company: string;
  logo: string;
  duration: string;
  description: string[];
}

export const experienceItems: ExperienceItem[] = [
  {
    position: 'Software Developer, Intern',
    company: 'Seequent',
    logo: '@/images/seequent.png',
    duration: 'May 2024 - August 2025',
    description: [
      'I recently completed a 16-month internship at Seequent, a leading provider of geotechnical and subsurface analysis software—developer of GeoStudio, a widely-adopted suite of tools for slope stability, groundwater flow, and environmental modeling used by engineers worldwide. During this time, I contributed to enhancing the user experience of GeoStudio by designing and delivering multiple key UI features—most notably, the “Define Project Settings” interface for the market-leading slope stability module. In this role, I regularly coordinated with internal stakeholders—including engineers and team leads—through structured touch-base meetings to present progress, solicit feedback, and iterate swiftly on improvements. I also maintained build pipeline health, promptly addressing build failures by collaborating with the right teams to ensure rapid fixes or rollbacks, thereby supporting consistent development velocity.',
      'Beyond feature development, I served as Scrum Master for our pod 13 weeks—leading sprint planning, retrospectives, and implementing agile experiments to refine our process and increase team transparency. I consistently communicated progress to team leads and managers, helping align expectations across the Geostudio team. UI features I touched were accompanied by updates to our C#-based UI testing framework (using WinAppDriver), ensuring reliability through updated or new automated tests. In the final four months, I also mentored a new intern, guiding them through the codebase, architectural patterns, and team workflows while being their primary resource for questions.',
    ],
  },
];

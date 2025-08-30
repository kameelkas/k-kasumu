import { SkillsData } from '@/app/utility/data';

export interface SkillsProps {
  skills: SkillsData;
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <div>
      <h1 className="mb-8 text-center text-4xl underline decoration-secondary-light decoration-2 underline-offset-4 sm:text-5xl dark:decoration-secondary-dark">
        Skills
      </h1>
      <div className="flex flex-wrap justify-center gap-4 text-center">
        {skills.languages.map((language, index) => (
          <span
            key={index}
            className="w-fit rounded-lg bg-surface-light px-6 py-2 dark:bg-surface-dark"
          >
            {language}
          </span>
        ))}
        {skills.frameworks.map((framework, index) => (
          <span
            key={index}
            className="w-fit rounded-lg bg-surface-light px-6 py-2 dark:bg-surface-dark"
          >
            {framework}
          </span>
        ))}
        {skills.toolsAndPlatforms.map((tool, index) => (
          <span
            key={index}
            className="w-fit rounded-lg bg-surface-light px-6 py-2 dark:bg-surface-dark"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}

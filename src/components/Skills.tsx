import { SkillsData } from '@/app/utility/data';
import MotionWrapper from './MotionWrapper';

export interface SkillsProps {
  skills: SkillsData;
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <div>
      <MotionWrapper
        as="h1"
        className="mb-8 text-center text-4xl underline decoration-secondary-light decoration-2 underline-offset-4 sm:text-5xl dark:decoration-secondary-dark"
      >
        Skills
      </MotionWrapper>
      <div className="flex flex-wrap justify-center gap-4 text-center">
        {skills.languages.map((language, index) => (
          <MotionWrapper
            as="span"
            key={index}
            className="w-fit rounded-lg bg-surface-light px-6 py-2 dark:bg-surface-dark"
          >
            {language}
          </MotionWrapper>
        ))}
        {skills.frameworks.map((framework, index) => (
          <MotionWrapper
            as="span"
            key={index}
            className="w-fit rounded-lg bg-surface-light px-6 py-2 dark:bg-surface-dark"
          >
            {framework}
          </MotionWrapper>
        ))}
        {skills.toolsAndPlatforms.map((tool, index) => (
          <MotionWrapper
            as="span"
            key={index}
            className="w-fit rounded-lg bg-surface-light px-6 py-2 dark:bg-surface-dark"
          >
            {tool}
          </MotionWrapper>
        ))}
      </div>
    </div>
  );
}

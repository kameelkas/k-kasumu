import { SkillsData } from '@/app/utility/data';
import MotionWrapper from './MotionWrapper';

export interface SkillsProps {
  skills: SkillsData;
}

const groups: { label: string; key: keyof SkillsData }[] = [
  { label: 'Languages', key: 'languages' },
  { label: 'Frameworks & Libraries', key: 'frameworks' },
  { label: 'Tools', key: 'tools' },
  { label: 'Also worked with', key: 'alsoWorkedWith' },
];

export default function Skills({ skills }: SkillsProps) {
  return (
    <div>
      <MotionWrapper
        as="h1"
        className="mb-8 text-center text-4xl underline decoration-secondary-light decoration-2 underline-offset-4 sm:text-5xl dark:decoration-secondary-dark"
      >
        Skills
      </MotionWrapper>
      <div className="flex flex-col gap-8">
        {groups.map((group) => (
          <div key={group.label} className="text-center">
            <h2 className="mb-4 text-lg text-secondary-light dark:text-secondary-dark">
              {group.label}
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {skills[group.key].map((item) => (
                <MotionWrapper
                  as="span"
                  key={item}
                  className="w-fit rounded-lg bg-surface-light px-6 py-2 dark:bg-surface-dark"
                >
                  {item}
                </MotionWrapper>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

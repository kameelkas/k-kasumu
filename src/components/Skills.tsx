import { SkillsData } from '@/app/utility/data';
import MotionWrapper from './MotionWrapper';
import SectionHeading from './SectionHeading';

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
      <SectionHeading>Skills</SectionHeading>
      <div className="divide-y divide-secondary-light/25 dark:divide-secondary-dark/25">
        {groups.map((group) => (
          <div
            key={group.label}
            className="flex flex-col gap-3 py-6 sm:flex-row sm:items-start sm:gap-8"
          >
            <h3 className="w-full shrink-0 text-sm font-normal text-secondary-light sm:w-52 sm:pt-2.5 sm:text-base dark:text-secondary-dark">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills[group.key].map((item) => (
                <MotionWrapper
                  as="span"
                  key={item}
                  className="w-fit rounded-lg border border-secondary-light/25 bg-surface-light px-5 py-2 text-base font-medium transition-colors duration-300 ease-in-out interactive:border-accent-light interactive:text-accentHover-light sm:text-lg dark:border-secondary-dark/30 dark:bg-surface-dark dark:interactive:border-accent-dark dark:interactive:text-accentHover-dark cursor-default"
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

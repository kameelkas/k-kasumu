import { SkillsData } from '@/app/utility/data';
import MotionWrapper from './MotionWrapper';
import SectionHeading from './SectionHeading';

export interface SkillsProps {
  skills: SkillsData;
}

export default function Skills({ skills }: SkillsProps) {
  const groups = [
    { label: 'Languages', items: skills.languages },
    { label: 'Frameworks', items: skills.frameworks },
    { label: 'Tools & platforms', items: skills.toolsAndPlatforms },
  ];

  return (
    <div>
      <SectionHeading index="03" title="Skills" id="skills-heading" />
      <div className="divide-y divide-line-light dark:divide-line-dark">
        {groups.map((group, groupIndex) => (
          <MotionWrapper
            key={group.label}
            delay={groupIndex * 0.08}
            className="grid gap-4 py-6 first:pt-0 last:pb-0 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-8"
          >
            <h3 className="eyebrow pt-2">{group.label}</h3>
            <ul className="flex flex-wrap gap-2.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg bg-surface-light/80 px-3.5 py-1.5 text-base font-medium shadow-soft ring-1 ring-inset ring-line-light/70 transition duration-200 hover:-translate-y-0.5 hover:ring-accent-light dark:bg-surface-dark/70 dark:shadow-soft-dark dark:ring-line-dark/60 dark:hover:ring-accent-dark"
                >
                  {item}
                </li>
              ))}
            </ul>
          </MotionWrapper>
        ))}
      </div>
    </div>
  );
}

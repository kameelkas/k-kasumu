'use client';
import { useState } from 'react';
import { ExperienceItem } from '@/app/utility/data';
import MotionWrapper from './MotionWrapper';
import ExperienceCard from './ExperienceCard';
import SectionHeading from './SectionHeading';

const tabs = [
  { id: 'career', label: 'Career' },
  { id: 'projectsAndActivities', label: 'Projects/Activities' },
] as const;

type ExperienceTab = (typeof tabs)[number]['id'];

interface ExperienceProps {
  experiences: ExperienceItem[];
}

export default function Experience({ experiences }: ExperienceProps) {
  const [active, setActive] = useState<ExperienceTab>('career');
  const visible = experiences.filter((exp) => exp.category === active);

  return (
    <div className="flex flex-col">
      <SectionHeading>Experience</SectionHeading>
      <div
        role="tablist"
        aria-label="Experience"
        className="mx-auto mb-8 flex w-fit rounded-full bg-surface-light/80 p-1 dark:bg-surface-dark/80"
      >
        {tabs.map((tab) => {
          const selected = active === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`experience-tab-${tab.id}`}
              aria-selected={selected}
              aria-controls="experience-panel"
              onClick={() => setActive(tab.id)}
              className={`rounded-full px-5 py-1.5 text-base transition-colors duration-150 ease-out sm:px-6 sm:text-lg ${
                selected
                  ? 'bg-accent-light text-primary-light dark:bg-accent-dark dark:text-primary-dark'
                  : 'text-secondary-light interactive:text-accentHover-light dark:text-secondary-dark dark:interactive:text-accentHover-dark'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <MotionWrapper direction="up">
        <div
          role="tabpanel"
          id="experience-panel"
          aria-labelledby={`experience-tab-${active}`}
        >
          {visible.length === 0 ? (
            <p className="text-center text-base text-secondary-light dark:text-secondary-dark">
              Nothing here yet.
            </p>
          ) : (
            visible.map((exp, index) => (
              <ExperienceCard
                key={`${exp.company}-${exp.position}`}
                index={index}
                experience={exp}
              />
            ))
          )}
        </div>
      </MotionWrapper>
    </div>
  );
}

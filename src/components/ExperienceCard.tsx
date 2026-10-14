import Image from 'next/image';
import { ExperienceItem } from '@/app/utility/data';

interface ExperienceProps {
  experience: ExperienceItem;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceProps) {
  return (
    <div className="mb-8 flex flex-col rounded-lg bg-surface-light p-8 shadow-2xl dark:bg-surface-dark">
      <div className="flex flex-row justify-between">
        <div className="relative mr-4 h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24">
          {experience.logo ? (
            <Image
              src={experience.logo}
              alt={`${experience.company} Logo`}
              fill
              sizes="(min-width: 1024px) 6rem, (min-width: 640px) 5rem, 4rem"
              className="rounded-lg object-contain"
              priority={index === 0}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center rounded-lg bg-accent-light/30 text-xl font-semibold dark:bg-accent-dark/40">
              {experience.company.slice(0, 1)}
            </div>
          )}
        </div>
        <div className="ml-4 flex flex-col text-end">
          <span className="font-semibold">{experience.position}</span>
          <span className="italic">{experience.company}</span>
          <span className="text-secondary-light dark:text-secondary-dark text-lg">{experience.duration}</span>
        </div>
      </div>
      <p className="mt-4 text-left text-base leading-relaxed text-primary-light-light sm:text-lg dark:text-primary-dark">
        {experience.description}
      </p>
    </div>
  );
}

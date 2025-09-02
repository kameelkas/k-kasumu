'use client';
import Image from 'next/image';
import { useState } from 'react';
import { ExperienceItem } from '@/app/utility/data';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';

interface ExperienceProps {
  experience: ExperienceItem;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      key={index}
      className="mb-8 flex transform flex-col rounded-lg bg-surface-light p-8 shadow-2xl duration-300 ease-in-out dark:bg-surface-dark"
    >
      <div className="mb-4 flex flex-row justify-between">
        <div className="relative mr-4 h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24">
          <Image
            src={experience.logo}
            alt={`${experience.company} Logo`}
            fill
            sizes="(min-width: 1024px) 6rem, (min-width: 640px) 5rem, 4rem"
            className="rounded-lg object-contain"
            priority={index === 0} // optional: avoids pop-in for the first item
          />
        </div>
        <div className="ml-4 flex flex-col text-end">
          <span className="font-semibold">{experience.position}</span>
          <span className="italic">{experience.company}</span>
          <span>{experience.duration}</span>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="flex w-fit transform flex-row items-center justify-center rounded-full bg-accent-light p-2 text-sm duration-300 ease-in-out interactive:bg-accentHover-light sm:text-xl md:text-2xl dark:bg-accent-dark dark:interactive:bg-accentHover-dark"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <>
              <span className="mx-2">See Less</span>
              <TiArrowSortedUp />
            </>
          ) : (
            <>
              <span className="mx-2">See More</span>
              <TiArrowSortedDown />
            </>
          )}
        </button>
      </div>
      {isExpanded && (
        <p className="mt-2 text-left sm:text-justify">
          {experience.description}
        </p>
      )}
    </div>
  );
}

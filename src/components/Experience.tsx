'use client';
import Image from 'next/image';
import { useState } from 'react';
import { ExperienceItem } from '@/app/utility/data';
import { TiArrowSortedDown } from 'react-icons/ti';
import MotionWrapper from './MotionWrapper';

interface ExperienceProps {
  experiences: ExperienceItem[];
}

export default function Experience({ experiences }: ExperienceProps) {
  const [active, setActive] = useState<number | null>(null);

  const toggleExperienceDescription = (id: number) => {
    if (active === id) {
      setActive(null);
    } else {
      setActive(id);
    }
  };
  return (
    <div className="flex flex-col">
      <MotionWrapper
        as="h1"
        className="mb-8 text-center text-4xl underline decoration-secondary-light decoration-2 underline-offset-4 sm:text-5xl dark:decoration-secondary-dark"
      >
        Experience
      </MotionWrapper>
      {experiences.map((exp, index) => (
        <MotionWrapper
          direction="right"
          key={index}
          className="mb-8 flex transform flex-col rounded-lg bg-surface-light p-8 shadow-2xl duration-300 ease-in-out dark:bg-surface-dark"
        >
          <div className="mb-4 flex flex-row justify-between">
            <div className="relative mr-4 h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 lg:h-24 lg:w-24">
              <Image
                src={exp.logo}
                alt={`${exp.company} Logo`}
                fill
                sizes="(min-width: 1024px) 6rem, (min-width: 640px) 5rem, 4rem"
                className="rounded-lg object-contain"
                priority={index === 0} // optional: avoids pop-in for the first item
              />
            </div>
            <div className="ml-4 flex flex-col text-end">
              <span className="font-semibold">{exp.position}</span>
              <span className="italic">{exp.company}</span>
              <span>{exp.duration}</span>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="flex w-fit transform flex-row items-center justify-center rounded-full bg-accent-light p-2 text-sm duration-300 ease-in-out interactive:bg-accentHover-light sm:text-xl md:text-2xl dark:bg-accent-dark dark:interactive:bg-accentHover-dark"
              onClick={() => toggleExperienceDescription(index)}
            >
              <span className="mx-2">See More</span>
              <TiArrowSortedDown />
            </button>
          </div>
          {active === index && (
            <p className="mt-2 text-left sm:text-justify">{exp.description}</p>
          )}
        </MotionWrapper>
      ))}
    </div>
  );
}

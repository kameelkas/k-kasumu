'use client';
import Image from 'next/image';
import { useState } from 'react';
import { ExperienceItem } from '@/app/utility/experience';
import { TiArrowSortedDown } from 'react-icons/ti';

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
      <h1 className="mb-8 text-center text-4xl underline decoration-secondary-light decoration-2 underline-offset-4 sm:text-5xl dark:decoration-secondary-dark">
        Experience
      </h1>
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="mb-8 flex flex-col rounded-lg bg-secondary-dark p-4 shadow-lg dark:bg-secondary-light"
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
            <div className="ml-4 flex flex-col text-end text-lg sm:text-xl md:text-2xl">
              <span className="font-semibold">{exp.position}</span>
              <span className="italic">{exp.company}</span>
              <span>{exp.duration}</span>
            </div>
          </div>
          <div className='flex justify-center'>
          <button
            className="flex w-fit flex-row items-center justify-center rounded-full p-2 bg-primary-dark interactive:bg-accent-dark dark:bg-primary-light dark:interactive:bg-accent-light text-sm sm:text-xl md:text-2xl"
            onClick={() => toggleExperienceDescription(index)}
          >
            <span className="mx-2">See More</span>
            <TiArrowSortedDown />
          </button></div>
          {active === index && (
            <p className="mt-2 text-lg sm:text-xl md:text-2xl text-left sm:text-justify">
              {exp.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

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
    <div className="mx-auto w-full flex max-w-4xl flex-col bg-red-500">
      <h1 className="mb-8 text-center text-4xl underline decoration-secondary-light decoration-2 underline-offset-4 sm:text-5xl dark:decoration-secondary-dark">
        Experience
      </h1>
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="mb-8 flex flex-col"
        >
          <div className="mb-4 flex flex-row items-center justify-center">
            <div className="relative">
              <Image
                src={exp.logo}
                alt={`${exp.company} Logo`}
                width={100}
                height={100}
                className="h-16 w-16 shadow-lg sm:h-20 sm:w-20 md:h-24 md:w-24"
              />
            </div>
            <div className="flex w-full mx-4 flex-col lg:flex-row items-start justify-between text-xl sm:text-2xl md:text-3xl">
              <div className="flex flex-col items-start">
                <h2 className="font-semibold">{exp.position}</h2>
                <h2 className="italic">{exp.company}</h2>
              </div>
              <div>
                <h2>{exp.duration}</h2>
              </div>
            </div>
          </div>
          <button
            className="interactive:bg-accent-light dark:interactive:bg-accent-dark flex w-fit flex-row items-center justify-center rounded-full bg-accent-dark px-3 py-1 text-lg sm:text-xl md:text-2xl dark:bg-accent-light"
            onClick={() => toggleExperienceDescription(index)}
          >
            <span>See More</span>
            <TiArrowSortedDown size={40} />
          </button>
          {active === index && (
            <p className="mt-2 text-lg sm:text-xl md:text-2xl">
              {exp.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

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
    <div className="mx-3 flex flex-col">
      <h1 className="mb-8 text-center text-4xl underline decoration-secondary-light decoration-2 underline-offset-4 sm:text-5xl dark:decoration-secondary-dark">
        Experience
      </h1>
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="mb-8 flex flex-col items-center justify-center"
        >
          <div></div>
          <button
            className="flex w-fit flex-row items-center justify-center rounded-full bg-accent-dark px-4 py-2 text-lg hover:bg-accent-light sm:text-xl md:text-2xl dark:bg-accent-light dark:hover:bg-accent-dark"
            onClick={() => toggleExperienceDescription(index)}
          >
            <span>See More</span>
            <TiArrowSortedDown size={40} />
          </button>
          {active === index && (
            <div className="text-lg sm:text-xl md:text-2xl">
              {exp.description.map((point, idx) => (
                <p key={idx} className="mt-2">
                  {point}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

'use client';
import Image from 'next/image';
import { useId, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { PiCaretDown } from 'react-icons/pi';
import { ExperienceItem } from '@/app/utility/data';

interface ExperienceProps {
  experience: ExperienceItem;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsId = useId();

  return (
    <article className="rounded-3xl bg-surface-light/80 p-6 shadow-soft ring-1 ring-inset ring-line-light/70 sm:p-8 dark:bg-surface-dark/70 dark:shadow-soft-dark dark:ring-line-dark/60">
      <div className="flex items-start gap-5 sm:gap-6">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl bg-white ring-1 ring-line-light sm:h-20 sm:w-20 dark:ring-line-dark">
          <Image
            src={experience.logo}
            alt={`${experience.company} logo`}
            fill
            sizes="(min-width: 640px) 5rem, 3.5rem"
            className="object-contain p-1.5"
            priority={index === 0}
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
          <div>
            <h3 className="text-xl font-semibold tracking-[-0.02em] sm:text-2xl">
              {experience.position}
            </h3>
            <p className="text-base font-medium text-secondary-light sm:text-lg dark:text-secondary-dark">
              {experience.company}
            </p>
          </div>
          <p className="font-mono text-sm tabular-nums text-secondary-light sm:pt-1.5 sm:text-right dark:text-secondary-dark">
            {experience.duration}
          </p>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.p
            id={detailsId}
            key="details"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="mt-6 max-w-prose text-base leading-relaxed sm:pl-[6.5rem] sm:text-lg"
          >
            {experience.description}
          </motion.p>
        )}
      </AnimatePresence>

      <div className="mt-5 sm:pl-[6.5rem]">
        <button
          type="button"
          aria-expanded={isExpanded}
          aria-controls={isExpanded ? detailsId : undefined}
          onClick={() => setIsExpanded((open) => !open)}
          className="group -ml-3 inline-flex min-h-11 items-center gap-2 rounded-xl px-3 text-base font-medium text-accentHover-light transition duration-200 hover:bg-accent-light/20 active:scale-[0.98] dark:text-accentHover-dark dark:hover:bg-accent-dark/20"
        >
          {isExpanded ? 'Hide details' : 'Read what I did'}
          <PiCaretDown
            aria-hidden="true"
            className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
          />
        </button>
      </div>
    </article>
  );
}

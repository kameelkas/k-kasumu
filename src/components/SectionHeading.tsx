import { ReactNode } from 'react';
import MotionWrapper from './MotionWrapper';

interface SectionHeadingProps {
  index: string;
  title: string;
  id: string;
  children?: ReactNode;
}

export default function SectionHeading({
  index,
  title,
  id,
  children,
}: SectionHeadingProps) {
  return (
    <MotionWrapper as="header" className="mb-10 sm:mb-12">
      <div className="mb-3 flex items-center gap-3">
        <span className="eyebrow tabular-nums">{index}</span>
        <span
          aria-hidden="true"
          className="h-px w-10 bg-accent-light dark:bg-accent-dark"
        />
      </div>
      <h2
        id={id}
        className="text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl"
      >
        {title}
      </h2>
      {children && (
        <p className="mt-4 max-w-prose text-base leading-relaxed text-secondary-light sm:text-lg dark:text-secondary-dark">
          {children}
        </p>
      )}
    </MotionWrapper>
  );
}

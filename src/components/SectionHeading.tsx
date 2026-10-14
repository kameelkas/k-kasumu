import { ReactNode } from 'react';
import MotionWrapper from './MotionWrapper';

export default function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <MotionWrapper className="mb-10 flex flex-col items-center">
      <h2 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">
        {children}
      </h2>
      <span
        aria-hidden="true"
        className="mt-3 h-1 w-12 rounded-full bg-accent-light dark:bg-accent-dark"
      />
    </MotionWrapper>
  );
}

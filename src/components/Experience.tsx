import { ExperienceItem } from '@/app/utility/data';
import MotionWrapper from './MotionWrapper';
import ExperienceCard from './ExperienceCard';

interface ExperienceProps {
  experiences: ExperienceItem[];
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <div className="flex flex-col">
      <MotionWrapper
        as="h1"
        className="mb-8 text-center text-4xl underline decoration-secondary-light decoration-2 underline-offset-4 sm:text-5xl dark:decoration-secondary-dark"
      >
        Experience
      </MotionWrapper>
      <MotionWrapper direction="down">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} index={index} experience={exp} />
        ))}
      </MotionWrapper>
    </div>
  );
}

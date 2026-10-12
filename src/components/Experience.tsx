import { ExperienceItem } from '@/app/utility/data';
import MotionWrapper from './MotionWrapper';
import ExperienceCard from './ExperienceCard';
import SectionHeading from './SectionHeading';

interface ExperienceProps {
  experiences: ExperienceItem[];
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <div>
      <SectionHeading index="02" title="Experience" id="experience-heading" />
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <MotionWrapper key={exp.company + exp.position} delay={index * 0.08}>
            <ExperienceCard index={index} experience={exp} />
          </MotionWrapper>
        ))}
      </div>
    </div>
  );
}

import { ProjectItem } from '@/app/utility/data';
import MotionWrapper from './MotionWrapper';
import ProjectCard from './ProjectCard';
import SectionHeading from './SectionHeading';

interface ProjectProps {
  projects: ProjectItem[];
}

export default function Projects({ projects }: ProjectProps) {
  return (
    <div>
      <SectionHeading index="04" title="Projects" id="projects-heading">
        A select list of projects I&apos;ve worked on. You can find more of my
        work on my{' '}
        <a
          href="https://github.com/kameelkas"
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline text-primary-light dark:text-primary-dark"
        >
          GitHub
        </a>
        .
      </SectionHeading>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
        {projects.map((project, index) => {
          const wide =
            projects.length % 2 === 1 && index === projects.length - 1;
          return (
            <MotionWrapper
              key={`${project.title}-${index}`}
              delay={(index % 2) * 0.1}
              className={wide ? 'h-full lg:col-span-2' : 'h-full'}
            >
              <ProjectCard project={project} index={index} wide={wide} />
            </MotionWrapper>
          );
        })}
      </div>
    </div>
  );
}

import { ProjectItem } from '@/app/utility/data';
import Image from 'next/image';
import { LuExternalLink } from 'react-icons/lu';
import { FiGithub } from 'react-icons/fi';
import { PiVideo } from 'react-icons/pi';

interface ProjectProps {
  projects: ProjectItem[];
}

export default function Projects({ projects }: ProjectProps) {
  return (
    <div>
      <h1 className="mb-8 text-center text-4xl underline decoration-secondary-light decoration-2 underline-offset-4 sm:text-5xl dark:decoration-secondary-dark">
        Projects
      </h1>
      <div className="grid grid-cols-1 gap-12 xl:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex w-full flex-col rounded-lg bg-surface-light shadow-lg dark:bg-surface-dark"
          >
            <div className="relative w-full">
              <Image
                src={project.image}
                alt={`A screenshot of the ${project.title} project`}
                width={1600}
                height={900}
                className="h-32 rounded-t-lg object-cover sm:h-64 lg:h-80"
                priority
              />
            </div>

            <div className="p-2 font-semibold">{project.title}</div>
            <div className="p-2 text-sm sm:text-lg">{project.description}</div>
            <div className="mb-4 flex flex-wrap gap-2 px-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-accent-light px-3 py-1 text-xs font-semibold sm:text-sm dark:bg-accent-dark"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex-1"></div>

            <div className="mx-3 mb-3 flex flex-col gap-2 sm:flex-row">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-1 flex-row items-center justify-center gap-2 rounded-md bg-accent-light px-2 py-1 transition-all duration-300 ease-in-out interactive:bg-accentHover-light dark:bg-accent-dark interactive:dark:bg-accentHover-dark"
                >
                  <LuExternalLink className="transition-all duration-300 ease-in-out group-hover:scale-125 interactive:scale-125" />
                  <span>Link</span>
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-1 flex-row items-center justify-center gap-2 rounded-md bg-accent-light px-2 py-1 transition-all duration-300 ease-in-out interactive:bg-accentHover-light dark:bg-accent-dark interactive:dark:bg-accentHover-dark"
                >
                  <FiGithub
                    size={24}
                    className="transition-all duration-300 ease-in-out group-hover:scale-125 interactive:scale-125"
                  />
                  <span>GitHub</span>
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-1 flex-row items-center justify-center gap-2 rounded-md bg-accent-light px-2 py-1 transition-all duration-300 ease-in-out interactive:bg-accentHover-light dark:bg-accent-dark interactive:dark:bg-accentHover-dark"
                >
                  <PiVideo
                    size={24}
                    className="transition-all duration-300 ease-in-out group-hover:scale-125 interactive:scale-125"
                  />
                  <span>Demo</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

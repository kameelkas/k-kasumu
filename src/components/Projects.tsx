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
      <p className="mx-10 mb-10 text-center">
        Here is a select list of projects I&#39;ve worked on. Feel free to
        explore more of my work on my{' '}
        <a
          href="https://github.com/kameelkas"
          target="_blank"
          rel="noopener noreferrer"
          className="underline transition-colors duration-300 ease-in-out interactive:text-accentHover-light dark:interactive:text-accentHover-dark"
        >
          Github
        </a>
        .
      </p>

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
                  <span>Link</span>
                  <LuExternalLink className="transition-all duration-300 ease-in-out group-hover:scale-125 interactive:scale-125" />
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-1 flex-row items-center justify-center gap-2 rounded-md bg-accent-light px-2 py-1 transition-all duration-300 ease-in-out interactive:bg-accentHover-light dark:bg-accent-dark interactive:dark:bg-accentHover-dark"
                >
                  <span>GitHub</span>
                  <FiGithub
                    size={24}
                    className="transition-all duration-300 ease-in-out group-hover:scale-125 interactive:scale-125"
                  />
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-1 flex-row items-center justify-center gap-2 rounded-md bg-accent-light px-2 py-1 transition-all duration-300 ease-in-out interactive:bg-accentHover-light dark:bg-accent-dark interactive:dark:bg-accentHover-dark"
                >
                  <span>Demo</span>
                  <PiVideo
                    size={24}
                    className="transition-all duration-300 ease-in-out group-hover:scale-125 interactive:scale-125"
                  />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

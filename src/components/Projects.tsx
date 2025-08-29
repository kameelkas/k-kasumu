import { ProjectItem } from '@/app/utility/data';
import Image from 'next/image';
import { LuExternalLink } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import { PiVideo } from "react-icons/pi";




interface ProjectProps {
  projects: ProjectItem[];
}

export default function Projects({ projects }: ProjectProps) {
  return (
    <div>
      <h1 className="text-center text-4xl underline decoration-secondary-light decoration-2 underline-offset-4 sm:text-5xl dark:decoration-secondary-dark">
        Projects
      </h1>
      <div className="m-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col overflow-hidden border-0 bg-surface-light dark:bg-surface-dark shadow-lg"
          >
            <div className="relative">
              <Image
                src={project.image}
                alt={`A screenshot of the ${project.title} project`}
                width={1920}
                height={1080}
                className="object-cover w-full h-48 sm:h-64 lg:h-80"
                priority
              />
            </div>

            <div className="p-2 font-semibold">{project.title}</div>
            <div className="p-2 text-sm sm:text-lg">{project.description}</div>
            <div className="flex flex-wrap gap-2 px-2 mb-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-accent-light dark:bg-accent-dark rounded-full px-3 py-1 text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline flex flex-row items-center gap-1"
                >
                    <LuExternalLink size={24} />
                    <span>Link</span>
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline flex flex-row items-center gap-1"
                >
                    <FiGithub size={24} />
                    <span>GitHub</span>
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-blue-500 interactive:underline px-2 py-1 rounded-md bg-red-100 flex flex-row items-center gap-2 transition-all ease-in-out duration-300"
                >
                    <PiVideo size={24} className='group-hover:scale-125 transition-all ease-in-out duration-300' />
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

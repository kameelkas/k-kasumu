import { ProjectItem } from '@/app/utility/data';
import Image from 'next/image';
import { LuExternalLink } from 'react-icons/lu';
import { PiMonitorPlayLight } from "react-icons/pi";

import { GoFileCode } from "react-icons/go";
import { IoReaderOutline } from 'react-icons/io5';
import MotionWrapper from './MotionWrapper';
import { LinkType } from '@/app/utility/data';
import { JSX } from 'react';

interface ProjectProps {
  projects: ProjectItem[];
}

export default function Projects({ projects }: ProjectProps) {
  const linkIconStyles =
    'transition-all duration-300 ease-in-out group-hover:scale-125 interactive:scale-125';
  const linkIcons: Record<LinkType, JSX.Element> = {
    [LinkType.VISIT]: <LuExternalLink className={linkIconStyles} />,
    [LinkType.SOURCE]: <GoFileCode className={linkIconStyles} />,
    [LinkType.WATCH]: <PiMonitorPlayLight className={linkIconStyles} />,
    [LinkType.READ]: <IoReaderOutline className={linkIconStyles} />,
  };

  return (
    <div>
      <MotionWrapper
        as="h1"
        className="mb-8 text-center text-4xl underline decoration-secondary-light decoration-2 underline-offset-4 sm:text-5xl dark:decoration-secondary-dark"
      >
        Projects
      </MotionWrapper>
      <MotionWrapper as="p" className="mx-10 mb-10 text-center">
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
      </MotionWrapper>

      <div className="grid grid-cols-1 gap-12 xl:grid-cols-2">
        {projects.map((project, index) => (
          <MotionWrapper
            direction="down"
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
              {project.tags.map((tag) => (
                <span
                  key={tag.label}
                  className={`rounded-full px-3 py-1 text-xs font-normal sm:text-sm ${
                    tag.category === 'tech'
                      ? 'bg-accent-light dark:bg-accent-dark'
                      : 'bg-accent-light/20 dark:bg-accent-dark/20'
                  }`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
            <div className="flex-1"></div>

            <div className="mx-3 mb-3 flex flex-col gap-2 sm:flex-row">
              {project.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-1 flex-row items-center justify-center gap-2 rounded-md border border-transparent bg-surface-dark/5 px-2 py-1 transition-colors duration-300 ease-in-out interactive:border-accent-light interactive:text-accentHover-light dark:bg-surface-light/5 dark:interactive:border-accent-dark dark:interactive:text-accentHover-dark"
                >
                  <span>{link.type}</span>
                  {linkIcons[link.type]}
                </a>
              ))}
            </div>
          </MotionWrapper>
        ))}
      </div>
    </div>
  );
}

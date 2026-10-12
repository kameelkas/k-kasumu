'use client';
import Image from 'next/image';
import { PointerEvent } from 'react';
import { IconType } from 'react-icons';
import {
  PiArrowUpRight,
  PiCodeBlock,
  PiFilePdf,
  PiPlayCircle,
} from 'react-icons/pi';
import { LinkType, ProjectItem } from '@/app/utility/data';

const linkMeta: Record<LinkType, { label: string; icon: IconType }> = {
  [LinkType.VISIT]: { label: 'Visit site', icon: PiArrowUpRight },
  [LinkType.GITHUB]: { label: 'Source', icon: PiCodeBlock },
  [LinkType.DEMO]: { label: 'Watch demo', icon: PiPlayCircle },
  [LinkType.EXPLANATIVE]: { label: 'Read poster', icon: PiFilePdf },
};

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  wide?: boolean;
}

export default function ProjectCard({
  project,
  index,
  wide = false,
}: ProjectCardProps) {
  const trackPointer = (e: PointerEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
  };

  return (
    <article
      onPointerMove={trackPointer}
      className="group relative flex h-full flex-col rounded-3xl bg-line-light p-px shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift dark:bg-line-dark dark:shadow-soft-dark dark:hover:shadow-lift-dark"
    >
      <div
        aria-hidden="true"
        className="spotlight pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div
        className={`relative flex h-full flex-col overflow-hidden rounded-[calc(1.5rem-1px)] bg-surface-light dark:bg-surface-dark ${wide ? 'lg:flex-row' : ''}`}
      >
        <div
          className={`relative aspect-[16/9] overflow-hidden bg-canvas-light dark:bg-canvas-dark ${wide ? 'lg:aspect-auto lg:w-[55%] lg:shrink-0' : ''}`}
        >
          <Image
            src={project.image}
            alt={`Preview of the ${project.title} project`}
            fill
            sizes={
              wide
                ? '(min-width: 1024px) 40rem, 100vw'
                : '(min-width: 1024px) 34rem, 100vw'
            }
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            priority={index === 0}
          />
        </div>

        <div
          className={`flex flex-1 flex-col p-6 sm:p-7 ${wide ? 'lg:p-9' : ''}`}
        >
          {project.otherInfo.length > 0 && (
            <p className="eyebrow mb-2">{project.otherInfo.join(' · ')}</p>
          )}
          <h3 className="text-2xl font-semibold tracking-[-0.025em] sm:text-[1.75rem]">
            {project.title}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-secondary-light dark:text-secondary-dark">
            {project.description}
          </p>

          <ul aria-label="Tech stack" className="mt-5 flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <li
                key={tech}
                className="rounded-md bg-accent-light/25 px-2 py-1 font-mono text-xs font-medium text-primary-light dark:bg-accent-dark/25 dark:text-primary-dark"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap gap-2 pt-7">
            {project.links.map((link) => {
              const { label, icon: Icon } = linkMeta[link.type];
              return (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} for ${project.title} (opens in new tab)`}
                  className="btn-quiet group/link min-h-10 px-4 text-sm"
                >
                  <Icon
                    aria-hidden="true"
                    className="text-base transition-transform duration-200 group-hover/link:scale-110"
                  />
                  {label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
}

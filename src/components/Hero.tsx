import Image from 'next/image';
import HeroSectionImage from '@/images/dark-KK.jpeg';
import {
  PiArrowDownRight,
  PiEnvelopeSimple,
  PiFileText,
  PiGithubLogo,
  PiLinkedinLogo,
} from 'react-icons/pi';
import MotionWrapper from './MotionWrapper';

const heroLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/kameelkas',
    icon: PiGithubLogo,
    external: true,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ka-kasumu/',
    icon: PiLinkedinLogo,
    external: true,
  },
  {
    name: 'Resume',
    url: '/Kameel Kasumu Resume (Full).pdf',
    icon: PiFileText,
    external: true,
  },
  {
    name: 'Email',
    url: '#contact',
    icon: PiEnvelopeSimple,
    external: false,
  },
];

export default function Hero() {
  return (
    <div className="flex flex-col items-center gap-12 md:flex-row md:items-center md:gap-16">
      <MotionWrapper className="relative shrink-0">
        <div
          aria-hidden="true"
          className="absolute -inset-3 translate-x-4 translate-y-4 rounded-[2.75rem] bg-accent-light/40 ring-1 ring-inset ring-accent-light/60 dark:bg-accent-dark/20 dark:ring-accent-dark/40"
        />
        <Image
          src={HeroSectionImage}
          alt="Kameel Kasumu's monogram: two interlocking silver letter Ks on a dark background"
          width={500}
          height={500}
          priority
          sizes="(min-width: 1024px) 22rem, (min-width: 640px) 16rem, 14rem"
          className="relative h-56 w-56 rounded-[2.5rem] object-cover shadow-lift ring-1 ring-white/10 sm:h-64 sm:w-64 lg:h-[22rem] lg:w-[22rem] dark:shadow-lift-dark"
        />
      </MotionWrapper>

      <div className="text-center md:text-left">
        <MotionWrapper delay={0.05}>
          <p className="eyebrow mb-4 inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-sm bg-accentHover-light dark:bg-accentHover-dark" />
            Software engineer · Calgary, AB
          </p>
        </MotionWrapper>
        <MotionWrapper as="h1" delay={0.12}>
          <span className="block text-3xl font-medium tracking-[-0.02em] text-secondary-light sm:text-4xl dark:text-secondary-dark">
            Hey, I&apos;m
          </span>
          <span className="block text-6xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-8xl">
            Kameel.
          </span>
        </MotionWrapper>
        <MotionWrapper
          as="p"
          delay={0.2}
          className="mx-auto mt-6 max-w-md text-base leading-relaxed text-secondary-light sm:text-lg md:mx-0 dark:text-secondary-dark"
        >
          Emerging software engineer and recent UCalgary Software &amp;
          Mechatronics grad. I build interfaces for engineering software and
          full-stack web apps.
        </MotionWrapper>

        <MotionWrapper
          delay={0.28}
          className="mt-8 flex flex-col items-center gap-6 sm:flex-row md:items-center"
        >
          <a href="#projects" className="btn-primary group">
            See my work
            <PiArrowDownRight
              aria-hidden="true"
              className="text-lg transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
            />
          </a>
          <ul className="flex items-center gap-1">
            {heroLinks.map(({ name, url, icon: Icon, external }) => (
              <li key={name}>
                <a
                  href={url}
                  {...(external && {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  })}
                  aria-label={external ? `${name} (opens in new tab)` : name}
                  title={name}
                  className="flex h-11 w-11 items-center justify-center rounded-xl text-secondary-light transition duration-200 hover:-translate-y-0.5 hover:bg-surface-light hover:text-accentHover-light active:scale-95 dark:text-secondary-dark dark:hover:bg-surface-dark dark:hover:text-accentHover-dark"
                >
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </a>
              </li>
            ))}
          </ul>
        </MotionWrapper>
      </div>
    </div>
  );
}

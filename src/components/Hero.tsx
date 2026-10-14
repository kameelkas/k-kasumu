import Image from 'next/image';
import HeroSectionImage from '@/images/dark-kk.jpeg';
import { FiFileText, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import MotionWrapper from './MotionWrapper';

const heroLinkClass =
  'rounded-lg p-2 transition-all duration-100 ease-in-out interactive:scale-110 interactive:bg-surface-light/50 interactive:text-accentHover-light dark:interactive:bg-surface-dark/70 dark:interactive:text-accentHover-dark';

export default function Hero() {
  const heroLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/kameelkas',
      external: true,
      icon: FiGithub,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ka-kasumu/',
      external: true,
      icon: FiLinkedin,
    },
    {
      name: 'Resume',
      url: '/Kameel_Kasumu_Resume.pdf',
      external: true,
      icon: FiFileText,
    },
    {
      name: 'Email',
      url: '#contact',
      external: false,
      icon: FiMail,
    },
  ];

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-16">
        <MotionWrapper className="relative">
          <Image
            src={HeroSectionImage}
            alt="Logo Image (Kameel Kasumu's Initials 'KK')"
            width={500}
            height={500}
            priority
            className="h-56 w-56 rounded-full shadow-lg sm:h-64 sm:w-64 lg:h-96 lg:w-96"
          />
        </MotionWrapper>
        <MotionWrapper direction="left">
          <MotionWrapper className="text-center md:text-left">
            <p className="text-4xl sm:text-5xl">Hey, I&apos;m</p>
            <h1 className="text-6xl font-bold sm:text-8xl">Kameel!</h1>
            <p className="text-xl sm:text-2xl lg:text-3xl">Software Engineer</p>
            <ul className="mt-3 flex flex-wrap justify-center gap-2 md:justify-start">
              {['New grad', 'C++', 'TypeScript', 'Python', 'Calgary, AB'].map(
                (item) => (
                  <li
                    key={item}
                    className="cursor-default rounded-full border border-secondary-light/25 bg-surface-light px-3 py-1 text-xs text-secondary-light transition-colors duration-300 ease-in-out interactive:border-accent-light interactive:text-accentHover-light sm:text-sm dark:border-secondary-dark/30 dark:bg-surface-dark dark:text-secondary-dark dark:interactive:border-accent-dark dark:interactive:text-accentHover-dark"
                  >
                    {item}
                  </li>
                ),
              )}
            </ul>
            <div className="mt-3 flex items-center justify-between space-x-6">
              {heroLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    aria-label={link.name}
                    {...(link.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className={heroLinkClass}
                  >
                    <Icon size={34} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </MotionWrapper>
        </MotionWrapper>
      </div>
    </div>
  );
}

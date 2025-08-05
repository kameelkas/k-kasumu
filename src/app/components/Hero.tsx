'use client';
import Image from 'next/image';
import DarkKK from '@/app/assets/dark-KK.jpeg';
import LightKK from '@/app/assets/light-KK.jpeg';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { IoIosPaper } from 'react-icons/io';
import { MdEmail } from "react-icons/md";
import { useEffect, useState } from 'react';
export default function Hero() {
  const [isDark, setIsDark] = useState(false);
  const heroLinks = [
    {
      name: 'GitHub',
      url: 'https:://github.com/kameelkas',
      icon: <SiGithub className="h-9 w-9 md:h-12 md:w-12" />
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ka-kasumu/',
      icon: <SiLinkedin className="h-9 w-9 md:h-12 md:w-12" />
    },
    {
      name: 'Resume',
      url: '#',
      icon: <IoIosPaper className="h-9 w-9 md:h-12 md:w-12" />
    },
    {
        name: 'Email',
        url: 'mailto:kameelkas@gmail.com',
        icon: <MdEmail className="h-9 w-9 md:h-14 md:w-14" />
    }
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDark(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className="m-2 p-2 text-primary-light dark:text-primary-dark">
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-16">
        <div className="relative">
          <Image
            src={isDark ? LightKK : DarkKK}
            alt="Logo Image (Kameel Kasumu's Initials 'KK')"
            width={500}
            height={500}
            className="h-64 w-64 rounded-full shadow-lg lg:h-96 lg:w-96"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl">Hey, I&apos;m</h1>
          <h1 className="text-6xl font-bold sm:text-8xl">Kameel!</h1>
          <h1 className="text-xl sm:text-2xl">Aspiring Software Engineer</h1>
          <div className="mt-3 space-x-8">
            {heroLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-primary-light hover:text-accent-light dark:text-primary-dark dark:hover:text-accent-dark"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';
import Image from 'next/image';
import DarkKK from '@/app/assets/dark-KK.jpeg';
import LightKK from '@/app/assets/light-KK.jpeg';
import { useEffect, useState } from 'react';
export default function Hero() {
  const [isDark, setIsDark] = useState(false);

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
            className="h-64 w-64 rounded-full shadow-lg md:h-96 md:w-96"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl">Hey, I&apos;m</h1>
          <h1 className="text-6xl font-bold sm:text-8xl">Kameel!</h1>
          <h1 className="text-xl sm:text-2xl">Aspiring Software Engineer</h1>
        </div>
      </div>
    </div>
  );
}

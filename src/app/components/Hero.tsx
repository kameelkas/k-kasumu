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
    <div>
      <div>
        <Image
          src={isDark ? LightKK : DarkKK}
          alt="Hero Image"
          width={500}
          height={500}
          className="rounded-full shadow-lg"
        />
      </div>
    </div>
  );
}

'use client';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import { experienceItems } from './utility/experience';
export default function Home() {
  return (
    <div className="flex w-full flex-col lg:items-center text-primary-light dark:text-primary-dark">
      <section className="mt-16 max-w-5xl w-full">
        <Hero />
      </section>
      <section className="mt-16 max-w-5xl w-full"> 
        <About />
      </section>
      <section className="mt-16 max-w-5xl w-full">
        <Experience experiences={experienceItems} />
      </section>
    </div>
  );
}

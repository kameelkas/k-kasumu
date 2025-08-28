'use client';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import { experienceItems } from './utility/experience';
export default function Home() {
  return (
    <div className="flex w-full flex-col text-primary-light lg:items-center dark:text-primary-dark">
      <section className="mt-16 w-full max-w-5xl">
        <Hero />
      </section>
      <section className="mt-16 w-full max-w-5xl">
        <About />
      </section>
      <section className="mt-16 w-full max-w-5xl">
        <Experience experiences={experienceItems} />
      </section>
    </div>
  );
}

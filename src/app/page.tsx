'use client';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { experienceData, skillsData, projectData } from './utility/data';
export default function Home() {
  return (
    <div className="flex w-full flex-col items-center text-lg text-primary-light sm:text-xl md:text-2xl dark:text-primary-dark">
      <section className="mt-16 w-full max-w-5xl">
        <Hero />
      </section>
      <section className="my-16 w-full max-w-5xl">
        <About />
      </section>
      <section className="my-16 w-full max-w-5xl">
        <Experience experiences={experienceData} />
      </section>
      <section className="my-16 w-full max-w-5xl">
        <Skills skills={skillsData} />
      </section>
      <section className="my-16 w-full max-w-[80vw]">
        <Projects projects={projectData} />
      </section>
      <section id='contact' className="my-16 w-full max-w-5xl">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

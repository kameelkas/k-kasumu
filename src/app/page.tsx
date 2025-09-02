'use client';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { experienceData, skillsData, projectData } from './utility/data';
export default function Home() {
  return (
    <div className="mt-24 flex w-full flex-col items-center text-lg text-primary-light sm:text-xl md:mt-44 md:text-2xl dark:text-primary-dark">
      <Navbar />
      <section id="home" className="my-16 w-full max-w-4xl scroll-mt-36">
        <Hero />
      </section>
      <section id="about" className="my-16 w-full max-w-4xl scroll-mt-36">
        <About />
      </section>
      <section id="experience" className="my-16 w-full max-w-4xl scroll-mt-36">
        <Experience experiences={experienceData} />
      </section>
      <section id="skills" className="my-16 w-full max-w-4xl scroll-mt-36">
        <Skills skills={skillsData} />
      </section>
      <section id="projects" className="my-16 w-full max-w-[80vw] scroll-mt-36">
        <Projects projects={projectData} />
      </section>
      <section id="contact" className="my-16 w-full max-w-4xl scroll-mt-36">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

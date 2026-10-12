import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MotionProvider from '@/components/MotionProvider';
import { experienceData, skillsData, projectData } from './utility/data';

const sectionClass = 'w-full max-w-4xl scroll-mt-28 px-5 sm:px-8';

export default function Home() {
  return (
    <MotionProvider>
      <Navbar />
      <main
        id="main"
        className="flex w-full flex-col items-center gap-28 pb-28 pt-32 sm:gap-36 sm:pb-36 md:pt-44"
      >
        <section id="home" aria-label="Introduction" className={sectionClass}>
          <Hero />
        </section>
        <section
          id="about"
          aria-labelledby="about-heading"
          className={sectionClass}
        >
          <About />
        </section>
        <section
          id="experience"
          aria-labelledby="experience-heading"
          className={sectionClass}
        >
          <Experience experiences={experienceData} />
        </section>
        <section
          id="skills"
          aria-labelledby="skills-heading"
          className={sectionClass}
        >
          <Skills skills={skillsData} />
        </section>
        <section
          id="projects"
          aria-labelledby="projects-heading"
          className="w-full max-w-6xl scroll-mt-28 px-5 sm:px-8"
        >
          <Projects projects={projectData} />
        </section>
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className={sectionClass}
        >
          <Contact />
        </section>
      </main>
      <Footer />
    </MotionProvider>
  );
}

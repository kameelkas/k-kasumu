import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import { experienceItems } from './utility/experience';
export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center text-primary-light dark:text-primary-dark">
      <section className="mt-16">
        <Hero />
      </section>
      <section className="mt-16">
        <About />
      </section>
      <section className="mt-16">
        <Experience experiences={experienceItems} />
      </section>
    </div>
  );
}

import Hero from '@/components/Hero';
import About from '@/components/About';
export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <section className="mt-16">
        <Hero />
      </section>
      <section className="mt-16">
        <About />
      </section>
    </div>
  );
}

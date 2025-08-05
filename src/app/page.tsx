import Hero from './components/Hero';
export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <section className="mt-8">
        <Hero />
      </section>
    </div>
  );
}

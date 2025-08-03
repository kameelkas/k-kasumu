import Hero from './components/Hero';
export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-bold">Welcome to My Portfolio</h1>
      <p className="text-lg">
        This is the home page of Kameel Kasumu&apos;s personal portfolio.
      </p>

      <section className="mt-8">
        <Hero />
      </section>
    </div>
  );
}

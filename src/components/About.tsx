export default function About() {
  return (
    <div className="text-primary-light dark:text-primary-dark m-2 p-2">
      <h1 className="decoration-secondary-light dark:decoration-secondary-dark text-center text-4xl underline decoration-2 underline-offset-4 sm:text-5xl">
        About Me
      </h1>
      <div className="mx-auto mt-8 max-w-md md:max-w-4xl text-justify">
        <p className="mt-4 text-lg sm:text-xl md:text-2xl">
          Hey! I&apos;m Kameel, a final year Software Engineering student at the
          University of Calgary. I previously interned at Seequent as a Software
          Developer Intern, where I primarily worked on the UI/UX of a
          geotechnical analysis software. In my free time, I enjoy creating
          full-stack web applications, and exploring various realms of software
          engineering and development. Outside of software, I&apos;m usually
          watching sports, managing my fantasy teams, or playing video games.
        </p>
      </div>
    </div>
  );
}

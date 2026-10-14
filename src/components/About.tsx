import MotionWrapper from './MotionWrapper';
export default function About() {
  return (
    <div>
      <MotionWrapper
        as="h1"
        className="mb-8 text-center text-4xl underline decoration-secondary-light decoration-2 underline-offset-4 sm:text-5xl dark:decoration-secondary-dark"
      >
        About Me
      </MotionWrapper>
      <MotionWrapper className="space-y-4 text-center sm:text-justify">
        <p>
          Hey! I&apos;m Kameel, a recent Software Engineering graduate (with a
          Mechatronics minor) from the University of Calgary.
        </p>
        <p>
          I spent 16 months as a software developer intern at Seequent, writing
          C++ for the UI of GeoStudio, a geotechnical analysis desktop app.
        </p>
        <p>
          My capstone, LifeLens, won a Gold Medal at the Capstone Design Fair,
          and I worked on its medication extraction and privacy features.
        </p>
        <p>
          In my free time I build full-stack web apps and try out different
          corners of software.
        </p>
        <p className="text-secondary-light dark:text-secondary-dark">
          Outside of code, I&apos;m usually watching sports, managing my
          fantasy teams, or playing video games.
        </p>
      </MotionWrapper>
    </div>
  );
}

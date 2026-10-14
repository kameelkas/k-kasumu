import MotionWrapper from './MotionWrapper';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <div>
      <SectionHeading>About Me</SectionHeading>
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
        <MotionWrapper className="space-y-4 text-left text-lg leading-8 sm:text-xl sm:leading-9 md:flex-1">
          <p>
            Hey! I&apos;m Kameel, a recent Software Engineering graduate (with a
            Mechatronics minor) from the University of Calgary. I spent 16
            months as a software developer intern at Seequent, writing C++ for
            the UI of GeoStudio, a geotechnical analysis desktop app.
          </p>
          <p>
            My capstone, LifeLens, won a Gold Medal at the Capstone Design
            Fair, and I worked on its medication extraction and privacy
            features.
          </p>
          <p>
            In my free time I build full-stack web apps and try out different
            corners of software.{' '}
            <span className="text-secondary-light dark:text-secondary-dark">
              Outside of code, I&apos;m usually watching sports, managing my
              fantasy teams, or playing video games.
            </span>
          </p>
        </MotionWrapper>
        <MotionWrapper
          direction="left"
          className="border-l-2 border-accent-light pl-4 md:w-64 md:shrink-0 dark:border-accent-dark"
        >
          <p className="text-sm text-secondary-light dark:text-secondary-dark">
            Studied
          </p>
          <p className="mt-1 text-base font-semibold leading-snug sm:text-lg">
            University of Calgary
          </p>
          <p className="text-base font-semibold leading-snug sm:text-lg">
            B.Sc. Software Engineering, Mechatronics Minor, With Distinction
          </p>
          <p className="mt-2 text-sm text-secondary-light dark:text-secondary-dark">
            Sept 2021 – May 2026
          </p>
        </MotionWrapper>
      </div>
    </div>
  );
}

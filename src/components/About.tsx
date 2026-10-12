import MotionWrapper from './MotionWrapper';
import SectionHeading from './SectionHeading';

const facts = [
  { label: 'Studied', value: 'Software & Mechatronics Eng., UCalgary' },
  { label: 'Previously', value: 'Software Developer Intern, Seequent' },
  { label: 'Built', value: 'LifeLens, award-winning capstone' },
  { label: 'Off-hours', value: 'Sports, fantasy leagues, video games' },
];

export default function About() {
  return (
    <div>
      <SectionHeading index="01" title="About me" id="about-heading" />
      <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_15rem] md:gap-14">
        <MotionWrapper className="max-w-prose space-y-5 text-lg leading-relaxed sm:text-xl sm:leading-relaxed">
          <p>
            Hey! I&apos;m Kameel, a recent Software &amp; Mechatronics
            Engineering graduate from the University of Calgary. I previously
            interned at Seequent as a Software Developer Intern, where I
            primarily worked on the UI/UX of a geotechnical analysis software.
          </p>
          <p className="text-secondary-light dark:text-secondary-dark">
            I also co-developed LifeLens, an award winning engineering capstone
            project. LifeLens is an AI-enabled multimodal system that transforms
            near real-time prehospital trauma audio and video into structured
            data for clinical prediction and decision support.
          </p>
          <p className="text-secondary-light dark:text-secondary-dark">
            In my free time, I enjoy creating full-stack web applications, and
            exploring various realms of software engineering and development.
            Outside of software, I&apos;m usually watching sports, managing my
            fantasy teams, or playing video games.
          </p>
        </MotionWrapper>
        <MotionWrapper as="dl" delay={0.1} className="space-y-5 md:pt-1.5">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="border-l-2 border-accent-light pl-4 dark:border-accent-dark"
            >
              <dt className="eyebrow">{fact.label}</dt>
              <dd className="mt-1 text-base font-medium leading-snug">
                {fact.value}
              </dd>
            </div>
          ))}
        </MotionWrapper>
      </div>
    </div>
  );
}

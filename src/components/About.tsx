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
      <MotionWrapper className="text-center sm:text-justify">
        <p>
          Hey! I&apos;m Kameel, a recent Software & Mechatronics Engineering
          graduate from the University of Calgary. I previously interned at
          Seequent as a Software Developer Intern, where I primarily worked on
          the UI/UX of a geotechnical analysis software. I also co-developed LifeLens, 
          an award winning engineering capstone project. LifeLens is an AI-enabled multimodal 
          system that transforms near real-time prehospital trauma audio and video into structured 
          data for clinical prediction and decision support. In my free time, I enjoy creating 
          full-stack web applications, and exploring various realms of software engineering and 
          development. Outside of software, I&apos;m usually watching sports, managing my fantasy 
          teams, or playing video games.
        </p>
      </MotionWrapper>
    </div>
  );
}

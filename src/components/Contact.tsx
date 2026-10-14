import MotionWrapper from './MotionWrapper';

const contactLinkClass =
  'underline transition-colors duration-150 ease-out interactive:text-accentHover-light dark:interactive:text-accentHover-dark';

export default function Contact() {
  return (
    <div>
      <MotionWrapper
        as="h1"
        className="mb-8 text-center text-4xl underline decoration-secondary-light decoration-2 underline-offset-4 sm:text-5xl dark:decoration-secondary-dark"
      >
        Contact
      </MotionWrapper>
      <MotionWrapper as="p" className="mx-10 text-center">
        Curious about my work or have something in mind? Send me an email at{' '}
        <a href="mailto:kameelkas@gmail.com" className={contactLinkClass}>
          kameelkas@gmail.com
        </a>
        , or find me on{' '}
        <a
          href="https://www.linkedin.com/in/ka-kasumu/"
          target="_blank"
          rel="noopener noreferrer"
          className={contactLinkClass}
        >
          LinkedIn
        </a>{' '}
        and{' '}
        <a
          href="https://github.com/kameelkas"
          target="_blank"
          rel="noopener noreferrer"
          className={contactLinkClass}
        >
          GitHub
        </a>
        . I&apos;m always excited to connect and chat!
      </MotionWrapper>
    </div>
  );
}

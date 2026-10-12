import Link from 'next/link';
import { PiArrowLeft } from 'react-icons/pi';

export default function NotFound() {
  return (
    <main
      id="main"
      className="flex min-h-dvh flex-col items-start justify-center px-6 pb-24 pt-16 sm:mx-auto sm:max-w-2xl"
    >
      <p className="eyebrow mb-4 tabular-nums">404 · Page not found</p>
      <h1 className="text-5xl font-semibold leading-[1] tracking-[-0.045em] sm:text-7xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-6 max-w-prose text-lg leading-relaxed text-secondary-light dark:text-secondary-dark">
        The link may be broken, or the page may have moved. Everything on this
        site lives on the home page.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <Link href="/" className="btn-primary group">
          <PiArrowLeft
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:-translate-x-0.5"
          />
          Back to home
        </Link>
        <Link href="/#contact" className="link-underline text-base font-medium">
          Report a broken link
        </Link>
      </div>
    </main>
  );
}

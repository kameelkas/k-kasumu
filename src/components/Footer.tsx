import { PiArrowUp, PiCode } from 'react-icons/pi';

export default function Footer() {
  const year = new Date().getFullYear();
  const buildDate = process.env.NEXT_PUBLIC_BUILD_DATE
    ? new Date(process.env.NEXT_PUBLIC_BUILD_DATE).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
      })
    : null;

  return (
    <footer className="px-5 pb-10 sm:px-8">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 border-t border-line-light pt-8 text-sm text-secondary-light sm:flex-row sm:items-center sm:justify-between dark:border-line-dark dark:text-secondary-dark">
        <div className="flex items-center gap-3">
          <PiCode
            aria-hidden="true"
            className="h-5 w-5 text-accentHover-light dark:text-accentHover-dark"
          />
          <p>
            <span className="tabular-nums">© {year}</span> Kameel Kasumu
            {buildDate && (
              <>
                <span aria-hidden="true" className="mx-2">
                  ·
                </span>
                <span className="font-mono text-xs tabular-nums">
                  Updated {buildDate}
                </span>
              </>
            )}
          </p>
        </div>
        <a
          href="#home"
          className="group inline-flex min-h-11 w-fit items-center gap-2 rounded-xl px-3 font-medium transition hover:bg-surface-light hover:text-primary-light active:scale-[0.98] sm:-mr-3 dark:hover:bg-surface-dark dark:hover:text-primary-dark"
        >
          Back to top
          <PiArrowUp
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </footer>
  );
}

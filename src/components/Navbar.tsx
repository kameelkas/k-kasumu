'use client';
import { useEffect, useState, useRef, MouseEvent } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { PiList, PiX } from 'react-icons/pi';
import NavbarLogo from '@/images/light-KK.jpeg';

const sections = ['about', 'experience', 'skills', 'projects', 'contact'];

const label = (sec: string) => sec.charAt(0).toUpperCase() + sec.slice(1);

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isScrollingRef = useRef(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Treat a section as active when it crosses the middle band of the
    // viewport, so sections taller than the screen still register.
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return;
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    ['home', ...sections].forEach((sec) => {
      const el = document.getElementById(sec);
      if (el) observer.observe(el);
    });

    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const goTo = (e: MouseEvent<HTMLAnchorElement>, sec: string) => {
    e.preventDefault();
    isScrollingRef.current = true;
    setActive(sec);
    setMenuOpen(false);

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    document.getElementById(sec)?.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: 'start',
    });
    history.replaceState(null, '', `#${sec}`);

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 800);
  };

  return (
    <header className="fixed inset-x-0 top-4 z-nav px-4 sm:top-5">
      <nav
        aria-label="Primary"
        className={`mx-auto flex w-full max-w-5xl items-center justify-between rounded-2xl px-2.5 py-2 ring-1 ring-inset backdrop-blur-xl backdrop-saturate-150 transition duration-300 ${
          scrolled
            ? 'bg-surface-light/75 shadow-soft ring-line-light dark:bg-surface-dark/70 dark:shadow-soft-dark dark:ring-line-dark'
            : 'bg-accent-light/20 shadow-glass ring-white/40 dark:bg-accent-dark/15 dark:shadow-glass-dark dark:ring-white/10'
        }`}
      >
        <Link
          href="#home"
          onClick={(e) => goTo(e, 'home')}
          aria-label="Kameel Kasumu, back to top"
          className="flex items-center gap-3 rounded-xl p-0.5 pr-3 transition active:scale-[0.98]"
        >
          <Image
            src={NavbarLogo}
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-xl"
          />
          <span className="hidden text-base font-semibold tracking-[-0.02em] sm:inline">
            Kameel Kasumu
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {sections.map((sec) => {
            const isActive = active === sec;
            return (
              <li key={sec}>
                <Link
                  href={`#${sec}`}
                  onClick={(e) => goTo(e, sec)}
                  aria-current={isActive ? 'location' : undefined}
                  className={`relative flex min-h-10 items-center rounded-xl px-4 text-[0.95rem] font-medium transition-colors duration-200 active:scale-[0.98] ${
                    isActive
                      ? 'text-primary-light dark:text-primary-dark'
                      : 'text-secondary-light hover:text-primary-light dark:text-secondary-dark dark:hover:text-primary-dark'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeHighlight"
                      aria-hidden="true"
                      className="absolute inset-0 rounded-xl bg-accent-light/70 shadow-glass dark:bg-accent-dark/70 dark:shadow-glass-dark"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                  <span className="relative">{label(sec)}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          ref={menuButtonRef}
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-xl transition hover:bg-surface-light/60 active:scale-95 md:hidden dark:hover:bg-surface-dark/60"
        >
          <PiList aria-hidden="true" className="h-6 w-6" />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              aria-hidden="true"
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-overlay bg-canvas-dark/30 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              key="drawer"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              className="fixed inset-y-3 right-3 z-overlay flex w-[min(20rem,calc(100vw-1.5rem))] flex-col rounded-3xl bg-surface-light p-4 shadow-lift ring-1 ring-inset ring-line-light md:hidden dark:bg-surface-dark dark:shadow-lift-dark dark:ring-line-dark"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 24 }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            >
              <button
                type="button"
                autoFocus
                aria-label="Close menu"
                onClick={() => {
                  setMenuOpen(false);
                  menuButtonRef.current?.focus();
                }}
                className="ml-auto flex h-11 w-11 items-center justify-center rounded-xl transition hover:bg-canvas-light active:scale-95 dark:hover:bg-canvas-dark"
              >
                <PiX aria-hidden="true" className="h-6 w-6" />
              </button>
              <ul className="mt-4 flex flex-col gap-1">
                {sections.map((sec, i) => {
                  const isActive = active === sec;
                  return (
                    <li key={sec}>
                      <Link
                        href={`#${sec}`}
                        onClick={(e) => goTo(e, sec)}
                        aria-current={isActive ? 'location' : undefined}
                        className={`flex min-h-12 items-center gap-4 rounded-xl px-4 text-xl font-medium tracking-[-0.02em] transition active:scale-[0.98] ${
                          isActive
                            ? 'bg-accent-light/50 dark:bg-accent-dark/50'
                            : 'hover:bg-canvas-light dark:hover:bg-canvas-dark'
                        }`}
                      >
                        <span className="eyebrow tabular-nums">0{i + 1}</span>
                        {label(sec)}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

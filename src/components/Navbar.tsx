'use client';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import NavbarLogo from '@/images/light-KK.jpeg';

const sections = ['about', 'experience', 'skills', 'projects', 'contact'];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const isScrollingRef = useRef(false); // Add this ref

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Only update if we're not programmatically scrolling
        if (isScrollingRef.current) return;

        const visible = entries.find((e) => e.isIntersecting);
        if (visible) {
          setActive(visible.target.id);
        }
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-5 z-50 w-full bg-none">
      <div className="mx-auto flex w-[90vw] items-center justify-between rounded-full bg-accent-light bg-opacity-25 px-4 py-2 shadow-md backdrop-blur-3xl md:py-0 dark:bg-accent-dark dark:bg-opacity-25">
        {/* Logo / Image */}
        <div className="min-w-fit">
          <Link href="#home">
            <Image
              src={NavbarLogo}
              alt="Navbar Logo (Kameel Kasumu's Initials 'KK')"
              width={50}
              height={50}
              className="cursor-pointer rounded-full"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="relative hidden min-w-fit space-x-2 px-6 py-4 md:flex lg:space-x-8">
          {sections.map((sec) => (
            <li key={sec} className="relative px-2 py-1">
              <Link
                href={`#${sec}`}
                onClick={(e) => {
                  e.preventDefault();

                  // Set scrolling flag and update active immediately
                  isScrollingRef.current = true;
                  setActive(sec);

                  // Scroll to section
                  document.getElementById(sec)?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });

                  // Re-enable observer after scroll completes
                  setTimeout(() => {
                    isScrollingRef.current = false;
                  }, 800); // Adjust timing if needed
                }}
              >
                <span className="relative z-10 cursor-pointer px-2 py-1 capitalize">
                  {sec}
                </span>
                {active === sec && (
                  <motion.div
                    layoutId="activeHighlight"
                    className="absolute inset-0 rounded-full bg-accent-light dark:bg-accent-dark"
                    transition={{ type: 'tween', duration: 0.25 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.ul
          className="fixed inset-y-0 right-0 flex w-[60vw] flex-col space-y-4 bg-transparent p-4 shadow-md backdrop-blur-3xl md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="w-fit rounded-md p-2 hover:bg-[rgba(255,255,255,0.15)]"
          >
            <FaTimes className="h-6 w-6" aria-hidden="true" />
          </button>
          {sections.map((sec) => (
            <li key={sec} className="text-left">
              <Link href={`#${sec}`} onClick={() => setMenuOpen(false)}>
                <span
                  className={`cursor-pointer capitalize ${
                    active === sec
                      ? 'font-semibold text-accent-light dark:text-accent-dark'
                      : ''
                  }`}
                >
                  {sec}
                </span>
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
}

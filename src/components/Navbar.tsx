'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import NavbarLogo from '@/images/light-KK.jpeg';

const sections = ['about', 'experience', 'skills', 'projects', 'contact'];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-5 z-50 w-full bg-none">
      <div className="mx-auto flex w-[90vw] items-center justify-between rounded-full bg-accent-light bg-opacity-25 px-4 py-2 shadow-md backdrop-blur-3xl md:w-fit md:gap-32 md:px-8 md:py-0 dark:bg-accent-dark dark:bg-opacity-25">
        <div className="min-w-fit">
          <Link href="#home">
            <Image
              src={NavbarLogo}
              alt="Navbar Logo"
              width={50}
              height={50}
              className="cursor-pointer rounded-full"
            />
          </Link>
        </div>

        <ul className="relative hidden min-w-fit space-x-2 px-2 py-4 md:flex lg:space-x-8">
          {sections.map((sec) => (
            <li key={sec} className="px-2 py-1">
              <Link href={`#${sec}`}>
                <span className="cursor-pointer px-2 py-1 capitalize transition-colors duration-150 ease-out interactive:text-accentHover-light dark:interactive:text-accentHover-dark">
                  {sec}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.button
            key="mobile-overlay"
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 z-40 bg-black/40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            onClick={() => setMenuOpen(false)}
          />
        )}
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-y-4 right-4 z-50 w-[60vw] rounded-3xl bg-surface-light p-4 shadow-md backdrop-blur-3xl md:hidden dark:bg-surface-dark"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
          >
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="ml-auto flex rounded-md p-2 hover:bg-[rgba(255,255,255,0.15)]"
              aria-label="Close menu"
            >
              <FaTimes className="h-6 w-6" aria-hidden="true" />
            </button>
            <ul className="mt-2 flex flex-col space-y-6">
              {sections.map((sec) => (
                <li key={sec} className="text-left">
                  <Link href={`#${sec}`} onClick={() => setMenuOpen(false)}>
                    <span className="cursor-pointer capitalize text-2xl">{sec}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

'use client';
import { motion } from 'framer-motion';
import { HiCode } from 'react-icons/hi';

export default function Footer() {
  const year = new Date().getFullYear();
  const buildDate = new Date(
    process.env.NEXT_PUBLIC_BUILD_DATE || ""
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

  return (
    <footer>
      <div className="flex flex-col items-center justify-center space-x-2 text-sm font-semibold text-gray-400 dark:text-gray-600">
        <span>© {year} Kameel Kasumu. All rights reserved.</span>
        <span>Last updated: {buildDate}</span>
        <motion.span
          className="inline-block h-5 w-5 text-accent-light dark:text-accent-dark"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        >
          <HiCode />
        </motion.span>
      </div>
    </footer>
  );
}

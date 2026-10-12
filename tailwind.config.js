/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
import defaultTheme from 'tailwindcss/defaultTheme';
export const darkMode = 'media';
export const content = [
  './app/**/*.{js,ts,jsx,tsx,mdx}',
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',

  // Or if using `src` directory:
  './src/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
  extend: {
    fontFamily: {
      sans: ['var(--font-geist-sans)', ...defaultTheme.fontFamily.sans],
      mono: ['var(--font-geist-mono)', ...defaultTheme.fontFamily.mono],
    },
    colors: {
      primary: {
        light: '#1f2430', // text on light background (almost black, cool gray)
        dark: '#eaeefb', // text on dark background (soft near-white)
      },
      secondary: {
        light: '#5c6274', // muted text in light mode
        dark: '#a6acc8', // muted text in dark mode
      },
      accent: {
        light: '#9aaade', // primary button in light mode
        dark: '#5a6dc0', // primary button in dark mode (slightly muted, not neon)
      },
      accentHover: {
        light: '#7286ce', // hover (darkened accent in light mode)
        dark: '#8da1ec', // hover (lightened accent in dark mode)
      },
      surface: {
        light: '#f8f9fd', // card / button backgrounds in light mode
        dark: '#252a3a', // card / button backgrounds in dark mode
      },
      canvas: {
        light: '#f4f6fb', // page background in light mode
        dark: '#12141b', // page background in dark mode
      },
      line: {
        light: '#dfe3f0', // hairline borders in light mode
        dark: '#323850', // hairline borders in dark mode
      },
    },
    boxShadow: {
      // Shadows are tinted with the slate/indigo hue of the palette and share
      // one light source (above), so they read as depth rather than smudge.
      soft: '0 1px 2px rgb(31 36 48 / 0.04), 0 8px 24px -12px rgb(60 72 130 / 0.18)',
      lift: '0 2px 4px rgb(31 36 48 / 0.05), 0 24px 48px -20px rgb(60 72 130 / 0.32)',
      'soft-dark':
        '0 1px 2px rgb(0 0 0 / 0.3), 0 8px 24px -12px rgb(8 10 24 / 0.6)',
      'lift-dark':
        '0 2px 4px rgb(0 0 0 / 0.3), 0 24px 48px -20px rgb(8 10 24 / 0.85)',
      glass: 'inset 0 1px 0 0 rgb(255 255 255 / 0.35)',
      'glass-dark': 'inset 0 1px 0 0 rgb(255 255 255 / 0.06)',
    },
    zIndex: {
      grain: '1',
      content: '10',
      nav: '40',
      overlay: '50',
      skip: '60',
    },
    maxWidth: {
      prose: '65ch',
    },
  },
};
export const plugins = [
  plugin(function ({ addVariant }) {
    // New variant: "interactive:"
    addVariant('interactive', ['&:hover', '&:focus-visible', '&:active']);
  }),
];

/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
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
    },
  },
};
export const plugins = [
  plugin(function ({ addVariant }) {
    // New variant: "interactive:"
    addVariant('interactive', ['&:hover', '&:focus', '&:active']);
  }),
];

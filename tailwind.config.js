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
        light: '#1f2430',
        dark: '#eaeefb',
      },
      secondary: {
        light: '#5c6274',
        dark: '#a6acc8',
      },
      accent: {
        light: '#5f6ac7',
        dark: '#b5baff',
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

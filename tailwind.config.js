/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
    },
  },
  plugins: [],
};

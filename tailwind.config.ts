import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      padding: {
        main: '80px',
      },
      colors: {
        main: 'lightblue',
        secondary: 'orange',
        mainText: 'black',
      },
    },
  },
  plugins: [],
} satisfies Config;

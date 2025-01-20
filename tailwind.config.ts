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
        secondary: 'orange',
        'radix-gray-1': 'var(--gray-1)',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
} satisfies Config;

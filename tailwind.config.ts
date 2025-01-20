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
        'accent-2': 'var(--accent-2)',
        'accent-6': 'var(--accent-6)',
        'radix-gray-1': 'var(--gray-1)',
      },
      boxShadow: {
        'radix-1': 'var(--shadow-1)',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
} satisfies Config;

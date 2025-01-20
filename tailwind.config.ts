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
        'radix-2': 'var(--shadow-2)',
        'radix-3': 'var(--shadow-3)',
        'radix-4': 'var(--shadow-4)',
        'radix-5': 'var(--shadow-5)',
        'radix-6': 'var(--shadow-6)',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
} satisfies Config;

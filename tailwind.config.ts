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
        'main-border': '#D9D9D9',
        'dark-border': '#3A3A3A',
        'accent-2': 'var(--accent-2)',
        'accent-6': 'var(--accent-6)',
        'accent-9': 'var(--accent-9)',
        'accent-10': 'var(--accent-10)',
        'accent-11': 'var(--accent-11)',
        'accent-12': 'var(--accent-12)',
        'radix-gray-1': 'var(--gray-1)',
        'radix-gray-2': 'var(--gray-2)',
      },
      boxShadow: {
        'radix-1': 'var(--shadow-1)',
        'radix-2': 'var(--shadow-2)',
        'radix-3': 'var(--shadow-3)',
        'radix-4': 'var(--shadow-4)',
        'radix-5': 'var(--shadow-5)',
        'radix-6': 'var(--shadow-6)',
      },
      animation: {
        spin: 'spin 1s linear infinite',
        'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
      },
      keyframes: {
        'border-beam': {
          '100%': {
            'offset-distance': '100%',
          },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

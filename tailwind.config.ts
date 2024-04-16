import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
        wafer: {
          light: '#d9c1bb',
          DEFAULT: '#d9c1bb',
          dark: '#9d7065',
          50: '#faf7f6',
          100: '#f4eeec',
          200: '#ecdfdc',
          300: '#d9c1bb',
          400: '#c9a8a0',
          500: '#b38a80',
          600: '#9d7065',
          700: '#825c53',
          800: '#6d4f47',
          900: '#5d453f',
          950: '#30221f',
        },
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;

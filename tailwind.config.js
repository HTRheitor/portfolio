/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'ps2-blue': '#003087',
          'ps2-light-blue': '#009CDE',
          'ps2-dark-blue': '#00224B',
          'ps2-grid-bg': '#e8e8e8',
          'ps2-accent': '#ff0000'
        },
        fontFamily: {
          'mono': ['OCR A Extended', 'VT323', 'monospace'],
          'sans': ['Chakra Petch', 'sans-serif'],
        },
        animation: {
          'grid-pulse': 'grid-pulse 4s infinite ease-in-out',
          'loading-bar': 'loading-bar 3s forwards linear',
          'ps2-boot': 'ps2-boot 4s forwards',
        },
        keyframes: {
          'grid-pulse': {
            '0%, 100%': { opacity: 0.5 },
            '50%': { opacity: 0.8 },
          },
          'loading-bar': {
            '0%': { width: '0%' },
            '100%': { width: '100%' },
          },
          'ps2-boot': {
            '0%': { transform: 'scale(0)', opacity: 0 },
            '70%': { transform: 'scale(1.1)', opacity: 0.7 },
            '100%': { transform: 'scale(1)', opacity: 1 },
          },
        },
        backgroundImage: {
          'ps2-grid': 'linear-gradient(to right, #e8e8e8 1px, transparent 1px), linear-gradient(to bottom, #e8e8e8 1px, transparent 1px)',
        },
        backgroundSize: {
          'grid-8': '8px 8px',
          'grid-16': '16px 16px',
          'grid-32': '32px 32px',
        }
      },
    },
    plugins: [],
  }
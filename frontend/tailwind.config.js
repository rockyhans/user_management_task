/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        brand: {
          50:  '#fff1f1',
          100: '#ffe1e1',
          200: '#ffc7c7',
          300: '#ff9f9f',
          400: '#ff6b6b',
          500: '#f83b3b',
          600: '#e51b1b',
          700: '#c11212',
          800: '#9f1313',
          900: '#841717',
          950: '#480707',
        },
        surface: {
          50:  '#f8f7f4',
          100: '#efede8',
          200: '#dedad2',
          300: '#c9c3b6',
          400: '#b1a894',
          500: '#9e9279',
          600: '#8e8069',
          700: '#776a57',
          800: '#62574a',
          900: '#50473d',
          950: '#2a2520',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      }
    },
  },
  plugins: [],
}
/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Kanit', 'sans-serif']
    },
    screens: {
      sm: '528px',
      md: '768px',
      lg: '1100px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        md: '2rem',
        lg: '3rem',
      },
    },
    extend: {
      colors: {
        black: {
          DEFAULT: '#0c0c0d',
        },
        brand: '#fade4b',
      },
      spacing: {
        'half': '50%',
      }
    },
  },
  plugins: [],
}


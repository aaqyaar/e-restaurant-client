const colors = require('tailwindcss/colors');
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter'],
        secondary: ['Public Sans']
      },
      colors: {
        ...colors,
        primary: {
          50: '#f2f8ff',
          100: '#e6f1ff',
          200: '#c8dcff',
          300: '#a9c7ff',
          400: '#8ab2ff',
          500: '#6b9dff',
          600: '#4c88ff',
          700: '#2d73ff',
          800: '#0e5eff',
          900: '#0049ff'
        }
      }
    }
  },
  plugins: [],
  content: ['./src/**/*.{js,jsx,ts,tsx,html}', './public/index.html']
};

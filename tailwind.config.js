/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-dark': '#0013ff',
        'blue-medium': '#0083ff',
        'blue-light': '#00bcff',
        'blue-lighter': '#00d7f8',
        'blue-pale': '#00e9ff',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
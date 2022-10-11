/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./*.{html,js,ts,jsx,tsx}"
],
  theme: {
    extend: {},
    colors: {
      'light-blue': '#1A4AD7',
      'dark-blue': '#1039AF',
      'white': '#FEFEFE',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      heading: ['Orbitron', 'sans-serif'],
    }
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./*.{html,js,ts,jsx,tsx}"
],
  theme: {
    extend: {},
    colors: {
      'light-blue': '#1A4AD7',
      'hover-dark-blue': "#092C94",
      'dark-blue': '#1039AF',
      'white': '#FEFEFE',
      'lb1': 'rgba(0,0,0,0.3)',
      'lb2': 'rgba(0,0,0,0)',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      heading: ['Orbitron', 'sans-serif'],
    },
    backgroundImage: {
      'lb': "url('../assets/png/background-lb.webp')",
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    },
  },
  plugins: [],
}
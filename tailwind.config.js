/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#CCEBFB',
      'purple': '#B366F7',
      'pink': '#ff49db',
      'orange': '#FB844C',
      'green': '#53B965',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white': '#F3FAFE',
      'red': '#cc1126',
    },
    fontFamily:{
      sans: ['Manjari', 'sans-serif'],
      serif: ['Gluten', 'cursive'],
    },
    extend: {},
  },
  plugins: [],
}

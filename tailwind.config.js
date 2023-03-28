/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#B3DBF0',
      'purple': '#DFBBFF',
      'pink': '#ff49db',
      'orange': '#ffa500', 
      'green': '#CBFFDB',
      'green-font': '#53B965',
      'green-light': '#F7FFF9',
      'yellow': '#F8EFD4',
      'yellow-light': '#FFFCF3', 
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#F0F0F0',
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


    
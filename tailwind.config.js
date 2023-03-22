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
      'orange': '#F08C42',
      'green': '#CBFFDB',
      'green-font': '#53B965',
      'green-light': '#F7FFF9',
      'yellow': '#F8EFD4',
      'yellow-light': '#FFFCF3',
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


    
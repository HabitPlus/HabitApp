/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#B3DBF0',
      'purple': '#EBD1FE',
      'pink': '#ff49db',
      'orange': '#FB844C',
      'green': '#CBFFDB',
      'yellow': '#F8EFD4',
      'yellow-light': '#FFFCF3',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white': '#ffffff',
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


    
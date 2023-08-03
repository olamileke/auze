const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
      brand: {
        100: "#F3D8C7",
        200: "#235789",
        300: "#C1292E",
        400: "#F1D302",
        500: "#020100",
      }
    },
    fontFamily: {
      'klee-one': ['Klee One', 'cursive'],
    },
    extend: {},
  },
  plugins: [],
}


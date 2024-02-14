/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT ({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'darkbg': '#252B42',
        "lightbg": "#FAFAFA",
        "redish": "#E74040"
      },
      fontFamily: {
        monster: ['Montserrat', "sans-serif"]
      }
    },
    colors: {
      lightText: "#FFFFFF",
      darkText: "#252B42",
      lighterDark: "#737373",
      navBlue: "#23A6F0",
      btnGreen: "#2DC071",
      priceGray: "#BDBDBD",
      priceGreen: "#23856D",
      ratingY: "#F3CD03",
      cpurple: "#977DF4",
      clpink: "#FFE9EA",
      bluebg: "#2A7CC7"
    }
  },
  plugins: [],
});

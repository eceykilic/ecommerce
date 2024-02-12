/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'darkbg': '#252B42',
      },
      fontFamily: {
        monster: ['Montserrat', "sans-serif"]
      }
    },
    colors: {
      lightText: "#FFFFFF",
      darkText: "#252B42",
      lighterDark: "#737373",
      navBlue: "#23A6F0"
    }
  },
  plugins: [],
};

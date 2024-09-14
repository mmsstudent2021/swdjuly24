/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Proxima Nova"', 'Arial', 'sans-serif'],
        "poppins" : ['Poppins', 'Padauk','sans-serif']
      },

      colors: {
        text: {
          100: "#d1ccce",
          200: "#a3999d",
          300: "#74676c",
          400: "#46343b",
          500: "#18010a",
          600: "#130108",
          700: "#0e0106",
          800: "#0a0004",
          900: "#050002"
      },
        'background': '#fff0f7',
        primary: {
          100: "#ffe9f2",
          200: "#ffd2e4",
          300: "#ffbcd7",
          400: "#ffa5c9",
          500: "#ff8fbc",
          600: "#cc7296",
          700: "#995671",
          800: "#66394b",
          900: "#331d26"
      },
      secondary: {
        100: "#e6fef3",
        200: "#cdfee8",
        300: "#b5fddc",
        400: "#9cfdd1",
        500: "#83fcc5",
        600: "#69ca9e",
        700: "#4f9776",
        800: "#34654f",
        900: "#1a3227"
    },
        'accent': '#3d82fa',
       },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}






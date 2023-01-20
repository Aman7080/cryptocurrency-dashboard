/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
        'comfortaa':['Comfortaa'],
     }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
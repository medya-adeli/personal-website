/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors:{
        primary:"#FFD500"
      },
      spacing:{
        
      },
      screens:{
        sm:"100px"
      }

    },
  },
  plugins: [],
  darkMode: ['class', '[data-mode="dark"]'],
}

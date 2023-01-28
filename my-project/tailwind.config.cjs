/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      keyframes:{
        wave:{
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation:{
        'waiving-hand': 'wave  2s linear infinite',
      },
      colors:{
        primary:"#FFD500"
      },
      spacing:{
        '115':'10rem'
      },
      screens:{
        sm:"100px"
      }

    },
  },
  plugins: [],
  darkMode: ['class', '[data-mode="dark"]'],
}

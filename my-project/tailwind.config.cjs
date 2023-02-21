/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  content: {
    transform: (content) => content.replace(/taos:/g, 'Fade Up'),
  },
  safelist: [
    '!duration-0',
    '!delay-0',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
  theme: {
    extend: {
      
      colors:{
        primary:"#FFD500"
      },
      spacing:{
        '115':'10rem'
      },
      screens:{
        sm:"100px",
        '2xl': '1536px'
      }

    },
  },
  plugins: [
    require('taos/plugin')
  ],

}

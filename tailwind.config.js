/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.{html,js}"],
  theme: {
    extend: {
        backgroundImage:{
          'hero': "url('./assets/slide-01.jpg')"
        },
        colors:{
          'coral':'#FE9B8E',
          'royal-blue':'#0C1451',
          'royal-blue-100': '#494f7c',
        },
        minHeight:{
          'min-h-screen2': 'min-height:200vh;'
        },
        margin:{
          'margin-r': 'margin-right:auto',
          'margin-l': 'margin-left:auto',
        }
    },
  },
  plugins: [],
}

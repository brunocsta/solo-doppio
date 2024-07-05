/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
      fontFamily:{
         'logo': ''
      },
      extends: {
         fontSize:{
            'title-large': '120px'
         }
      }
   
   },
  plugins: [],
}


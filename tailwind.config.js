/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
      extends: { 
         backgroundImage: {
               'hero-pattern': "url('src/imgs/banner.jpg')",
            }
      }
   },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './*.html'
  ],
  theme: {
    extend: {
      colors:{
        'twitterBlue': '#2d9bf0',
        'twitterWhite': '#d9d9d9',
      },
      screen:{
        
      }
    },
  },
  plugins: [],
}


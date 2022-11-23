/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'fav-dark': "#282c34"
      },
      fontFamily: {
        'patrick': ['Patrick Hand', 'cursive'],
        'source': ['Source Sans Pro', 'sans-serif']
      },
    }
  },
  plugins: [require("daisyui")]
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customGreen:'#4397A4',
        darkGreen:'#486A6F',
        lightColor: '#F4F7FF',
        greenLight:'#C6DBFF',
        primaryColor:'#678C92',
        secondary:'#5BCCDE',
        hero: '#E1EBFA',
        btFormColor:'#E1EBFA'
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        greenColor: '#589D7A',
      },
      fontFamily:
      {
          sans: ['Outfit', 'sans-serif'],
          fredoka : ['Fredoka', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
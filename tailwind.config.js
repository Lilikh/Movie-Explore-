/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'netflix': ['"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      colors: {
        netflixRed: '#E50914',
      },
    },
  },
  plugins: [  require('@tailwindcss/typography'),],
}

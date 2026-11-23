/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      colors: {
        primary: '#60404E',
        secondary: '#7A4B5E',
        textMain: '#59515B',
        bgOffWhite: '#FDFBF7',
        accent: '#754B24',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

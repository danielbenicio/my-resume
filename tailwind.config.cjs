/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    backgroundImage: {
      app: 'linear-gradient(to left, #91EAE4, #86A8E7, #7F7FD5)',
    },
    fontFamily: {
      code: ['ui-sans-serif', 'JetBrains Mono'],
    },
  },
  plugins: [require('tailwind-scrollbar')],
}

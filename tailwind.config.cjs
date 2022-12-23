/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
      '[auto,auto,1fr]': 'auto auto 1fr',
    },
  },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

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
    colors: {
      'violet-red': '#EC5E99',
    },
  },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

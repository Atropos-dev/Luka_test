/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    "./assets/**/*.js",
    "./assets/**/*.css",
    "./layout/**/*.liquid",
    "./sections/**/*.liquid",
    "./snippets/**/*.liquid",
    "./templates/**/*.liquid",
    "./templates/**/*.json",
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
    primary: '#1a73e8',
    secondary: '#ff4081',
  },
    },
  },
}

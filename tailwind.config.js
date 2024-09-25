/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#19AAED',
        'secondary': '#3D588B',
      },
    },
  },
  plugins: [],
}


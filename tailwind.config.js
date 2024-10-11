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
        'navy': {
          900: '#0A2647', // Adjust this to match the exact color in your design
        },
        'blue': {
          600: '#2E8BC0', // Adjust this to match the exact color in your design
        },
      },
    },
  },
  plugins: [],
}


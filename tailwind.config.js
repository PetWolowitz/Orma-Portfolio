/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        citystencil: ['CityStencil', 'sans-serif'],
        graffiti: ['Graffiti', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#2C3639',
          dark: '#1a1f21',
        },
        secondary: {
          DEFAULT: '#A27B5C',
          dark: '#8c6a4e',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
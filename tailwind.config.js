/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        stencil: ['Stencil', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        impact: ['Impact', 'sans-serif'],
      },
      screens: {
        sm: '640px', // Breakpoint per schermi piccoli
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      margin: {
        'custom': '2.5rem', // Margine personalizzato
      },
      filter: {
        'invert-bright': 'invert(1) brightness(2)',
      },
      colors: {
        primary: {
          DEFAULT: '#2C3639',
          dark: '#1a1f21',
          light: '#EAD2AC', // Colore nav e footer
          footer: '#EABA6B',
        },
        secondary: {
          DEFAULT: '#A27B5C',
          dark: '#8c6a4e',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
}
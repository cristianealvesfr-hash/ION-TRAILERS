/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ion-dark': '#1a2436', // Dark metallic blue/gray from the logo
        'ion-bronze': '#c27a42', // Bronze/copper from the logo
        'ion-bronze-light': '#d48e56',
        'ion-bronze-dark': '#a36230',
        'ion-gray': '#e2e8f0', // Light slate
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

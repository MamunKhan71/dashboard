/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ["Inter", "sans-serif"],
        'poppins': ["Poppins", " sans-serif"]
      },
      colors: {
        'primary': '#F7F7FF',
        'secondary': '#4163E9',
        'black': '#072F33'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['light']
  }
}
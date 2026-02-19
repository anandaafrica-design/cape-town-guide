/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cape-blue': '#0054a6',
        'cape-gold': '#fdb813',
      }
    },
  },
  plugins: [],
}

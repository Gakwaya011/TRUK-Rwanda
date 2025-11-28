/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        trukGreen: '#1f6f3f',
        trukDark: '#0f3b2b',
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Custom blue color
        secondary: '#10B981', // Custom green color
      },
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

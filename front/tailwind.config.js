/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navbar: 'rgb(51 65 85)',
        
      }
    },
  },
  plugins: [],
}

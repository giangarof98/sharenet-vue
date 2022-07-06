/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        navbar: 'rgb(51 65 85)',
        button: 'rgb(5 150 105)',
        bgInput: 'rgb(229 231 235)',
        buttonSeeMore: 'rgb(59 130 246)',
        danger: 'rgb(153 27 27)',
        edit: 'rgb(29 78 216)',
        
      }
    },
  },
  plugins: [],
}

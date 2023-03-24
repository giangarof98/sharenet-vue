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
        buttonSeeMore: '#075985',
        danger: 'rgb(153 27 27)',
        edit: 'rgb(29 78 216)',
        grey: 'rgb(212 212 216)',
        bgPic: 'rgb(212 212 216);',
        settings: 'rgb(252 211 77)',
        
      }
    },
  },
  plugins: [],
}

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow:{
      navS:'0 10px 6px -6px #777;'
    },
    extend: {},
  },
  
  variants: {
    extend: {},
  },
  plugins: [],
}

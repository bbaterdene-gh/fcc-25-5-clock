module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'astronaut-blue': '#1e555c',
      }
    },
    borderRadius: {
      '4xl': '2.5rem'
    },
    fontFamily: {
      'monte-carlo': ["'MonteCarlo'", 'cursive'],
    },
    minWidth: {
      'xs': '320px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

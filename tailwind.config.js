module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '340px',
      xsm: '500px',

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      xxl: '1366px',
      xxxl: '1440px',

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'Inter', 'Arial', 'sans-serif'],
        Inter: ['Inter', 'Roboto', 'Arial', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}

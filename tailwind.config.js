module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './slices/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app/prismic/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  
  theme: {
    container: false,

    extend: {
      fontFamily: {
        serif: ['contralto-big', 'serif'],
        'serif-small': ['contralto-small', 'serif'],
        sans: ['acumin-pro-wide', 'Helvetica', 'sans-serif'],
      },

      screens: {
        sm: '450px',
      },

      colors: {
        'brand-pink-dark': '#F5D6C7',
        'brand-pink-light': '#fdeee9',
        'brand-primary': '#112233',
      },
    },
  },
  plugins: [],
}

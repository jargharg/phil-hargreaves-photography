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

    fontSize: {
      xs: '0.75rem', // 12px
      'sm-mobile': '0.875rem', // 14px
      sm: '1rem', // 16px
      'base-mobile': '1rem', // 16px
      base: '1.25rem', // 20px
      lg: '2rem', // 32px
      xl: '2.5rem', // 40px
      '2xl': '3.75rem', // 60px
    },

    extend: {
      fontFamily: {
        serif: ['contralto-big', 'serif'],
        'serif-small': ['contralto-small', 'serif'],
        sans: ['acumin-pro-wide', 'Helvetica', 'sans-serif'],
      },

      screens: {
        sm: '450px',
        '2xl': '1440px',
      },

      colors: {
        'brand-cream': '#FBF5F2',
        'brand-grey': '#D4D5DB',
        'brand-blue': '#112233',
      },
    },
  },
  plugins: [],
}

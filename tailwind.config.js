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
      xs: '0.75rem',
      'sm-mobile': '0.875rem',
      sm: ['clamp(0.625rem, 0.429rem + 0.697svw, 0.875rem)', { lineHeight: 1.35 }],
      base: ['clamp(0.875rem, 0.777rem + 0.348svw, 1rem)', { lineHeight: 1.35 }],
      md: '1.5rem',
      lg: '1.75rem',
      xl: '2.5rem',
      '2xl': '3.75rem',
      '3xl': '4.5rem',
    },

    colors: {
      cream: '#fdfbf9',
      grey: '#D4D5DB',
      blue: '#112233',
      coral: '#FF825A',
      transparent: 'transparent',
      white: '#ffffff',
      black: '#000000',
      current: 'currentColor',
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
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
  ],
}

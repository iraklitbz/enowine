module.exports = {
    content: [
      './assets/**/*.scss',
      './components/*.vue,js',
      './components/**/*.vue,js',
      './pages/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.js,ts',
      './*.{vue,js,ts}',
      './nuxt.config.js,ts'
    ],
    theme: {
      extend: {
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          'white': '#ffffff',
          'hell-black': '#000',
          'dark-black': '#111',
          'black': '#111',
          'primary': '#d80050',
          'primary-light': '#eb0057',
          'primary-lighter': '#ff005e',
          'primary-dark': '#b10041',
          'primary-darker': '#890033',
          'instagram': '#e4405f',
          'facebook': '#3b5998',
          'whatsapp': '#25d366'
        }
      }
    },
    variants: {
      extend: {}
    }
  }
  
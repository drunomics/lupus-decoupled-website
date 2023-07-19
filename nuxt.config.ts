import path from 'path'

export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: '@nuxt-themes/docus',

  css: ['assets/css/overrides.css'],

  modules: [
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools'
  ],

  colorMode: {
    preference: 'dark'
  },

  nitro: {
    output: {
      publicDir: path.join(__dirname, 'dist')
    }
  },

  plausible: {
    domain: 'lupus-decoupled.org'
  }
})

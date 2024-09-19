import path from 'path'

export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: '@nuxt-themes/docus',
  plugins: ['~/plugins/metainfo.ts'],

  css: ['assets/css/overrides.css'],

  modules: [
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools',
    // https://github.com/nuxt-modules/fontaine
    '@nuxtjs/fontaine',
  ],

  colorMode: {
    preference: 'dark'
  },

  nitro: {
    prerender: {
      autoSubfolderIndex: false
    },
    output: {
      publicDir: path.join(__dirname, 'dist')
    }
  },

  plausible: {
    domain: 'lupus-decoupled.org'
  }
})

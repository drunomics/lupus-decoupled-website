import path from 'path'

export default defineNuxtConfig({
  extends: ['docus'],

  css: ['./app/assets/css/main.css'],

  modules: [
    '@nuxtjs/plausible',
  ],

  content: {
    build: {
      markdown: {
        highlight: {
          langs: ['bash', 'diff', 'json', 'js', 'ts', 'html', 'css', 'vue', 'shell', 'mdc', 'md', 'yaml', 'php'],
        },
      },
    },
  },

  nitro: {
    prerender: {
      autoSubfolderIndex: false,
    },
    output: {
      publicDir: path.join(__dirname, 'dist'),
    },
  },

  plausible: {
    domain: 'lupus-decoupled.org',
  },

  compatibilityDate: '2026-04-02',
})

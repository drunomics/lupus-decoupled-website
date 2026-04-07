import path from 'path'

export default defineNuxtConfig({
  extends: ['docus'],

  site: {
    url: 'https://lupus-decoupled.org',
    name: 'Lupus Decoupled Drupal',
  },

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/icons/favicon.ico' },
        { rel: 'icon', type: 'image/png', href: '/icons/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', href: '/icons/favicon-96x96.png' },
      ],
      meta: [
        { property: 'og:image', content: 'https://lupus-decoupled.org/logo.png' },
        { name: 'twitter:image', content: 'https://lupus-decoupled.org/logo.png' },
      ],
    },
  },

  llms: {
    domain: 'lupus-decoupled.org',
  },

  css: ['./app/assets/css/main.css'],

  modules: [
    '@nuxtjs/plausible',
    '@nuxtjs/fontaine',
  ],

  fontMetrics: {
    fonts: ['Montserrat'],
  },

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

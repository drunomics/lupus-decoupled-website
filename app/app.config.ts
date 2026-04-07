export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'zinc'
    }
  },
  seo: {
    title: 'Lupus Decoupled Drupal',
    description: 'The power of Drupal with a modern frontend.',
  },
  header: {
    title: 'Lupus Decoupled Drupal',
  },
  socials: {
    drupal: 'https://drupal.org/project/lupus_decoupled',
    nuxt: 'https://github.com/drunomics/nuxtjs-drupal-ce',
  },
  github: {
    url: 'https://github.com/drunomics/lupus-decoupled-website',
    branch: 'main',
    rootDir: '',
  },
  toc: {
    bottom: {
      title: 'Community',
      links: [
        {
          icon: 'i-simple-icons-drupal',
          label: 'Lupus Decoupled Drupal',
          to: 'https://drupal.org/project/lupus_decoupled',
          target: '_blank',
        },
        {
          icon: 'i-simple-icons-nuxtdotjs',
          label: 'Nuxt Drupal Custom Elements Connector',
          to: 'https://github.com/drunomics/nuxtjs-drupal-ce',
          target: '_blank',
        },
      ],
    },
  },
  assistant: {
    floatingInput: false,
    explainWithAi: false,
  },
})

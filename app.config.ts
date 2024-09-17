export default defineAppConfig({
  docus: {
    title: 'Lupus Decoupled Drupal',
    description: 'The power of Drupal with a modern frontend.',
    url: 'https://lupus-decoupled.org',
    image: 'https://www.drupal.org/files/styles/grid-3-2x/public/project-images/LupusCustomElementsRender_0.png?itok=gDpQCR7C',
    socials: {
      github: 'drunomics/lupus-decoupled-project'
    },
    github: {
      dir: 'content',
      branch: 'main',
      repo: 'lupus-decoupled-website',
      owner: 'drunomics',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: false
    },
    header: {
      logo: true,
      title: 'Lupus Decoupled Drupal',
      fluid: false
    },
    footer: {
      credits: {
        text: 'A project supported by drunomics',
        icon: 'DrunomicsIcon',
        href: 'https://drunomics.com/en',
      },
      iconLinks: [
        {
          href: 'https://drupal.org/project/lupus_decoupled',
          label: 'Lupus Decoupled',
          icon: 'simple-icons:drupal'
        },
        {
          href: 'https://github.com/drunomics/nuxtjs-drupal-ce',
          label: 'Nuxt Drupal Custom Elements Connector',
          icon: 'simple-icons:nuxtdotjs'
        }
      ]
    }
  }
})

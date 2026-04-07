import { defineNuxtPlugin, useHead } from '#app';
import { useRoute } from 'vue-router';

export default defineNuxtPlugin(() => {
  const route = useRoute();
  // Remove trailing slash if it exists
  const path = route.path.endsWith('/') && route.path !== '/'
    ? route.path.slice(0, -1)
    : route.path;

  const canonicalUrl = `https://lupus-decoupled.org${path}`;

  useHead({
    meta: [
      {
        property: 'og:url',
        content: canonicalUrl,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:image',
        content: 'https://lupus-decoupled.org/logo.png',
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: canonicalUrl,
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/icons/favicon.ico',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/icons/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/icons/favicon-96x96.png',
      },
    ],
  });
});

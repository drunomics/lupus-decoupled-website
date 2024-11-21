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

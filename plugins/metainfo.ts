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
    ],
  });
});

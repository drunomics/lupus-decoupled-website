import { defineNuxtPlugin, useHead } from '#app';
import { useRoute } from 'vue-router';

export default defineNuxtPlugin(() => {
  const route = useRoute();
  const url = `https://lupus-decoupled.org${route.path}`;

  useHead({
    link: [
      {
        rel: 'canonical',
        href: url,
      },
    ],
  });
});

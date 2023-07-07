<template>
  <nav class="header-nav">
    <nuxt-link to="/get-started/how-it-works"> How it works </nuxt-link>
    <nuxt-link to="/guide/pages-routing"> Docs </nuxt-link>
    <nuxt-link to="/get-started/play-online"> Examples </nuxt-link>
    <nuxt-link to="/get-started/play-online"> Community </nuxt-link>
  </nav>
</template>
<style scoped>
.header-nav {
  display: none;
}

@media (min-width: 1200px) {
  .header-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .header-nav a {
    font-weight: 700;
  }

  .header-nav a:hover {
    color: var(--color-gray-900);
  }

  .dark .header-nav a:hover {
    color: var(--color-gray-50);
  }
}
</style>

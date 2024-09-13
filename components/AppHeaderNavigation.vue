<template>
  <nav class="header-nav">
    <nuxt-link href="/get-started/how-it-works">How it works </nuxt-link>
    <nuxt-link href="/get-started/create-new-project">Docs </nuxt-link>
    <!-- <nuxt-link to="/examples"> Examples </nuxt-link> -->
    <nuxt-link to="/community"> Community </nuxt-link>
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
    color: var(--color-gray-400);
  }

  .header-nav a:hover {
    color: var(--color-gray-600);
  }

  .dark .header-nav a {
    color: var(--color-gray-500);
  }

  .dark .header-nav a:hover {
    color: var(--color-white);
  }
}
</style>

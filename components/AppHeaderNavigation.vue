<template>
  <nav class="header-nav">
    <a href="/get-started/how-it-works/">How it works </a>
    <a href="/get-started/create-new-project/"> Docs </a>
  <!-- <nuxt-link to="/examples"> Examples </nuxt-link> -->
    <a to="/community"> Community </a>
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

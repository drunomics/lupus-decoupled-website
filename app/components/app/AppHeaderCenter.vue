<script setup lang="ts">
const route = useRoute()

const links = [
  { label: 'How it works', to: '/get-started/how-it-works', exact: true },
  { label: 'Docs', to: '/get-started/play-online' },
  { label: 'Community', to: '/community' },
]

function isActive(link: typeof links[number]) {
  if (link.exact) {
    return route.path === link.to
  }
  // "Docs" matches everything except the "How it works" exact path
  return (route.path === link.to || route.path.startsWith(link.to + '/'))
    && !links.some(l => l.exact && route.path === l.to)
}
</script>

<template>
  <nav class="hidden lg:flex items-center justify-between w-full">
    <NuxtLink
      v-for="link in links"
      :key="link.to"
      :to="link.to"
      class="text-base font-medium transition-colors"
      :class="isActive(link)
        ? 'text-neutral-900 dark:text-white'
        : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'"
    >
      {{ link.label }}
    </NuxtLink>
  </nav>
</template>

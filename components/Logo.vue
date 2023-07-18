<template>
  <div class="logo">
    <img src="/logo.svg" alt="Project logo">
    <span>Lupus Decoupled Drupal</span>
  </div>
</template>

<style scoped>
.logo {
  display: flex;
  width: 100%;
  height: 100%;
}

.logo span {
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-weight: 700;
}

.dark .logo span {
  color: var(--color-gray-50);
}
</style>
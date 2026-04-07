<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const title = 'Lupus Decoupled Drupal'
const description = 'The power of Drupal with a modern frontend. Enjoy component-oriented Decoupled Drupal with Nuxt and Vue.js.'

useSeo({
  title,
  description,
  type: 'website',
})

const features = [
  {
    icon: 'i-simple-icons-drupal',
    title: 'The power of Drupal',
    description: 'Build versatile, structured content. Incredible tools, proudly open source!',
  },
  {
    icon: 'i-tabler-layers-linked',
    title: 'Fully integrated',
    description: 'Authentication and edit links in the frontend, simply working previews in the backend.',
  },
  {
    icon: 'i-hugeicons-keyframes-multiple-add',
    title: 'Multi-frontend',
    description: 'Component-oriented decoupled Drupal makes it easy to connect your frontend of choice!',
  },
  {
    icon: 'i-simple-icons-nuxtdotjs',
    title: 'Nuxt default frontend',
    description: 'Web development intuitive and powerful. With the power of Vue Components.',
  },
  {
    icon: 'i-tabler-layout-board',
    title: 'Low-code',
    description: 'Configure Drupal-API output and allow editors to compose pages with the Drupal Canvas visual page builder.',
  },
  {
    icon: 'i-lucide-rocket',
    title: 'Easy deployment',
    description: 'Leverage Nuxt deployment presets or deploy everything at a unified hosting provider.',
  },
]
</script>

<template>
  <div class="relative overflow-hidden">
    <!-- Background gradient -->
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <div class="absolute -top-[200px] -left-[300px] w-[600px] h-[600px] rounded-full opacity-15 dark:opacity-20 blur-3xl bg-blue-400 dark:bg-blue-600" />
      <div class="absolute -top-[100px] -right-[250px] w-[500px] h-[500px] rounded-full opacity-10 dark:opacity-15 blur-3xl bg-cyan-400 dark:bg-cyan-600" />
    </div>

    <section class="pt-24 sm:pt-32 font-montserrat">
      <div class="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row lg:items-start lg:justify-center gap-8">
          <!-- Left: text content -->
          <div class="flex-1 min-w-0">
            <h1 class="text-5xl lg:text-5xl font-bold tracking-tight text-balance lg:pr-16">
              The power of Drupal, with a modern frontend
            </h1>
            <p class="my-6 lg:my-10 text-lg text-muted">
              Enjoy component-oriented Decoupled Drupal with <a href="https://nuxt.com" target="_blank" class="underline decoration-dotted underline-offset-4 py-1">Nuxt</a> and <a href="https://vuejs.org" target="_blank" class="underline decoration-dotted underline-offset-4 py-1">Vue.js</a>
            </p>
            <ul class="mt-6 space-y-3 text-muted">
              <li class="flex items-start gap-3">
                <UIcon name="i-lucide-check" class="w-5 h-5 shrink-0 text-primary mt-0.5" />
                <span>A complete, fully integrated solution - working <strong class="text-highlighted">out of the box</strong>!</span>
              </li>
              <li class="flex items-start gap-3">
                <UIcon name="i-lucide-check" class="w-5 h-5 shrink-0 text-primary mt-0.5" />
                <span>Drupal powered editorial control of pages, layouts, paths, metatags, breadcrumbs and previews</span>
              </li>
              <li class="flex items-start gap-3">
                <UIcon name="i-lucide-check" class="w-5 h-5 shrink-0 text-primary mt-0.5" />
                <span>Leverage <strong class="text-highlighted">Drupal authentication</strong> in the frontend. Edit buttons and Drupal messages just work!</span>
              </li>
              <li class="flex items-start gap-3">
                <UIcon name="i-lucide-check" class="w-5 h-5 shrink-0 text-primary mt-0.5" />
                <span>Performance focused, integrates well with Drupal page caching!</span>
              </li>
              <li class="flex items-start gap-3">
                <UIcon name="i-lucide-check" class="w-5 h-5 shrink-0 text-primary mt-0.5" />
                <span>Multi-Frontend: Works with any frontend, while defaulting to Nuxt</span>
              </li>
              <li class="flex items-start gap-3">
                <UIcon name="i-lucide-check" class="w-5 h-5 shrink-0 text-primary mt-0.5" />
                <span>Low-code: Configure Drupal API output, no PHP-coding required!</span>
              </li>
            </ul>
            <div class="mt-8 flex flex-wrap items-center gap-4">
              <UButton to="/get-started/how-it-works" size="xl" color="primary" variant="solid" :ui="{ base: 'px-6 py-3 text-lg' }">
                How it works
              </UButton>
              <UButton to="/get-started/play-online" size="xl" color="neutral" variant="ghost" trailing-icon="i-lucide-arrow-right" :ui="{ base: 'px-6 py-3 text-lg' }">
                Try it
              </UButton>
            </div>
          </div>

          <!-- Right: bash terminal, pinned to the right edge -->
          <div class="w-full max-w-[370px] shrink-0 self-start rounded-xl ring-1 ring-white/10 bg-[#1e2432] shadow-xl overflow-hidden mt-4 lg:mt-0">
            <div class="flex items-center px-4 py-3 border-b border-white/5 relative">
              <div class="flex gap-1.5 mr-auto">
                <div class="w-2.5 h-2.5 rounded-full bg-[#f56565]" />
                <div class="w-2.5 h-2.5 rounded-full bg-[#ecc94b]" />
                <div class="w-2.5 h-2.5 rounded-full bg-[#48bb78]" />
              </div>
              <div class="absolute inset-x-0 text-center text-xs text-slate-400 font-medium pointer-events-none">Bash</div>
            </div>
            <div class="p-5 text-gray-300 font-mono text-[13px] leading-relaxed space-y-1.5">
              <div><span class="text-white mr-2">$</span> <span class="text-slate-400">// Drupal module</span></div>
              <div><span class="text-white mr-2">$</span> composer require drupal/lupus_decoupled</div>
              <div><span class="text-white mr-2">$</span> </div>
              <div><span class="text-white mr-2">$</span> <span class="text-slate-400">// Nuxt module</span></div>
              <div><span class="text-white mr-2">$</span> npx nuxi@latest module add drupal-ce</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <UPageSection title="Main features" :ui="{ container: '!pt-12 sm:!pt-20' }">
      <UPageGrid>
        <UPageCard
          v-for="feature in features"
          :key="feature.title"
          :icon="feature.icon"
          :title="feature.title"
          :description="feature.description"
          spotlight
        />
      </UPageGrid>
    </UPageSection>
  </div>
</template>

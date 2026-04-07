import { createConfigForNuxt } from '@nuxt/eslint-config'

export default createConfigForNuxt({
  rules: {
    'vue/max-attributes-per-line': 'off',
    'vue/multi-word-component-names': 'off'
  }
})
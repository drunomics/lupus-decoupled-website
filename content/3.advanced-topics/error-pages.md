# Error Pages

## Drupal error pages

Error pages provided by Drupal (e.g. 403, 404 page) are shown by default and can be configured in Drupal.

Configuration is done in the Drupal backend under `Configuration > System > Basic site settings > Error pages`.

## Custom error pages in Nuxt

In order to use regular Nuxt error pages, you can enable the `customErrorPages` option in `nuxt.config.js`:

```js
export default defineNuxtConfig({
  drupalCe: {
    customErrorPages: true,
    // options...
  }
})
```
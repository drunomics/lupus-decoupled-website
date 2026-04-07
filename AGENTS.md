# Agent Notes

## Project Overview
Documentation website for [Lupus Decoupled Drupal](https://www.drupal.org/project/lupus_decoupled), built with Nuxt 3 + Docus theme, statically generated and hosted on Cloudflare Pages. Content lives in `content/` as numbered markdown files.

## Development Commands
```bash
npm install       # Install dependencies
npm run dev       # Start dev server
npm run generate  # Build static site
npm run lint      # Lint code
```

## Content Management
- Add markdown files to `content/` subdirectories with numeric prefixes for ordering (e.g. `10.foo.md`, `20.bar.md`)
- Navigation configured via `_dir.yml` in each subdirectory
- PHP syntax highlighting is pre-loaded; add other languages in `nuxt.config.ts` → `content.highlight.preload`

## Useful Resources
- **https://nuxt.com/llms.txt** — Structured overview of all Nuxt docs (~5K tokens), good for quick Nuxt lookups
- **https://nuxt.com/llms-full.txt** — Full Nuxt docs including API references (~1M tokens), for deep dives

## Self-Improvement: Gotchas
Whenever you discover something surprising or non-obvious while working on this project, append it to this file so future agents avoid the same pitfall.

- All content files must have a `.md` extension to be picked up by Nuxt Content and render as pages. Files without `.md` (e.g. `70.themes`) will cause 404 errors and break the build.

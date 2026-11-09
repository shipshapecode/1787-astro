import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Layout relies on whitespace between inline elements (pricing, gallery arrows).
  compressHTML: false
});

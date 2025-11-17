// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // ... otras configuraciones (integrations, site, etc.)
  
  // 👈 Esta es la configuración correcta:
  devToolbar: {
    enabled: false,
  },
});
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://soulshock.ai',

  server: {
    host: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
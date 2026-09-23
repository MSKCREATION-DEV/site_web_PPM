// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Domaine à renseigner dès enregistrement client
  // site: 'https://www.exemple.ml',
  vite: {
    plugins: [tailwindcss()],
  },
});
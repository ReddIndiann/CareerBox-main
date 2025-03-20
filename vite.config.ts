import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://airstatelaps.com', // Replace with your actual domain
      exclude: ['/admin', '/private'], // Exclude pages if needed
    }),
  ],
  assetsInclude: ['**/*.mp4'],
});

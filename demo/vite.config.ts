import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.DEMO_BASE ?? '/',
  plugins: [tailwindcss()],
  // 5391 to 5394 belong to 掃街, Taste Quest and the gamifiedUI demo.
  server: { port: 5395, strictPort: true },
  preview: { port: 5395, strictPort: true },
});

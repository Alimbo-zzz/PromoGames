import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

import { resolve } from 'path';
const _src = resolve(__dirname, './src');
const _public = resolve(__dirname, './public');

export default defineConfig({
  base: '/vite-react/',
  plugins: [
    react(),
    legacy({ targets: ['IE >= 11'] }),
  ],
  server: { port: 3030 },
  build: { minify: true },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/styles/vars.scss";
          @import "@/styles/mixins.scss";
        `
      }
    },
    // postcss: { plugins: [autoprefixer()] }
  },
  resolve: {
    alias: {
      '@': resolve(_src),
      '@@': resolve(_public),
      // assets
      '@images': resolve(_public, 'images'),
      '@icons': resolve(_public, 'icons'),
      '@fonts': resolve(_public, 'fonts'),
      '@data': resolve(_public, 'data'),
      '@sounds': resolve(_public, 'sounds'),
      '@videos': resolve(_public, 'videos'),
    }
  }
})
// vite.config.js/** @type {import('vite').UserConfig} */
import path from 'path';
import { defineConfig } from 'vite';
// import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
  // omit
  plugins: [],
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  server: {
    port: 8089, // cors: true,    // host: 'local.dev',    // https: true,
  },
});

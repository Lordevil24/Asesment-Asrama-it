import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// Pastikan hanya mengaktifkan plugin devtools dalam pengembangan
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      vue(),
      // Hanya aktifkan vueDevTools jika dalam mode pengembangan
      mode === 'development' && vueDevTools(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      sourcemap: false, // Nonaktifkan sourcemap
    },
  };
});

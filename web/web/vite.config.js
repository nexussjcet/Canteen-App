import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  optimizeDeps: {
    exclude: ['shadow-cljs'],
  },
});

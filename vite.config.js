import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    target: "esnext", // Use latest JavaScript features
    minify: "esbuild", // Minifies JS for better performance
    sourcemap: false, // Disable sourcemaps in production
  },
});
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.[tj]sx?$/,
    exclude: [],
  },
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, 'src/assets/stylesheets'),
      '@components': path.resolve(__dirname, 'src/components'), 
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@routes': path.resolve(__dirname, 'src/components/routes'),
      '@context': path.resolve(__dirname, 'src/context'),
    },
  },
});
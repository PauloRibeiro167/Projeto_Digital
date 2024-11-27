import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: '127.0.0.1',
  },
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, 'Frontend/src/assets/stylesheets'),
      '@components': path.resolve(__dirname, 'Frontend/src/components'),
      '@images': path.resolve(__dirname, 'Frontend/src/assets/images'),
      '@routes': path.resolve(__dirname, 'Frontend/src/routes'),
      '@context': path.resolve(__dirname, 'Frontend/src/context'),
      '@api-tenis': path.resolve(__dirname, 'Frontend/src/services/api'),
      '@public': path.resolve(__dirname, 'Frontend/src/pages/Public'), 
      '@admin': path.resolve(__dirname, 'Frontend/src/pages/Admin'),
      '@utils': path.resolve(__dirname, 'Frontend/src/utils'),
      '@middlewares': path.resolve(__dirname, 'Frontend/src/middlewares'),
    },
  },
  build: {
    rollupOptions: {
      external: ['@controllers/PagesController'],
    },
  },
});
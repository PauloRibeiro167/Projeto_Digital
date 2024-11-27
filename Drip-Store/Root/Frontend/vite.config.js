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
      '@styles': path.resolve(__dirname, 'src/assets/stylesheets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@api-tenis': path.resolve(__dirname, 'src/services/api.js'),
      '@public': path.resolve(__dirname, 'src/pages/Public'), 
      '@admin': path.resolve(__dirname, 'src/pages/Admin'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@middlewares': path.resolve(__dirname, 'src/middlewares'),
      '@controllers': path.resolve(__dirname, '../Backend/Controller/'),
    },
  },
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'), 
      external: ['@controllers/PagesController'],
    },
  },
});
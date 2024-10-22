import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'custom-logger',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          console.log(`${req.method} ${req.url}`);
          next();
        });
      }
    }
  ],
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
})
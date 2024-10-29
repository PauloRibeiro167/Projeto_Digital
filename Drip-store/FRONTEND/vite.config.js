import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Definindo a porta para 5173
  },
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, 'src/assets/stylesheets'), // Alias atualizado para a pasta de estilos
    },
  },
})
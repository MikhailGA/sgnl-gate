import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0',
    allowedHosts: ['dev1.cf', 'localhost'],
    hmr: {
      protocol: 'ws',
      port: 3000,
      host: 'localhost',
    }
  },
  preview: {
    port: 4200,
    host: 'localhost',
  },
})

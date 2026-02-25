import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === 'development' ? basicSsl() : null
  ].filter(Boolean),
  server: {
    https: mode === 'development',
  },
  preview: {
    port: process.env.PORT || 4173,
    host: true,
    allowedHosts: ['respaldoxtech.onrender.com']
  }
}))

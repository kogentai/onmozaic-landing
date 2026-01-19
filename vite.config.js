import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use '/' for custom domain, or '/onmozaic-landing/' for GitHub Pages subpath
  base: process.env.NODE_ENV === 'production' ? '/' : '/',
  build: {
    outDir: 'dist'
  }
})

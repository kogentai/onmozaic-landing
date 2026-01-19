import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use '/' for custom domain (onmozaic.com)
  // Use '/onmozaic-landing/' for GitHub Pages subpath (kogentai.github.io/onmozaic-landing/)
  base: '/',
  build: {
    outDir: 'dist'
  }
})

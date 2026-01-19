import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use '/onmozaic-landing/' for GitHub Pages subpath (kogentai.github.io/onmozaic-landing/)
  // Change to '/' once custom domain (onmozaic.com) is configured and working
  base: '/onmozaic-landing/',
  build: {
    outDir: 'dist'
  }
})

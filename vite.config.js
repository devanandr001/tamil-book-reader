import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this project from /tamil-book-reader/.
// Local preview and Android keep a relative asset base.
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS === 'true' ? '/tamil-book-reader/' : './',
  build: { assetsInlineLimit: 0 },
})

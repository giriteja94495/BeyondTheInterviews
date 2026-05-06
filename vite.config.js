import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain (beyondtheinterviews.com) is served from the root,
// so base stays as '/'. If you ever switch to project-pages
// (e.g. giriteja94495.github.io/BeyondTheInterviews/), change base
// to '/BeyondTheInterviews/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})

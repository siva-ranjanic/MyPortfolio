import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 8000,
    open: true,
  },
  build: {
    target: 'esnext',
    cssCodeSplit: true,
    assetsInlineLimit: 4096, // Inline small assets to reduce requests
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
if (id.includes('lucide-react') || id.includes('react-icons')) return 'icons';
            if (id.includes('react') || id.includes('react-dom')) return 'vendor-core';
            return 'vendor-others';
          }
        },
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})

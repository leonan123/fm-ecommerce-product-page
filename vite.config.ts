import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/fm-ecommerce-product-page/',
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'src/assets/images/[name].[hash][extname]',
      },
    },
  },
})

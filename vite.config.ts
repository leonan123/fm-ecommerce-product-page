import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/images/*',
          dest: 'assets/images',
        },
      ],
    }),
  ],
  base: '/fm-ecommerce-product-page/',
  publicDir: 'src/assets/images',
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'src/assets/images/[name].[hash][extname]',
      },
    },
  },
})

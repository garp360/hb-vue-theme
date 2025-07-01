import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  
  // Library build configuration
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.js'),
        preset: resolve(__dirname, 'preset-installer.js'),
        tokens: resolve(__dirname, 'src/styles/design-tokens.js')
      },
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => {
        if (format === 'es') {
          return `${entryName}.esm.js`
        }
        return `${entryName}.js`
      }
    },
    rollupOptions: {
      external: ['vue', 'primevue', 'primeflex'],
      output: {
        globals: {
          vue: 'Vue',
          primevue: 'PrimeVue',
          primeflex: 'PrimeFlex'
        }
      }
    },
    sourcemap: true,
    outDir: 'dist'
  },
  
  // Development server configuration
  server: {
    port: 3000,
    open: true
  }
}) 